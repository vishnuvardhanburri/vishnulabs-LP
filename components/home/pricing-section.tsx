"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"

const plans = [
  {
    name: "Starter",
    price: "$4,000",
    term: "/ month",
    hours: "40 hours",
    audience: "For small systems, fixes, and early-stage setups.",
    outcome: "Get the core system stable fast so leads stop leaking through broken handoffs.",
  },
  {
    name: "Growth",
    price: "$8,000",
    term: "/ month",
    hours: "80 hours",
    audience: "For full lead pipelines and growing systems.",
    outcome: "Build the full path from first contact to booked call with faster follow-up and fewer missed leads.",
    featured: true,
  },
  {
    name: "Scale",
    price: "$12,000",
    term: "/ month",
    hours: "120 hours",
    audience: "For ongoing system ownership and complex workflows.",
    outcome: "Move faster with senior implementation support across the systems your revenue depends on most.",
  },
]

const bullets = [
  "System design + implementation",
  "Checks that stop bad leads and missed steps",
  "Ongoing improvements",
]

const sectionReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardReveal = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-pricing-card]")

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.45, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="px-5 pb-24">
      <div className="cinema-section-shell mx-auto max-w-[1200px] px-6 py-8 md:px-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="section-kicker inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase">
            Pricing
          </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
            Flexible Engineering Retainers
          </h2>
          <p className="section-support-copy mt-5 max-w-2xl text-[17px] leading-8">
            Partner with us to build and fix revenue-critical systems.
          </p>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-5 xl:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              data-pricing-card
              variants={cardReveal}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.32, ease: [0.2, 1, 0.3, 1] }}
              className={`cinema-card cinema-card-hover group rounded-[34px] p-6 ${
                plan.featured
                  ? "xl:-my-3 xl:px-7 xl:py-9 border-cyan-300/30 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(255,255,255,0.04))] shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_90px_rgba(34,211,238,0.16)]"
                  : "bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] shadow-[0_20px_80px_rgba(3,10,24,0.26)]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div
                  className={`absolute inset-0 rounded-[34px] ${
                    plan.featured
                      ? "border border-cyan-300/34 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_110px_rgba(34,211,238,0.22)]"
                      : "border border-cyan-300/20 shadow-[0_0_0_1px_rgba(34,211,238,0.1),0_0_70px_rgba(34,211,238,0.1)]"
                  }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">{plan.name}</p>
                    <div className="mt-5 flex items-end gap-2">
                      <p className="font-heading text-[46px] font-semibold leading-none text-white">{plan.price}</p>
                      <p className="pb-1 text-sm text-white/68">{plan.term}</p>
                    </div>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/66">{plan.hours}</p>
                  </div>

                  {plan.featured ? (
                    <span className="rounded-full border border-cyan-300/26 bg-cyan-400/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cyan-100">
                      Best fit
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 text-[15px] leading-7 text-white/84">{plan.audience}</p>

                <div className="cinema-card mt-6 rounded-[24px] bg-black/20 p-4">
                  <p className="section-kicker text-[11px] uppercase">Expected outcome</p>
                  <p className="mt-3 text-[15px] leading-7 text-cyan-100">{plan.outcome}</p>
                </div>

                <div className="mt-6 grid gap-3">
                  {bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-cyan-300" />
                      <p className="text-[15px] leading-7 text-white/84">{bullet}</p>
                    </div>
                  ))}
                </div>

                <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" className="mt-8" captureAudit trackingSource={`pricing_${plan.name.toLowerCase()}_cta`}>
                  Get Free System Audit
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <p className="mt-3 text-sm leading-6 text-white/74">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
                <p className="mt-1 text-sm leading-6 text-white/64">No long-term contracts. Start with a single audit.</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="cinema-card mt-10 rounded-[32px] bg-black/22 px-6 py-7 md:flex md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-heading text-[28px] font-semibold leading-tight text-white">Need a custom setup? We support enterprise engagements.</p>
            <p className="mt-3 text-[15px] leading-7 text-white/82">
              If the system is broader, more sensitive, or needs deeper ownership, we can scope a custom engagement around it.
            </p>
          </div>

          <div className="mt-6 md:mt-0 md:pl-6">
            <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" captureAudit trackingSource="pricing_custom_cta">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <p className="mt-3 text-sm leading-6 text-white/74">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
            <p className="mt-1 text-sm leading-6 text-white/64">No long-term contracts. Start with a single audit.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
