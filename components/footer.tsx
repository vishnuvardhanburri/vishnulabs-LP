import Link from "next/link"
import { customPackageMailto } from "@/components/custom-solution-note"

const serviceLinks = [
  { label: "Stealth-Mode AI Vault", href: "/stealth-vault" },
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
  { label: "Book Meeting", href: "/book" },
  { label: "Backup Site", href: "/backup" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
        <div>
            <Link href="/" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <img
                src="/vishnulabs-logo-full.svg"
                alt="VishnuLabs logo"
                width="170"
                height="50"
                className="h-auto w-[170px] object-contain"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Premium AI automation, websites, domain management, custom software, and private internal AI infrastructure for high-trust teams.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Private AI", "Websites", "Custom software", "Mobile-ready UX"].map((item) => (
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
                <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
              <a href={customPackageMailto} className="text-sm text-slate-300 transition-colors hover:text-white">
                hello@vishnulabs.com
              </a>
            </div>

            <div className="mt-5 rounded-[22px] border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Need a custom build?</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Bring your workflow, website requirement, domain setup, or compliance problem. We will scope the system around the bottleneck.
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
          <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
