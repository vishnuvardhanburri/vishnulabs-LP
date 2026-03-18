"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

    const revealElement = (element: HTMLElement) => {
      element.classList.add("is-visible")
    }

    const shouldRevealImmediately = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      return rect.top <= viewportHeight * 0.92
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          revealElement(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px 12% 0px",
      },
    )

    const bindElements = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
      if (elements.length === 0) return

      for (const [index, element] of elements.entries()) {
        if (element.dataset.revealBound === "true") continue

        element.classList.add("reveal-on-scroll")
        element.classList.remove("is-visible")

        if (!element.style.transitionDelay) {
          element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 350)}ms`)
        }

        element.dataset.revealBound = "true"

        if (shouldRevealImmediately(element)) {
          revealElement(element)
          continue
        }

        observer.observe(element)
      }
    }

    bindElements()

    const fallbackTimer = window.setTimeout(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
      for (const element of elements) {
        revealElement(element)
      }
    }, 900)

    const mutationObserver = new MutationObserver(() => {
      bindElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      window.clearTimeout(fallbackTimer)
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return null
}
