import { IndustryPageTemplate } from "@/components/industry-page-template"
import { testimonials } from "@/lib/testimonials"

export default function HospitalsClinicsIndustryPage() {
  return (
    <IndustryPageTemplate
      title="Clinic Systems That Cut No-Shows"
      subtitle="No-shows are not random. They are a system failure. We fix confirmation, reminders, and follow-up so appointments actually happen."
      painPoints={[
        "Appointments drop between booking and arrival",
        "Reminders are inconsistent or too late",
        "Staff spend time chasing instead of running the clinic",
      ]}
      solutionStack={[
        "Confirmation and reminder sequences that run on time",
        "Reschedule recovery so drop-offs do not disappear",
        "Visibility into where no-shows start",
        "Control for sensitive patient workflows",
      ]}
      outcomes={[
        "Lower no-show rate",
        "Higher appointment completion",
        "Less manual chasing for staff",
      ]}
      investment="$8,500 to $16,500"
      testimonial={testimonials.priya}
    />
  )
}
