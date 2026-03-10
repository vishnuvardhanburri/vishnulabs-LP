import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, ArrowUpRight, CalendarClock, CheckCircle2, MessageSquareMore, PhoneCall } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

type Service = {
  bullets: string[]
  description: string
  href: string
  icon: LucideIcon
  title: string
}

export const metadata: Metadata = {
  title: "Services | VishnuLabs",
  description: "Browse VishnuLabs AI voice, scheduling, and legal intake automation services.",
  alternates: {
    canonical: "/services",
  },
}

const services: Service[] = [
  {
    title: "AI Voice Receptionist",
    description: "Handle inbound calls instantly, qualify intent, and route conversations into booked opportunities.",
    href: "/services/ai-voice-receptionist",
    icon: PhoneCall,
    bullets: ["24/7 call coverage", "Qualification logic", "CRM-ready notes"],
  },
  {
    title: "AI Scheduling + Reminder Assistant",
    description: "Automate booking, confirmations, reminders, and reschedules without manual back-and-forth.",
    href: "/services/ai-scheduling-reminder",
    icon: CalendarClock,
    bullets: ["Calendar integrations", "Reminder automation", "Fallback logic"],
  },
  {
    title: "Legal Client Intake Bot",
    description: "Collect structured legal intake data, validate responses, and push qualified summaries into your workflow.",
    href: "/services/ai-legal-intake",
    icon: MessageSquareMore,
    bullets: ["Conversational intake", "Case qualification", "CRM integration"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden pb-16">
        <section className="pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div data-reveal>
                <div className="badge-pill border-primary/20 bg-white/75 text-slate-700">Service lineup</div>
                <h1 className="mt-6 max-w-4xl text-balance text-[2.8rem] font-bold leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-[4.2rem]">
                  Automation services that remove busywork and improve response speed.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Start with one core automation or combine multiple systems into a single operating flow for your team.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white hover:bg-slate-900">
                    <Link href="/book">
                      Request Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-50">
                    <Link href="/automations">
                      View Automations
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="section-shell-dark ambient-grid-dark p-6" data-reveal>
                <div className="grid gap-4">
                  {services.map((service) => {
                    const Icon = service.icon

                    return (
                      <article key={service.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/12 text-orange-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h2 className="text-lg font-semibold text-white">{service.title}</h2>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-5 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <article key={service.title} className="section-shell hover-rise-strong flex h-full flex-col p-6 sm:p-7" data-reveal>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                    <ul className="mt-5 space-y-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-primary">
                      Open service page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
