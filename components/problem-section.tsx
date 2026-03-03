import { AlertTriangle, CalendarX2, PhoneMissed, TimerReset } from "lucide-react"

const painPoints = [
  {
    icon: PhoneMissed,
    title: "After-hours calls go unanswered",
    description:
      "High-intent leads call outside office hours, hit voicemail, and move to competitors before your team responds.",
  },
  {
    icon: CalendarX2,
    title: "Manual scheduling slows conversion",
    description:
      "Back-and-forth booking kills momentum and leaves warm leads unassigned in your CRM.",
  },
  {
    icon: TimerReset,
    title: "No-show rates stay high",
    description:
      "Without reminder workflows and reschedule handling, booked consultations fail to convert into sales calls.",
  },
  {
    icon: AlertTriangle,
    title: "Revenue reporting lacks visibility",
    description:
      "Teams cannot see where leads dropped, which means marketing spend grows while close rates stay flat.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-28" id="problem">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-destructive/75">Revenue Leaks</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Most SMB teams do not lose leads from lack of demand.
            <br className="hidden md:block" />
            They lose them in response and follow-up operations.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-border/35 bg-card/55 p-6 transition-all duration-300 hover:border-destructive/30 hover:bg-card/75"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10">
                <point.icon className="h-4.5 w-4.5 text-destructive/80" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
