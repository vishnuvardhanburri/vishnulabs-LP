import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { StealthVaultPageClient } from "@/app/stealth-vault/stealth-vault-page-client"

export const metadata: Metadata = {
  title: "Stealth-Mode Internal AI Vault – 100% Private & Leak-Proof AI | VishnuLabs",
  description:
    "Stop data leaks from ChatGPT/Claude. Local, air-gapped AI that auto-redacts PII/secrets, remembers all files, answers offline in 2 seconds.",
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
