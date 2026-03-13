"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-3.5 sm:px-6 lg:px-10">
        <div
          className={`rounded-[28px] border transition-all duration-300 ${
            scrolled
              ? "border-primary/15 bg-background/80 shadow-[0_22px_55px_rgba(15,23,42,0.16)] backdrop-blur-2xl"
              : "border-white/70 bg-white/70 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[70px] items-center justify-between px-3 sm:px-4">
            <Link href="/" className="tap-target flex items-center gap-3 rounded-full px-1 py-1">
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
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-all hover:bg-slate-950 hover:text-white xl:px-3.5 xl:text-[12px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                size="sm"
                asChild
                className="cta-glow h-10 gap-1.5 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-900"
              >
                <Link href="/book" data-track="nav_book_meeting">
                  Book Meeting
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <button
              className="tap-target inline-flex items-center justify-center rounded-2xl text-foreground transition-colors hover:bg-black/5 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <nav
              className="border-t border-border/40 bg-white/92 px-3 pb-4 pt-3 backdrop-blur-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="tap-target rounded-2xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-slate-950 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-border/50 pt-3">
                  <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">More pages</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {supportLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-2xl border border-border/40 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-slate-950 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-2 border-t border-border/50 pt-3">
                  <Button asChild className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-900">
                    <Link href="/book" onClick={() => setMobileOpen(false)} data-track="mobile_nav_book_meeting">
                      Book Meeting
                    </Link>
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
