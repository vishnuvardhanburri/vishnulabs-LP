import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function PiLawFirmsPage() {
  return (
    <IndustryPageTemplate
      title="AI Automation for PI Law Firm Intake"
      subtitle="Built for firms that need faster intake response, better case qualification quality, and fewer dropped opportunities after business hours."
      painPoints={[
        "Voicemails and delayed callbacks losing high-intent case leads",
        "Manual intake notes that miss key details",
        "Uneven follow-up for documents and consultation scheduling",
      ]}
      solutionStack={[
        "AI voice receptionist for 24/7 intake coverage",
        "Structured legal intake workflow by case type",
        "Consultation booking + reminder sequence",
        "Attorney/staff routing with priority logic",
      ]}
      outcomes={[
        "Faster intake-to-consultation conversion",
        "Higher intake consistency across staff shifts",
        "Cleaner case handoff for legal teams",
      ]}
      investment="$8,500 to $15,000"
    />
  )
}
