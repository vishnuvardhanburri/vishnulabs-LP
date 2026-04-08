import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function StartupsIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Startup Systems That Stop Lead Loss"
      subtitle="If demand is real, missed follow-up is expensive. We fix the intake and response path before volume exposes the weak handoff."
      painPoints={[
        "Leads fall through because response depends on manual coverage",
        "Follow-up is inconsistent across channels and owners",
        "No visibility into where the pipeline is breaking",
      ]}
      solutionStack={[
        "One intake path for every inbound channel",
        "Fast first response that does not depend on a person noticing",
        "Routing rules so qualified leads reach the right owner",
        "Visibility into drop-offs, delay, and follow-up failure",
      ]}
      outcomes={[
        "Fewer missed leads",
        "Faster response time",
        "Cleaner lead-to-demo execution",
      ]}
      investment="$9,500 to $18,500"
      testimonial={testimonials.ethan}
    />
  )
}
