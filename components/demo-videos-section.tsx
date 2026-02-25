import type { ComponentType } from "react"
import { ArrowUpRight, CalendarClock, FileSearch, Gavel, Home, PlayCircle } from "lucide-react"

type DemoVideo = {
  title: string
  audience: string
  useCase: string
  buildTime: string
  pricing: string
  pitch: string
  icon: ComponentType<{ className?: string }>
  videoUrl: string
}

const demoVideos: DemoVideo[] = [
  {
    title: "Suite Overview Demo",
    audience: "Agency Owners",
    useCase: "Complete walkthrough of all automations, positioning, and offer structure.",
    buildTime: "2-3 days",
    pricing: "$1,000-$10,000 based on client requirements",
    pitch: "Use this as the first call demo before deep-diving into any one automation.",
    icon: PlayCircle,
    videoUrl: "",
  },
  {
    title: "AI Scheduling & Reminder Assistant",
    audience: "Lawyers, consultants, agents",
    useCase: "Books calls, sends reminders, handles reschedules, and recovers no-shows.",
    buildTime: "3-5 days",
    pricing: "$1,000-$10,000 based on client requirements",
    pitch: "Show lower cancellation rates and reduced manual follow-up workload.",
    icon: CalendarClock,
    videoUrl: "",
  },
  {
    title: "Legal Client Intake Bot",
    audience: "Small US law firms",
    useCase: "Collects legal intake info 24/7 and routes qualified leads to CRM/email.",
    buildTime: "4-6 days",
    pricing: "$1,000-$10,000 based on client requirements",
    pitch: "Position it as a virtual intake assistant that never misses incoming leads.",
    icon: Gavel,
    videoUrl: "",
  },
  {
    title: "AI Research Assistant for Lawyers",
    audience: "Solo attorneys, legal assistants",
    useCase: "Summarizes legal documents and pre-fills templates for faster drafting.",
    buildTime: "6-7 days",
    pricing: "$1,000-$10,000 based on client requirements",
    pitch: "Focus demo on time saved per case and consistent drafting quality.",
    icon: FileSearch,
    videoUrl: "",
  },
  {
    title: "Real Estate Lead Nurture Bot",
    audience: "Real estate teams and solo agents",
    useCase: "Runs SMS/email follow-ups and pushes warm replies back to the agent.",
    buildTime: "4-5 days",
    pricing: "$1,000-$10,000 based on client requirements",
    pitch: "Highlight cold-lead reactivation and automatic appointment conversion flow.",
    icon: Home,
    videoUrl: "",
  },
]

function toEmbedUrl(rawUrl: string): string {
  if (!rawUrl) return ""

  try {
    const url = new URL(rawUrl)
    const host = url.hostname.replace(/^www\./, "")

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname.startsWith("/watch")) {
        const videoId = url.searchParams.get("v")
        return videoId ? `https://www.youtube.com/embed/${videoId}` : ""
      }

      if (url.pathname.startsWith("/shorts/")) {
        const videoId = url.pathname.split("/shorts/")[1]
        return videoId ? `https://www.youtube.com/embed/${videoId}` : ""
      }

      if (url.pathname.startsWith("/embed/")) {
        return rawUrl
      }
    }

    if (host === "youtu.be") {
      const videoId = url.pathname.slice(1).split("/")[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : ""
    }

    if (host === "vimeo.com") {
      const videoId = url.pathname.slice(1).split("/")[0]
      return videoId ? `https://player.vimeo.com/video/${videoId}` : ""
    }

    if (host === "player.vimeo.com") {
      return rawUrl
    }
  } catch {
    return rawUrl
  }

  return rawUrl
}

export function DemoVideosSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" id="demos">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent/80">Client Demo Videos</p>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.65rem]">
            5 polished demos ready for client calls
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Show each automation as a clear before/after workflow with measurable business outcomes.
          </p>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-card/60 px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Total demos</p>
            <p className="text-lg font-semibold text-foreground">5 videos</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-card/60 px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Core automations</p>
            <p className="text-lg font-semibold text-foreground">4 offer demos</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-card/60 px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Delivery speed</p>
            <p className="text-lg font-semibold text-foreground">3-7 day builds</p>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {demoVideos.map((demo, index) => {
            const Icon = demo.icon
            const embedUrl = toEmbedUrl(demo.videoUrl)

            return (
              <article
                key={demo.title}
                className="overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="border-b border-border/30 bg-secondary/35 px-5 py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      <Icon className="h-3.5 w-3.5" />
                      Demo {index + 1}
                    </div>
                    <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{demo.audience}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{demo.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{demo.useCase}</p>
                </div>

                <div className="p-5">
                  <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-border/40 bg-background">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={demo.title}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-sm text-muted-foreground">
                        <p>Video link pending</p>
                        <p className="text-xs text-muted-foreground/80">
                          Add URL in <code className="rounded bg-secondary px-1.5 py-0.5">components/demo-videos-section.tsx</code>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-2 text-sm">
                    <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">Build Time</span>
                      <p className="font-medium text-foreground">{demo.buildTime}</p>
                    </div>
                    <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">Price Range</span>
                      <p className="font-medium text-foreground">{demo.pricing}</p>
                    </div>
                    <div className="rounded-lg border border-border/40 bg-background px-3 py-2">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">Pitch Angle</span>
                      <p className="font-medium text-foreground">{demo.pitch}</p>
                    </div>
                  </div>

                  {demo.videoUrl ? (
                    <a
                      href={demo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      Open full video
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <p className="mt-4 text-xs text-muted-foreground">Add final demo link to enable full-video action.</p>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
