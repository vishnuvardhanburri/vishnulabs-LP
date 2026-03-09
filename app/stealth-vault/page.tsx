import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { StealthVaultPageClient } from "@/app/stealth-vault/stealth-vault-page-client"

export const metadata: Metadata = {
  title: "Stealth-Mode Internal AI Vault - 100% Private & Leak-Proof AI | VishnuLabs",
  description:
    "Stop data leaks from ChatGPT/Claude. Local, air-gapped AI that auto-redacts PII/secrets, remembers all files, and answers offline in 2 seconds. One-time $15,000 lifetime license.",
}

export default function StealthVaultPage() {
  return (
    <>
      <Navbar />
      <main>
        <StealthVaultPageClient />
      </main>
      <Footer />
    </>
  )
}
