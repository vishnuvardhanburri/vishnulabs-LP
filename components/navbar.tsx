"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { AppLink } from "@/components/app-link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Websites", href: "/websites" },
  { label: "Software", href: "/custom-software" },
  { label: "AI Vault", href: "/stealth-vault" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
]

const supportLinks = [
  { label: "Services", href: "/services" },
  { label: "Automations", href: "/automations" },
  { label: "Proof", href: "/proof" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

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
    setMoreOpen(false)
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!moreRef.current) return
      if (moreRef.current.contains(event.target as Node)) return
      setMoreOpen(false)
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
              ? "border-white/88 bg-white/84 shadow-[0_24px_72px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
              : "border-white/92 bg-white/74 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
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
                <p className="text-[15px] font-semibold tracking-tight text-foreground">VishnuLabs</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Automation Systems</p>
              </div>
            </AppLink>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  prefetch
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`nav-underline rounded-full px-3 py-2 text-[13px] font-medium tracking-[0.01em] transition-all xl:px-3.5 ${
                    isActive(link.href)
                      ? "bg-slate-950 text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)]"
                      : "text-slate-600 hover:bg-white/90 hover:text-slate-950"
                  }`}
                >
                  {link.label}
                </AppLink>
              ))}

              <div className="ml-2 hidden items-center gap-1 border-l border-slate-200/80 pl-2 xl:flex">
                {supportLinks.map((link) => (
                  <AppLink
                    key={link.href}
                    href={link.href}
                    prefetch
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-full px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all ${
                      isActive(link.href)
                        ? "bg-white text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.10)]"
                        : "text-slate-500 hover:bg-white/90 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                  </AppLink>
                ))}
              </div>

              <div className="relative ml-2 xl:hidden" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen((prev) => !prev)}
                  aria-expanded={moreOpen}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all ${
                    supportLinks.some((link) => isActive(link.href)) || moreOpen
                      ? "bg-white text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.10)]"
                      : "text-slate-500 hover:bg-white/90 hover:text-slate-950"
                  }`}
                >
                  More
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
                </button>

                {moreOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.55rem)] w-52 rounded-[22px] border border-white/88 bg-white/92 p-2 shadow-[0_18px_42px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
                    {supportLinks.map((link) => (
                      <AppLink
                        key={link.href}
                        href={link.href}
                        prefetch
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`block rounded-2xl px-3 py-3 text-sm font-semibold transition-colors ${
                          isActive(link.href)
                            ? "bg-slate-950 text-white"
                            : "text-slate-600 hover:bg-slate-950 hover:text-white"
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
                className="cta-glow h-10 gap-1.5 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900"
              >
                <AppLink href="/book" prefetch data-track="nav_book_meeting">
                  Book Meeting
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </AppLink>
              </Button>
            </div>

            <button
              type="button"
              className="tap-target inline-flex items-center justify-center rounded-2xl text-foreground transition-colors hover:bg-slate-900/5 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <nav
              className="border-t border-border/40 bg-white/94 px-3 pb-4 pt-3 backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <AppLink
                    key={link.href}
                    href={link.href}
                    prefetch
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`tap-target rounded-2xl px-3 py-3 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-slate-950 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </AppLink>
                ))}
                <div className="mt-2 border-t border-border/50 pt-3">
                  <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">More pages</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {supportLinks.map((link) => (
                      <AppLink
                        key={link.href}
                        href={link.href}
                        prefetch
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`rounded-2xl border px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                          isActive(link.href)
                            ? "border-slate-950 bg-slate-950 text-white"
                            : "border-border/40 bg-white/70 text-muted-foreground hover:bg-slate-950 hover:text-white"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </AppLink>
                    ))}
                  </div>
                </div>
                <div className="mt-2 border-t border-border/50 pt-3">
                  <Button asChild className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-900">
                    <AppLink href="/book" prefetch onClick={() => setMobileOpen(false)} data-track="mobile_nav_book_meeting">
                      Book Meeting
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
