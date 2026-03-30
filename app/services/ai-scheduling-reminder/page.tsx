import { ServicePageTemplate } from "@/components/service-page-template"
import { testimonials } from "@/lib/testimonials"

export default function AiSchedulingReminderPage() {
  return (
    <ServicePageTemplate
      title="AI Scheduling & Reminder System"
      subtitle="A structured scheduling system for teams losing revenue to missed callbacks, fragile reminders, and inconsistent booking follow-through."
      forWho={[
        "Consulting teams booking high-value calls",
        "Law firms managing intake consultations",
        "Mortgage and real estate teams with appointment-heavy workflows",
      ]}
      problems={[
        "Manual back-and-forth creates delay before a call is even booked",
        "Reminder logic fails quietly and no-show rates rise",
        "Booking visibility breaks across channels and teams",
      ]}
      includes={[
        "Booking workflow architecture",
        "Calendar integration and slot validation rules",
        "SMS and email reminder orchestration",
        "Reschedule and no-show recovery logic",
        "Pipeline status updates and owner alerts",
      ]}
      outcomes={[
        "Lower no-show rates and more reliable calendar attendance",
        "Reduced manual intervention for appointment teams",
        "Cleaner handoff between lead capture and booked calls",
      ]}
      timeline="5 to 7 days"
      price="$6,500 to $9,500"
      testimonial={testimonials.james}
    />
  )
}
