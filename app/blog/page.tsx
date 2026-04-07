import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { AppLink } from "@/components/app-link"

const posts = [
  {
    title: "Why law firms lose leads",
    description: "Missed calls and slow follow-up usually break the intake path before a consultation is booked.",
    href: "/blog/why-law-firms-lose-leads",
  },
  {
    title: "How to reduce clinic no-shows",
    description: "Booking, reminder timing, and intake handoff are where most appointments break.",
    href: "/blog/how-to-reduce-clinic-no-shows",
  },
  {
    title: "Why follow-ups fail",
    description: "Teams often think the issue is lead quality when the issue is actually response speed.",
    href: "/blog/why-follow-ups-fail",
  },
  {
    title: "AI data leak risks",
    description: "Sensitive data usually leaves through normal AI usage long before teams realize it.",
    href: "/blog/ai-data-leak-risks",
  },
]

export const metadata: Metadata = {
  title: "VishnuLabs Blog | High-Intent System Fixes",
  description: "Problem-first articles on intake systems, no-shows, follow-up failures, and AI data leak prevention.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogIndexPage() {
  return (
    <main className="relative overflow-hidden bg-zinc-950 px-5 py-16 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-5rem] h-[18rem] w-[18rem] rounded-full bg-sky-500/10 blur-[140px] mix-blend-screen" />
        <div className="absolute right-[-8rem] top-[12rem] h-[16rem] w-[16rem] rounded-full bg-violet-500/10 blur-[140px] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-10">
        <p className="text-[11px] uppercase tracking-[0.28em] text-sky-200">Blog</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
          High-intent articles for teams trying to fix real system failures
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
          Short articles. Clear problems. Direct links to the system pages that solve them.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <AppLink
              key={post.href}
              href={post.href}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-colors hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{post.title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{post.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-sky-200 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </AppLink>
          ))}
        </div>
      </div>
    </main>
  )
}
