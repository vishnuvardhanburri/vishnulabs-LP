"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "AI Vault", href: "/stealth-vault" },
  { label: "Industries", href: "/#industries" },
  { label: "Proof", href: "/#proof" },
  { label: "Pricing", href: "/#pricing" },
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
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-10">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-primary/25 bg-background/92 shadow-[0_14px_36px_rgba(249,115,22,0.18)] backdrop-blur-xl"
              : "border-border/55 bg-background/82 backdrop-blur-md"
          }`}
        >
          <div className="flex h-[68px] items-center justify-between px-3 sm:px-4">
            <a href="/" className="tap-target flex items-center gap-2.5 rounded-lg px-1 py-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 shadow-[0_0_20px_rgba(249,115,22,0.28)]">
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
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Automation Systems</p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                size="sm"
                asChild
                className="cta-glow gap-1.5 rounded-full bg-foreground px-5 text-background hover:bg-foreground/90"
              >
                <a href="/book" data-track="nav_book_meeting">
                  Book Meeting
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            <button
              className="tap-target inline-flex items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen && (
            <nav
              className="border-t border-border/50 bg-background/95 px-3 pb-4 pt-3 backdrop-blur-xl md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="tap-target rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 border-t border-border/50 pt-3">
                  <Button asChild className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                    <a href="/book" onClick={() => setMobileOpen(false)} data-track="mobile_nav_book_meeting">
                      Book Meeting
                    </a>
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
