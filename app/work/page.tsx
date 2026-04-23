import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import { AppLink } from "@/components/app-link"

export const metadata: Metadata = {
  title: "Work | Xavira Tech Labs",
  description: "Production-grade systems work with architecture, outcomes, and scalability.",
  alternates: {
    canonical: "/work",
  },
}

const workFocus = [
  {
    title: "System architecture",
    detail: "Backend-first design with clear boundaries, contracts, and operational ownership.",
  },
  {
    title: "Outcomes",
    detail: "Reliability gains, reduced operational load, and execution quality that teams can sustain.",
  },
  {
    title: "Performance and scalability",
    detail: "Measured throughput, predictable latency, and resilient behavior under edge cases.",
  },
] as const

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_22%,#edf4ff_48%,#f8fbff_100%)] pb-16 pt-28 sm:pt-32">
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <article className="dark-panel-solid p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Work</p>
            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Production systems, engineered to hold.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              We focus on architecture, reliability, and scalability — the parts that decide whether software survives real usage.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {workFocus.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/12 bg-white/[0.04] p-6 text-white">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AuditCtaButton trackingSource="work_cta" className="h-12 px-7 text-sm sm:h-14 sm:px-8 sm:text-base">
                Request Consultation
              </AuditCtaButton>
              <AppLink
                href="/case-studies"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:h-14 sm:px-8 sm:text-base"
              >
                View case studies
                <ArrowUpRight className="h-4 w-4" />
              </AppLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

