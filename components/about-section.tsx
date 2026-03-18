import Image from "next/image"
import { ArrowUpRight, CheckCircle2, FileCheck2, Shield, Sparkles, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

const principles = [
  "Deterministic logic and tested workflows, not fragile prompt-only chains",
  "Monitoring + retry strategy included in every production deployment",
  "Documentation and handoff playbook so your team owns operations",
  "Clear scope, timeline, and integration list before implementation starts",
]

const deliverables = [
  {
    icon: Sparkles,
    title: "Founder-Led Delivery",
    description: "You work with the build owner, not a bloated handoff chain between sales and execution.",
  },
  {
    icon: Workflow,
    title: "Architecture Blueprint",
    description: "Flow map, integration paths, fallback logic, and owner roles.",
  },
  {
    icon: FileCheck2,
    title: "Launch SOPs",
    description: "Runbook, issue handling checklist, and escalation protocol.",
  },
  {
    icon: Shield,
    title: "Stability Controls",
    description: "Retries, error handling, and reporting baseline from day one.",
  },
]

const founderSignals = [
  "Direct founder communication from scope to launch",
  "Websites, software, automation, and private AI under one delivery owner",
  "Custom packages available when your workflow needs a fitted build",
]

const founderMetrics = [
  { value: "US / UK / India", label: "Client-facing delivery" },
  { value: "5-7 days", label: "Typical implementation sprint" },
  { value: "$7k-$150k+", label: "Transparent build ranges" },
]

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="section-shell px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-9" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
          <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <div className="relative" data-reveal style={{ transitionDelay: "40ms" }}>
              <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-primary/12 blur-3xl orb-float" />
              <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-sky-300/25 blur-3xl orb-float-slow" />

              <div className="metric-float relative overflow-hidden rounded-[34px] p-3 sm:p-4">
                <div className="soft-chip absolute left-5 top-5 z-10 border-primary/10 text-slate-700">Founder-led delivery</div>
                <div className="relative aspect-[0.92] overflow-hidden rounded-[28px] bg-slate-100">
                  <Image
                    src="/founder-vishnu.jpeg"
                    alt="Vishnu Vardhan Burri, founder of VishnuLabs"
                    fill
                    quality={100}
                    priority={false}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/78 via-slate-950/18 to-transparent p-5 sm:p-6">
                    <div className="rounded-[22px] border border-white/15 bg-slate-950/45 px-4 py-3 backdrop-blur-xl">
                      <p className="text-lg font-semibold text-white">Vishnu Vardhan Burri</p>
                      <p className="mt-1 text-sm text-slate-200">Founder, VishnuLabs</p>
                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                        Leading websites, custom software, AI automation, and private AI builds with direct ownership from discovery through launch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {founderMetrics.map((item, index) => (
                  <div
                    key={item.label}
                    className="metric-float px-4 py-3"
                    data-reveal
                    style={{ transitionDelay: `${90 + index * 70}ms` }}
                  >
                    <p className="text-sm font-semibold text-foreground sm:text-[15px]">{item.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal style={{ transitionDelay: "120ms" }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary/80">Why VishnuLabs</p>
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.85rem]">
                Work directly with the builder responsible for scope, architecture, and launch quality.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                VishnuLabs operates like a compact technical pod, not an agency handoff chain. The same person shaping the scope also owns build
                quality, integration thinking, launch readiness, and the real-world flow your team uses after go-live.
              </p>

              <div className="mt-5 rounded-[28px] border border-primary/10 bg-white/76 p-5 shadow-[0_18px_38px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Founder note</p>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Buyers trust technical delivery when communication stays direct, pricing is transparent early, and the system is built to survive
                  real operations, not just a polished demo.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {founderSignals.map((item) => (
                  <div key={item} className="soft-chip border-primary/10 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-2 text-sm">
                {principles.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-2xl border border-border/35 bg-white/70 px-4 py-3 text-foreground shadow-[0_12px_24px_rgba(15,23,42,0.03)]"
                    data-reveal
                    style={{ transitionDelay: `${180 + index * 55}ms` }}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button size="sm" asChild className="cta-glow gap-2 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900">
                  <a href="/book">
                    Book Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2 rounded-full border-border/60 bg-white/80 px-5 hover:bg-secondary">
                  <a href="mailto:hello@vishnulabs.com?subject=Project%20Scope%20Request">Request Scope Doc</a>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {deliverables.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-white/75 bg-white/78 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] hover-rise-strong"
                    data-reveal
                    style={{ transitionDelay: `${250 + index * 70}ms` }}
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                      <item.icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
