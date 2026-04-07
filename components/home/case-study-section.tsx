"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"
import { homepageCaseStudies } from "@/components/home/site-data"

const sectionReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardReveal = {
  hidden: { opacity: 0, y: 42, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-case-card]")

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.5, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            delay: index * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="case-studies" ref={sectionRef} className="px-5 pb-24 pt-6">
      <div className="mx-auto max-w-[1200px] rounded-[40px] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            Case studies
          </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
            Proof that the right fixes lead to more booked calls.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
            These systems were already generating demand. They were losing it in execution.
          </p>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 xl:grid-cols-3"
        >
          {homepageCaseStudies.map((study) => (
            <motion.article
              key={study.slug}
              data-case-card
              variants={cardReveal}
              whileHover={{ y: -8, scale: 1.0125 }}
              transition={{ duration: 0.32, ease: [0.2, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_90px_rgba(3,10,24,0.3)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[34px] border border-cyan-300/24 shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_80px_rgba(34,211,238,0.14)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_30%)]" />
              </div>

              <div className="relative">
                <p className="text-center text-[11px] uppercase tracking-[0.28em] text-cyan-200/70">{study.eyebrow}</p>
                <div className="mt-5 rounded-[28px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(255,255,255,0.02))] px-5 py-6 text-center shadow-[0_0_60px_rgba(34,211,238,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/76">Result</p>
                  <div className="mt-4 flex justify-center">
                    <ResultCounter result={study.result} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/54">{study.timeframe}</p>
                  <p className="mt-3 text-sm leading-6 text-white/48">{study.microProof}</p>
                </div>

                <div className="mt-5 rounded-[24px] border border-white/8 bg-black/18 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/38">Problem</p>
                  <p className="mt-3 text-[15px] leading-7 text-white/62">{study.problem}</p>
                </div>

                <div className="mt-4 rounded-[24px] border border-white/8 bg-black/18 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/38">Fix</p>
                  <p className="mt-3 text-[15px] leading-7 text-white/62">{study.fix}</p>
                </div>

                <p className="mt-4 text-center text-sm leading-6 text-white/46">{study.summary}</p>

                <Link
                  href="/case-studies"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-white"
                >
                  View full case study breakdown
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" captureAudit trackingSource="case_studies_cta">
            Get Free System Audit
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <p className="mt-3 text-sm leading-7 text-white/54">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
          <p className="mt-1 text-sm leading-7 text-white/48">No long-term contracts. Start with a single audit.</p>
        </motion.div>
      </div>
    </section>
  )
}

function ResultCounter({ result }: { result: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.65 })
  const parsed = useMemo(() => parseResult(result), [result])
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 1400
    const start = performance.now()

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = parsed.value * eased
      setDisplay(Number(value.toFixed(parsed.decimals)))
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [inView, parsed.decimals, parsed.value])

  return (
    <div ref={ref}>
      <p className="font-heading text-[72px] font-semibold leading-[0.82] tracking-[-0.06em] text-white drop-shadow-[0_0_24px_rgba(165,243,252,0.18)] md:text-[92px]">
        <span className="text-cyan-200">{parsed.prefix}</span>
        {display.toFixed(parsed.decimals)}
        <span className="text-cyan-200">{parsed.suffix}</span>
      </p>
      <p className="mt-2 text-[15px] leading-6 text-white/72">{parsed.label}</p>
    </div>
  )
}

function parseResult(result: string) {
  const match = result.match(/^([+-]?)(\d+(?:\.\d+)?)([%x]?)(?:\s+)(.+)$/)

  if (!match) {
    return {
      prefix: "",
      value: 0,
      suffix: "",
      label: result,
      decimals: 0,
    }
  }

  const [, prefix, value, suffix, label] = match
  const decimals = value.includes(".") ? 1 : 0

  return {
    prefix,
    value: Number(value),
    suffix,
    label,
    decimals,
  }
}
