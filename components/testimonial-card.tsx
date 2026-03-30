import { cn } from "@/lib/utils"
import type { Testimonial } from "@/lib/testimonials"

type TestimonialCardProps = {
  testimonial: Testimonial
  className?: string
  intent?: "light" | "dark"
}

export function TestimonialCard({ testimonial, className, intent = "light" }: TestimonialCardProps) {
  const dark = intent === "dark"

  return (
    <article
      className={cn(
        "testimonial-card rounded-[28px] border p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]",
        dark ? "border-white/10 bg-white/[0.06] text-white" : "border-slate-200 bg-white text-slate-950",
        className,
      )}
    >
      <p className={cn("text-sm leading-7", dark ? "text-slate-200" : "text-slate-700")}>"{testimonial.quote}"</p>
      <div className="mt-5 border-t pt-4">
        <p className={cn("text-sm font-semibold", dark ? "text-white" : "text-slate-950")}>{testimonial.name}</p>
        <p className={cn("text-[11px] font-semibold uppercase tracking-[0.2em]", dark ? "text-sky-200" : "text-slate-500")}>
          {testimonial.role} · {testimonial.country}
        </p>
      </div>
    </article>
  )
}
