"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add("is-visible")
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
        observer.observe(element)
      }
    }

    bindElements()

    const mutationObserver = new MutationObserver(() => {
      bindElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return null
}
