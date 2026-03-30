import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function MortgageIndustryPage() {
  return (
    <IndustryPageTemplate
      title="AI Automation for Mortgage Intake & Follow-up"
      subtitle="Built for mortgage teams that need faster intent routing, cleaner document follow-up, and stronger lead-to-consultation conversion."
      painPoints={[
        "High lead volume with uneven qualification quality",
        "Slow callback cycles and dropped inbound intent",
        "Document collection delays causing conversion friction",
      ]}
      solutionStack={[
        "AI intake triage by loan intent and urgency",
        "Callback and consultation booking workflows",
        "Reminder automation for pending documents",
        "Owner alerts and pipeline status updates",
      ]}
      outcomes={[
        "Faster speed-to-lead response for hot prospects",
        "Reduced drop-off from inquiry to consultation",
        "Better operational visibility for revenue teams",
      ]}
      investment="$6,000 to $10,500"
      testimonial={testimonials.ahmed}
    />
  )
}
