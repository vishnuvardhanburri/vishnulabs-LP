import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"

import { LeadRecord } from "@/lib/lead-capture"
import { SentinelLeadRecord } from "@/lib/sentinel-lead"

type NotionCreateResponse = {
  id?: string
}

type AirtableCreateResponse = {
  id?: string
}

export async function storeLead(record: LeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  const provider = getLeadStoreProvider()

  if (provider === "notion") {
    return storeLeadInNotion(record)
  }

  if (provider === "airtable") {
    return storeLeadInAirtable(record)
  }

  return storeLeadInFile(record)
}

export async function storeSentinelLead(record: SentinelLeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  const provider = getSentinelLeadStoreProvider()

  if (provider === "notion") {
    const providerResult = await storeSentinelLeadInNotion(record)
    if (providerResult.ok) return providerResult
  }

  if (provider === "airtable") {
    const providerResult = await storeSentinelLeadInAirtable(record)
    if (providerResult.ok) return providerResult
  }

  return storeSentinelLeadInFile(record)
}

function getLeadStoreProvider() {
  if (process.env.NOTION_LEADS_DATABASE_ID && process.env.NOTION_TOKEN) {
    return "notion"
  }

  if (process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE_NAME && process.env.AIRTABLE_TOKEN) {
    return "airtable"
  }

  return "file"
}

function getSentinelLeadStoreProvider() {
  if ((process.env.NOTION_SENTINEL_LEADS_DATABASE_ID || process.env.NOTION_LEADS_DATABASE_ID) && process.env.NOTION_TOKEN) {
    return "notion"
  }

  if (
    process.env.AIRTABLE_BASE_ID &&
    (process.env.AIRTABLE_SENTINEL_TABLE_NAME || process.env.AIRTABLE_TABLE_NAME) &&
    process.env.AIRTABLE_TOKEN
  ) {
    return "airtable"
  }

  return "file"
}

async function storeLeadInNotion(record: LeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  const databaseId = process.env.NOTION_LEADS_DATABASE_ID
  const token = process.env.NOTION_TOKEN

  if (!databaseId || !token) {
    return { ok: false, error: "Notion storage is not configured." }
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: record.name } }],
        },
        Email: {
          email: record.email,
        },
        Website: {
          url: record.website || null,
        },
        Problem: {
          rich_text: [{ text: { content: record.problem } }],
        },
        Tag: {
          select: { name: record.tag },
        },
        Status: {
          status: { name: record.status },
        },
        Source: {
          rich_text: [{ text: { content: record.source } }],
        },
        CreatedAt: {
          date: { start: record.createdAt },
        },
        Page: {
          rich_text: [{ text: { content: record.page } }],
        },
      },
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    return { ok: false, error: `Notion lead storage failed: ${text || response.status}` }
  }

  const data = (await response.json().catch(() => ({}))) as NotionCreateResponse
  if (!data.id) {
    return { ok: false, error: "Notion lead storage failed: missing record id." }
  }

  return { ok: true }
}

async function storeLeadInAirtable(record: LeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME
  const token = process.env.AIRTABLE_TOKEN

  if (!baseId || !tableName || !token) {
    return { ok: false, error: "Airtable storage is not configured." }
  }

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        name: record.name,
        email: record.email,
        website: record.website,
        problem: record.problem,
        tag: record.tag,
        status: record.status,
        created_at: record.createdAt,
        source: record.source,
        page: record.page,
      },
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    return { ok: false, error: `Airtable lead storage failed: ${text || response.status}` }
  }

  const data = (await response.json().catch(() => ({}))) as AirtableCreateResponse
  if (!data.id) {
    return { ok: false, error: "Airtable lead storage failed: missing record id." }
  }

  return { ok: true }
}

async function storeLeadInFile(record: LeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const directory = await getWritableLeadDirectory()
    const filePath = path.join(directory, "system-audit-leads.ndjson")
    await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8")
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Lead file storage failed.",
    }
  }
}

async function storeSentinelLeadInNotion(record: SentinelLeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  const databaseId = process.env.NOTION_SENTINEL_LEADS_DATABASE_ID || process.env.NOTION_LEADS_DATABASE_ID
  const token = process.env.NOTION_TOKEN

  if (!databaseId || !token) {
    return { ok: false, error: "Notion storage is not configured." }
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: record.name } }],
        },
        Email: {
          email: record.email,
        },
        Company: {
          rich_text: [{ text: { content: record.company } }],
        },
        Website: {
          url: record.website || null,
        },
        Problem: {
          rich_text: [{ text: { content: record.problem } }],
        },
        InterestType: {
          select: { name: record.interestType },
        },
        Tag: {
          select: { name: record.tag },
        },
        Status: {
          status: { name: record.status },
        },
        Source: {
          rich_text: [{ text: { content: record.source } }],
        },
        CreatedAt: {
          date: { start: record.createdAt },
        },
        Page: {
          rich_text: [{ text: { content: record.page } }],
        },
      },
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    return { ok: false, error: `Notion sentinel lead storage failed: ${text || response.status}` }
  }

  const data = (await response.json().catch(() => ({}))) as NotionCreateResponse
  if (!data.id) {
    return { ok: false, error: "Notion sentinel lead storage failed: missing record id." }
  }

  return { ok: true }
}

async function storeSentinelLeadInAirtable(record: SentinelLeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_SENTINEL_TABLE_NAME || process.env.AIRTABLE_TABLE_NAME
  const token = process.env.AIRTABLE_TOKEN

  if (!baseId || !tableName || !token) {
    return { ok: false, error: "Airtable storage is not configured." }
  }

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        name: record.name,
        email: record.email,
        company: record.company,
        website: record.website,
        problem: record.problem,
        interest_type: record.interestType,
        tag: record.tag,
        status: record.status,
        created_at: record.createdAt,
        source: record.source,
        page: record.page,
      },
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    return { ok: false, error: `Airtable sentinel lead storage failed: ${text || response.status}` }
  }

  const data = (await response.json().catch(() => ({}))) as AirtableCreateResponse
  if (!data.id) {
    return { ok: false, error: "Airtable sentinel lead storage failed: missing record id." }
  }

  return { ok: true }
}

async function storeSentinelLeadInFile(record: SentinelLeadRecord): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const directory = await getWritableLeadDirectory()
    const filePath = path.join(directory, "sentinel-leads.ndjson")
    await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8")
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Sentinel lead file storage failed.",
    }
  }
}

async function getWritableLeadDirectory() {
  const configuredDirectory = process.env.LEAD_STORE_DIR?.trim()
  const candidates = [
    configuredDirectory,
    path.join(process.cwd(), ".data"),
    path.join(os.tmpdir(), "vishnulabs-leads"),
  ].filter((value): value is string => Boolean(value))

  for (const directory of candidates) {
    try {
      await fs.mkdir(directory, { recursive: true })
      await fs.access(directory)
      return directory
    } catch {
      continue
    }
  }

  throw new Error("No writable lead storage directory is available.")
}
