import { ArrowUpRight, CalendarClock, Gavel, PhoneCall, ShieldCheck } from "lucide-react"

const coreProducts = [
  {
    icon: PhoneCall,
    title: "AI Voice Receptionist",
    description: "Answers every inbound call, qualifies intent, and books consultations without manual callback loops.",
    price: "Starts at $4,997",
    href: "/services/ai-voice-receptionist",
  },
  {
    icon: CalendarClock,
    title: "AI Scheduling + Reminder Engine",
    description: "Automates booking, reminders, reschedules, and no-show recovery across SMS and email.",
    price: "$6,500 - $9,500",
    href: "/services/ai-scheduling-reminder",
  },
  {
    icon: Gavel,
    title: "Legal Intake Automation",
    description: "24/7 intake capture with structured summaries routed directly to legal staff and CRM.",
    price: "$8,500 - $15,000",
    href: "/services/ai-legal-intake",
  },
]

export function PremiumProductsShowcase() {
  return (
    <section className="relative py-16 md:py-24" id="products">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="panel-premium gradient-flow reveal-in overflow-hidden p-5 sm:p-7">
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Productized Systems
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
                SaaS-grade automation products designed to close quickly
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Clear scope, clear pricing anchors, fast build cycles, and measurable operating impact. Built like products, delivered like engineering.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border/70 bg-card/80 p-3">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Core offers</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">3</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card/80 p-3">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Custom projects</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">$10k+</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card/80 p-3">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Avg launch</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">5-9 days</p>
                </div>
              </div>
            </div>

            <div className="panel-premium reveal-in reveal-delay-2 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Flagship Security Product</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Stealth-Mode Internal AI Vault</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Private local AI brain for law firms and clinics. Air-gapped architecture, sensitive-data redaction, and lifetime internal ownership.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-border/70 bg-card/80 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">License</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">$15,000 one-time</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-card/80 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Risk profile</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Zero cloud leakage</p>
                </div>
              </div>

              <a
                href="/stealth-vault"
                className="cta-glow mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:bg-foreground/90"
              >
                View Stealth Vault
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {coreProducts.map((product, idx) => (
              <a
                key={product.title}
                href={product.href}
                className={`lift-card panel-premium reveal-in block p-4 ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12">
                  <product.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{product.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{product.price}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
