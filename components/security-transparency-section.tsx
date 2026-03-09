import { Activity, DatabaseZap, RefreshCcw, ShieldCheck } from "lucide-react"

const pillars = [
  {
    title: "Deterministic Workflows",
    detail: "Clear logic paths, predictable outcomes, and no black-box automations.",
    icon: ShieldCheck,
  },
  {
    title: "Retries & Fallbacks",
    detail: "Critical steps use retry logic and escalation paths instead of silent failures.",
    icon: RefreshCcw,
  },
  {
    title: "Monitoring & Alerts",
    detail: "Operational visibility with event logs and proactive alerting for high-risk conditions.",
    icon: Activity,
  },
  {
    title: "Ownership Handoff",
    detail: "Documentation and architecture clarity so your team retains control after go-live.",
    icon: DatabaseZap,
  },
]

const trustProfiles = [
  "US PI Law Operations",
  "Family Law Intake Teams",
  "Real Estate Broker Operations",
  "Mortgage Advisory Workflows",
  "Outpatient Clinic Admin Ops",
  "Consulting Service Teams",
]

export function SecurityTransparencySection() {
  return (
    <section className="relative border-y border-border/40 py-24 md:py-28" id="security-transparency" data-reveal>
      <div className="pointer-events-none absolute inset-0 bg-secondary/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/80">Security & Transparency</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            Production systems built for reliability, traceability, and trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Worried about leaks, brittle automations, or poor ownership transfer? VishnuLabs builds with deterministic controls,
            observability, and clean handoff from day one.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article key={item.title} className="lift-card rounded-2xl border border-border/45 bg-card/80 p-5" data-reveal>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border/45 bg-card/75 p-5" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Representative Client Profiles</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustProfiles.map((profile) => (
              <div
                key={profile}
                className="rounded-xl border border-border/40 bg-background/75 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {profile}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
