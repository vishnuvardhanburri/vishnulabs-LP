const trustItems = [
  "Trusted by Real Estate Teams",
  "Used by US Law Firm Ops",
  "Mortgage Intake Workflows",
  "Consulting & Service Businesses",
  "CRM + Calendar + SMS Integrations",
]

export function TrustStrip() {
  return (
    <section className="border-y border-border/40 bg-secondary/40 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-sm font-semibold text-foreground">
          Trusted by Real Estate Agents &amp; Law Firms across the US
        </p>
        <div className="mt-4 grid gap-2 text-center sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <div key={item} className="lift-card rounded-lg border border-border/45 bg-card/55 px-3 py-2 text-[11px] font-medium text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
