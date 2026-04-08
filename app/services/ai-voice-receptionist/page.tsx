import { ServicePageTemplate } from "@/components/service-page-template"
import { testimonials } from "@/lib/testimonials"

export default function AiVoiceReceptionistPage() {
  return (
    <ServicePageTemplate
      title="AI Voice Receptionist"
      subtitle="Stop losing revenue to missed calls, slow callbacks, and inconsistent first response. Capture the call, qualify it, route it, and follow up until it is booked or closed."
      forWho={[
        "Real estate teams with after-hours lead volume",
        "Law firms handling urgent inbound intake",
        "Service teams bleeding leads from missed calls",
      ]}
      problems={[
        "Missed calls during evenings and weekends",
        "Leads go cold before anyone responds",
        "No visibility into what was missed and why",
      ]}
      includes={[
        "Capture every inbound call, including after-hours",
        "Qualify and route the right calls to the right team",
        "Book directly or trigger immediate follow-up",
        "Visibility into missed calls, drop-offs, and outcomes",
        "Fallback paths so failures do not become silent",
      ]}
      outcomes={[
        "Faster response without manual rescue",
        "Fewer missed opportunities from inbound calls",
        "More booked consults across business hours",
      ]}
      timeline="Pilot: 2–3 weeks"
      price="Pilot: $7,500 (credited toward full deployment)"
      testimonial={testimonials.carlos}
    />
  )
}
