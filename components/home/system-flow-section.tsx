"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"
import { useIsMobile } from "@/components/ui/use-mobile"

const steps = [
  { title: "Lead", desc: "Incoming data", tooltip: "New demand enters the system from forms, ads, calls, or referrals." },
  { title: "Validate", desc: "Ensure every lead is usable", tooltip: "Ensure clean, usable data" },
  { title: "Route", desc: "Send each lead to the right place", tooltip: "Send to correct system/team" },
  { title: "Follow-up", desc: "Keep every next step moving", tooltip: "Automated reminders + actions" },
  { title: "Booked", desc: "Conversion complete", tooltip: "A clean conversion is recorded and ready for the next stage." },
]

export function SystemFlowSection() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLElement>(null)
  const lineRefs = useRef<Array<HTMLDivElement | null>>([])
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || isMobile) {
      setActiveIndex(steps.length - 1)
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const nodes = nodeRefs.current.filter(Boolean)
      const lines = lineRefs.current.filter(Boolean)

      if (!sectionRef.current || nodes.length === 0) {
        return
      }

      gsap.set(nodes, { opacity: 0.45, y: 34, scale: 0.965 })
      gsap.set(lines, { scaleX: 0, transformOrigin: "left center", opacity: 0.3 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          end: "bottom 42%",
          scrub: 1,
        },
      })

      nodes.forEach((node, index) => {
        timeline.call(() => setActiveIndex(index))
        timeline.to(
          node,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.42,
            ease: "power3.out",
          },
          index === 0 ? 0 : ">-0.04",
        )

        if (index < lines.length) {
          timeline.to(
            lines[index],
            {
              scaleX: 1,
              opacity: 1,
              duration: 0.34,
              ease: "power2.out",
            },
            ">-0.08",
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section id="system-flow" ref={sectionRef} className="px-5 pb-24">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl md:px-8 md:py-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_20%_0%,rgba(104,171,255,0.1),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(123,102,255,0.08),transparent_32%)]" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
            System flow
          </p>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-[52px]">
            Stop losing leads between first click and booked call.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/68">
            We fix the path from first contact to booked call
            so every step is clear and easy to trust.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <BrokenFlowBackdrop />

          <div className="relative z-10 hidden items-center lg:flex">
            {steps.map((step, index) => (
              <div key={step.title} className="flex min-w-0 flex-1 items-center">
                <div
                  ref={(element) => {
                    nodeRefs.current[index] = element
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex((current) => (current === index ? null : current))}
                  className={`group relative w-full rounded-[28px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.03))] p-5 shadow-[0_20px_80px_rgba(3,10,24,0.25)] backdrop-blur-2xl transition ${
                    activeIndex >= index
                      ? "border-cyan-300/26 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_70px_rgba(34,211,238,0.16)]"
                      : "border-white/10"
                  }`}
                  style={{
                    transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/72">0{index + 1}</p>
                    <h3 className="mt-5 font-heading text-[26px] font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/68">{step.desc}</p>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.26, ease: [0.2, 1, 0.3, 1] }}
                    className="pointer-events-none absolute inset-x-4 -bottom-4 rounded-[18px] border border-cyan-300/18 bg-[#0b1327]/95 p-3 text-sm leading-6 text-cyan-100 shadow-[0_20px_60px_rgba(3,10,24,0.28)] backdrop-blur-xl"
                  >
                    {step.tooltip}
                  </motion.div>
                </div>

                {index < steps.length - 1 ? (
                  <div className="relative mx-3 h-px flex-1">
                    <div className="absolute inset-0 bg-white/8" />
                    <div
                      ref={(element) => {
                        lineRefs.current[index] = element
                      }}
                      className="absolute inset-y-0 left-0 right-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.15),rgba(34,211,238,0.95),rgba(168,85,247,0.65))]"
                    />
                    <ArrowRight className={`absolute -right-1 -top-[11px] h-6 w-6 ${activeIndex > index ? "text-cyan-200" : "text-white/22"}`} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="relative z-10 grid gap-4 lg:hidden">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: isMobile ? 0.55 : 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-[26px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.03))] p-5 backdrop-blur-xl ${
                  activeIndex >= index ? "border-cyan-300/24" : "border-white/10"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/72">0{index + 1}</p>
                <h3 className="mt-4 font-heading text-[24px] font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-white/66">{step.desc}</p>
                <p className="mt-4 text-sm leading-6 text-cyan-100">{step.tooltip}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-10"
          >
            <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" captureAudit trackingSource="system_flow_cta">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <p className="mt-3 text-sm leading-7 text-white/54">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
            <p className="mt-1 text-sm leading-7 text-white/48">No long-term contracts. Start with a single audit.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BrokenFlowBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute inset-x-8 top-[92px] flex items-center">
        {steps.map((step, index) => (
          <div key={step.title} className="flex min-w-0 flex-1 items-center">
            <div className="w-full rounded-[26px] border border-red-400/10 bg-red-500/[0.035] p-5 opacity-40 backdrop-blur-md">
              <div className="h-3 w-16 rounded-full bg-red-300/18" />
              <div className="mt-5 h-6 w-24 rounded-full bg-white/6" />
              <div className="mt-4 h-3 w-28 rounded-full bg-white/5" />
            </div>
            {index < steps.length - 1 ? (
              <div className="relative mx-3 h-px flex-1 overflow-hidden bg-red-400/10">
                <motion.div
                  animate={{ x: ["-15%", "105%"] }}
                  transition={{ duration: 2.8 + index * 0.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(248,113,113,0.75),transparent)]"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
