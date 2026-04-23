import Image from "next/image"

import { AppLink } from "@/components/app-link"
import { customPackageMailto } from "@/components/custom-solution-note"
import { AuditCtaButton } from "@/components/ui/audit-cta-button"

const serviceLinks = [
  { label: "Sentinel", href: "/sentinel" },
  { label: "Automations", href: "/automations" },
  { label: "Websites", href: "/websites" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "AI Sales Brain", href: "/products/ai-sales-brain" },
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
  { label: "Sentinel FAQ", href: "/sentinel/faq" },
  { label: "Book Meeting", href: "https://cal.com/vishnuvardhanburri/15min" },
  { label: "Backup Site", href: "/backup" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-[#060606]/90 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="float-card-soft mb-10 rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_90px_rgba(2,8,23,0.22)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Need the right scope?</p>
              <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start with the smallest intervention that removes the recurring failure.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
                We can scope a lighter rollout, a broader system intervention, or a private deployment path. The right fit depends on the
                operational bottleneck, not hype.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <AppLink
                href="/pricing"
                prefetch
                className="inline-flex items-center justify-center rounded-full border border-sky-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(186,230,253,0.92))] px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(56,189,248,0.18)] transition-transform duration-300 hover:scale-[1.03]"
              >
                View Pricing
              </AppLink>
              <AuditCtaButton
                trackingSource="footer_book_review"
                className="border border-white/12 bg-white/[0.04] px-5 py-3 text-sm text-white transition-colors hover:bg-white/[0.08]"
              >
                Get Free System Audit
              </AuditCtaButton>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <AppLink href="/" prefetch className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.08]">
              <Image
                src="/vishnulabs-logo-full.svg"
                alt="Xavira Tech Labs logo"
                width={170}
                height={50}
                className="h-auto w-[170px] object-contain"
              />
            </AppLink>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              If your system handles leads or data, silent failure costs money. We find the leak, prove the fix, then deploy it without
              adding new fragility.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Missed leads", "No-shows", "Dropped follow-ups", "Data exposure"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300 transition-colors duration-500 hover:bg-white/[0.08]"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-8 text-xs text-zinc-400">&copy; {new Date().getFullYear()} Xavira Tech Labs. All rights reserved.</p>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Industries" links={industryLinks} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">Contact</p>
            <div className="mt-4 grid gap-2">
              {pageLinks.map((link) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  prefetch={!link.href.startsWith("http")}
                  className="text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </AppLink>
              ))}
              <a href={customPackageMailto} className="text-sm text-zinc-300 transition-colors hover:text-white">
                hello@vishnulabs.com
              </a>
            </div>

            <div className="float-card-soft mt-6 rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">Need a custom scope?</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
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
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">{title}</p>
      <div className="mt-4 grid gap-2">
        {links.map((link) => (
          <AppLink
            key={link.href}
            href={link.href}
            prefetch={!link.href.startsWith("http")}
            className="text-sm text-zinc-300 transition-colors hover:text-white"
          >
            {link.label}
          </AppLink>
        ))}
      </div>
    </div>
  )
}
