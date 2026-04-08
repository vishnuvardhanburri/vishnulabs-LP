import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function TransportLogisticsIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Moving & Logistics Lead Response System"
      subtitle="Quote requests leak when response is slow and handoff is manual. We fix the intake, follow-up, and dispatch visibility so jobs do not slip."
      painPoints={[
        "Quote requests go unanswered during busy periods",
        "Callbacks slip between teams and shifts",
        "Dispatch handoff has no clean visibility",
      ]}
      solutionStack={[
        "One intake path for calls, forms, and quote requests",
        "Immediate response and follow-up until booked or closed",
        "Routing and ownership so the right team acts fast",
        "Visibility from inquiry to dispatch handoff",
      ]}
      outcomes={[
        "Faster response time",
        "More quotes converted into booked jobs",
        "Cleaner handoff to dispatch",
      ]}
      investment="$9,500 to $19,500"
      testimonial={testimonials.lukas}
    />
  )
}
