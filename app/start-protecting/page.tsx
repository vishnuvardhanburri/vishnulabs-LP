import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Start Protecting Your Data | Stealth Vault",
  description: "Stealth Vault blocks sensitive data before it reaches AI. Built for teams that cannot afford silent leaks.",
  alternates: {
    canonical: "/start-protecting",
  },
}

const painPoints = [
  "Customer data leaks into AI chats.",
  "Internal documents get pasted without review.",
  "API keys and credentials travel without control.",
  "No one can see what was sent until it is too late.",
]

const trustPoints = [
  "Prevents leaks before they happen",
  "Security-first by default",
  "Built for teams that need control, not guesswork",
]

export default function StartProtectingPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#050c17_0%,#091425_36%,#0d1725_100%)] pb-16 pt-16">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_32px_120px_rgba(2,8,23,0.4)] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">AI Usage Control Layer</p>
            <h1 className="mt-5 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Your employees are leaking data into AI. You just do not see it.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Stealth Vault blocks sensitive data before it leaves your system.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                <a href="/book">
                  Get Instant Protection
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((item) => (
              <div key={item} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[26px] border border-red-400/20 bg-red-500/10 px-5 py-4">
            <p className="text-lg font-semibold text-white">One leak is enough.</p>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[34px] border border-white/10 bg-white/95 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Simple flow</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-4">
              {["User", "Scan", "Block", "Safe Output"].map((item) => (
                <div key={item} className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-5 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[34px] border border-white/10 bg-white/95 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Demo</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
              <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-4">
                <Image
                  src="/marketing/sentinel-shield/final_hero_shot.png"
                  alt="Stealth Vault demo interface"
                  width={1600}
                  height={1000}
                  className="h-auto w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="rounded-[28px] border border-red-400/20 bg-red-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-200">Blocked before reaching AI</p>
                <p className="mt-4 text-lg font-semibold text-white">Input: “Send client database”</p>
                <p className="mt-3 text-lg font-semibold text-red-200">Output: Blocked</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">Reason: Sensitive data detected and stopped before the request left the system.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
                <CheckCircle2 className="h-5 w-5 text-sky-200" />
                <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 text-center shadow-[0_28px_100px_rgba(2,8,23,0.36)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Pricing snapshot</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Starts at $149/month.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">Protect your data before it becomes a visible incident.</p>
            <div className="mt-7 flex justify-center">
              <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                <a href="/book">
                  Start Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
