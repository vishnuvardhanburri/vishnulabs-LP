import type { Metadata } from "next"

import { PricingPage } from "@/components/home/pricing-page"

export const metadata: Metadata = {
  title: "Pricing | VishnuLabs",
  description: "Flexible engineering retainers for intake systems, automation rebuilds, and production delivery from idea to deployment.",
  alternates: {
    canonical: "/pricing",
  },
}

export default function Page() {
  return <PricingPage />
}
