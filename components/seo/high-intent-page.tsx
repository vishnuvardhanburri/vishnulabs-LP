import { ArrowUpRight, CheckCircle2 } from "lucide-react"

import { AppLink } from "@/components/app-link"

type InternalLink = {
  label: string
  href: string
}

type CaseStudyMetric = {
  value: string
  label: string
}

type HighIntentPageProps = {
  eyebrow: string
  title: string
  intro: string
  problem: string
  whyItHappens: string[]
  systemSolution: string[]
  caseStudyTitle: string
  caseStudyContext: string
  caseStudySummary: string
  caseStudyMetrics: CaseStudyMetric[]
  ctaTitle?: string
  ctaBody?: string
  primaryLinkHref?: string
  primaryLinkLabel?: string
  supportingLink?: InternalLink
  internalLinks?: InternalLink[]
}

export function HighIntentPage({
  eyebrow,
  title,
  intro,
  problem,
  whyItHappens,
  systemSolution,
  caseStudyTitle,
  caseStudyContext,
  caseStudySummary,
  caseStudyMetrics,
  ctaTitle = "Get Free System Audit",
  ctaBody = "We’ll show exactly what’s broken in 15 minutes.",
  primaryLinkHref = "/book",
  primaryLinkLabel = "Get Free System Audit",
  supportingLink,
  internalLinks = [],
}: HighIntentPageProps) {
  return (
    <main className="relative overflow-hidden bg-zinc-950 px-5 py-16 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10rem] top-[-6rem] h-[20rem] w-[20rem] rounded-full bg-sky-500/10 blur-[140px] mix-blend-screen" />
        <div className="absolute right-[-8rem] top-[18rem] h-[18rem] w-[18rem] rounded-full bg-fuchsia-500/10 blur-[140px] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.36)] backdrop-blur-xl md:p-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-sky-200">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AppLink
              href={primaryLinkHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(186,230,253,0.92))] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(56,189,248,0.2)] transition-transform duration-300 hover:scale-[1.03]"
            >
              {primaryLinkLabel}
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
            {supportingLink ? (
              <AppLink
                href={supportingLink.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                {supportingLink.label}
              </AppLink>
            ) : null}
          </div>
          <p className="mt-4 text-sm text-zinc-500">{ctaBody}</p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Problem</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">What’s broken</h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">{problem}</p>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Why it happens</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Why teams miss it</h2>
            <div className="mt-5 grid gap-3">
              {whyItHappens.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-200" />
                  <p className="text-sm leading-7 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">System solution</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">What the system does</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {systemSolution.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-sky-300/16 bg-white/[0.04] p-7 shadow-[0_20px_80px_rgba(56,189,248,0.08)] backdrop-blur-xl md:p-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-sky-200">Case study</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">{caseStudyTitle}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-zinc-500">{caseStudyContext}</p>
              <p className="mt-4 text-base leading-8 text-zinc-300">{caseStudySummary}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:w-[28rem] lg:grid-cols-1">
              {caseStudyMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <p className="bg-[linear-gradient(90deg,#ffffff_0%,#c4b5fd_38%,#7dd3fc_100%)] bg-clip-text text-3xl font-semibold tracking-[-0.06em] text-transparent">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {internalLinks.length ? (
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Keep reading</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {internalLinks.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  {link.label}
                </AppLink>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">Get Free System Audit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-300">{ctaBody}</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <AppLink
              href={primaryLinkHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(186,230,253,0.92))] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(56,189,248,0.2)] transition-transform duration-300 hover:scale-[1.03]"
            >
              {ctaTitle}
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
            {supportingLink ? (
              <AppLink
                href={supportingLink.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                {supportingLink.label}
              </AppLink>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  )
}
