import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function LawServicesIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Law Firm Intake System"
      subtitle="Legal leads go cold fast. We fix missed calls, slow follow-up, and weak routing so more inquiries become booked consultations."
      painPoints={[
        "Missed calls and delayed first response",
        "Inconsistent intake quality and weak handoff",
        "No visibility into where consults are being lost",
      ]}
      solutionStack={[
        "One intake path for calls and forms",
        "Instant response while intent is high",
        "Qualification and routing to the right staff member",
        "Sentinel available for sensitive client data",
      ]}
      outcomes={[
        "More booked consultations",
        "Faster response time",
        "Cleaner intake and routing",
      ]}
      investment="$8,500 to $20,000"
      testimonial={testimonials.oliver}
    />
  )
}
