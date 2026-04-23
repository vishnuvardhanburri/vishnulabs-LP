import type { Metadata } from "next"
import { ArrowUpRight, Mail } from "lucide-react"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export const metadata: Metadata = {
  title: "Contact | Xavira Tech Labs",
  description: "Request a consultation for backend systems, SaaS platforms, automation systems, and cloud infrastructure.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_22%,#edf4ff_48%,#f8fbff_100%)] pb-16 pt-28 sm:pt-32">
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <article className="dark-panel-solid p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Contact</p>
            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Request a consultation
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Share your system context and constraints. We&apos;ll reply with a clear technical next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AuditCtaButton trackingSource="contact_cta" className="h-12 px-7 text-sm sm:h-14 sm:px-8 sm:text-base">
                Request Consultation
                <ArrowUpRight className="h-4 w-4" />
              </AuditCtaButton>
              <a
                href="mailto:hello@vishnulabs.com?subject=Consultation%20request%20-%20Xavira%20Tech%20Labs"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:h-14 sm:px-8 sm:text-base"
              >
                <Mail className="h-4 w-4" />
                Email hello@vishnulabs.com
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

