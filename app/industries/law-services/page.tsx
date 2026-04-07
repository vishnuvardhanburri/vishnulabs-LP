import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function LawServicesIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Automation for Lawyers and Law Services"
      subtitle="Built for legal teams that need stronger first-response coverage, cleaner intake handling, and private operational systems that match professional-service expectations."
      painPoints={[
        "Slow first response to consultations and legal-service inquiries",
        "Inconsistent intake quality and incomplete handoff to staff",
        "Need for stronger visibility and cleaner workflow control across legal operations",
      ]}
      solutionStack={[
        "Website support for practice visibility and consultation capture",
        "AI intake, scheduling, and follow-up automation",
        "Custom software support for routing and admin handoff",
        "Sentinel available for legal teams handling sensitive client data",
      ]}
      outcomes={[
        "Higher consultation coverage and cleaner inquiry handling",
        "More consistent intake and routing across staff workflows",
        "Better visibility across legal-service operations and follow-up",
      ]}
      investment="$8,500 to $20,000"
      testimonial={testimonials.oliver}
    />
  )
}
