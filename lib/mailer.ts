export type EmailPayload = {
  to: string | string[]
  subject: string
  html: string
  text?: string
  replyTo?: string
}

type ResendResponse = {
  id?: string
  error?: {
    message?: string
  }
}

export async function sendEmail(payload: EmailPayload): Promise<{ ok: true; id?: string } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL ?? "VishnuLabs <no-reply@vishnulabs.com>"

  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY is missing" }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      reply_to: payload.replyTo,
    }),
  })

  const data = (await response.json().catch(() => ({}))) as ResendResponse

  if (!response.ok) {
    const errorMessage = data.error?.message ?? `Resend request failed with status ${response.status}`
    return { ok: false, error: errorMessage }
  }

  return { ok: true, id: data.id }
}
