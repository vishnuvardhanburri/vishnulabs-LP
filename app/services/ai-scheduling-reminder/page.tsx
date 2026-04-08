import { ServicePageTemplate } from "@/components/service-page-template"
import { testimonials } from "@/lib/testimonials"

export default function AiSchedulingReminderPage() {
  return (
    <ServicePageTemplate
      title="AI Scheduling & Reminder System"
      subtitle="Stop losing booked appointments to delay, weak reminders, and silent drop-offs. Confirm fast. Remind on time. Keep attendance high."
      forWho={[
        "Consulting teams booking high-value calls",
        "Law firms managing intake consultations",
        "Teams with appointment-heavy pipelines",
      ]}
      problems={[
        "Manual back-and-forth creates delay before anything is booked",
        "Reminders fail quietly and no-shows climb",
        "Teams lose visibility across channels and handoffs",
      ]}
      includes={[
        "Fast booking confirmation and slot validation",
        "Reminder sequences that run on time, every time",
        "Reschedule recovery so no-shows do not disappear",
        "Visibility into drop-offs and follow-up gaps",
        "Alerts when the path breaks",
      ]}
      outcomes={[
        "Lower no-show rates and higher attendance",
        "Less manual chasing for staff",
        "Cleaner handoff from inquiry to booked appointment",
      ]}
      timeline="Pilot: 2–3 weeks"
      price="Pilot: $7,500 (credited toward full deployment)"
      testimonial={testimonials.james}
    />
  )
}
