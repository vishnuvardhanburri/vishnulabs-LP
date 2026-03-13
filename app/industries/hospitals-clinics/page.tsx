import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function HospitalsClinicsIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Automation for Hospitals and Clinics"
      subtitle="Designed for teams that need calmer front-desk operations, cleaner appointment routing, and better visibility across patient-service workflows."
      painPoints={[
        "Appointment and inquiry handling spread across too many manual steps",
        "Staff time lost to repetitive reminders and follow-up coordination",
        "Operational pressure from delayed responses and poor visibility",
      ]}
      solutionStack={[
        "Website and inquiry flow designed for patient-service clarity",
        "Scheduling, reminder, and callback automation",
        "Custom ops support for intake, routing, and admin visibility",
        "Role-aware workflows for sensitive operating environments",
      ]}
      outcomes={[
        "Faster response to patient and service inquiries",
        "Less front-desk admin friction across busy periods",
        "Better visibility into scheduling and follow-up operations",
      ]}
      investment="$8,500 to $16,500"
    />
  )
}
