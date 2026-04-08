"use client"

import { useEffect, useRef, useState } from "react"

import { SplineScene } from "@/components/ui/splite"

type HeroSplineVisualProps = {
  scene?: string
}

const defaultScene = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"

export function HeroSplineVisual({ scene = defaultScene }: HeroSplineVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const connection = (navigator as unknown as { connection?: unknown }).connection as
      | {
          saveData?: boolean
          effectiveType?: string
        }
      | undefined

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) {
      return
    }

    if (window.innerWidth < 1024) {
      return
    }

    const startLoading = () => setShouldLoad(true)

    if (typeof IntersectionObserver === "undefined" || !containerRef.current) {
      const timeoutId = window.setTimeout(startLoading, 650)
      return () => window.clearTimeout(timeoutId)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          const requestIdleCallback = (
            window as unknown as {
              requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
            }
          ).requestIdleCallback

          if (requestIdleCallback) {
            requestIdleCallback(startLoading, { timeout: 1200 })
          } else {
            window.setTimeout(startLoading, 650)
          }

          observer.disconnect()
        }
      },
      { rootMargin: "220px 0px" },
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0">
      {shouldLoad ? (
        <div className="absolute inset-0 opacity-80 mix-blend-screen">
          <SplineScene scene={scene} className="h-full w-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.14),transparent_42%)]" />
        </div>
      ) : null}
    </div>
  )
}

