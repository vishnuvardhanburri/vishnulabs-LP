"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { flagshipCaseStudies, homepageCaseStudies } from "@/components/home/site-data"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export function CaseStudiesPage() {
  return (
      <div className="relative min-h-screen overflow-hidden bg-[#050816] px-5 pb-24 pt-32 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.1),transparent_18%)]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="orb-float absolute left-[-14rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
          <div className="orb-float-slow absolute right-[-10rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
        </div>

        <main className="relative z-10 mx-auto max-w-[1200px]">
          <section className="cinema-section-shell reveal-in px-6 py-8 md:px-8 md:py-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm leading-6 text-white/54 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to homepage
            </Link>
            <p className="section-kicker mt-8 inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase">
              Case studies
            </p>
            <h1 className="mt-6 max-w-[13ch] text-balance font-heading text-[44px] font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-[58px] xl:text-[64px]">
              Proof that we fix the systems behind revenue.
            </h1>
            <p className="section-support-copy mt-5 max-w-3xl text-[18px] leading-8">
              These flagship case studies show how better intake, faster response, and cleaner follow-up lead to stronger conversion outcomes.
            </p>
            <div className="mt-8">
              <AuditCtaButton trackingSource="case_studies_page_cta">
                Get Free System Audit
                <ArrowUpRight className="h-4 w-4" />
              </AuditCtaButton>
            </div>
          </section>

          <div className="mt-8 grid gap-8">
            {flagshipCaseStudies.map((study, index) => {
              const support = homepageCaseStudies.find((item) => item.slug === study.slug)

              return (
                <section
                  key={study.slug}
                  className="cinema-section-shell reveal-in px-6 py-8 md:px-8 md:py-10"
                >
                  <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
                    <div>
                      <p className="section-kicker inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase">
                        {study.context}
                      </p>
                      <h2 className="mt-6 max-w-[12ch] text-balance font-heading text-[34px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:max-w-[13ch] md:text-[44px] xl:text-[48px]">
                        {study.title}
                      </h2>
                      <p className="mt-5 max-w-[56ch] text-[16px] leading-8 text-white/78">{study.problem}</p>

                      <div className="cinema-card cinema-card-hover float-card-soft mt-6 rounded-[28px] bg-black/18 p-5">
                        <p className="section-kicker text-[11px] uppercase">System</p>
                        <div className="mt-4 grid gap-3">
                          {study.system.map((item) => (
                            <p key={item} className="text-[15px] leading-7 text-white/84">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <div className="cinema-card cinema-card-hover float-card-soft rounded-[32px] border-cyan-300/14 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.025))] p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] hover:shadow-[0_0_100px_rgba(34,211,238,0.12)]">
                        <p className="section-kicker text-[11px] uppercase">Result</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                          {study.results.map((item) => (
                            <div key={item} className="cinema-card rounded-[24px] bg-black/18 p-4 md:min-h-[132px]">
                              <CaseStudyMetric metric={item} />
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm leading-6 text-white/72">
                          <span>{study.timeframe}</span>
                          <span className="h-1 w-1 rounded-full bg-white/24" />
                          <span>{study.microProof}</span>
                        </div>
                      </div>

                      <div className="cinema-card cinema-card-hover float-card-soft rounded-[32px] bg-black/18 p-6">
                        <p className="section-kicker text-[11px] uppercase">System flow</p>
                        <div className="mt-5 grid gap-3 md:grid-cols-5">
                          {(support?.flow ?? []).map((step) => (
                            <div key={step} className="cinema-card rounded-[22px] px-4 py-4 text-[14px] leading-6 text-white/82">
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="cinema-card cinema-card-hover float-card-soft rounded-[28px] border-red-400/12 bg-red-500/[0.04] p-5">
                          <p className="section-kicker text-[11px] uppercase text-red-200/76">Before</p>
                          <div className="mt-4 grid gap-3">
                            {(support?.before ?? []).map((item) => (
                              <p key={item} className="text-[15px] leading-7 text-white/80">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="cinema-card cinema-card-hover float-card-soft float-card-delay-1 rounded-[28px] border-cyan-300/14 bg-cyan-400/[0.05] p-5">
                          <p className="section-kicker text-[11px] uppercase text-cyan-200/76">After</p>
                          <div className="mt-4 grid gap-3">
                            {(support?.after ?? []).map((item) => (
                              <p key={item} className="text-[15px] leading-7 text-white/84">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })}
          </div>

          <section className="cinema-section-shell reveal-in mt-8 px-6 py-8 md:px-8 md:py-10">
            <h2 className="font-heading text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
              Want to see where your system is breaking?
            </h2>
            <p className="section-support-copy mt-5 max-w-2xl text-[17px] leading-8">
              We&apos;ll show exactly where demand is leaking, where response slows down, and what to fix first.
            </p>
            <div className="mt-8">
              <AuditCtaButton trackingSource="case_studies_page_final_cta">
                Get Free System Audit
                <ArrowUpRight className="h-4 w-4" />
              </AuditCtaButton>
              <p className="mt-3 text-sm leading-7 text-white/74">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
            </div>
          </section>
        </main>
      </div>
  )
}

function CaseStudyMetric({ metric }: { metric: string }) {
  const match = metric.match(/^([+-]?\d+(?:\.\d+)?x?|[+-]?\d+%)(?:\s+)(.+)$/i)

  if (!match) {
    return <p className="font-heading text-[26px] font-semibold leading-tight text-white">{metric}</p>
  }

  const [, value, label] = match

  return (
    <div className="flex h-full flex-col justify-between">
      <p className="font-heading text-[30px] font-semibold leading-[0.95] tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-4 max-w-[10ch] text-balance text-[15px] font-medium leading-7 text-white/84">{label}</p>
    </div>
  )
}
