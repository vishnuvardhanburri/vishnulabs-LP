import { ArrowUpRight } from "lucide-react"

import { AppLink } from "@/components/app-link"

type BlogPostSection = {
  title: string
  body: string[]
}

type BlogPostTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  sections: BlogPostSection[]
  targetPage: {
    label: string
    href: string
  }
}

export function BlogPostTemplate({ eyebrow, title, intro, sections, targetPage }: BlogPostTemplateProps) {
  return (
    <main className="relative overflow-hidden bg-zinc-950 px-5 py-16 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-5rem] h-[18rem] w-[18rem] rounded-full bg-sky-500/10 blur-[140px] mix-blend-screen" />
        <div className="absolute right-[-8rem] top-[12rem] h-[16rem] w-[16rem] rounded-full bg-violet-500/10 blur-[140px] mix-blend-screen" />
      </div>

      <article className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-sky-200">{eyebrow}</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-zinc-300">{intro}</p>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-400">
          Serving clients globally across US and India.
        </div>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-zinc-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-sky-300/16 bg-white/[0.04] p-6 text-center shadow-[0_20px_80px_rgba(56,189,248,0.08)]">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">See the system fix</h2>
          <p className="mt-3 text-base leading-8 text-zinc-300">
            Short explanation is useful. A working system is better.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <AppLink
              href={targetPage.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(186,230,253,0.92))] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_80px_rgba(56,189,248,0.2)] transition-transform duration-300 hover:scale-[1.03]"
            >
              {targetPage.label}
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
            <AppLink
              href="/sentinel"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
            >
              See Sentinel
            </AppLink>
          </div>
        </div>
      </article>
    </main>
  )
}
