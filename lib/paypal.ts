import { getSiteUrl } from "@/lib/stealth-vault"

const PAYPAL_API_LIVE = "https://api-m.paypal.com"
const PAYPAL_API_SANDBOX = "https://api-m.sandbox.paypal.com"

type PayPalLink = {
  href: string
  rel: string
  method?: string
}

type PayPalOrderResponse = {
  id: string
  status: string
  links?: PayPalLink[]
  payer?: {
    email_address?: string
    payer_id?: string
    name?: {
      given_name?: string
      surname?: string
    }
  }
  purchase_units?: Array<{
    payments?: {
      captures?: Array<{
        id: string
        status: string
        amount?: {
          value?: string
          currency_code?: string
        }
      }>
    }
  }>
  details?: Array<{
    issue?: string
    description?: string
  }>
  message?: string
}

function getPayPalApiBase() {
  return process.env.PAYPAL_ENV === "live" ? PAYPAL_API_LIVE : PAYPAL_API_SANDBOX
}

function getPayPalCredentials() {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials are missing. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET.")
  }

  return { clientId, clientSecret }
}

export async function getPayPalAccessToken() {
  const { clientId, clientSecret } = getPayPalCredentials()
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

  const response = await fetch(`${getPayPalApiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })

  if (!response.ok) {
    const payload = await response.text()
    throw new Error(`PayPal token request failed (${response.status}): ${payload}`)
  }

  const payload = (await response.json()) as { access_token?: string }

  if (!payload.access_token) {
    throw new Error("PayPal token response missing access_token")
  }

  return payload.access_token
}

export async function createPayPalOrder(input: {
  amountUsd: string
  companyName: string
  email: string
  phone: string
  businessType: string
  originHeader?: string | null
  productName: string
}) {
  const token = await getPayPalAccessToken()
  const siteUrl = getSiteUrl(input.originHeader)

  const returnParams = new URLSearchParams({
    provider: "paypal",
    companyName: input.companyName,
    email: input.email,
    phone: input.phone,
    businessType: input.businessType,
  })

  const returnUrl = `${siteUrl}/stealth-vault/success?${returnParams.toString()}`
  const cancelUrl = `${siteUrl}/stealth-vault?checkout=cancelled`

  const response = await fetch(`${getPayPalApiBase()}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: input.productName,
          custom_id: "stealth_vault",
          amount: {
            currency_code: "USD",
            value: input.amountUsd,
          },
        },
      ],
      application_context: {
        brand_name: "VishnuLabs",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        shipping_preference: "NO_SHIPPING",
        return_url: returnUrl,
        cancel_url: cancelUrl,
      },
    }),
  })

  const payload = (await response.json()) as PayPalOrderResponse

  if (!response.ok) {
    const message = payload.message || payload.details?.[0]?.description || "Failed to create PayPal order"
    throw new Error(message)
  }

  const approveLink = payload.links?.find((link) => link.rel === "approve")?.href

  if (!payload.id || !approveLink) {
    throw new Error("PayPal order response missing order id or approve link")
  }

  return {
    orderId: payload.id,
    approveUrl: approveLink,
  }
}

export async function capturePayPalOrder(orderId: string) {
  const token = await getPayPalAccessToken()

  const response = await fetch(`${getPayPalApiBase()}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })

  const payload = (await response.json()) as PayPalOrderResponse

  if (!response.ok) {
    const issue = payload.details?.[0]?.issue
    const description = payload.details?.[0]?.description || payload.message || "PayPal capture failed"

    if (response.status === 422 && issue === "ORDER_ALREADY_CAPTURED") {
      return {
        alreadyCaptured: true,
        data: payload,
      }
    }

    throw new Error(description)
  }

  return {
    alreadyCaptured: false,
    data: payload,
  }
}
