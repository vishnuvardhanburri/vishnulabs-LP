import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function RealEstateIndustryPage() {
  return (
    <IndustryPageTemplate
      title="AI Automation for Real Estate Lead Conversion"
      subtitle="Designed for agents and broker teams that need rapid lead response, appointment booking, and follow-up consistency across evenings and weekends."
      painPoints={[
        "Lead inquiries arriving outside active sales hours",
        "Manual response lag reducing conversion probability",
        "Missed follow-up on stale CRM lead lists",
      ]}
      solutionStack={[
        "AI voice front desk and missed-call recovery",
        "Buyer/seller qualification workflows",
        "Auto-booking for showings and calls",
        "Reactivation campaigns for old lead pipelines",
      ]}
      outcomes={[
        "Higher contact rates from inbound leads",
        "More booked consultations with less manual outreach",
        "Improved pipeline movement from old CRM leads",
      ]}
      investment="$4,997 to $9,500"
    />
  )
}
