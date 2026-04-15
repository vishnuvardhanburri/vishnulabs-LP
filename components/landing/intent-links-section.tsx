import { ArrowRight, ArrowUpRight, Bot, Mail, Network } from "lucide-react"

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

const productSignals = [
  {
    icon: Mail,
    label: "Scale",
    detail: "10,000 emails/day",
  },
  {
    icon: Network,
    label: "Ownership",
    detail: "Pods, code, database",
  },
  {
    icon: Bot,
    label: "Labor replaced",
    detail: "Research, intent, sequencing",
  },
]

export function IntentLinksSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-10 xl:py-28">
      <div className="cinema-section-shell reveal-in mx-auto max-w-7xl p-6 md:p-8">
        <div className="rounded-[2rem] border border-cyan-300/14 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03),rgba(168,85,247,0.08))] p-6 shadow-[0_20px_90px_rgba(3,10,24,0.18)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker text-[11px] uppercase">Product spotlight</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                AI Sales Brain
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-100">
                Enterprise outbound infrastructure for teams that want to own the engine instead of renting another lead-gen SaaS stack.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
                Private sending pods, AI agent workflows, real-time intent detection, and deliverability controls built into one system.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <AppLink
                  href="/products/ai-sales-brain"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/16 hover:text-white"
                >
                  Explore AI Sales Brain
                  <ArrowRight className="h-4 w-4" />
                </AppLink>
                <AppLink
                  href="/products#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Compare offers
                  <ArrowUpRight className="h-4 w-4" />
                </AppLink>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {productSignals.map((item, index) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.label}
                    className={`cinema-card cinema-card-hover rounded-[1.6rem] p-5 ${
                      index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-zinc-300">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.detail}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="section-kicker mt-10 text-[11px] uppercase">High-intent pages</p>
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
