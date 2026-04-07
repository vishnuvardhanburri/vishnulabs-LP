"use client"

import { useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"
import { SmoothScroll } from "@/components/home/smooth-scroll"
import { BackgroundVideo } from "@/components/ui/background-video"
import { useIsMobile } from "@/components/ui/use-mobile"

const CaseStudySection = dynamic(() => import("@/components/home/case-study-section").then((module) => module.CaseStudySection))
const SystemsBuiltSection = dynamic(() => import("@/components/home/systems-built-section").then((module) => module.SystemsBuiltSection))
const HowWeWorkSection = dynamic(() => import("@/components/home/how-we-work-section").then((module) => module.HowWeWorkSection))
const SystemFlowSection = dynamic(() => import("@/components/home/system-flow-section").then((module) => module.SystemFlowSection))
const VisualProofSection = dynamic(() => import("@/components/home/visual-proof-section").then((module) => module.VisualProofSection))
const SentinelSection = dynamic(() => import("@/components/home/sentinel-section").then((module) => module.SentinelSection))
const ReviewsSection = dynamic(() => import("@/components/home/reviews-section").then((module) => module.ReviewsSection))
const PricingSection = dynamic(() => import("@/components/home/pricing-section").then((module) => module.PricingSection))
const FinalCtaSection = dynamic(() => import("@/components/home/final-cta-section").then((module) => module.FinalCtaSection))

const particleLayout = [
  { left: "10%", top: "16%", size: 10, delay: 0 },
  { left: "22%", top: "72%", size: 6, delay: 0.8 },
  { left: "38%", top: "28%", size: 12, delay: 1.4 },
  { left: "58%", top: "14%", size: 8, delay: 0.6 },
  { left: "68%", top: "62%", size: 14, delay: 1.8 },
  { left: "82%", top: "26%", size: 7, delay: 0.3 },
  { left: "88%", top: "74%", size: 11, delay: 1.2 },
]

const revealParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.24,
    },
  },
}

const revealChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function LandingPage() {
  const isMobile = useIsMobile()
  const rootRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || isMobile) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (!heroRef.current || !contentRef.current || !visualRef.current || !glowRef.current) {
        return
      }

      const heroTimeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top+=12%",
          scrub: 1.2,
        },
      })

      heroTimeline
        .to(
          contentRef.current,
          {
            yPercent: -7,
            opacity: 0.58,
            scale: 0.985,
          },
          0,
        )
        .to(
          visualRef.current,
          {
            yPercent: -11,
            scale: 0.945,
            rotation: -1.6,
            opacity: 0.74,
          },
          0,
        )
        .to(
          glowRef.current,
          {
            yPercent: -14,
            scale: 0.92,
            opacity: 0.4,
          },
          0,
        )
    }, rootRef)

    return () => ctx.revert()
  }, [isMobile])

  const visibleParticles = isMobile ? particleLayout.slice(0, 3) : particleLayout

  return (
    <>
      <SmoothScroll />

      <div ref={rootRef} className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,102,255,0.14),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(112,183,255,0.1),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(255,136,178,0.06),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18),rgba(5,5,5,0.58),rgba(10,10,10,0.96))]" />

        <header className="fixed inset-x-0 top-0 z-50">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5">
            <a
              href="/"
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                <img src="/vishnulabs-logo-mark.svg" alt="VishnuLabs" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-white">VishnuLabs</p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">Revenue systems</p>
              </div>
            </a>

            <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" className="hidden md:inline-flex" captureAudit trackingSource="nav_cta">
              Get Free System Audit
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </header>

        <main>
          <section ref={heroRef} className="relative min-h-screen px-5 pb-24 pt-32 md:pt-36">
            <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1200px] items-center gap-10 lg:grid-cols-12">
              <motion.div
                ref={contentRef}
                variants={revealParent}
                initial="hidden"
                animate="show"
                className="relative z-10 lg:col-span-6"
              >
                <motion.div
                  variants={revealChild}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-cyan-200"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Protect every opportunity
                </motion.div>

                <motion.h1
                  variants={revealChild}
                  className="mt-7 max-w-[11ch] font-heading text-[56px] font-bold leading-[0.92] tracking-[-0.055em] text-white md:text-[68px] xl:text-[72px]"
                >
                  Stop losing high-value clients due to broken systems
                </motion.h1>

                <motion.p variants={revealChild} className="mt-5 max-w-xl text-[20px] leading-9 text-white/82 md:text-[22px]">
                  We build backend systems that capture, follow up, and convert every opportunity.
                </motion.p>

                <motion.p variants={revealChild} className="mt-6 max-w-2xl text-[17px] leading-8 text-white/70 md:text-[18px]">
                  We help businesses capture demand, respond instantly, and convert reliably without broken handoffs.
                </motion.p>

                <motion.div variants={revealChild} className="mt-9">
                  <MagneticButton href="https://cal.com/vishnuvardhanburri/15min" captureAudit trackingSource="hero_cta">
                    Get Free System Audit
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </motion.div>

                <motion.div variants={revealChild} className="mt-4">
                  <p className="text-sm leading-7 text-white/58">We&apos;ll show exactly what&apos;s broken in 15 minutes.</p>
                  <p className="mt-1 text-sm leading-7 text-white/46">Limited onboarding capacity each month.</p>
                  <p className="mt-1 text-sm leading-7 text-white/46">No long-term contracts. Start with a single audit.</p>
                  <p className="mt-2 text-sm font-medium leading-7 text-cyan-100">Trusted by teams improving conversions by 30–60%</p>
                </motion.div>

                <motion.div variants={revealChild} className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "What we build", value: "Systems that capture and route demand cleanly" },
                    { label: "What improves", value: "Faster response and more reliable follow-up" },
                    { label: "What stops", value: "Lost leads, missed inquiries, and broken workflows" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">{item.label}</p>
                      <p className="mt-3 text-base font-medium leading-7 text-white">{item.value}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <div className="relative lg:col-span-6">
                <div ref={glowRef} className="hero-glow absolute inset-0 rounded-[40px]" />

                <div
                  ref={visualRef}
                  className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_32px_140px_rgba(6,13,28,0.6)] backdrop-blur-2xl"
                >
                  {isMobile ? (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(104,171,255,0.18),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(123,102,255,0.14),transparent_18%),radial-gradient(circle_at_60%_74%,rgba(255,134,177,0.08),transparent_22%),linear-gradient(180deg,rgba(7,11,24,0.2),rgba(7,11,24,0.72))]" />
                  ) : (
                    <>
                      <BackgroundVideo
                        mp4Src="/media/vishnulabs-cinematic.mp4"
                        preload
                        videoClassName="scale-[1.02] opacity-24"
                        overlayClassName="bg-[linear-gradient(180deg,rgba(5,5,5,0.18),rgba(5,5,5,0.56),rgba(5,5,5,0.82))]"
                      />
                      <motion.div
                        animate={{ x: ["-2%", "2%", "-2%"], y: ["0%", "-1.5%", "0%"] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(104,171,255,0.08),rgba(123,102,255,0.06),rgba(255,255,255,0.01))]"
                      />
                      <motion.div
                        animate={{ x: ["0%", "-2.5%", "0%"], y: ["0%", "2%", "0%"] }}
                        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(104,171,255,0.16),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(123,102,255,0.14),transparent_18%),radial-gradient(circle_at_60%_74%,rgba(255,134,177,0.08),transparent_20%)]"
                      />
                    </>
                  )}

                  <div className="relative aspect-[0.94] overflow-hidden rounded-[30px] border border-white/8 bg-[#071022]">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.3),rgba(4,8,20,0.86))]" />
                    <motion.div
                      animate={{ y: ["0%", isMobile ? "-0.4%" : "-1.2%", "0%"] }}
                      transition={{ duration: isMobile ? 24 : 20, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 opacity-48"
                    >
                      <div className="hero-grid absolute inset-0" />
                    </motion.div>
                    <motion.div
                      animate={{ y: ["0%", isMobile ? "0.8%" : "1.8%", "0%"], x: ["0%", isMobile ? "0.5%" : "1.2%", "0%"] }}
                      transition={{ duration: isMobile ? 28 : 22, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 opacity-62"
                    >
                      <div className="hero-mesh absolute inset-0" />
                    </motion.div>

                    {visibleParticles.map((particle) => (
                      <motion.span
                        key={`${particle.left}-${particle.top}`}
                        className="hero-particle"
                        style={{
                          left: particle.left,
                          top: particle.top,
                          width: particle.size,
                          height: particle.size,
                        }}
                        animate={{
                          y: [0, isMobile ? -7 : -14, 0],
                          x: [0, isMobile ? 2 : 4, 0],
                          opacity: [0.18, isMobile ? 0.36 : 0.55, 0.18],
                          scale: [1, isMobile ? 1.08 : 1.18, 1],
                        }}
                        transition={{
                          duration: (isMobile ? 10.5 : 7.5) + particle.delay * 1.4,
                          delay: particle.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {!isMobile ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                          className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/12"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                          className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/10"
                        />
                        <div className="absolute left-[14%] top-[24%] h-24 w-24 rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_40px_rgba(104,171,255,0.12)]" />
                        <div className="absolute right-[16%] top-[38%] h-16 w-16 rounded-full border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(164,120,255,0.12)]" />
                      </>
                    ) : (
                      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
                    )}

                    <div className="absolute inset-x-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-3 text-[11px] uppercase tracking-[0.26em] text-cyan-200 backdrop-blur-md">
                      Protected demand flow
                    </div>

                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur-xl"
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/44">System state</p>
                      <p className="mt-3 font-heading text-[28px] font-semibold leading-tight text-white">
                        More high-value inquiries reach the right team
                        and keep moving without friction.
                      </p>
                      <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                        One clean backend system replaces missed follow-ups,
                        slow replies, and hidden workflow breaks.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CaseStudySection />
          <SystemsBuiltSection />
          <HowWeWorkSection />
          <SystemFlowSection />
          <VisualProofSection />
          <SentinelSection />
          <ReviewsSection />
          <PricingSection />
          <FinalCtaSection />
        </main>
      </div>
    </>
  )
}
