import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing | VishnuLabs",
  description: "Pricing overview for the Stealth Vault and done-for-you automation builds.",
  alternates: {
    canonical: "/pricing",
  },
}

const vaultBullets = [
  "Air-gapped and local deployment",
  "PII and secret redaction before AI processing",
  "Offline secure search across internal files",
  "Lifetime updates every 6 months",
  "One month of post-delivery support included",
]

const customBullets = [
  "AI voice reception",
  "Lead qualification and intake flows",
  "Scheduling and reminder automation",
  "Reporting, alerts, and admin handoff",
]

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <article className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-white/10 bg-white/5 text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
                  Pricing anchor
                </div>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">$15,000 one-time lifetime vault license</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  The flagship offer combines private AI search, redaction, offline retrieval, risk blocking, and a clear operational story
                  for security-sensitive teams.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {vaultBullets.map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-400">
                    <Link href="/stealth-vault">
                      View Offer Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10">
                    <Link href="/book">Book Buying Call</Link>
                  </Button>
                </div>
              </article>

              <article className="section-shell p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-slate-200 bg-slate-950 text-white">Custom systems</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Done-for-you automation builds starting at $4,997</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Voice, intake, reminders, reporting, and workflow automation packages are scoped around business impact and operational
                  complexity.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {customBullets.map((item) => (
                    <div key={item} className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Build focus", value: "Conversion" },
                    { label: "Delivery style", value: "Systemized" },
                    { label: "Ops fit", value: "Custom-scoped" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white hover:bg-slate-900">
                    <Link href="/book">
                      Request Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                    <Link href="/automations">Compare Automations</Link>
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What is included in every deployment</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  "Discovery and architecture alignment",
                  "QA checklist and go-live validation",
                  "Admin handoff plus post-launch support",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-slate-200 bg-white p-5 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
