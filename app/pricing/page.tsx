import type { Metadata } from "next"

import { PricingPage } from "@/components/home/pricing-page"

export const metadata: Metadata = {
  title: "Pricing | Stop Lead Loss and Data Exposure | Xavira Tech Labs",
  description: "Start with a risk assessment, validate with a pilot, then deploy the full fix. Built for teams handling real revenue and real data.",
  alternates: {
    canonical: "/pricing",
  },
}

export default function Page() {
  return <PricingPage />
}
