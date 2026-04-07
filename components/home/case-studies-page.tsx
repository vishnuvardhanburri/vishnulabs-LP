"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"
import { SmoothScroll } from "@/components/home/smooth-scroll"
import { flagshipCaseStudies, homepageCaseStudies } from "@/components/home/site-data"

export function CaseStudiesPage() {
  return (
    <>
      <SmoothScroll />

      <div className="relative min-h-screen overflow-hidden bg-[#050816] px-5 pb-24 pt-32 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.1),transparent_18%)]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="orb-float absolute left-[-14rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[150px] mix-blend-screen" />
          <div className="orb-float-slow absolute right-[-10rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-sky-500/12 blur-[150px] mix-blend-screen" />
        </div>

        <header className="fixed inset-x-0 top-0 z-50">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                <img src="/vishnulabs-logo-mark.svg" alt="VishnuLabs" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-white">VishnuLabs</p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">Case studies</p>
              </div>
            </Link>

            <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" className="hidden md:inline-flex" captureAudit trackingSource="case_studies_page_cta">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1200px]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[40px] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-sm leading-6 text-white/54 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to homepage
            </Link>
            <p className="mt-8 inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
              Case studies
            </p>
            <h1 className="mt-6 max-w-[13ch] text-balance font-heading text-[44px] font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-[58px] xl:text-[64px]">
              Proof that we fix the systems behind revenue.
            </h1>
            <p className="mt-5 max-w-3xl text-[18px] leading-8 text-white/82">
              These flagship case studies show how better intake, faster response, and cleaner follow-up lead to stronger conversion outcomes.
            </p>
          </motion.section>

          <div className="mt-8 grid gap-8">
            {flagshipCaseStudies.map((study, index) => {
              const support = homepageCaseStudies.find((item) => item.slug === study.slug)

              return (
                <motion.section
                  key={study.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.95, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[40px] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10"
                >
                  <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
                    <div>
                      <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                        {study.context}
                      </p>
                      <h2 className="mt-6 max-w-[12ch] text-balance font-heading text-[34px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:max-w-[13ch] md:text-[44px] xl:text-[48px]">
                        {study.title}
                      </h2>
                      <p className="mt-5 max-w-[56ch] text-[16px] leading-8 text-white/78">{study.problem}</p>

                      <div className="float-card-soft mt-6 rounded-[28px] border border-white/10 bg-black/18 p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-black/24">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/62">System</p>
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
                      <div className="float-card-soft rounded-[32px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.025))] p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_100px_rgba(34,211,238,0.12)]">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/76">Result</p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                          {study.results.map((item) => (
                            <div key={item} className="rounded-[24px] border border-white/10 bg-black/18 p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-black/24 md:min-h-[132px]">
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

                      <div className="float-card-soft rounded-[32px] border border-white/10 bg-black/18 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-black/24">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/62">System flow</p>
                        <div className="mt-5 grid gap-3 md:grid-cols-5">
                          {(support?.flow ?? []).map((step) => (
                            <div key={step} className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-[14px] leading-6 text-white/82 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]">
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="float-card-soft rounded-[28px] border border-red-400/12 bg-red-500/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-red-500/[0.06]">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-red-200/76">Before</p>
                          <div className="mt-4 grid gap-3">
                            {(support?.before ?? []).map((item) => (
                              <p key={item} className="text-[15px] leading-7 text-white/80">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="float-card-soft float-card-delay-1 rounded-[28px] border border-cyan-300/14 bg-cyan-400/[0.05] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-cyan-400/[0.07]">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/76">After</p>
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
                </motion.section>
              )
            })}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-[40px] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10"
          >
            <h2 className="font-heading text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
              Want to see where your system is breaking?
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/82">
              We&apos;ll show exactly where demand is leaking, where response slows down, and what to fix first.
            </p>
            <div className="mt-8">
              <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" captureAudit trackingSource="case_studies_page_final_cta">
                Get Free System Audit
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <p className="mt-3 text-sm leading-7 text-white/74">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
            </div>
          </motion.section>
        </main>
      </div>
    </>
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
