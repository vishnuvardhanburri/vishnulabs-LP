import { ServicePageTemplate } from "@/components/service-page-template"

export default function AiSchedulingReminderPage() {
  return (
    <ServicePageTemplate
      title="AI Scheduling & Reminder System"
      subtitle="An automated booking and reminder engine that schedules qualified leads, handles reschedules, and reduces no-shows with timed reminders and owner alerts."
      forWho={[
        "Consulting teams booking high-value sales calls",
        "Law firms managing intake consultations",
        "Mortgage and real estate teams with appointment-heavy workflows",
      ]}
      problems={[
        "Manual back-and-forth for scheduling",
        "No-show rates hurting conversion",
        "Fragmented booking visibility across channels",
      ]}
      includes={[
        "Booking workflow architecture",
        "Calendar integration and slot rules",
        "SMS/email reminder automation",
        "Reschedule and no-show recovery logic",
        "Pipeline status updates and owner alerts",
      ]}
      outcomes={[
        "Lower no-show rates and better calendar attendance",
        "Reduced manual admin work for appointment teams",
        "Cleaner handoff between lead capture and sales calls",
      ]}
      timeline="5 to 7 days"
      price="$6,500 to $9,500"
    />
  )
}
