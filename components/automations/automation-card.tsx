import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

type AutomationCardProps = {
  description: string
  href: string
  icon: LucideIcon
  title: string
}

export function AutomationCard({ description, href, icon: Icon, title }: AutomationCardProps) {
  return (
    <article className="section-shell hover-rise-strong flex h-full flex-col p-6 sm:p-7" aria-labelledby={`${title}-card`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]">
        <Icon className="h-5 w-5 text-orange-300" />
      </div>

      <h3 id={`${title}-card`} className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>

      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-primary"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
