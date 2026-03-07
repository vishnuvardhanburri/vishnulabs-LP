import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

import { sendEmail } from "@/lib/mailer"
import {
  STEALTH_VAULT_PRICE_USD,
  STEALTH_VAULT_PRODUCT_NAME,
  generateLicenseKey,
  getSiteUrl,
} from "@/lib/stealth-vault"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function getCustomerEmail(session: Stripe.Checkout.Session) {
  const customerDetailsEmail = session.customer_details?.email
  const customerEmail = typeof session.customer_email === "string" ? session.customer_email : undefined
  return customerDetailsEmail || customerEmail || ""
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: NextRequest) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripeSecret || !webhookSecret) {
    return NextResponse.json({ error: "Stripe webhook is not configured" }, { status: 500 })
  }

  const stripeSignature = request.headers.get("stripe-signature")

  if (!stripeSignature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 })
  }

  const stripe = new Stripe(stripeSecret)
  const rawBody = await request.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(rawBody, stripeSignature, webhookSecret)
  } catch (error) {
    console.error("[stripe webhook verification failed]", error)
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 })
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (session.metadata?.product !== "stealth_vault" || session.payment_status !== "paid") {
    return NextResponse.json({ received: true })
  }

  const paymentIntentId =
    typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id

  let paymentIntentMetadata: Record<string, string> = {}

  if (paymentIntentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
      paymentIntentMetadata = paymentIntent.metadata ?? {}

      if (paymentIntent.metadata?.license_email_sent === "true") {
        return NextResponse.json({ received: true, skipped: "already_processed" })
      }
    } catch (error) {
      console.error("[payment intent retrieve failed]", error)
    }
  }

  const customerEmail = getCustomerEmail(session)

  if (!customerEmail) {
    return NextResponse.json({ error: "Customer email missing in checkout session" }, { status: 400 })
  }

  const companyName = session.metadata?.companyName || "Your Team"
  const businessType = session.metadata?.businessType || "Business"
  const phone = session.metadata?.phone || "Not provided"
  const amount = typeof session.amount_total === "number" ? (session.amount_total / 100).toFixed(2) : `${STEALTH_VAULT_PRICE_USD}.00`
  const licenseKey = generateLicenseKey({ sessionId: session.id, email: customerEmail })
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
      <p>Stripe will send your official card receipt as well.</p>
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
      <h2 style="margin:0 0 12px 0;">New Stealth Vault purchase</h2>
      <ul>
        <li><strong>Company:</strong> ${escapeHtml(companyName)}</li>
        <li><strong>Email:</strong> ${escapeHtml(customerEmail)}</li>
        <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
        <li><strong>Business type:</strong> ${escapeHtml(businessType)}</li>
        <li><strong>Stripe session:</strong> ${escapeHtml(session.id)}</li>
        <li><strong>License key:</strong> <code>${escapeHtml(licenseKey)}</code></li>
      </ul>
    </div>
  `

  const customerEmailResult = await sendEmail({
    to: customerEmail,
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

  if (paymentIntentId) {
    try {
      await stripe.paymentIntents.update(paymentIntentId, {
        metadata: {
          ...paymentIntentMetadata,
          license_email_sent: "true",
          license_key: licenseKey,
        },
      })
    } catch (error) {
      console.error("[payment intent metadata update failed]", error)
    }
  }

  return NextResponse.json({ received: true })
}
