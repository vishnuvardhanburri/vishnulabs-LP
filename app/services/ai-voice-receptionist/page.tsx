import { ServicePageTemplate } from "@/components/service-page-template"

export default function AiVoiceReceptionistPage() {
  return (
    <ServicePageTemplate
      title="AI Voice Receptionist"
      subtitle="A production-ready voice automation system that answers calls instantly, qualifies lead intent, routes priority inquiries, and books consultations automatically."
      forWho={[
        "Real estate teams with after-hours lead volume",
        "Law firms handling urgent inbound intake",
        "Mortgage and service businesses with missed-call leakage",
      ]}
      problems={[
        "Missed calls during evenings and weekends",
        "Slow callback cycles and unqualified conversations",
        "No visibility into dropped inbound opportunities",
      ]}
      includes={[
        "Call flow architecture + script logic",
        "Lead qualification and routing rules",
        "Calendar booking integration",
        "SMS/email follow-up and reminder setup",
        "Monitoring and fallback flow configuration",
      ]}
      outcomes={[
        "Faster speed-to-lead and better first response consistency",
        "Reduced missed opportunities from inbound calls",
        "Higher consultation booking coverage across business hours",
      ]}
      timeline="5 to 7 days"
      price="$4,997 one-time"
    />
  )
}
