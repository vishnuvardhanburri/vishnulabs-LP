import { NextRequest, NextResponse } from "next/server"

import { getLeadIntentTag, type LeadRecord } from "@/lib/lead-capture"
import { storeLead } from "@/lib/lead-store"
import { sendEmail } from "@/lib/mailer"
import { checkRateLimit } from "@/lib/rate-limit"

export const runtime = "nodejs"

type AuditBody = {
  name?: string
  email?: string
  website?: string
  problem?: string
  source?: string
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
    key: `system-audit-contact:${ip}`,
    windowMs: 10 * 60 * 1000,
    maxRequests: 5,
  })

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitResult.retryAfterSeconds),
        },
      },
    )
  }

  let body: AuditBody

  try {
    body = (await request.json()) as AuditBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const name = normalize(body.name, 120)
  const email = normalize(body.email, 200)
  const website = normalize(body.website, 200)
  const problem = normalize(body.problem, 2500)
  const source = normalize(body.source, 120) || "website"
  const page = normalize(body.page, 200) || "/"
  const submittedAt = new Date().toISOString()
  const submittedAtLabel = new Date(submittedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })
  const leadIntent = getLeadIntentTag(problem)

  if (!name || !email || !problem) {
    return NextResponse.json({ error: "Name, email, and problem are required." }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
  }

  const leadRecord: LeadRecord = {
    name,
    email,
    website,
    problem,
    tag: leadIntent,
    status: "NEW",
    createdAt: submittedAt,
    source,
    page,
  }

  const storageResult = await storeLead(leadRecord)
  if (!storageResult.ok) {
    return NextResponse.json({ error: storageResult.error }, { status: 500 })
  }

  const toAddress = process.env.SYSTEM_AUDIT_EMAIL || "hello@vishnulabs.com"
  const calendarLink = process.env.SYSTEM_AUDIT_CALENDAR_URL || "https://cal.com/vishnuvardhanburri/15min"

  const internalHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
      <h2 style="margin:0 0 16px 0;">System audit request</h2>
      <p style="margin:0 0 12px 0;"><strong>Problem:</strong></p>
      <p style="margin:0 0 18px 0;white-space:pre-wrap;font-size:15px;">${escapeHtml(problem)}</p>
      <div style="border:1px solid #e5e7eb;border-radius:14px;padding:16px;background:#f9fafb;">
        <p style="margin:0 0 8px 0;"><strong>Intent:</strong> <span style="display:inline-block;padding:2px 8px;border-radius:999px;background:${leadIntent === "HIGH_INTENT" ? "#fee2e2" : "#e5e7eb"};color:${leadIntent === "HIGH_INTENT" ? "#b91c1c" : "#374151"};">${escapeHtml(leadIntent)}</span></p>
        <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 8px 0;"><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
        <p style="margin:0 0 8px 0;"><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p style="margin:0 0 8px 0;"><strong>Page:</strong> ${escapeHtml(page)}</p>
        <p style="margin:0 0 8px 0;"><strong>Submitted:</strong> ${escapeHtml(submittedAtLabel)}</p>
        <p style="margin:0;"><strong>IP:</strong> ${escapeHtml(ip)}</p>
      </div>
    </div>
  `

  const internalSendResult = await sendEmail({
    to: toAddress,
    subject: `[${leadIntent}] System audit request from ${name}`,
    html: internalHtml,
    replyTo: email,
  })

  if (!internalSendResult.ok) {
    console.error("System audit internal email failed", {
      error: internalSendResult.error,
      email,
      source,
      tag: leadIntent,
    })
  }

  const userHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
      <h2 style="margin:0 0 12px 0;">Your system audit request — next steps</h2>
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for reaching out. We’ve received your request and will review it carefully.</p>
      <p>We’ll review and respond within 24 hours.</p>
      <p>Most systems we review have 2–3 hidden failure points affecting conversions.</p>
      <p>If this is urgent, you can book directly here:</p>
      <p><a href="${escapeHtml(calendarLink)}" style="color:#0f766e;">${escapeHtml(calendarLink)}</a></p>
      <p style="margin-top:20px;">VishnuLabs</p>
    </div>
  `

  const userSendResult = await sendEmail({
    to: email,
    subject: "Your system audit request — next steps",
    html: userHtml,
    replyTo: toAddress,
  })

  if (!userSendResult.ok) {
    console.error("System audit user email failed", {
      error: userSendResult.error,
      email,
      source,
      tag: leadIntent,
    })
  }

  return NextResponse.json({ ok: true })
}
