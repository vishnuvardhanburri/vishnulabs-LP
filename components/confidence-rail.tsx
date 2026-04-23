import Image from "next/image"

type ConfidenceItem = {
  title: string
  detail: string
}

const defaultItems: ConfidenceItem[] = [
  {
    title: "Founder-led scope",
    detail: "You talk directly to the person shaping architecture, pricing clarity, and launch quality.",
  },
  {
    title: "Transparent ranges first",
    detail: "Buyers see realistic pricing bands before deep discovery so internal approval is easier.",
  },
  {
    title: "One operating system",
    detail: "Website, automation, CRM, admin tooling, and private AI can be scoped together instead of pieced out.",
  },
  {
    title: "Proof over hype",
    detail: "Product screenshots, logs, dashboards, and real delivery structure support the sales story.",
  },
]

const reviewSignals: ConfidenceItem[] = [
  {
    title: "Scope reads clearly",
    detail: "Buyers can understand the offer, pricing direction, and next step without needing a long explanation call first.",
  },
  {
    title: "Technical depth shows",
    detail: "Dashboards, security proof, workflows, and delivery structure make the site feel like a real system company.",
  },
  {
    title: "Good fit for global buyers",
    detail: "The visual system stays clean and premium for US, UK, and India clients who expect a more polished SaaS-standard brand.",
  },
  {
    title: "Custom scope still visible",
    detail: "Productized offers stay clear, while custom packages remain easy to discover for bigger deployments.",
  },
]

type ConfidenceRailProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  items?: ConfidenceItem[]
}

export function ConfidenceRail({
  eyebrow = "Buyer confidence",
  title = "Built to read clearly on the first scroll.",
  subtitle = "The goal is not just a good-looking page. It is a page buyers can trust fast, understand quickly, and use to justify the right scope internally.",
  items = defaultItems,
}: ConfidenceRailProps) {
  const railItems = [...items, ...items]
  const reviewItems = [...reviewSignals, ...reviewSignals]
  const mobileRailItems = items.slice(0, 3)
  const mobileReviewItems = reviewSignals.slice(0, 3)

  return (
    <section className="py-10 sm:py-12" data-reveal>
      <div className="section-shell px-5 py-6 sm:px-7 sm:py-7">
        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr] xl:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{subtitle}</p>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/85 bg-white/78 px-4 py-3 shadow-[0_16px_32px_rgba(15,23,42,0.05)]">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/70 shadow-[0_10px_22px_rgba(15,23,42,0.12)]">
                <Image
                  src="/founder-vishnu.jpeg"
                  alt="Vishnu Vardhan Burri"
                  fill
                  quality={88}
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">Direct founder review</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Xavira Tech Labs</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/85 bg-white/68 p-2 shadow-[0_20px_48px_rgba(15,23,42,0.05)]">
            <div className="grid gap-3 md:hidden">
              {mobileRailItems.map((item) => (
                <article key={item.title} className="metric-float p-5">
                  <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
              {mobileReviewItems.map((item) => (
                <article key={`${item.title}-mobile-review`} className="metric-float p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Trust signal</p>
                  <p className="mt-3 text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="hidden min-w-max gap-3 md:flex md:animate-marquee-slow">
              {railItems.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className={`metric-float beam-sweep min-h-[180px] w-[280px] shrink-0 p-5 hover-rise-strong sm:w-[320px] ${
                    index % 3 === 0 ? "float-card-soft" : index % 3 === 1 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-3 hidden min-w-max gap-3 md:flex md:animate-marquee-reverse-slow">
              {reviewItems.map((item, index) => (
                <article
                  key={`${item.title}-review-${index}`}
                  className={`metric-float min-h-[150px] w-[240px] shrink-0 p-5 sm:w-[280px] ${
                    index % 2 === 0 ? "float-card-soft float-card-delay-1" : "float-card-soft float-card-delay-2"
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Trust signal</p>
                  <p className="mt-3 text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
