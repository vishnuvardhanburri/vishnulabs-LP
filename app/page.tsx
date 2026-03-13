import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  FolderLock,
  Globe,
  Hospital,
  LineChart,
  LockKeyhole,
  MessageSquareMore,
  PhoneCall,
  Rocket,
  ScanSearch,
  Scale,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Truck,
  Workflow,
} from "lucide-react"

import { CustomSolutionNote } from "@/components/custom-solution-note"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

type Stat = {
  label: string
  value: string
  detail: string
}

type Product = {
  title: string
  description: string
  icon: LucideIcon
  href: string
  cta: string
  image: string
  bullets: string[]
}

type Step = {
  title: string
  description: string
  icon: LucideIcon
}

type Industry = {
  title: string
  lead: string
  icon: LucideIcon
  outcomes: string[]
  href: string
}

type PlatformCollection = {
  title: string
  lead: string
  icon: LucideIcon
  bullets: string[]
  href: string
}

const heroStats: Stat[] = [
  {
    value: "2 sec",
    label: "Response window",
    detail: "Private vault answers and call flows move fast enough for live ops.",
  },
  {
    value: "5-7 days",
    label: "Typical go-live",
    detail: "Audit, build, QA, and handoff happen inside one implementation sprint.",
  },
  {
    value: "$15k",
    label: "Flagship license",
    detail: "One-time vault deployment with local memory, redaction, and secure search.",
  },
]

const productCards: Product[] = [
  {
    title: "AI Voice Receptionist",
    description: "Answer inbound calls instantly, qualify intent, and book consultations without manual back-and-forth.",
    icon: PhoneCall,
    href: "/services/ai-voice-receptionist",
    cta: "See Voice System",
    image: "/marketing/sentinel-shield/final_hero_shot.png",
    bullets: ["24/7 call coverage", "Qualification scripts", "CRM-ready notes"],
  },
  {
    title: "AI Intake + Scheduling",
    description: "Combine intake, reminders, and rebooking into one conversion layer that keeps calendars full.",
    icon: CalendarClock,
    href: "/services/ai-scheduling-reminder",
    cta: "See Scheduling Stack",
    image: "/marketing/sentinel-shield/terminal_demo.png",
    bullets: ["No-show reduction", "Reminder automation", "Escalation logic"],
  },
]

const deliverySteps: Step[] = [
  {
    title: "System Audit",
    description: "We map your call flow, intake bottlenecks, compliance risk, and handoff points before writing automation logic.",
    icon: ScanSearch,
  },
  {
    title: "Workflow Engineering",
    description: "Every automation is built as a reliable operating system with guardrails, retries, and deterministic actions.",
    icon: Workflow,
  },
  {
    title: "Private AI Layer",
    description: "Sensitive data stays local when needed, with redaction and role-based access engineered into the stack.",
    icon: FolderLock,
  },
  {
    title: "Monitoring + Handoff",
    description: "You get QA signoff, live monitoring hooks, admin walkthroughs, and documentation your team can actually use.",
    icon: ServerCog,
  },
]

const industries: Industry[] = [
  {
    title: "Startups and New Ventures",
    lead: "Launch with clearer websites, booking flow, and internal visibility without patching together too many early tools.",
    icon: Rocket,
    outcomes: ["Website + funnel clarity", "Lean ops support", "Custom software add-ons"],
    href: "/industries/startups",
  },
  {
    title: "Hospitals and Clinics",
    lead: "Support patient-service teams with cleaner appointments, reminders, and calmer front-desk workflows.",
    icon: Hospital,
    outcomes: ["Scheduling automation", "Sensitive data controls", "Clear escalation paths"],
    href: "/industries/hospitals-clinics",
  },
  {
    title: "Lawyers and Law Services",
    lead: "Capture urgent legal inquiries, standardize intake, and keep sensitive matter data under stronger control.",
    icon: Scale,
    outcomes: ["Fast case qualification", "Private AI options", "Follow-up automation"],
    href: "/industries/law-services",
  },
  {
    title: "Transport, Logistics, and Moving Companies",
    lead: "Increase service visibility, quote response speed, and cleaner dispatch handoff across busy operations.",
    icon: Truck,
    outcomes: ["Quote capture", "Moving-company visibility", "Operational visibility"],
    href: "/industries/transport-logistics",
  },
  {
    title: "Real Estate and Mortgage",
    lead: "Move faster on lead response, qualification, and document-heavy workflows without losing precision.",
    icon: LineChart,
    outcomes: ["Lead routing", "Reminder sequences", "Operational visibility"],
    href: "/industries/real-estate",
  },
]

