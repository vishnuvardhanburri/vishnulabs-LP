import type { Metadata } from "next"

import { CaseStudiesPage } from "@/components/home/case-studies-page"

export const metadata: Metadata = {
  title: "Case Studies | Result-First System Fixes | Xavira Tech Labs",
  description: "Real systems. Real failure points. Real outcomes. See how broken response, intake, and follow-up paths were rebuilt under live operating pressure.",
  alternates: {
    canonical: "/case-studies",
  },
}

export default function Page() {
  return <CaseStudiesPage />
}
