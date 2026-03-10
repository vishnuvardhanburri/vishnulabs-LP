import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CircleAlert } from "lucide-react"

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

export default function ProofPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-200">Proof</p>
              <h1 className="mt-3 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-[4rem]">
                Real demo footage, product screens, and runtime evidence.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Use this page in sales conversations when the buyer needs to see the system, not just hear the pitch.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-full bg-orange-500 px-7 text-sm font-semibold text-white hover:bg-orange-400">
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
            </div>
          </div>
        </section>

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
                  <img
                    src="/marketing/sentinel-shield/compliance_proof.png"
                    alt="Compliance proof screenshot"
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
                    <CircleAlert className="h-5 w-5 text-orange-400" />
                  </div>

                  <div className="mt-4 rounded-[22px] border border-white/10 bg-black/55 p-4 font-mono text-[12px] leading-6 text-slate-200">
                    {proofFeed.map((item) => (
                      <p key={item} className={item.includes("[CRITICAL]") ? "text-orange-300" : item.includes("[WARNING]") ? "text-amber-200" : "text-slate-300"}>
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
