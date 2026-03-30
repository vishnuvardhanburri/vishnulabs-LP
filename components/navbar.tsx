"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { AppLink } from "@/components/app-link"
import { Button } from "@/components/ui/button"

const primaryLinks = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
]

const exploreLinks = [
  { label: "Websites", href: "/websites" },
  { label: "Software", href: "/custom-software" },
  { label: "AI Vault", href: "/stealth-vault" },
  { label: "Services", href: "/services" },
  { label: "Automations", href: "/automations" },
  { label: "Proof", href: "/proof" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const isActive = useMemo(
    () => (href: string) => pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!servicesRef.current) return
      if (servicesRef.current.contains(event.target as Node)) return
      setServicesOpen(false)
    }

    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-3.5 sm:px-6 lg:px-10">
        <div
          className={`rounded-[28px] border transition-all duration-300 ${
            scrolled
              ? "border-white/18 bg-slate-950/96 shadow-[0_24px_72px_rgba(2,8,23,0.28)] backdrop-blur-2xl"
              : "border-white/18 bg-slate-950/94 shadow-[0_18px_60px_rgba(2,8,23,0.22)] backdrop-blur-2xl"
          }`}
        >
          <div className="flex h-[74px] items-center justify-between px-3 sm:px-5">
            <AppLink href="/" prefetch className="tap-target flex items-center gap-3 rounded-full px-1 py-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 shadow-[0_12px_26px_rgba(15,23,42,0.18)]">
                <img
                  src="/vishnulabs-logo-mark.svg"
                  alt="VishnuLabs V logo"
                  width="28"
                  height="28"
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold tracking-tight text-white">VishnuLabs</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300">System Reliability</p>
              </div>
            </AppLink>

            <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
              {primaryLinks.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  prefetch
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-medium tracking-[0.01em] transition-all xl:px-3.5 xl:text-[13px] ${
                    isActive(link.href)
                      ? "bg-white text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.14)]"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {link.label}
                </AppLink>
              ))}

              <div className="ml-2 h-7 w-px bg-white/12" />

              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  aria-expanded={servicesOpen}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all ${
                    exploreLinks.some((link) => isActive(link.href)) || servicesOpen
                      ? "bg-white text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.10)]"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  Explore
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.65rem)] w-[300px] rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_24px_56px_rgba(15,23,42,0.18)]">
                    <div className="px-3 pb-2 pt-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Browse pages</p>
                    </div>
                    {exploreLinks.map((link) => (
                      <AppLink
                        key={link.href}
                        href={link.href}
                        prefetch
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`block rounded-2xl px-3 py-3 text-sm font-semibold transition-colors ${
                          isActive(link.href)
                            ? "bg-slate-950 text-white"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                        }`}
                      >
                        {link.label}
                      </AppLink>
                    ))}
                  </div>
                ) : null}
              </div>
            </nav>

            <div className="hidden lg:block">
              <Button
                size="sm"
                asChild
                className="cta-glow h-10 gap-1.5 rounded-full bg-white px-5 text-slate-950 hover:bg-slate-100"
              >
                <AppLink href="https://cal.com/vishnuvardhanburri/15min" prefetch data-track="nav_book_meeting">
                  Book Review
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </AppLink>
              </Button>
            </div>

            <button
              type="button"
              className="tap-target inline-flex items-center justify-center rounded-2xl text-white transition-colors hover:bg-white/8 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <nav
              className="border-t border-white/10 bg-slate-950/98 px-3 pb-4 pt-3 backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1.5">
                {primaryLinks.map((link) => (
                  <AppLink
                    key={link.href}
                    href={link.href}
                    prefetch
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`tap-target rounded-2xl px-3 py-3 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? "bg-white text-slate-950"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </AppLink>
                ))}
                <div className="mt-2 border-t border-border/50 pt-3">
                  <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {exploreLinks.map((link) => (
                      <AppLink
                        key={link.href}
                        href={link.href}
                        prefetch
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`rounded-2xl border px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                          isActive(link.href)
                            ? "border-white bg-white text-slate-950"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </AppLink>
                    ))}
                  </div>
                </div>
                <div className="mt-2 border-t border-border/50 pt-3">
                  <Button asChild className="w-full rounded-full bg-white text-slate-950 hover:bg-slate-100">
                    <AppLink href="https://cal.com/vishnuvardhanburri/15min" prefetch onClick={() => setMobileOpen(false)} data-track="mobile_nav_book_meeting">
                      Book Review
                    </AppLink>
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
