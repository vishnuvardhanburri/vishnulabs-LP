const serviceLinks = [
  { label: "AI Voice Receptionist", href: "/services/ai-voice-receptionist" },
  { label: "AI Scheduling & Reminder", href: "/services/ai-scheduling-reminder" },
  { label: "AI Legal Intake Automation", href: "/services/ai-legal-intake" },
]

const industryLinks = [
  { label: "PI Law Firms", href: "/industries/pi-law-firms" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Mortgage", href: "/industries/mortgage" },
]

const pageLinks = [
  { label: "Book Meeting", href: "/book" },
  { label: "Backup Site", href: "/backup" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4 lg:px-10">
        <div>
          <a href="/" className="inline-flex items-center rounded-lg border border-border/40 bg-card/50 px-3 py-2">
            <img
              src="/vishnulabs-logo-full.svg"
              alt="VishnuLabs logo"
              width="170"
              height="50"
              className="h-auto w-[170px] object-contain"
            />
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            AI automation agency for call handling, intake, scheduling, and follow-up operations.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">&copy; {new Date().getFullYear()} VishnuLabs. All rights reserved.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Services</p>
          <div className="mt-3 grid gap-2">
            {serviceLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Industries</p>
          <div className="mt-3 grid gap-2">
            {industryLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Contact & Legal</p>
          <div className="mt-3 grid gap-2">
            {pageLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
            <a href="mailto:hello@vishnulabs.com" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              hello@vishnulabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
