import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SentinelLeadCaptureProvider } from "@/components/sentinel/lead-capture-provider"
import { SentinelPageClient } from "@/app/sentinel/sentinel-page-client"

export const metadata: Metadata = {
  title: "Sentinel | AI Data Protection & Governance Platform | VishnuLabs",
  description:
    "Prevent data leaks, enforce compliance, and control every AI interaction before it leaves your system.",
  alternates: {
    canonical: "/sentinel",
  },
}

export default function SentinelPage() {
  return (
    <>
      <Navbar />
      <SentinelLeadCaptureProvider>
        <SentinelPageClient />
      </SentinelLeadCaptureProvider>
      <Footer />
    </>
  )
}
