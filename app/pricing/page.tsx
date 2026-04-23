import type { Metadata } from "next"

import { PricingPage } from "@/components/home/pricing-page"

export const metadata: Metadata = {
  title: "Pricing | Xavira Tech Labs",
  description: "Engagement model for production-grade backend systems, SaaS platforms, automation systems, and cloud infrastructure.",
  alternates: {
    canonical: "/pricing",
  },
}

export default function Page() {
  return <PricingPage />
}
