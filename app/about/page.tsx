import type { Metadata } from "next"

import { AuditCtaButton } from "@/components/ui/audit-cta-button"

export const metadata: Metadata = {
  title: "About | Xavira Tech Labs",
  description: "Software engineering company building scalable, production-grade systems for real-world environments.",
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
              About Xavira Tech Labs
            </h1>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-slate-200 sm:text-lg">
              <p>
                Xavira Tech Labs is a software engineering company focused on building scalable, production-grade systems for real-world environments.
              </p>
              <p>
                Founded by Vishnu Vardhan, the company specializes in backend architecture, SaaS platforms, and AI-driven automation designed for reliability, performance, and long-term maintainability.
              </p>
              <p>
                At Xavira, the approach is simple - systems are built to work under real conditions, not just demos. Every solution is designed with clear architecture, strong validation layers, and predictable execution.
              </p>
              <p>
                From backend systems to full product platforms, the focus remains on building technology that holds under scale and adapts as businesses grow.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Led by Vishnu Vardhan (Founder &amp; CEO)</p>
              <a
                href="https://www.linkedin.com/in/vishnuvardhanburri/"
                className="mt-2 inline-flex text-sm font-semibold text-sky-200 transition hover:text-white"
              >
                LinkedIn
              </a>
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
