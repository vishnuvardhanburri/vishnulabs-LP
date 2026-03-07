import { NextRequest, NextResponse } from "next/server"

import { sendEmail } from "@/lib/mailer"
import { capturePayPalOrder } from "@/lib/paypal"
import {
  STEALTH_VAULT_PRICE_USD,
  STEALTH_VAULT_PRODUCT_NAME,
  generateLicenseKey,
  getSiteUrl,
} from "@/lib/stealth-vault"

export const runtime = "nodejs"

type CaptureBody = {
  orderId?: string
  companyName?: string
  email?: string
  phone?: string
  businessType?: string
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

function resolveAmount(captureData: any) {
  const captureAmount =
    captureData?.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value

  if (captureAmount) {
    return captureAmount
  }

  return `${STEALTH_VAULT_PRICE_USD}.00`
}

export async function POST(request: NextRequest) {
  let body: CaptureBody

  try {
    body = (await request.json()) as CaptureBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const orderId = normalize(body.orderId, 120)
  const companyName = normalize(body.companyName, 120) || "Your Team"
  const requestedEmail = normalize(body.email, 200)
  const phone = normalize(body.phone, 40) || "Not provided"
  const businessType = normalize(body.businessType, 80) || "Business"

  if (!orderId) {
    return NextResponse.json({ error: "Missing PayPal order ID" }, { status: 400 })
  }

  try {
    const result = await capturePayPalOrder(orderId)

    if (result.alreadyCaptured) {
      return NextResponse.json({
        ok: true,
        alreadyCaptured: true,
      })
    }

    const captureData = result.data

    const payerEmail = captureData?.payer?.email_address || requestedEmail

    if (!payerEmail) {
      return NextResponse.json({ error: "Payer email missing" }, { status: 400 })
    }

    const amount = resolveAmount(captureData)
    const licenseKey = generateLicenseKey({ sessionId: orderId, email: payerEmail })
    const siteUrl = getSiteUrl(request.headers.get("origin"))
    const loomUrl = process.env.STEALTH_VAULT_LOOM_URL || "https://www.loom.com/share/replace-with-your-demo"
    const guideUrl = process.env.STEALTH_VAULT_GUIDE_URL || `${siteUrl}/guides/stealth-vault-installation-guide.pdf`
    const supportEmail = process.env.STEALTH_VAULT_SUPPORT_EMAIL || "hello@vishnulabs.com"

    const customerHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
        <h2 style="margin:0 0 12px 0;">Payment received: ${escapeHtml(STEALTH_VAULT_PRODUCT_NAME)}</h2>
        <p>Hi ${escapeHtml(companyName)},</p>
        <p>Thanks for your purchase. Your <strong>lifetime license</strong> is now reserved.</p>
        <ul>
          <li><strong>Amount paid:</strong> $${escapeHtml(amount)} USD</li>
          <li><strong>License key:</strong> <code style="background:#f3f4f6;padding:2px 6px;border-radius:6px;">${escapeHtml(licenseKey)}</code></li>
          <li><strong>Business type:</strong> ${escapeHtml(businessType)}</li>
        </ul>
        <p><strong>Resources:</strong></p>
        <ul>
          <li>Loom walkthrough: <a href="${escapeHtml(loomUrl)}">${escapeHtml(loomUrl)}</a></li>
          <li>Installation guide: <a href="${escapeHtml(guideUrl)}">${escapeHtml(guideUrl)}</a></li>
        </ul>
        <p>Your PayPal receipt is also available from your PayPal account activity.</p>
        <p>For deployment support, reply to this email or contact <a href="mailto:${escapeHtml(supportEmail)}">${escapeHtml(supportEmail)}</a>.</p>
        <p>— VishnuLabs</p>
      </div>
    `

    const customerText = [
      `Payment received: ${STEALTH_VAULT_PRODUCT_NAME}`,
      `Amount paid: $${amount} USD`,
      `License key: ${licenseKey}`,
      `Loom walkthrough: ${loomUrl}`,
      `Installation guide: ${guideUrl}`,
      `Support: ${supportEmail}`,
    ].join("\n")

    const internalHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:620px;margin:0 auto;padding:20px;">
        <h2 style="margin:0 0 12px 0;">New Stealth Vault purchase (PayPal)</h2>
        <ul>
          <li><strong>Company:</strong> ${escapeHtml(companyName)}</li>
          <li><strong>Email:</strong> ${escapeHtml(payerEmail)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
          <li><strong>Business type:</strong> ${escapeHtml(businessType)}</li>
          <li><strong>PayPal order:</strong> ${escapeHtml(orderId)}</li>
          <li><strong>License key:</strong> <code>${escapeHtml(licenseKey)}</code></li>
        </ul>
      </div>
    `

    const customerEmailResult = await sendEmail({
      to: payerEmail,
      subject: "Your Stealth-Mode AI Vault license + setup resources",
      html: customerHtml,
      text: customerText,
    })

    if (!customerEmailResult.ok) {
      console.error("[customer email failed]", customerEmailResult.error)
      return NextResponse.json({ error: "Customer email send failed" }, { status: 500 })
    }

    const internalAddress = process.env.STEALTH_VAULT_SALES_EMAIL || "hello@vishnulabs.com"

    const internalEmailResult = await sendEmail({
      to: internalAddress,
      subject: `New purchase: ${STEALTH_VAULT_PRODUCT_NAME} (${companyName})`,
      html: internalHtml,
    })

    if (!internalEmailResult.ok) {
      console.error("[internal email failed]", internalEmailResult.error)
    }

    return NextResponse.json({
      ok: true,
      alreadyCaptured: false,
      licenseKey,
    })
  } catch (error) {
    console.error("[paypal capture]", error)
    return NextResponse.json({ error: "Unable to capture PayPal payment" }, { status: 500 })
  }
}
