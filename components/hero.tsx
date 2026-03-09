import { ArrowUpRight, Calendar, CheckCircle2, Dot, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroPoints = [
  "Answers inbound calls in under 2 seconds",
  "Qualifies leads and books consultations automatically",
  "Runs reminders and reschedules to reduce no-shows by 30-40%",
]

const kpis = [
  { label: "Go-live window", value: "5-7 days" },
  { label: "Starter build", value: "$4,997+" },
  { label: "Lead coverage", value: "24/7" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 md:pb-28 md:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-[340px] w-[340px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/18 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12 lg:px-10">
        <div className="reveal-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/65 bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Enterprise-grade automation systems for US SMB teams
          </div>

          <a
            href="/stealth-vault"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/15"
          >
            New: Private AI Vault - No Leaks
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-6 max-w-3xl text-balance text-[2.1rem] font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            We build AI systems that
            <br />
            <span className="hero-accent">capture, qualify, and convert leads</span>
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            VishnuLabs architects production-ready AI workflows for inbound calls, scheduling, legal intake, and follow-up so your team can
            scale revenue operations without adding manual headcount.
          </p>

          <ul className="mt-6 flex max-w-2xl flex-col gap-2.5">
            {heroPoints.map((point, idx) => (
              <li key={point} className={`flex items-start gap-2.5 text-sm text-muted-foreground md:text-[15px] ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              asChild
              className="cta-glow w-full gap-2 rounded-full bg-foreground px-8 py-6 text-base text-background hover:bg-foreground/90 sm:w-auto"
            >
              <a href="/book" data-track="hero_book_meeting">
                <Calendar className="h-4 w-4" />
                Book Live Demo
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full gap-2 rounded-full border-border/70 px-8 py-6 text-base font-medium hover:bg-secondary sm:w-auto"
            >
              <a href="#products" data-track="hero_view_products">
                Explore Products
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-3 gap-2 border-t border-border/60 pt-6 text-center sm:gap-4 sm:text-left">
            {kpis.map((item) => (
              <div key={item.label} className="rounded-xl border border-border/60 bg-card/75 px-2 py-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
                <p className="text-xl font-semibold text-foreground sm:text-2xl">{item.value}</p>
                <p className="text-[11px] text-muted-foreground sm:text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-premium gradient-flow reveal-in reveal-delay-1 relative overflow-hidden p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Operations Snapshot</p>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
              <Dot className="h-3.5 w-3.5 pulse-glow" />
              Live system
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-border/70 bg-background/92 shadow-[0_14px_32px_rgba(15,23,42,0.12)]">
            <video
              className="aspect-video w-full object-contain bg-background/95"
              src="/videos/vishnulabs-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              style={{ objectPosition: "center top" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-card/80 p-3">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Primary offer</p>
              <p className="mt-1 text-sm font-semibold text-foreground">AI Voice Receptionist</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/80 p-3">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Flagship security</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Stealth-Mode AI Vault</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/80 p-3">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Automation speed</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Under 2s response</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-card/80 p-3">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Deployment scope</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Build, QA, monitoring</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-border/70 bg-background/95 p-3 shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Transparent delivery</p>
            <p className="mt-1 text-sm text-foreground">
              Deterministic workflows, retries, observability, and documentation handoff included in every implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
