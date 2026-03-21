import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, BadgeCheck, CheckCircle2, ShieldCheck } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { UsageControlPricing } from "@/components/usage-control-pricing"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing | Stealth Vault",
  description: "Pricing for Stealth Vault, the AI usage control layer that blocks sensitive data before it reaches AI.",
  alternates: {
    canonical: "/pricing",
  },
}

const pricingReasons = [
  "Start small without opening a blind spot.",
  "Move into broader control only when usage expands.",
  "Keep policy, logs, and enforcement in one layer.",
]

const scopeNotes = [
  "Starter, Growth, and Pro are standard product plans.",
  "Enterprise is quoted when deployment, policy, or coverage is custom.",
  "Annual billing includes 2 months free on Starter, Growth, and Pro.",
]

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0c1726_18%,#eaf2ff_46%,#f8fbff_100%)] pb-20 pt-28 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="rounded-[34px] border border-slate-800 bg-[linear-gradient(180deg,rgba(2,8,23,0.98)_0%,rgba(15,23,42,0.96)_100%)] p-6 shadow-[0_28px_100px_rgba(2,8,23,0.38)] sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Pricing
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Buy control before AI usage becomes a bigger problem.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  The pricing is simple on purpose. Start with the level of control you need now. Expand only when AI usage, systems, or
                  policy requirements expand.
                </p>

                <div className="mt-7 space-y-3">
                  {pricingReasons.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-200" />
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                    <a href="/book">
                      Start Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-white/14 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/proof">
                      View Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="rounded-[34px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f3f7ff_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Pricing note</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Every listed price is a starting point, not a forced final package.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Start with the level of control you need now. If AI usage expands, policy depth expands, or deployment gets more private,
                  the scope expands with it. We quote that clearly before anything moves.
                </p>
                <div className="mt-6 space-y-3">
                  {scopeNotes.map((item) => (
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
            <UsageControlPricing />
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">When to talk to us</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                If AI usage already touches customer data, internal records, or credentials, this is not optional.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                The first question is not whether the team should use AI. The first question is whether the company controls what enters AI in
                the first place. For India teams, final pricing can be shared in INR or USD based on scope, deployment model, support needs,
                and budget comfort. For every region, the listed plans are starting points and the final scope is confirmed together.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
