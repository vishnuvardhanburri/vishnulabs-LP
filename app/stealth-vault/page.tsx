import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { StealthVaultPageClient } from "@/app/stealth-vault/stealth-vault-page-client"

export const metadata: Metadata = {
  title: "Stealth-Mode Internal AI Vault | VishnuLabs",
  description:
    "Private, air-gapped AI vault for law firms and clinics. Zero cloud data leakage, full document memory, and one-time $15,000 lifetime license.",
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
