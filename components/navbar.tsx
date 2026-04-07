"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { AppLink } from "@/components/app-link"
import { useLeadCapture } from "@/components/home/lead-capture-provider"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Sentinel", href: "/sentinel" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const pathname = usePathname()
  const { openLeadCapture } = useLeadCapture()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-md transition-all duration-700">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div
          className={`rounded-[28px] border transition-all duration-500 ${
            scrolled
              ? "border-sky-300/18 bg-zinc-950/74 shadow-[0_24px_80px_rgba(0,0,0,0.42),0_0_70px_rgba(56,189,248,0.1)] backdrop-blur-2xl"
              : "border-white/10 bg-zinc-950/52 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[74px] items-center justify-between px-3 sm:px-5">
            <AppLink href="/" prefetch className="tap-target flex items-center gap-3 rounded-full px-1 py-1 transition-transform duration-500 hover:-translate-y-0.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_12px_26px_rgba(0,0,0,0.18)] transition-all duration-500 hover:border-sky-300/20 hover:bg-white/[0.06]">
                <Image
                  src="/vishnulabs-logo-mark.svg"
                  alt="VishnuLabs V logo"
                  width={28}
                  height={28}
                  className="h-[28px] w-[28px] object-contain"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold tracking-tight text-white">VishnuLabs</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-300">System Reliability</p>
              </div>
            </AppLink>

            <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  prefetch
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-medium tracking-[0.01em] transition-all duration-500 xl:px-3.5 xl:text-[13px] ${
                    isActive(link.href)
                      ? "bg-white text-zinc-950 shadow-[0_10px_24px_rgba(255,255,255,0.08)]"
                      : "text-zinc-200 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white hover:drop-shadow-[0_0_12px_rgba(125,211,252,0.28)]"
                  }`}
                >
                  {link.label}
                </AppLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <AuditCtaButton trackingSource="nav_cta" className="h-10 px-5 py-2.5 text-sm">
                Get Free System Audit
                <ArrowUpRight className="h-3.5 w-3.5" />
              </AuditCtaButton>
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
              className="border-t border-white/10 bg-zinc-950/94 px-3 pb-4 pt-3 backdrop-blur-2xl lg:hidden"
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
                        ? "bg-white text-zinc-950"
                        : "text-zinc-200 hover:bg-white/8 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </AppLink>
                ))}
                <div className="mt-2 border-t border-border/50 pt-3">
                  <AuditCtaButton
                    onClick={() => setMobileOpen(false)}
                    className="w-full px-5 py-3 text-sm"
                    trackingSource="mobile_nav_cta"
                    data-track="mobile_nav_cta"
                  >
                    Get Free System Audit
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </AuditCtaButton>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