const platformCollections: PlatformCollection[] = [
  {
    title: "Website Creation",
    lead: "Conversion-focused marketing sites, landing pages, and proof pages that match the automation story instead of feeling disconnected from it.",
    icon: Globe,
    bullets: ["High-conversion landing pages", "Mobile-first build quality", "Proof-driven page structure"],
    href: "/websites",
  },
  {
    title: "Domain Management",
    lead: "Domain routing, DNS setup, SSL, redirects, launch support, and the small operational pieces that make a public-facing stack feel trustworthy.",
    icon: ServerCog,
    bullets: ["DNS and SSL setup", "Launch routing and redirects", "Operational ownership after handoff"],
    href: "/websites",
  },
  {
    title: "Software Solutions",
    lead: "Internal tools, admin dashboards, workflow layers, and custom software that connect the website, automation, and team operations into one system.",
    icon: Workflow,
    bullets: ["Admin and ops dashboards", "Workflow-specific internal tools", "Automation-ready software layers"],
    href: "/custom-software",
  },
]

const proofFeed = [
  "[INFO] Loaded recognizer: SpacyRecognizer",
  "[WARNING] System risk surfaced from local history scan",
  "[INFO] Guardian maintenance: rotating logs and verifying disk health",
  "[CRITICAL] Leak blocked: AWS Token, Secret Key, PII (SSN)",
  "[INFO] Outbound alert throttled because one notification already sent today",
  "[INFO] Liability mitigation bonus applied for incident prevention",
]

const pricingBullets = [
  "Air-gapped and local deployment",
  "PII and secret redaction before AI processing",
  "Offline secure search across internal files",
  "Lifetime updates every 6 months",
  "One month of post-delivery support included",
]

