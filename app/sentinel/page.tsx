import type { Metadata } from "next"

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
    <SentinelLeadCaptureProvider>
      <SentinelPageClient />
    </SentinelLeadCaptureProvider>
  )
}
