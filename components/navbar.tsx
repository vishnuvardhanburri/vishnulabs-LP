"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "FAQ", href: "/#faq" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="/" className="tap-target flex items-center gap-3 rounded-lg px-1 py-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 shadow-[0_0_20px_rgba(47,128,255,0.28)]">
            <img
              src="/vishnulabs-logo-mark.svg"
              alt="VishnuLabs V logo"
              width="30"
              height="30"
              className="h-[30px] w-[30px] object-contain"
            />
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-foreground">VishnuLabs</p>
            <p className="text-[11px] text-muted-foreground">AI Ops & Voice Automation</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="sm"
            asChild
            className="gap-1.5 rounded-xl bg-foreground px-5 text-background shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-foreground/90"
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
          className="border-t border-border/50 bg-background/95 px-4 pb-24 pt-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="tap-target rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 border-t border-border/45 pt-4">
              <Button size="sm" asChild className="w-full gap-1.5 rounded-xl bg-foreground py-5 text-background hover:bg-foreground/90">
                <a href="/book" onClick={() => setMobileOpen(false)} data-track="mobile_nav_book_meeting">
                  Book Meeting
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
