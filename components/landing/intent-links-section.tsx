import { ArrowUpRight, Cloud, Cpu, Database, Settings2 } from "lucide-react"

import { AppLink } from "@/components/app-link"

const services = [
  {
    icon: Database,
    title: "Backend Systems Development",
    body: "APIs, data models, event pipelines, and integrations built for reliability, observability, and long-term maintainability.",
  },
  {
    icon: Settings2,
    title: "SaaS Product Development",
    body: "Production-grade platforms with clean architecture, multi-tenant patterns, and operational clarity from day one.",
  },
  {
    icon: Cpu,
    title: "AI & Automation Systems",
    body: "Automation workflows and AI-assisted systems that prioritize control, safety, and measurable execution in real environments.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Engineering",
    body: "Cloud-native deployments, CI/CD, infrastructure-as-code, and runtime hardening for stable production operations.",
  },
] as const

const differentiators = [
  "Built for production, not demos",
  "Backend-first architecture",
  "Focus on failure handling and reliability",
  "Designed for scale from day one",
] as const

const workItems = [
  {
    title: "System architecture",
    body: "Clear boundaries, contracts, and operational ownership so teams can evolve the system safely.",
  },
  {
    title: "Outcomes, not features",
    body: "Reliability improvements, reduced operational load, and faster delivery cycles through cleaner system design.",
  },
  {
    title: "Performance and scalability",
    body: "Measured throughput, predictable latency, and resilient execution paths under real traffic and edge cases.",
  },
] as const

export function IntentLinksSection() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-10 xl:py-28">
      <div className="cinema-section-shell reveal-in mx-auto max-w-7xl p-6 md:p-8">
        <div id="services" className="max-w-3xl scroll-mt-28">
          <p className="section-kicker text-[11px] uppercase">Services</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">Engineering services, kept simple.</h2>
          <p className="section-support-copy mt-4 text-lg leading-8">
            Four offerings. Production-first execution. Clear ownership.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`cinema-card cinema-card-hover rounded-[1.75rem] p-6 ${
                  index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                }`}
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{service.title}</p>
                <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-300">{service.body}</p>
              </article>
            )
          })}
        </div>

        <div id="about" className="mt-16 max-w-4xl scroll-mt-28">
          <p className="section-kicker text-[11px] uppercase">About</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">Software engineering, built for production.</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-200">
            <p>
              Xavira Tech Labs is a software engineering company focused on building reliable, scalable systems for real-world production environments.
            </p>
            <p>
              We specialize in backend architecture, SaaS platforms, and automation systems that prioritize stability, performance, and long-term maintainability.
            </p>
          </div>
        </div>

        <div id="why-xavira" className="mt-16 scroll-mt-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-8">
            <p className="section-kicker text-[11px] uppercase">Why Xavira</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">Built for reliability at scale.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.6rem] border border-white/10 bg-black/30 px-5 py-4 text-sm leading-7 text-zinc-100 ${
                    index % 2 === 0 ? "float-card-soft" : "float-card-soft float-card-delay-1"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="work" className="mt-16 scroll-mt-28">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker text-[11px] uppercase">Work</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">Systems work, not surface polish.</h2>
            </div>
            <p className="section-support-copy max-w-xl text-base leading-8">
              We show architecture, outcomes, and production execution quality — not feature lists.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workItems.map((item, index) => (
              <article
                key={item.title}
                className={`cinema-card cinema-card-hover rounded-[1.75rem] p-6 ${
                  index === 0 ? "float-card-soft" : index === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <AppLink
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              View Work
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  )
}

