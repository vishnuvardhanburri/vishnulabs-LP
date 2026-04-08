import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function PiLawFirmsPage() {
  return (
    <IndustryPageTemplate
      title="PI Intake That Does Not Drop Cases"
      subtitle="PI leads are expensive. If calls go to voicemail, you already lost. We fix intake coverage, qualification, and follow-up so cases do not slip."
      painPoints={[
        "Voicemails and delayed callbacks losing high-intent cases",
        "Intake notes miss key details",
        "Follow-up for documents and booking is inconsistent",
      ]}
      solutionStack={[
        "Coverage for missed calls and after-hours intake",
        "Structured qualification by case type",
        "Follow-up until consult is booked or closed",
        "Priority routing to the right staff member",
      ]}
      outcomes={[
        "More booked consults",
        "Cleaner qualification",
        "Fewer dropped cases",
      ]}
      investment="$8,500 to $15,000"
      testimonial={testimonials.noah}
    />
  )
}
