import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function StartupsIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Automation, Websites, and Software for Startups"
      subtitle="Built for startup teams that need strong public visibility, faster lead handling, and cleaner internal workflows without building a large ops layer too early."
      painPoints={[
        "Early-stage teams juggling inbound interest manually",
        "Website and booking flow not matching the actual sales process",
        "Operational gaps between lead capture, follow-up, and founder visibility",
      ]}
      solutionStack={[
        "Website creation aligned to the startup offer",
        "Automation for booking, reminders, and lead follow-up",
        "Custom dashboards or workflow layers for team visibility",
        "Domain launch support and operating-system cleanup",
      ]}
      outcomes={[
        "Stronger first impression for buyers and partners",
        "Cleaner lead-to-demo movement with less manual admin",
        "Better visibility into the early sales and ops workflow",
      ]}
      investment="$9,500 to $18,500"
    />
  )
}
