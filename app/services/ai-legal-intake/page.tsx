import { ServicePageTemplate } from "@/components/service-page-template"
import { testimonials } from "@/lib/testimonials"

export default function AiLegalIntakePage() {
  return (
    <ServicePageTemplate
      title="AI Legal Intake Automation"
      subtitle="Stop losing high-value cases to delay and inconsistent intake. Qualify fast. Route correctly. Keep an audit trail."
      forWho={[
        "Personal injury firms with high inquiry volume",
        "Firms handling repetitive intake across practice areas",
        "Ops teams standardizing qualification quality",
      ]}
      problems={[
        "Inconsistent intake quality from manual handling",
        "Urgent inquiries wait too long",
        "Incomplete details reach the attorney",
      ]}
      includes={[
        "Structured intake that captures the right details first",
        "Urgency routing so hot cases move immediately",
        "Clean summaries sent to the right staff member",
        "Follow-up that does not drop",
        "Audit trail for review and compliance",
      ]}
      outcomes={[
        "Faster qualification and routing",
        "More complete intake data at first touch",
        "Lower admin load for intake teams",
      ]}
      timeline="Pilot: 2–3 weeks"
      price="Pilot: $7,500 (credited toward full deployment)"
      testimonial={testimonials.michael}
    />
  )
}
