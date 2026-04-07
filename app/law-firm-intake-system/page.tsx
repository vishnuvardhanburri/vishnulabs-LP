import type { Metadata } from "next"

import { HighIntentPage } from "@/components/seo/high-intent-page"
import { highIntentPages } from "@/lib/seo-pages"

const pageData = highIntentPages.lawFirmIntake

export const metadata: Metadata = {
  title: pageData.metadata.title,
  description: pageData.metadata.description,
  alternates: {
    canonical: pageData.metadata.canonical,
  },
}

export default function LawFirmIntakeSystemPage() {
  return <HighIntentPage {...pageData.page} />
}
