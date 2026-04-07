import type { Metadata } from "next"

import { SentinelLeadCaptureProvider } from "@/components/sentinel/lead-capture-provider"
import { SentinelPageClient } from "@/app/sentinel/sentinel-page-client"

export const metadata: Metadata = {
  title: "AI Data Leak Prevention | Control AI Risk | VishnuLabs",
  description:
    "Prevent ChatGPT and AI data leaks, enforce compliance, and control every AI interaction before sensitive data leaves your system.",
  alternates: {
    canonical: "/sentinel",
  },
}

export default function SentinelPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Sentinel",
    description: "AI Data Protection & Governance Platform for preventing data leaks, enforcing compliance, and controlling AI interactions.",
    brand: { "@type": "Brand", name: "VishnuLabs" },
    category: "AI Data Protection & Governance Platform",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "10000",
      highPrice: "100000",
      offerCount: "3",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do teams need Sentinel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because AI usage usually spreads before control does. Sentinel adds the policy, logging, and interception layer before sensitive data leaves the system.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can Sentinel be deployed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most teams start with a risk assessment or pilot first. Typical deployment timing depends on workflow complexity and integrations.",
        },
      },
      {
        "@type": "Question",
        name: "Does Sentinel support compliance work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It helps teams build visibility, audit logs, and policy enforcement around HIPAA, GDPR, and similar requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can teams start small?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A pilot deployment is the lowest-friction way to validate control on one workflow or one team before expanding.",
        },
      },
    ],
  }

  return (
    <SentinelLeadCaptureProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SentinelPageClient />
    </SentinelLeadCaptureProvider>
  )
}
