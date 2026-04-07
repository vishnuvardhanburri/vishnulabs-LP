"use client"

import dynamic from "next/dynamic"
import { Component, type ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Play, ShieldCheck, Workflow } from "lucide-react"

import { MagneticButton } from "@/components/home/magnetic-button"
import { useIsMobile } from "@/components/ui/use-mobile"

const HeroCanvas = dynamic(() => import("@/components/landing/hero-canvas").then((module) => module.HeroCanvas), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_78%,rgba(139,92,246,0.18),transparent_34%)]" />
  ),
})

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.08,
      duration: 0.9,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
}

function HeroVisualFallback() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(59,130,246,0.28),transparent_20%),radial-gradient(circle_at_72%_22%,rgba(217,70,239,0.22),transparent_22%),radial-gradient(circle_at_52%_82%,rgba(168,85,247,0.18),transparent_30%)]" />
      <div className="absolute left-[14%] top-[18%] h-24 w-24 rounded-full border border-sky-300/30 bg-sky-400/10 blur-[1px]" />
      <div className="absolute right-[18%] top-[28%] h-32 w-32 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10" />
      <div className="absolute bottom-[20%] left-[28%] h-20 w-20 rounded-[1.5rem] border border-violet-300/20 bg-violet-400/10" />
    </div>
  )
}

function canUseWebGL() {
  if (typeof window === "undefined") return false

  try {
    const canvas = document.createElement("canvas")
    const gl =
      canvas.getContext("webgl2", { antialias: false }) ||
      canvas.getContext("webgl", { antialias: false }) ||
      canvas.getContext("experimental-webgl", { antialias: false })

    return Boolean(gl)
  } catch {
    return false
  }
}

class HeroCanvasBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error("Hero canvas failed to render", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

function DesktopHeroScene() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!canUseWebGL()) {
      setReady(false)
      return
    }

    const start = () => setReady(true)
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(start, { timeout: 600 })
        : window.setTimeout(start, 90)

    return () => {
      if ("cancelIdleCallback" in window && typeof idleId === "number") {
        window.cancelIdleCallback(idleId)
        return
      }

      window.clearTimeout(idleId as number)
    }
  }, [])

  if (!ready) {
    return <HeroVisualFallback />
  }

  return (
    <HeroCanvasBoundary fallback={<HeroVisualFallback />}>
      <HeroCanvas />
    </HeroCanvasBoundary>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top+=120",
          scrub: 1.1,
        },
      })

      timeline
        .to(copyRef.current, { yPercent: -10, opacity: 0.92, force3D: true }, 0)
        .to(visualRef.current, { yPercent: -16, scale: 0.96, force3D: true }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section ref={sectionRef} className="relative min-h-screen px-5 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] px-5 py-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-10">
        <div className="grid flex-1 items-center gap-12 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-8">
          <motion.div
            ref={copyRef}
            initial="hidden"
            animate="show"
            className="relative z-10 max-w-3xl"
          >
            <motion.div custom={0} variants={reveal} className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Backend Stabilization
            </motion.div>

            <motion.h1
              custom={1}
              variants={reveal}
              className="mt-8 max-w-4xl text-balance font-sans text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.25rem] lg:text-[5.5rem]"
            >
              Backend Systems,
              <span className="block bg-[linear-gradient(90deg,#e879f9_0%,#60a5fa_48%,#c084fc_100%)] bg-clip-text text-transparent">
                Workflow Reliability
              </span>
            </motion.h1>

            <motion.p custom={2} variants={reveal} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Fix broken workflows, stabilize brittle automations, and rebuild the systems that revenue depends on.
            </motion.p>

            <motion.div custom={3} variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton
                href="/book"
                className="group px-6 py-3 text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(56,189,248,0.2)]"
              >
                Book System Review
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </MagneticButton>
              <a
                href="#system-flow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
              >
                <Play className="h-4 w-4" />
                View System Flow
              </a>
            </motion.div>

            <motion.div custom={4} variants={reveal} className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Failure mode", value: "Dropped handoffs" },
                { label: "Priority", value: "Reliable execution" },
                { label: "Fit", value: "Revenue-critical ops" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-zinc-100">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={visualRef}
            initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.28, duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
            className="relative h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_40px_120px_rgba(0,0,0,0.45)] sm:h-[34rem] lg:h-[40rem]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.15),transparent_24%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.16),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {isMobile ? <HeroVisualFallback /> : <DesktopHeroScene />}

            <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Operating model</p>
                  <p className="mt-1 text-sm text-zinc-200">Input control, validation, orchestration, clean outputs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
