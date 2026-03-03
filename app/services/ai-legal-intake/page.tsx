import { ServicePageTemplate } from "@/components/service-page-template"

export default function AiLegalIntakePage() {
  return (
    <ServicePageTemplate
      title="AI Legal Intake Automation"
      subtitle="A legal intake workflow that captures leads 24/7, asks structured case questions, qualifies urgency, and routes actionable summaries to your legal team."
      forWho={[
        "Personal injury firms with high inquiry volume",
        "Immigration and family practices handling repetitive intake",
        "Law firm operations teams standardizing qualification quality",
      ]}
      problems={[
        "Inconsistent intake quality from manual handling",
        "Slow response to urgent inbound case opportunities",
        "Incomplete lead data sent to legal staff",
      ]}
      includes={[
        "Structured intake logic and qualification flow",
        "Practice-area-specific triage conditions",
        "CRM/email routing and summary format",
        "Document reminder and follow-up automation",
        "Audit trail and operational handoff documentation",
      ]}
      outcomes={[
        "Faster lead qualification and attorney routing",
        "More complete intake data at first touch",
        "Reduced admin load for intake coordinators",
      ]}
      timeline="6 to 9 days"
      price="$8,500 to $15,000"
    />
  )
}
