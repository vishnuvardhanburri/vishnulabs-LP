import { NextRequest, NextResponse } from "next/server"

import { LEAD_STATUSES } from "@/lib/lead-capture"
import { storeSentinelLead } from "@/lib/lead-store"
import { sendEmail } from "@/lib/mailer"
import { checkRateLimit } from "@/lib/rate-limit"
import { getSentinelLeadTag, type SentinelInterestType, type SentinelLeadRecord } from "@/lib/sentinel-lead"

export const runtime = "nodejs"

type SentinelBody = {
  name?: string
  email?: string
  company?: string
  website?: string
  problem?: string
  interestType?: SentinelInterestType
  page?: string
}

function normalize(input: string | undefined, maxLength: number) {
  return (input ?? "").trim().slice(0, maxLength)
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim()
    if (first) return first
  }

  const realIp = request.headers.get("x-real-ip")?.trim()
  if (realIp) return realIp

  return "unknown"
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)
  const rateLimitResult = checkRateLimit({
    key: `sentinel-lead:${ip}`,
    windowMs: 10 * 60 * 1000,
    maxRequests: 5,
  })

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimitResult.retryAfterSeconds) } },
    )
  }

  let body: SentinelBody

  try {
    body = (await request.json()) as SentinelBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const name = normalize(body.name, 120)
  const email = normalize(body.email, 200)
  const company = normalize(body.company, 200)
  const website = normalize(body.website, 200)
  const problem = normalize(body.problem, 2500)
  const interestType = body.interestType === "PILOT" ? "PILOT" : "ASSESSMENT"
  const page = normalize(body.page, 200) || "/sentinel"
  const createdAt = new Date().toISOString()
  const createdAtLabel = new Date(createdAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  if (!name || !email || !company || !problem) {
    return NextResponse.json({ error: "Name, email, company, and problem are required." }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
  }

  const tag = getSentinelLeadTag(problem, interestType)

  const leadRecord: SentinelLeadRecord = {
    name,
    email,
    company,
    website,
    problem,
    interestType,
    tag,
    status: LEAD_STATUSES[0],
    createdAt,
    source: "sentinel",
    page,
  }

  const storageResult = await storeSentinelLead(leadRecord)
  if (!storageResult.ok) {
    return NextResponse.json({ error: storageResult.error }, { status: 500 })
  }

  const toAddress = process.env.SENTINEL_LEADS_EMAIL || process.env.SYSTEM_AUDIT_EMAIL || "hello@vishnulabs.com"
  const calendarLink =
    process.env.SENTINEL_CALENDAR_URL ||
    process.env.NEXT_PUBLIC_SENTINEL_CALENDAR_URL ||
    "https://cal.com/vishnuvardhanburri/15min"

  const internalHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
      <h2 style="margin:0 0 16px 0;">Sentinel lead</h2>
      <p style="margin:0 0 12px 0;"><strong>Problem:</strong></p>
      <p style="margin:0 0 18px 0;white-space:pre-wrap;font-size:15px;">${escapeHtml(problem)}</p>
      <div style="border:1px solid #e5e7eb;border-radius:14px;padding:16px;background:#f9fafb;">
        <p style="margin:0 0 8px 0;"><strong>Interest:</strong> <span style="display:inline-block;padding:2px 8px;border-radius:999px;background:#dbeafe;color:#1d4ed8;">${escapeHtml(interestType)}</span></p>
        <p style="margin:0 0 8px 0;"><strong>Tag:</strong> <span style="display:inline-block;padding:2px 8px;border-radius:999px;background:${tag === "HIGH_INTENT" ? "#fee2e2" : "#e5e7eb"};color:${tag === "HIGH_INTENT" ? "#b91c1c" : "#374151"};">${escapeHtml(tag)}</span></p>
        <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px 0;"><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p style="margin:0 0 8px 0;"><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
        <p style="margin:0 0 8px 0;"><strong>Submitted:</strong> ${escapeHtml(createdAtLabel)}</p>
        <p style="margin:0;"><strong>IP:</strong> ${escapeHtml(ip)}</p>
      </div>
    </div>
  `

  const internalSendResult = await sendEmail({
    to: toAddress,
    subject: `[SENTINEL] New Lead — ${tag}`,
    html: internalHtml,
    replyTo: email,
  })

  if (!internalSendResult.ok) {
    console.error("Sentinel internal email failed", {
      error: internalSendResult.error,
      email,
      company,
      tag,
      interestType,
    })
  }

  const userHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
      <h2 style="margin:0 0 12px 0;">Your Sentinel request — next steps</h2>
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for reaching out. We’ve received your Sentinel request and will review it carefully.</p>
      <p>Most teams uncover 2–3 hidden exposure points during the first review.</p>
      <p>If you want to move faster, you can book directly here:</p>
      <p><a href="${escapeHtml(calendarLink)}" style="color:#0f766e;">${escapeHtml(calendarLink)}</a></p>
      <p style="margin-top:20px;">VishnuLabs</p>
    </div>
  `

  const userSendResult = await sendEmail({
    to: email,
    subject: "Your Sentinel request — next steps",
    html: userHtml,
    replyTo: toAddress,
  })

  if (!userSendResult.ok) {
    console.error("Sentinel user email failed", {
      error: userSendResult.error,
      email,
      company,
      tag,
      interestType,
    })
  }

  return NextResponse.json({ ok: true })
}
