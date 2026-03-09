"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type AnimatedCounterProps = {
  value: number
  durationMs?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

function formatValue(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function AnimatedCounter({
  value,
  durationMs = 1000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined" || hasAnimated) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (!first?.isIntersecting) return

        setHasAnimated(true)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    let frame = 0
    const startedAt = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startedAt
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [hasAnimated, value, durationMs])

  const rendered = useMemo(() => `${prefix}${formatValue(display, decimals)}${suffix}`, [display, decimals, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {rendered}
    </span>
  )
}
