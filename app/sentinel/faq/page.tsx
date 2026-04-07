import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SentinelLeadCaptureProvider } from "@/components/sentinel/lead-capture-provider"
import { FaqPageClient } from "@/app/sentinel/faq/faq-page-client"

export const metadata: Metadata = {
  title: "Sentinel FAQ | Questions & Answers | VishnuLabs",
  description: "Everything you need to understand how Sentinel protects your systems and data.",
  alternates: {
    canonical: "/sentinel/faq",
  },
}

export default function SentinelFaqPage() {
  return (
    <>
      <Navbar />
      <SentinelLeadCaptureProvider>
        <FaqPageClient />
      </SentinelLeadCaptureProvider>
      <Footer />
    </>
  )
}
