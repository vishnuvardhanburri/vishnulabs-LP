"use client"

import { useEffect, useRef, useState } from "react"

type BackgroundVideoProps = {
  mp4Src?: string
  webmSrc?: string
  className?: string
  videoClassName?: string
  overlayClassName?: string
  preload?: boolean
}

export function BackgroundVideo({
  mp4Src,
  webmSrc,
  className = "",
  videoClassName = "",
  overlayClassName = "",
  preload = false,
}: BackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const connection = (navigator as unknown as { connection?: unknown }).connection as
      | {
          saveData?: boolean
          effectiveType?: string
        }
      | undefined

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) {
      return
    }

    const startLoading = () => setShouldLoad(true)

    if (preload) {
      const requestIdleCallback = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback
      const idleId = requestIdleCallback ? requestIdleCallback(startLoading, { timeout: 1200 }) : window.setTimeout(startLoading, 250)

      return () => {
        const cancelIdleCallback = (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
        if (cancelIdleCallback && typeof idleId === "number" && requestIdleCallback) {
          cancelIdleCallback(idleId)
          return
        }
        window.clearTimeout(idleId)
      }
    }

    if (typeof IntersectionObserver === "undefined" || !containerRef.current) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" },
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [preload, shouldLoad])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,91,255,0.18),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(104,171,255,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,122,196,0.08),transparent_24%),linear-gradient(180deg,rgba(5,5,5,0.72),rgba(10,10,10,0.96))]" />

      {shouldLoad ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${videoClassName}`}
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          {mp4Src ? <source src={mp4Src} type="video/mp4" /> : null}
        </video>
      ) : null}

      <div
        className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.3),rgba(5,5,5,0.62),rgba(5,5,5,0.88))] ${overlayClassName}`}
      />
    </div>
  )
}
