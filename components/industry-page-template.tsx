import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"

import { CustomSolutionNote } from "@/components/custom-solution-note"
import { TestimonialCard } from "@/components/testimonial-card"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"
import type { Testimonial } from "@/lib/testimonials"

type IndustryTemplateProps = {
  title: string
  subtitle: string
  painPoints: string[]
  solutionStack: string[]
  outcomes: string[]
  investment: string
  testimonial: Testimonial
}

export function IndustryPageTemplate({
  title,
  subtitle,
  painPoints,
  solutionStack,
  outcomes,
  investment,
  testimonial,
}: IndustryTemplateProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 text-white md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-float absolute left-[-12rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
        <div className="orb-float-slow absolute right-[-10rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link href="/industries" className="inline-flex items-center gap-2 text-sm leading-7 text-white/64 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to industries
        </Link>

        <section className="cinema-section-shell reveal-in mt-6 px-6 py-10 shadow-[0_24px_90px_rgba(3,10,24,0.22)] md:px-8 md:py-12">
          <p className="section-kicker text-[11px] uppercase">Industry systems</p>
          <h1 className="mt-6 text-balance font-heading text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-7xl">
            {title}
          </h1>
          <p className="section-support-copy mt-5 max-w-3xl text-lg leading-8">{subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AuditCtaButton trackingSource="industry_page_cta" className="px-7 py-3 text-sm">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </AuditCtaButton>
            <p className="text-sm leading-7 text-white/64">Limited onboarding capacity. No long-term contracts.</p>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md">
            <p className="text-sm leading-7 text-white/88">
              This is not for early-stage teams experimenting. This is for companies already operating with real data and revenue.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="cinema-card cinema-card-hover float-card-soft rounded-[28px] px-6 py-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">What breaks</p>
            <div className="mt-4 grid gap-3">
              {painPoints.map((item) => (
                <p key={item} className="rounded-[22px] border border-white/10 bg-black/18 px-4 py-4 text-sm leading-7 text-white/78">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="cinema-card cinema-card-hover float-card-soft float-card-delay-1 rounded-[28px] px-6 py-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">System fix</p>
            <div className="mt-4 grid gap-3">
              {solutionStack.map((item) => (
                <div key={item} className="flex gap-3 rounded-[22px] border border-white/10 bg-black/18 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-200" />
                  <p className="text-sm leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="cinema-card cinema-card-hover float-card-soft float-card-delay-2 rounded-[28px] px-6 py-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-200">Outcome</p>
            <div className="mt-4 grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-[22px] border border-white/10 bg-black/18 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-200" />
                  <p className="text-sm leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[22px] border border-white/10 bg-black/18 px-4 py-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-200">Investment range</p>
              <p className="mt-2 text-lg font-semibold text-white">{investment}</p>
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <TestimonialCard testimonial={testimonial} intent="dark" className="shadow-none" />
          <CustomSolutionNote dark compact title="Need a custom industry scope?" />
        </section>

        <section className="cinema-section-shell reveal-in mt-8 px-6 py-12 text-center shadow-[0_24px_90px_rgba(3,10,24,0.2)] md:px-10 md:py-14">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Want to stop demand from leaking?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/64">
            We&apos;ll show exactly where the intake or follow-up path breaks and what to fix first.
          </p>
          <div className="mt-8 flex justify-center">
            <AuditCtaButton trackingSource="industry_page_final_cta" className="px-7 py-3 text-sm">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </AuditCtaButton>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/54">We respond within 24 hours.</p>
        </section>
      </div>
    </main>
  )
}

