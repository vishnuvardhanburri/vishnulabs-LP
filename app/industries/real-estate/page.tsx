import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function RealEstateIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Real Estate Lead Follow-Up System"
      subtitle="Speed wins. If your response is slow, leads go cold. We fix follow-up, booking, and consistency across teams and weekends."
      painPoints={[
        "Inquiries arrive outside active sales hours",
        "Response lag kills intent",
        "Old CRM leads never get reactivated",
      ]}
      solutionStack={[
        "Immediate response and ownership routing",
        "Qualification and booking without delay",
        "Follow-up sequences that do not stop early",
        "Reactivation for older lead lists",
      ]}
      outcomes={[
        "More leads contacted fast",
        "More booked calls and showings",
        "Fewer leads going cold",
      ]}
      investment="Pilot: $7,500 (credited toward full deployment)"
      testimonial={testimonials.omar}
    />
  )
}
