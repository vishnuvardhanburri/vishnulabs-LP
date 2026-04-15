import { ArrowRight, ShieldCheck, Workflow } from "lucide-react"

import { AppLink } from "@/components/app-link"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { HeroSplineVisual } from "@/components/landing/hero-spline-visual"

function HeroVisualFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-cinema-glow absolute inset-0" />
      <div className="hero-cinema-grid absolute inset-0" />
      <div className="hero-cinema-rings absolute inset-[12%_8%_18%_10%] rounded-[2.2rem]" />
      <div className="hero-light-trail hero-light-trail-a absolute left-[8%] top-[18%] h-px w-[46%]" />
      <div className="hero-light-trail hero-light-trail-b absolute right-[10%] top-[36%] h-px w-[38%]" />
      <div className="hero-light-trail hero-light-trail-c absolute left-[24%] bottom-[24%] h-px w-[34%]" />

      <div className="hero-node hero-node-a absolute left-[18%] top-[24%] h-24 w-24 rounded-full" />
      <div className="hero-node hero-node-b absolute right-[18%] top-[26%] h-36 w-36 rounded-full" />
      <div className="hero-node hero-node-c absolute bottom-[20%] left-[32%] h-24 w-24 rounded-[1.8rem]" />
      <div className="hero-node hero-node-d absolute bottom-[18%] right-[20%] h-20 w-20 rounded-[1.3rem]" />

      <div className="hero-particle orb-float absolute left-[24%] top-[54%] h-2.5 w-2.5 opacity-80 [animation-delay:0.8s]" />
      <div className="hero-particle orb-float-slow absolute right-[26%] top-[22%] h-3 w-3 opacity-70 [animation-delay:1.8s]" />
      <div className="hero-particle orb-float absolute bottom-[28%] right-[36%] h-2 w-2 opacity-60 [animation-delay:2.4s]" />

      <div className="hero-float-panel hero-float-panel-a absolute left-[10%] top-[14%] rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-300">Monitoring</p>
        <p className="mt-2 text-sm font-medium text-zinc-100">Live system visibility</p>
      </div>
      <div className="hero-float-panel hero-float-panel-b absolute right-[9%] top-[16%] rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-300">Protection</p>
        <p className="mt-2 text-sm font-medium text-zinc-100">Broken paths isolated</p>
      </div>
      <div className="hero-float-panel hero-float-panel-c absolute left-[14%] bottom-[14%] rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-300">Routing</p>
        <p className="mt-2 text-sm font-medium text-zinc-100">Demand reaches the right team</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
      <div className="hero-shell-cinematic mx-auto flex min-h-[88vh] max-w-7xl flex-col rounded-[2.4rem] border border-white/12 bg-white/[0.05] px-5 py-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-10">
        <div className="grid flex-1 items-center gap-12 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-8">
          <div className="relative z-10 max-w-3xl">
            <div className="reveal-in inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Mission-critical infrastructure
            </div>

            <h1 className="reveal-in reveal-delay-1 mt-8 max-w-4xl text-balance font-sans text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.05rem] lg:text-[5.1rem]">
              If your system handles leads or data,
              <span className="block bg-[linear-gradient(90deg,#e879f9_0%,#60a5fa_48%,#c084fc_100%)] bg-clip-text text-transparent">
                failure is already happening.
              </span>
            </h1>

            <p className="reveal-in reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
              Missed follow-ups. Lost clients. Data exposure.
            </p>

            <div className="reveal-in reveal-delay-2 mt-6 max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md">
              <p className="text-sm leading-7 text-white/88">
                This is not for early-stage teams experimenting. This is for companies already operating with real data and revenue.
              </p>
            </div>

            <div className="reveal-in reveal-delay-2 mt-8 max-w-2xl rounded-[1.7rem] border border-white/10 bg-white/[0.035] px-5 py-5 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-300">What changes</p>
              <p className="mt-3 text-base leading-8 text-zinc-100">Fewer lost leads. Cleaner execution. No blind spots.</p>
            </div>

            <div className="reveal-in reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <AuditCtaButton trackingSource="home_hero_cta" className="px-6 py-3 text-sm">
                Get Free System Audit
                <ArrowRight className="h-4 w-4" />
              </AuditCtaButton>
              <a
                href="#system-flow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                View System Flow
              </a>
            </div>

            <div className="reveal-in reveal-delay-3 mt-4 max-w-2xl rounded-[1.4rem] border border-cyan-300/14 bg-cyan-400/[0.06] px-5 py-4 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">New product</p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-white/84">
                  AI Sales Brain gives teams private outbound infrastructure with owned sending pods, AI agents, and deliverability control.
                </p>
                <AppLink
                  href="/products/ai-sales-brain"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white"
                >
                  Explore product
                  <ArrowRight className="h-4 w-4" />
                </AppLink>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Failure mode", value: "Dropped handoffs" },
                  { label: "Priority", value: "Reliable execution" },
                  { label: "Fit", value: "Revenue-critical ops" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`reveal-in hero-insight-card rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 hover:bg-white/[0.06] ${
                      index === 0 ? "reveal-delay-2 float-card-soft" : index === 1 ? "reveal-delay-3 float-card-soft float-card-delay-1" : "reveal-delay-3 float-card-soft float-card-delay-2"
                    }`}
                  >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-200">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal-in reveal-delay-3 relative h-[28rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_40px_120px_rgba(0,0,0,0.45)] sm:h-[34rem] lg:h-[40rem]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,28,0.18),rgba(10,14,28,0.5),rgba(10,14,28,0.78))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <HeroSplineVisual />
            <div className="absolute inset-0 opacity-70 lg:opacity-45">
              <HeroVisualFallback />
            </div>

            <div className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between rounded-[1.3rem] border border-white/10 bg-black/28 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-300">Control layer</p>
                <p className="mt-1 text-sm text-zinc-100">Validation, routing, monitoring</p>
              </div>
              <div className="hero-status-pill rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-100">
                Stable
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/12 bg-black/45 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">Operating model</p>
                  <p className="mt-1 text-sm text-zinc-100">Input control, validation, orchestration, clean outputs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