const customBuildBullets = [
  "AI voice reception",
  "Lead qualification and intake flows",
  "Scheduling and reminder automation",
  "Reporting, alerts, and admin handoff",
  "Website creation and landing pages",
  "Domain management and launch routing",
  "Custom software solutions",
]

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="relative pb-14 pt-28 sm:pb-20 sm:pt-36 lg:pb-24" id="top">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-8%] top-20 h-[320px] w-[320px] rounded-full bg-orange-500/18 blur-[120px] orb-float" />
            <div className="absolute right-[-6%] top-10 h-[380px] w-[380px] rounded-full bg-amber-300/20 blur-[130px] orb-float-slow" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
              <div className="relative z-10" data-reveal>
                <div className="badge-pill border-primary/20 bg-white/75 text-slate-700">
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  Private AI systems for high-trust operators
                </div>

                <a
                  href="/stealth-vault"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:bg-primary/15"
                >
                  Stealth-Mode Internal AI Vault
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem] lg:text-[5.5rem]">
                  Automation for teams that
                  <span className="block text-gradient-fire">cannot afford leaks, missed calls, or sloppy ops.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  VishnuLabs builds premium AI systems for voice reception, intake, scheduling, follow-up, websites, custom software, and
                  private internal search. The result is a cleaner pipeline, faster response time, stronger visibility, and tighter control
                  over sensitive data.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    size="lg"
                    asChild
                    className="cta-glow h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <Link href="/book" data-track="home_book_demo_primary">
                      Book Live Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-slate-300/80 bg-white/75 px-7 text-sm font-semibold text-slate-900 hover:bg-white sm:h-14 sm:px-8 sm:text-base"
                  >
                    <Link href="/stealth-vault" data-track="home_view_vault_primary">
                      Explore AI Vault
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {heroStats.map((stat, index) => (
                    <article
                      key={stat.label}
                      className="section-shell hover-rise-strong p-4 sm:p-5"
                      data-reveal
                      style={{ transitionDelay: `${index * 90}ms` }}
                    >
                      <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{stat.value}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-700">{stat.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{stat.detail}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {["Startups", "Hospitals & clinics", "Law services", "Moving companies", "Revenue ops teams"].map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative" data-reveal>
                <div className="section-shell-dark ambient-grid-dark beam-sweep p-4 sm:p-6">
                  <div className="absolute left-6 top-6 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 lg:flex">
                    <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                    Sentinel vault live environment
                  </div>

                  <div className="absolute right-5 top-5 hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200 lg:block">
                    Air-gapped by default
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/55 p-2 shadow-hero-panel">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
                    <Image
                      src="/marketing/sentinel-shield/final_hero_shot.png"
                      alt="Sentinel Vault dashboard preview"
                      width={1600}
                      height={1000}
                      priority
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="h-auto w-full rounded-[22px] border border-white/10 object-cover"
                    />
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-[0.98fr_1.02fr]">
                    <article className="rounded-[26px] border border-white/10 bg-white/5 p-3 halo-outline">
                      <div className="overflow-hidden rounded-[20px] border border-white/10 bg-slate-900/90">
                        <Image
                          src="/marketing/sentinel-shield/compliance_proof.png"
                          alt="Compliance proof dashboard"
                          width={1200}
                          height={900}
                          sizes="(max-width: 640px) 100vw, 22vw"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">Compliance proof</p>
                          <p className="text-xs leading-5 text-slate-400">Audit-ready visibility without leaving the secure environment.</p>
                        </div>
                        <ShieldCheck className="h-5 w-5 shrink-0 text-orange-400" />
                      </div>
                    </article>

                    <article className="rounded-[26px] border border-white/10 bg-slate-900/85 p-5 halo-outline">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Operator value</p>
                      <ul className="mt-4 space-y-3">
                        {[
                          "Redacts secrets and PII before AI touches the prompt",
                          "Keeps answers searchable offline from a local knowledge base",
                          "Blocks risky content and logs incidents for review",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>

                  <div className="absolute -left-3 bottom-10 hidden max-w-[220px] rounded-[22px] border border-white/10 bg-slate-950/85 p-4 text-white shadow-[0_16px_44px_rgba(2,6,23,0.55)] lg:block">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-200">Critical event caught</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Secret key, AWS token, and SSN pattern blocked before leaving the machine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="badge-pill border-slate-200 bg-slate-950 text-white">
                    <LockKeyhole className="h-3.5 w-3.5 text-orange-300" />
                    Why teams choose VishnuLabs
                  </div>
                  <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Private AI control, faster lead response, and reliable delivery in one offer.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                    Keep sensitive workflows local, answer inbound demand faster, and put automation into production with a team that
                    treats delivery like infrastructure, not guesswork.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Private AI control",
                      body: "Use local AI where privacy matters instead of pushing confidential workflows through public tools.",
                    },
                    {
                      title: "Revenue capture",
                      body: "Capture missed demand from phone calls, intake gaps, and weak follow-up before it turns into lost pipeline.",
                    },
                    {
                      title: "Reliable delivery",
                      body: "Systems are built, tested, monitored, and handed off with operational discipline.",
                    },
                  ].map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] hover-rise-strong"
                      data-reveal
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" id="products">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <SectionHeading
              eyebrow="Products"
              title="Three offers. One clean operating system."
              description="Lead with the Stealth Vault, then layer on voice, intake, and scheduling systems that turn attention into booked revenue."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <article className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
                <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                  <div>
                    <div className="badge-pill border-white/10 bg-white/5 text-slate-200">
                      <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                      Flagship product
                    </div>
                    <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Stealth-Mode Internal AI Vault
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-300">
                      A local AI environment that remembers your files, redacts risky content, keeps search private, and proves what was
                      blocked. Built for firms where speed matters but leaks are unacceptable.
                    </p>

                    <ul className="mt-6 space-y-3">
                      {[
                        "Local and air-gapped deployment for sensitive workflows",
                        "Automatic PII and secret redaction before model access",
                        "Compliance-ready logs and operator alerts",
                        "One-time lifetime license with ongoing update cadence",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className="h-12 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(249,115,22,0.35)] hover:bg-orange-400"
                      >
                        <Link href="/stealth-vault" data-track="home_featured_vault_cta">
                          View Vault Offer
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        <Link href="/book" data-track="home_featured_vault_book">
                          Book Setup Call
                        </Link>
                      </Button>
                    </div>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Custom vault requirements available. Email hello@vishnulabs.com
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-black/40 p-3 shadow-hero-panel">
                    <Image
                      src="/marketing/sentinel-shield/dashboard_v1.png"
                      alt="Vault dashboard walkthrough"
                      width={1500}
                      height={1100}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="h-auto w-full rounded-[22px] border border-white/10 object-cover"
                    />
                  </div>
                </div>
              </article>

              <div className="grid gap-6">
                {productCards.map((product, index) => {
                  const Icon = product.icon

                  return (
                    <article
                      key={product.title}
                      className="section-shell hover-rise-strong p-5 sm:p-6"
                      data-reveal
                      style={{ transitionDelay: `${index * 90}ms` }}
                    >
                      <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                        <div>
                          <div className="badge-pill border-slate-200 bg-slate-950 text-white">
                            <Icon className="h-3.5 w-3.5 text-orange-300" />
                            Productized workflow
                          </div>
                          <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">{product.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>

                          <ul className="mt-4 space-y-2">
                            {product.bullets.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Custom solution available. Email hello@vishnulabs.com
                          </p>

                          <Link
                            href={product.href}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-primary"
                            data-track={`home_product_${product.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                          >
                            {product.cta}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>

                        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={1400}
                            height={960}
                            sizes="(max-width: 640px) 100vw, 28vw"
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" id="platform">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell p-6 sm:p-8" data-reveal>
              <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                <div>
                  <SectionHeading
                    eyebrow="Platform Collections"
                    title="A broader SaaS platform view, not just isolated automation."
                    description="We keep the current automation offer intact and can also support website creation, domain management, and software solutions for startups, hospitals, clinics, transport and logistics teams, moving companies, and law services."
                  />

                  <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-200">Global platform view</p>
                    <div className="mt-4 grid gap-3">
                      {[
                        "Public-facing website layer aligned with the same sales story",
                        "Domain and launch control handled cleanly when deployment matters",
                        "Custom software solutions tied to the real workflow behind the funnel",
                        "Clear visibility for startups, clinics, law services, and moving companies",
                      ].map((item) => (
                        <div key={item} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {platformCollections.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <article
                        key={item.title}
                        className="section-shell hover-rise-strong h-full p-5 sm:p-6"
                        data-reveal
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]">
                          <Icon className="h-5 w-5 text-orange-300" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.lead}</p>

                        <div className="mt-5 space-y-2">
                          {item.bullets.map((bullet) => (
                            <div key={bullet} className="rounded-[18px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                              {bullet}
                            </div>
                          ))}
                        </div>

                        <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-primary">
                          Open page
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </article>
                )
              })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" id="proof">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading
                  dark
                  eyebrow="Proof"
                  title="Show the product, the evidence, and the operator reality."
                  description="See the live interface, real demo footage, blocked-risk evidence, and review surfaces that make the system feel credible before the first call."
                />

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Link href="/book" data-track="home_proof_book_demo">
                    Book Live Walkthrough
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
                <article className="rounded-[28px] border border-white/10 bg-black/45 p-4 halo-outline" data-reveal>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Loop demo</p>
                      <p className="mt-1 text-sm text-slate-200">Voice + vault interaction from the current build.</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      Current asset
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
                    <video
                      className="aspect-video w-full object-cover"
                      src="/marketing/sentinel-shield/demo-whatsapp.mp4"
                      poster="/marketing/sentinel-shield/final_hero_shot.png"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Voice", value: "Live call flow" },
                      { label: "Vault", value: "Secure retrieval" },
                      { label: "Proof", value: "Compliance evidence" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="grid gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <article className="rounded-[28px] border border-white/10 bg-white/5 p-3 halo-outline" data-reveal>
                      <Image
                        src="/marketing/sentinel-shield/terminal_demo.png"
                        alt="Runtime alert trail"
                        width={1200}
                        height={920}
                        sizes="(max-width: 640px) 100vw, 22vw"
                        className="h-auto w-full rounded-[22px] border border-white/10 object-cover"
                      />
                      <p className="mt-3 text-sm font-semibold text-white">Runtime alert trail</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">Desktop evidence that the system is catching and logging risky events.</p>
                    </article>

                    <article className="rounded-[28px] border border-white/10 bg-white/5 p-3 halo-outline" data-reveal>
                      <Image
                        src="/marketing/sentinel-shield/compliance_proof.png"
                        alt="Compliance dashboard proof"
                        width={1200}
                        height={900}
                        sizes="(max-width: 640px) 100vw, 22vw"
                        className="h-auto w-full rounded-[22px] border border-white/10 object-cover"
                      />
                      <p className="mt-3 text-sm font-semibold text-white">Compliance proof snapshot</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">Operational logs and review surfaces that support buyer trust.</p>
                    </article>
                  </div>

                  <article className="rounded-[28px] border border-white/10 bg-slate-950/90 p-5 halo-outline" data-reveal>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Leak-block event log</p>
                        <p className="mt-1 text-sm text-slate-300">Modeled after the runtime evidence shown in your desktop proof.</p>
                      </div>
                      <CircleAlert className="h-5 w-5 text-orange-400" />
                    </div>

                    <div className="mt-4 rounded-[22px] border border-white/10 bg-black/55 p-4 font-mono text-[12px] leading-6 text-slate-200">
                      {proofFeed.map((item) => (
                        <p key={item} className={item.includes("[CRITICAL]") ? "text-orange-300" : item.includes("[WARNING]") ? "text-amber-200" : "text-slate-300"}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" id="services">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.96fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Services"
                  title="Engineering discipline behind every front-end promise."
                  description="This is the part most agencies skip. We treat automation like product infrastructure, with control over logic, QA, observability, and the human handoff."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {deliverySteps.map((step, index) => {
                    const Icon = step.icon

                    return (
                      <article
                        key={step.title}
                        className="section-shell hover-rise-strong p-5 sm:p-6"
                        data-reveal
                        style={{ transitionDelay: `${index * 75}ms` }}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]">
                          <Icon className="h-5 w-5 text-orange-300" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                      </article>
                    )
                  })}
                </div>
              </div>

              <aside className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">What clients actually receive</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">Implementation that feels usable on day one.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Delivery includes the architecture plan, QA, monitoring hooks, admin walkthrough, and the operating clarity your team
                  needs after launch.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "System map and integration plan",
                    "QA checklist and go-live validation",
                    "Admin training and handoff docs",
                    "Monitoring, alerts, and post-launch support",
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition hover:text-white"
                  data-track="home_services_book_demo"
                >
                  Discuss custom build
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" id="industries">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <SectionHeading
              eyebrow="Industries"
              title="Designed for operators with speed pressure and data pressure."
              description="Built for startups, hospitals and clinics, lawyers, law services, transport and logistics teams, moving companies, real estate, and mortgage operators where visibility and response speed directly affect revenue."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {industries.map((industry, index) => {
                const Icon = industry.icon

                return (
                  <article
                    key={industry.title}
                    className="section-shell hover-rise-strong flex h-full flex-col p-6"
                    data-reveal
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{industry.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{industry.lead}</p>

                    <div className="mt-5 space-y-2">
                      {industry.outcomes.map((item) => (
                        <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>

                    <Link href={industry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-primary">
                      Open industry page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                )
              })}
            </div>

            <div className="mt-8" data-reveal>
              <CustomSolutionNote title="Need a custom product mix?" />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <article className="section-shell-dark ambient-grid-dark p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-white/10 bg-white/5 text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                  Pricing anchor
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">$15,000 one-time lifetime vault license</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  This is the strongest single offer on the site: private AI search, redaction, offline retrieval, risk blocking, and a
                  clear operational story buyers can understand quickly.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {pricingBullets.map((item) => (
                    <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-orange-500 px-6 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(249,115,22,0.35)] hover:bg-orange-400"
                  >
                    <Link href="/stealth-vault" data-track="home_pricing_view_vault">
                      View Offer Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <Link href="/book" data-track="home_pricing_book_meeting">
                      Book Buying Call
                    </Link>
                  </Button>
                </div>
              </article>

              <article className="section-shell p-6 sm:p-8" data-reveal>
                <div className="badge-pill border-slate-200 bg-slate-950 text-white">
                  <MessageSquareMore className="h-3.5 w-3.5 text-orange-300" />
                  Custom systems
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Done-for-you automation builds starting at $4,997</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Voice, intake, reminders, reporting, and workflow automation packages are scoped around business impact and operational
                  complexity, not template bundles.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {customBuildBullets.map((item) => (
                    <div key={item} className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Build focus", value: "Conversion" },
                      { label: "Delivery style", value: "Systemized" },
                      { label: "Ops fit", value: "Custom-scoped" },
                    ].map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="pb-12 pt-8 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="section-shell-dark ambient-grid-dark p-6 text-center sm:p-10" data-reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Next step</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
                See the vault live, review your workflow, and get a build plan.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
                If public AI is too risky, manual follow-up is too slow, or your team needs a cleaner operating system, book a walkthrough
                and we will map the right automation stack.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-orange-500 px-7 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(249,115,22,0.35)] hover:bg-orange-400"
                >
                  <Link href="/book" data-track="home_final_book_demo">
                    Book Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Link href="/stealth-vault" data-track="home_final_view_vault">
                    Review Vault Offer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string
  title: string
  description: string
  dark?: boolean
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-orange-200" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    </div>
  )
}
