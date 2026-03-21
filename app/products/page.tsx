import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, CheckCircle2, KeyRound, LockKeyhole, ScanSearch, ShieldAlert, ShieldCheck, Workflow } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Products | Stealth Vault",
  description: "See where Stealth Vault applies: employee AI usage, internal tools, customer data, and AI-connected workflows.",
  alternates: {
    canonical: "/products",
  },
}

const productSurfaces = [
  {
    icon: ShieldAlert,
    title: "Employee AI usage",
    detail: "Control what staff paste into ChatGPT, Claude, and internal AI chat interfaces.",
    bullets: ["Stop blind copy-paste risk", "See what gets blocked", "Apply policy before the request leaves"],
  },
  {
    icon: KeyRound,
    title: "Secrets and credentials",
    detail: "Detect tokens, keys, passwords, and internal instructions before they leave the environment.",
    bullets: ["Catch exposed secrets early", "Block or redact by rule", "Log policy-triggered events"],
  },
  {
    icon: ScanSearch,
    title: "Customer and internal data",
    detail: "Protect PII, PHI, financial records, and internal knowledge from accidental AI exposure.",
    bullets: ["Monitor sensitive inputs", "Redact before model access", "Keep a review trail"],
  },
  {
    icon: Workflow,
    title: "AI-connected workflows",
    detail: "Add one control layer to internal tools, AI-powered flows, and API-connected systems.",
    bullets: ["Protect internal apps too", "Enforce one policy set", "Scale control across surfaces"],
  },
]

const whyItMatters = [
  "The leak usually happens before security teams even know AI usage is growing.",
  "The risky action is small: one pasted record, one exposed key, one copied internal note.",
  "Stealth Vault exists to stop that small action before it turns into a larger incident.",
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[linear-gradient(180deg,#07111f_0%,#0b1727_18%,#eef4ff_42%,#f7faff_100%)] pb-20 pt-28 sm:pt-32">
        <section className="pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
              <article className="rounded-[34px] border border-white/10 bg-slate-950/94 p-6 shadow-[0_28px_100px_rgba(2,8,23,0.38)] sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                  <LockKeyhole className="h-3.5 w-3.5" />
                  Product surfaces
                </div>

                <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  One product. Multiple places where AI risk shows up.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  Stealth Vault is not another AI app. It is the control layer that sits between your team, your systems, and the AI tools
                  they already use.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:h-14 sm:px-8 sm:text-base">
                    <a href="/book">
                      Start Protecting Your Data
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="h-12 rounded-full border-white/14 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 sm:h-14 sm:px-8 sm:text-base"
                  >
                    <a href="/proof">
                      View Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>

              <article className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why this page exists</p>
                <div className="mt-5 space-y-3">
                  {whyItMatters.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[34px] border border-white/10 bg-white/96 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Where Stealth Vault fits</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                The product follows AI usage wherever sensitive information can leave the company.
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {productSurfaces.map((item) => {
                  const Icon = item.icon

                  return (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xl font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                      <div className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
