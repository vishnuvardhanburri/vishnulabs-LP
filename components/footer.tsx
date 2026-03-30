import { AppLink } from "@/components/app-link"
import { customPackageMailto } from "@/components/custom-solution-note"

const serviceLinks = [
  { label: "Stealth Vault", href: "/stealth-vault" },
  { label: "Automations", href: "/automations" },
  { label: "Websites", href: "/websites" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "AI Voice Receptionist", href: "/services/ai-voice-receptionist" },
  { label: "AI Scheduling & Reminder", href: "/services/ai-scheduling-reminder" },
  { label: "AI Legal Intake Automation", href: "/services/ai-legal-intake" },
]

const industryLinks = [
  { label: "Industry Overview", href: "/industries" },
  { label: "Startups", href: "/industries/startups" },
  { label: "Hospitals & Clinics", href: "/industries/hospitals-clinics" },
  { label: "Transport & Logistics", href: "/industries/transport-logistics" },
  { label: "Law Services", href: "/industries/law-services" },
  { label: "PI Law Firms", href: "/industries/pi-law-firms" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Mortgage", href: "/industries/mortgage" },
]

const pageLinks = [
  { label: "Proof", href: "/proof" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book Meeting", href: "https://cal.com/vishnuvardhanburri/15min" },
  { label: "Backup Site", href: "/backup" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="mt-6 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
        <div className="mb-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(2,8,23,0.16)] sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Need the right scope?</p>
              <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start with the smallest intervention that removes the recurring failure.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                We can scope a lighter rollout, a broader system intervention, or a private deployment path. The right fit depends on the
                operational bottleneck, not hype.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <AppLink
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                View Pricing
              </AppLink>
              <AppLink
                href="https://cal.com/vishnuvardhanburri/15min"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book Review
              </AppLink>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
        <div>
            <AppLink href="/" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <img
                src="/vishnulabs-logo-full.svg"
                alt="VishnuLabs logo"
                width="170"
                height="50"
                className="h-auto w-[170px] object-contain"
              />
            </AppLink>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              VishnuLabs helps teams regain control of backend workflows, replace fragile automations, and build infrastructure that behaves
              reliably under real operating pressure.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Backend systems", "Workflow reliability", "Operational visibility", "Scalable infrastructure"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500">&copy; {new Date().getFullYear()} VishnuLabs. All rights reserved.</p>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Industries" links={industryLinks} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</p>
            <div className="mt-4 grid gap-2">
              {pageLinks.map((link) => (
                <AppLink key={link.href} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                  {link.label}
                </AppLink>
              ))}
              <a href={customPackageMailto} className="text-sm text-slate-300 transition-colors hover:text-white">
                hello@vishnulabs.com
              </a>
            </div>

            <div className="mt-5 rounded-[22px] border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Need a custom scope?</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Bring your workflow, internal surface, or operational bottleneck. We will scope the right intervention around the part of
                the system that keeps failing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{title}</p>
      <div className="mt-4 grid gap-2">
        {links.map((link) => (
          <AppLink key={link.href} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
            {link.label}
          </AppLink>
        ))}
      </div>
    </div>
  )
}
