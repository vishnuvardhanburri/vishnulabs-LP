import { ArrowUpRight } from "lucide-react"

import { AppLink } from "@/components/app-link"

const intentPages = [
  {
    title: "Law firm intake system",
    body: "Fix missed calls, slow follow-up, and dropped consultation requests.",
    href: "/law-firm-intake-system",
  },
  {
    title: "Reduce clinic no-shows",
    body: "Clean up booking, reminders, and intake so appointments actually happen.",
    href: "/reduce-clinic-no-shows",
  },
  {
    title: "Real estate lead follow-up",
    body: "Stop warm leads from going cold before your team reaches them.",
    href: "/real-estate-lead-followup",
  },
  {
    title: "AI data leak prevention",
    body: "Control sensitive data before it reaches external AI tools.",
    href: "/ai-data-leak-prevention",
  },
]

export function IntentLinksSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-10 xl:py-28">
      <div className="cinema-section-shell reveal-in mx-auto max-w-7xl p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="section-kicker text-[11px] uppercase">High-intent pages</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            Start with the exact problem you need fixed.
          </h2>
          <p className="section-support-copy mt-4 text-lg leading-8">
            Short path. Clear problem. Direct next step. Serving clients globally across US and India.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {intentPages.map((page, index) => (
            <AppLink
              key={page.href}
              href={page.href}
              className={`cinema-card cinema-card-hover group rounded-[1.75rem] p-5 ${
                index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{page.title}</p>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-300">{page.body}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-sky-200 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </AppLink>
          ))}
        </div>
      </div>
    </section>
  )
}
