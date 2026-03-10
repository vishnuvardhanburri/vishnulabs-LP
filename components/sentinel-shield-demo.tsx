import { ArrowUpRight, ShieldCheck, Video } from "lucide-react"

const screenshots = [
  {
    src: "/marketing/sentinel-shield/final_hero_shot.png",
    label: "Live agent call flow",
  },
  {
    src: "/marketing/sentinel-shield/vishnulabs_sentinel_walkthrough_v1_3.webp",
    label: "Dashboard walkthrough",
  },
  {
    src: "/marketing/sentinel-shield/vishnulabs_sales_demo_v1_3.webp",
    label: "Sales demo highlights",
  },
  {
    src: "/marketing/sentinel-shield/compliance_proof.png",
    label: "Compliance proof snapshot",
  },
]

export function SentinelShieldDemo() {
  return (
    <section className="relative border-y border-border/40 bg-card/60 py-20 md:py-24" data-reveal>
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Sentinel Shield Live Demo Assets
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Real walkthrough: Stealth-Mode security plus working voice demo
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Loop video + screenshots from the current build. Use this to show buyers how the internal AI vault, call flow, and compliance
              evidence look in practice.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="/stealth-vault"
              data-track="funnel_sentinel_demo_vault_cta"
              className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(249,115,22,0.24)] hover:bg-primary/90"
            >
              View Vault Offer
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/book"
              data-track="funnel_sentinel_demo_book_cta"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Book Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-border/60 bg-background/85 p-4 shadow-[0_16px_44px_rgba(15,23,42,0.12)]" data-reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Video className="h-3.5 w-3.5 text-primary" /> Loop demo video
            </div>
            <div className="overflow-hidden rounded-xl border border-border/70 bg-background">
              <video
                className="aspect-video w-full object-cover"
                src="/marketing/sentinel-shield/demo-whatsapp.mp4"
                controls
                preload="metadata"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              File: demo-whatsapp.mp4 — includes live agent call flow and vault interaction (muted by default; enable audio as needed).
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2" data-reveal>
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="lift-card rounded-2xl border border-border/60 bg-background/85 p-2 shadow-[0_14px_32px_rgba(15,23,42,0.10)]"
              >
                <img
                  src={shot.src}
                  alt={shot.label}
                  className="aspect-[4/3] w-full rounded-xl border border-border/60 object-cover"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-[12px] font-semibold text-foreground">{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
