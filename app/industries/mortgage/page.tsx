import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function MortgageIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Mortgage Intake & Follow-Up System"
      subtitle="Mortgage leads go cold when callbacks slip and docs stall. We fix qualification, routing, and document follow-up so conversion does not depend on manual chasing."
      painPoints={[
        "High lead volume with uneven qualification",
        "Slow callbacks and dropped intent",
        "Document collection delays that stall conversion",
      ]}
      solutionStack={[
        "Fast qualification and urgency routing",
        "Booking and callback flows that do not slip",
        "Document follow-up sequences that keep moving",
        "Visibility into drop-offs and delays",
      ]}
      outcomes={[
        "Faster speed-to-lead",
        "Less drop-off from inquiry to consultation",
        "Cleaner pipeline visibility",
      ]}
      investment="Pilot: $7,500 (credited toward full deployment)"
      testimonial={testimonials.ahmed}
    />
  )
}
