import { Building2, Quote, TrendingUp } from "lucide-react"

const outcomeCards = [
  {
    title: "US PI Firm (Operations Team)",
    metric: "41%",
    detail: "fewer missed intake calls after deploying AI voice + callback workflows",
  },
  {
    title: "Multi-Agent Real Estate Team",
    metric: "2.3x",
    detail: "increase in after-hours lead capture with automated qualification + booking",
  },
  {
    title: "Mortgage Intake Operations",
    metric: "33%",
    detail: "drop in no-shows after reminders, reschedules, and owner alerts",
  },
]

const testimonials = [
  {
    quote:
      "We moved from voicemail chaos to structured booked consultations. The team now starts each day with qualified appointments.",
    author: "Operations Director",
    company: "Real Estate Team, Texas",
  },
  {
    quote:
      "Intake quality improved immediately. Attorneys receive complete case summaries and can prioritize high-value inquiries faster.",
    author: "Managing Partner",
    company: "PI Practice, California",
  },
  {
    quote:
      "Automation removed follow-up bottlenecks. We can now see response metrics and conversion movement by stage.",
    author: "Revenue Manager",
    company: "Mortgage Operations, Florida",
  },
]

const trustSignals = [
  "Law Firm Operations Teams",
  "Real Estate Broker Teams",
  "Mortgage Intake Departments",
  "Consulting Service Businesses",
]

export function ProofSection() {
  return (
    <section className="relative border-y border-border/30 py-24 md:py-32" id="proof">
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Proof & Results</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            Outcome-focused automation, not generic AI demos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Sample outcomes from recent implementations. Detailed KPI snapshots are shared during live walkthrough.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {outcomeCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-border/45 bg-card/65 p-6 lift-card">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <TrendingUp className="h-4.5 w-4.5 text-primary" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{card.title}</p>
              <p className="mt-1 text-4xl font-semibold text-foreground">{card.metric}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.quote} className="rounded-2xl border border-border/35 bg-background/70 p-6">
              <Quote className="h-4.5 w-4.5 text-primary" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
              <p className="mt-4 text-sm font-medium text-foreground">{item.author}</p>
              <p className="text-xs text-muted-foreground">{item.company}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border/45 bg-card/65 p-6 lift-card">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">As Used By</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((label) => (
              <div
                key={label}
                className="flex items-center justify-center rounded-xl border border-border/35 bg-background/70 px-4 py-3 text-xs font-semibold tracking-wide text-muted-foreground"
              >
                <Building2 className="mr-2 h-3.5 w-3.5" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
