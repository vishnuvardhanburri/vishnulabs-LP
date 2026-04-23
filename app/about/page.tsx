import type { Metadata } from "next"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export const metadata: Metadata = {
  title: "About | Xavira Tech Labs",
  description: "Software engineering company building reliable, scalable systems for real-world production environments.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_22%,#edf4ff_48%,#f8fbff_100%)] pb-16 pt-28 sm:pt-32">
      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <article className="dark-panel-solid p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">About</p>
            <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Built for production, not prototypes.
            </h1>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-slate-200 sm:text-lg">
              <p>
                Xavira Tech Labs is a software engineering company focused on building reliable, scalable systems for real-world production environments.
              </p>
              <p>
                We specialize in backend architecture, SaaS platforms, and automation systems that prioritize stability, performance, and long-term maintainability.
              </p>
            </div>
            <div className="mt-8">
              <AuditCtaButton trackingSource="about_cta" className="h-12 px-7 text-sm sm:h-14 sm:px-8 sm:text-base">
                Request Consultation
              </AuditCtaButton>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

