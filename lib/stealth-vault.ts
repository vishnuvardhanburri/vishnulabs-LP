import crypto from "node:crypto"

export const STEALTH_VAULT_PRICE_USD = 15000
export const STEALTH_VAULT_PRICE_CENTS = STEALTH_VAULT_PRICE_USD * 100
export const STEALTH_VAULT_PRODUCT_NAME = "Stealth-Mode Internal AI Vault"

export function generateLicenseKey(input: { sessionId: string; email: string }) {
  const salt = process.env.STEALTH_VAULT_LICENSE_SALT ?? "vishnulabs-stealth-vault"
  const source = `${input.sessionId}:${input.email.toLowerCase()}:${salt}`
  const hash = crypto.createHash("sha256").update(source).digest("hex").toUpperCase()
  return `VL-VAULT-${hash.slice(0, 4)}-${hash.slice(4, 8)}-${hash.slice(8, 12)}-${hash.slice(12, 16)}`
}

export function getSiteUrl(originHeader?: string | null) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
  const fallback = "https://vishnulabs.com"
  const candidate = envUrl || originHeader || fallback
  return candidate.endsWith("/") ? candidate.slice(0, -1) : candidate
}
