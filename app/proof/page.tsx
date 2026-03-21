import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CheckCircle2, CircleAlert, ShieldCheck, TerminalSquare } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Proof | Stealth Vault",
  description: "See blocked requests, runtime logs, and control evidence from Stealth Vault.",
  alternates: {
    canonical: "/proof",
  },
}

const proofFeed = [
  "[INFO] Request intercepted before AI delivery",
  "[WARNING] Sensitive pattern detected in outbound payload",
  "[INFO] Policy match triggered: redact-and-log",
  "[CRITICAL] Request blocked: secret + personal data detected",
  "[INFO] Audit entry written for operator review",
  "[INFO] Alert throttled to prevent duplicate notification noise",
]

const trustSignals = [
  "Blocked before reaching AI",
  "Policy decision recorded",
  "Operator review stays possible after the event",
]

export default function ProofPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#ebf3ff_42%,#f7faff_100%)] pb-16 pt-28 sm:pb-20 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="rounded-[34px] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,8,23,1)_0%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_24px_72px_rgba(2,8,23,0.38)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Proof</p>
                <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  If the product cannot show a blocked request clearly, the promise is weak.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  This page exists for one reason: to show the control layer working before a buyer is asked to trust it.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                    <a href="/book">
                      Book Review
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-white/24 bg-white/12 px-7 text-sm font-semibold text-white hover:bg-white/18 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/pricing">
                      View Pricing
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_18px_46px_rgba(15,23,42,0.10)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What the buyer needs to see</p>
                <div className="mt-5 space-y-3">
                  {trustSignals.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-slate-200 bg-white px-4 py-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <article className="rounded-[34px] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,8,23,1)_0%,rgba(15,23,42,0.98)_100%)] p-4 shadow-[0_24px_72px_rgba(2,8,23,0.38)] sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Live interface</p>
                    <p className="mt-1 text-sm text-slate-300">The control layer in front of AI.</p>
                  </div>
                  <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                    Product proof
                  </span>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-white/10">
                  <Image
                    src="/marketing/sentinel-shield/final_hero_shot.png"
                    alt="Stealth Vault interface"
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </article>

              <div className="grid gap-6">
                <article className="rounded-[34px] border border-red-500/36 bg-[linear-gradient(180deg,rgba(91,18,18,1)_0%,rgba(153,27,27,0.98)_100%)] p-5 shadow-[0_18px_40px_rgba(127,29,29,0.24)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/18 text-red-100">
                      <CircleAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-100">Demo event</p>
                      <p className="mt-1 text-lg font-semibold text-white">Input: “Send client database”</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xl font-semibold text-white">Blocked</p>
                  <p className="mt-2 text-sm leading-7 text-red-50">Sensitive data detected before the request reached AI.</p>
                </article>

                <article className="rounded-[34px] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,8,23,1)_0%,rgba(15,23,42,0.98)_100%)] p-5 shadow-[0_24px_72px_rgba(2,8,23,0.38)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Runtime log</p>
                      <p className="mt-1 text-sm text-slate-300">The control layer writes the decision, not just the alert.</p>
                    </div>
                    <TerminalSquare className="h-5 w-5 text-sky-300" />
                  </div>

                  <div className="mt-4 rounded-[24px] border border-white/10 bg-black/55 p-4 font-mono text-[12px] leading-6 text-slate-200">
                    {proofFeed.map((item) => (
                      <p
                        key={item}
                        className={
                          item.includes("[CRITICAL]")
                            ? "text-red-200"
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
