import { NextRequest, NextResponse } from "next/server"

import { sendEmail } from "@/lib/mailer"
import { checkRateLimit } from "@/lib/rate-limit"

export const runtime = "nodejs"

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  message?: string
  website?: string
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

  const netlifyIp = request.headers.get("x-nf-client-connection-ip")?.trim()
  if (netlifyIp) return netlifyIp

  return "unknown"
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)
  const rateLimitResult = checkRateLimit({
    key: `stealth-vault-contact:${ip}`,
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

  let body: ContactBody

  try {
    body = (await request.json()) as ContactBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const honeypot = normalize(body.website, 120)
  if (honeypot) {
    // Silently accept bot submissions without sending any email.
    return NextResponse.json({ ok: true })
  }

  const name = normalize(body.name, 120)
  const email = normalize(body.email, 200)
  const phone = normalize(body.phone, 40)
  const message = normalize(body.message, 2500)
  const source = normalize(body.source, 120) || "website"
  const page = normalize(body.page, 200) || "/stealth-vault"

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 })
  }

  const toAddress = process.env.STEALTH_VAULT_SALES_EMAIL || "hello@vishnulabs.com"

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
      <h2 style="margin:0 0 12px 0;">Stealth Vault customization request</h2>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(email)}</li>
        <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
        <li><strong>Source:</strong> ${escapeHtml(source)}</li>
        <li><strong>Page:</strong> ${escapeHtml(page)}</li>
        <li><strong>IP:</strong> ${escapeHtml(ip)}</li>
      </ul>
      <p style="margin-top:16px;"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `

  const sendResult = await sendEmail({
    to: toAddress,
    subject: `Stealth Vault customization request from ${name}`,
    html,
    replyTo: email,
  })

  if (!sendResult.ok) {
    return NextResponse.json({ error: sendResult.error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
