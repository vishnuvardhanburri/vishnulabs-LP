import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

import {
  STEALTH_VAULT_PRICE_CENTS,
  STEALTH_VAULT_PRODUCT_NAME,
  getSiteUrl,
} from "@/lib/stealth-vault"

export const runtime = "nodejs"

type CheckoutBody = {
  companyName?: string
  email?: string
  phone?: string
  businessType?: string
}

function normalize(input: string | undefined, maxLength: number) {
  return (input ?? "").trim().slice(0, maxLength)
}

export async function POST(request: NextRequest) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY

  if (!stripeSecret) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 })
  }

  const stripe = new Stripe(stripeSecret)

  let body: CheckoutBody

  try {
    body = (await request.json()) as CheckoutBody
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const companyName = normalize(body.companyName, 120)
  const email = normalize(body.email, 200)
  const phone = normalize(body.phone, 40)
  const businessType = normalize(body.businessType, 80)

  if (!companyName || !email || !phone || !businessType) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 })
  }

  const siteUrl = getSiteUrl(request.headers.get("origin"))

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      phone_number_collection: { enabled: true },
      billing_address_collection: "required",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: STEALTH_VAULT_PRICE_CENTS,
            product_data: {
              name: STEALTH_VAULT_PRODUCT_NAME,
              description:
                "One-time lifetime license. 100% local AI vault for law firms and clinics with private document memory and zero cloud data leakage.",
            },
          },
        },
      ],
      metadata: {
        product: "stealth_vault",
        companyName,
        phone,
        businessType,
      },
      payment_intent_data: {
        metadata: {
          product: "stealth_vault",
          companyName,
          phone,
          businessType,
        },
      },
      success_url: `${siteUrl}/stealth-vault/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/stealth-vault?checkout=cancelled`,
      allow_promotion_codes: false,
    })

    if (!session.url) {
      return NextResponse.json({ error: "Stripe checkout URL unavailable" }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[checkout/stealth-vault]", error)
    return NextResponse.json({ error: "Unable to start checkout" }, { status: 500 })
  }
}
