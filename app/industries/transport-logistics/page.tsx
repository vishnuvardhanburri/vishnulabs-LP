import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function TransportLogisticsIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Automation for Transport, Logistics, and Moving Companies"
      subtitle="Built for operators that need better quote visibility, cleaner dispatch handoff, and faster response to inbound transport or moving inquiries."
      painPoints={[
        "Lead and quote requests arriving faster than the team can follow up",
        "Weak visibility between website inquiries, callbacks, and dispatch operations",
        "Moving-company and logistics workflows relying on too much manual coordination",
      ]}
      solutionStack={[
        "Website and quote-capture flow for strong public visibility",
        "Automation for callback, reminder, and booking workflows",
        "Custom software support for dispatch and admin visibility",
        "Operational handoff between inbound demand and service delivery",
      ]}
      outcomes={[
        "Stronger visibility for moving and logistics services",
        "Faster lead response and quote follow-up consistency",
        "Cleaner handoff from inquiry to active job or dispatch workflow",
      ]}
      investment="$9,500 to $19,500"
    />
  )
}
