import { ArrowRight, Play, ShieldCheck, Workflow } from "lucide-react"

import { AppLink } from "@/components/app-link"

function HeroVisualFallback() {
  return (
    <div className="absolute inset-0">
      <div className="hero-mesh absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(59,130,246,0.28),transparent_20%),radial-gradient(circle_at_72%_22%,rgba(217,70,239,0.22),transparent_22%),radial-gradient(circle_at_52%_82%,rgba(168,85,247,0.18),transparent_30%)]" />
      <div className="orb-float absolute left-[14%] top-[18%] h-24 w-24 rounded-full border border-sky-300/30 bg-sky-400/10 blur-[1px]" />
      <div className="orb-float-slow absolute right-[18%] top-[28%] h-32 w-32 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10" />
      <div className="orb-float absolute bottom-[20%] left-[28%] h-20 w-20 rounded-[1.5rem] border border-violet-300/20 bg-violet-400/10 [animation-delay:1.4s]" />
      <div className="hero-particle orb-float absolute left-[22%] top-[58%] h-2.5 w-2.5 opacity-80 [animation-delay:0.8s]" />
      <div className="hero-particle orb-float-slow absolute right-[24%] top-[22%] h-3 w-3 opacity-70 [animation-delay:1.8s]" />
      <div className="hero-particle orb-float absolute bottom-[30%] right-[34%] h-2 w-2 opacity-60 [animation-delay:2.4s]" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col rounded-[2rem] border border-white/12 bg-white/[0.05] px-5 py-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-10">
        <div className="grid flex-1 items-center gap-12 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-8">
          <div className="relative z-10 max-w-3xl">
            <div className="reveal-in inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Backend Stabilization
            </div>

            <h1 className="reveal-in reveal-delay-1 mt-8 max-w-4xl text-balance font-sans text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.25rem] lg:text-[5.5rem]">
              Backend Systems,
              <span className="block bg-[linear-gradient(90deg,#e879f9_0%,#60a5fa_48%,#c084fc_100%)] bg-clip-text text-transparent">
                Workflow Reliability
              </span>
            </h1>

            <p className="reveal-in reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Fix broken workflows, stabilize brittle automations, and rebuild the systems that revenue depends on.
            </p>

            <div className="reveal-in reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <AppLink
                href="/book"
                className="glow-button group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(56,189,248,0.2)]"
              >
                Book System Review
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </AppLink>
              <a
                href="#system-flow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                <Play className="h-4 w-4" />
                View System Flow
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Failure mode", value: "Dropped handoffs" },
                  { label: "Priority", value: "Reliable execution" },
                  { label: "Fit", value: "Revenue-critical ops" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`reveal-in rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 hover:bg-white/[0.06] ${
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
            className="reveal-in reveal-delay-3 relative h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_40px_120px_rgba(0,0,0,0.45)] sm:h-[34rem] lg:h-[40rem]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.15),transparent_24%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.16),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <HeroVisualFallback />

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
