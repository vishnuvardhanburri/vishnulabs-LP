import { ArrowUpRight, BarChart3, CalendarCheck2, PhoneCall } from "lucide-react"

type CaseStudy = {
  vertical: string
  before: string
  after: string
  timeline: string
  impact: string
  icon: typeof BarChart3
}

const caseStudies: CaseStudy[] = [
  {
    vertical: "Personal Injury Law Firm (US)",
    before: "After-hours intake calls were routed to voicemail and callbacks happened next day.",
    after: "AI voice receptionist qualified callers and booked consults in real time.",
    timeline: "Live in 6 days",
    impact: "41% fewer missed qualified intake calls in 30 days",
    icon: PhoneCall,
  },
  {
    vertical: "Real Estate Team",
    before: "Leads from ads and website waited for manual response during evenings/weekends.",
    after: "Automated response + qualification + viewing booking with reminder sequence.",
    timeline: "Live in 5 days",
    impact: "2.3x increase in after-hours lead capture",
    icon: CalendarCheck2,
  },
  {
    vertical: "Mortgage Operations",
    before: "Manual follow-up for missing docs caused delays and appointment no-shows.",
    after: "Workflow-based reminders and owner alerts with fallback routing.",
    timeline: "Live in 7 days",
    impact: "33% no-show reduction and cleaner handoff visibility",
    icon: BarChart3,
  },
]

export function CaseStudiesSection() {
  return (
    <section className="relative py-24 md:py-32" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Case Studies</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Before / After outcomes from recent automation deployments
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Each build was scoped around one core metric: faster response, lower no-shows, or improved booking conversion.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.vertical} className="rounded-2xl border border-border/45 bg-card/65 p-6 lift-card">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <study.icon className="h-4.5 w-4.5 text-primary" />
              </div>

              <p className="text-xs uppercase tracking-widest text-muted-foreground">{study.vertical}</p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-lg border border-border/35 bg-background/70 p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Before</p>
                  <p className="mt-1 text-muted-foreground">{study.before}</p>
                </div>
                <div className="rounded-lg border border-border/35 bg-background/70 p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">After</p>
                  <p className="mt-1 text-muted-foreground">{study.after}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-border/35 bg-background/70 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Timeline</p>
                    <p className="mt-1 font-medium text-foreground">{study.timeline}</p>
                  </div>
                  <div className="rounded-lg border border-border/35 bg-background/70 p-3">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Impact</p>
                    <p className="mt-1 font-medium text-foreground">{study.impact}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowUpRight className="h-4 w-4 text-primary" />
          Full architecture and KPI breakdown shared during live demo.
        </div>
      </div>
    </section>
  )
}
