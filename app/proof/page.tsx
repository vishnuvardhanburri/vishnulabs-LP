import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CircleAlert, ShieldCheck, TerminalSquare } from "lucide-react"

import { ConfidenceRail } from "@/components/confidence-rail"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Proof | VishnuLabs",
  description: "Product proof, demo footage, and runtime evidence from VishnuLabs automation systems.",
  alternates: {
    canonical: "/proof",
  },
}

const proofFeed = [
  "[INFO] Loaded recognizer: SpacyRecognizer",
  "[WARNING] System risk surfaced from local history scan",
  "[INFO] Guardian maintenance: rotating logs and verifying disk health",
  "[CRITICAL] Leak blocked: AWS Token, Secret Key, PII (SSN)",
  "[INFO] Outbound alert throttled because one notification already sent today",
  "[INFO] Liability mitigation bonus applied for incident prevention",
]

const proofSignals = [
  {
    icon: ShieldCheck,
    title: "Product proof",
    body: "Real interface screens that show the system in a way buyers can understand quickly.",
  },
  {
    icon: TerminalSquare,
    title: "Runtime evidence",
    body: "Logs, alerts, and redaction outcomes that make the sales story feel grounded.",
  },
]

export default function ProofPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="hero-shell app-shell-enter px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10" data-reveal>
              <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
                <article className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal style={{ transitionDelay: "30ms" }}>
                  <p className="badge-pill border-white/10 bg-white/5 text-slate-200">Proof</p>
                  <h1 className="mt-4 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-[4rem]">
                    Real demo footage, product screens, and runtime evidence.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Use this page in sales conversations when the buyer needs to see the system, not just hear the pitch.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                      <Link href="/book">
                        Request Demo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10">
                      <Link href="/stealth-vault">
                        Review Vault Offer
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>

                <div className="grid gap-4" data-reveal style={{ transitionDelay: "110ms" }}>
                  {proofSignals.map((item) => {
                    const Icon = item.icon

                    return (
                      <article key={item.title} className="metric-float p-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.14)]">
                            <Icon className="h-5 w-5 text-sky-300" />
                          </div>
                          <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                      </article>
                    )
                  })}

                  <article className="metric-float p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">What buyers see</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {["Demo video", "Compliance proof", "Alert logs"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/80 bg-white/70 px-3 py-3 text-sm font-medium text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConfidenceRail
          eyebrow="Evidence layer"
          title="Proof that feels like a real system, not just polished sales copy."
          subtitle="The strongest proof pages show the interface, the activity, and the operating reality in one place. This section is structured to support that."
        />

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
              <article className="section-shell-dark ambient-grid-dark p-4 sm:p-5" data-reveal>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Loop demo</p>
                    <p className="mt-1 text-sm text-slate-300">Voice + vault interaction from the current build.</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Current asset
                  </span>
                </div>

                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
                  <video
                    className="aspect-video w-full object-cover"
                    src="/marketing/sentinel-shield/demo-whatsapp.mp4"
                    poster="/marketing/sentinel-shield/final_hero_shot.png"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </article>

              <div className="grid gap-6">
                <article className="section-shell hover-rise-strong p-4" data-reveal>
                  <Image
                    src="/marketing/sentinel-shield/compliance_proof.png"
                    alt="Compliance proof screenshot"
                    width={1400}
                    height={900}
                    quality={100}
                    className="h-auto w-full rounded-[22px] border border-slate-200 object-cover"
                  />
                  <p className="mt-4 text-sm font-semibold text-slate-950">Compliance proof snapshot</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Operational logs and review surfaces that support buyer trust.</p>
                </article>

                <article className="section-shell-dark ambient-grid-dark p-5" data-reveal>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Leak-block event log</p>
                      <p className="mt-1 text-sm text-slate-300">Modeled after the runtime evidence shown in the desktop proof.</p>
                    </div>
                    <CircleAlert className="h-5 w-5 text-sky-300" />
                  </div>

                  <div className="mt-4 rounded-[22px] border border-white/10 bg-black/55 p-4 font-mono text-[12px] leading-6 text-slate-200">
                    {proofFeed.map((item) => (
                      <p
                        key={item}
                        className={
                          item.includes("[CRITICAL]")
                            ? "text-sky-300"
                            : item.includes("[WARNING]")
                              ? "text-amber-200"
                              : "text-slate-300"
                        }
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
