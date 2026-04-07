"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useIsMobile } from "@/components/ui/use-mobile"

export function SmoothScroll() {
  const isMobile = useIsMobile()

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || isMobile) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      gestureOrientation: "vertical",
    })

    lenis.on("scroll", ScrollTrigger.update)

    let rafId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = window.requestAnimationFrame(raf)
    }

    rafId = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [isMobile])

  return null
}
