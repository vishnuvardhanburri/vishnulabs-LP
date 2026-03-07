import { NextRequest, NextResponse } from "next/server"

import { createPayPalOrder } from "@/lib/paypal"
import { STEALTH_VAULT_PRICE_USD, STEALTH_VAULT_PRODUCT_NAME } from "@/lib/stealth-vault"

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

  try {
    const order = await createPayPalOrder({
      amountUsd: `${STEALTH_VAULT_PRICE_USD}.00`,
      companyName,
      email,
      phone,
      businessType,
      originHeader: request.headers.get("origin"),
      productName: STEALTH_VAULT_PRODUCT_NAME,
    })

    return NextResponse.json({ url: order.approveUrl, orderId: order.orderId })
  } catch (error) {
    console.error("[paypal checkout create order]", error)
    return NextResponse.json({ error: "Unable to start PayPal checkout" }, { status: 500 })
  }
}
