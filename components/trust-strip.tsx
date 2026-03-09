const trustItems = [
  "US PI law firm operations",
  "Family law intake teams",
  "Real estate brokerages",
  "Mortgage advisory firms",
  "Outpatient clinic operations",
  "Consulting service teams",
  "Calendar + CRM + SMS stack",
  "Monitoring + retries + ownership",
]

const trustStats = [
  { label: "Typical deployment", value: "5-7 days" },
  { label: "Lead response", value: "24/7" },
  { label: "Starter builds", value: "$4,997+" },
]

export function TrustStrip() {
  return (
    <section className="relative border-y border-border/50 bg-card/55 py-7">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-sm font-semibold text-foreground sm:text-base">
          Trusted by law firms, clinics, mortgage teams, and real estate operators across the US
        </p>
        <p className="mx-auto mt-2 max-w-4xl text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Worried about missed leads or data leaks? VishnuLabs ships deterministic AI systems with monitoring, retries, and clean ownership handoff.
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-border/50 bg-background/70 p-2">
          <div className="animate-marquee flex min-w-max gap-2">
            {[...trustItems, ...trustItems].map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="rounded-lg border border-border/60 bg-card/80 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-center sm:grid-cols-3 sm:text-left">
          {trustStats.map((item) => (
            <div key={item.label} className="rounded-lg border border-border/60 bg-background/80 px-3 py-2.5">
              <p className="text-base font-semibold text-foreground">{item.value}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
