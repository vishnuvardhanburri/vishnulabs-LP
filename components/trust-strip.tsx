const trustItems = [
  "Trusted by Real Estate Teams",
  "Used by US Law Firm Ops",
  "Mortgage Intake Workflows",
  "Consulting & Service Businesses",
  "CRM + Calendar + SMS Integrations",
]

export function TrustStrip() {
  return (
    <section className="relative border-y border-border/50 bg-card/55 py-6">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-sm font-semibold text-foreground">Trusted by Real Estate Agents &amp; Law Firms across the US</p>
        <div className="mt-4 grid gap-2 text-center sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, idx) => (
            <div
              key={item}
              className={`lift-card rounded-lg border border-border/60 bg-background/80 px-3 py-2 text-[11px] font-medium text-muted-foreground ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
