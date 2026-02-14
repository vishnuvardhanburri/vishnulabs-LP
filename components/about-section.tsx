import { Linkedin, Github, Twitter, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mine-8GkSSZqmhxrSFL2DjUa9j9Rqr1H81N.png",
    alt: "Vishnu Vardhan Burri - Professional headshot",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-8VKKk4Xhhiaugrz1gaG7s6VcVxERZC.jpeg",
    alt: "Vishnu Vardhan Burri - Speaking at a conference",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mine-S0lGYOxbKcMSaKymRXJIIVswRL0iPV.jpeg",
    alt: "Vishnu Vardhan Burri - Professional outdoor portrait",
  },
]

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishnuvardhanburri/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/vishnuvardhanburri",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    href: "https://x.com/burri_vishnu_",
  },
  {
    icon: Mail,
    label: "hello@vishnulabs.com",
    href: "mailto:hello@vishnulabs.com",
  },
]

const experience = [
  { company: "Microsoft", role: "Software Engineer" },
  { company: "Google", role: "Engineering Contributor" },
  { company: "Expressway Startup", role: "Founding Engineer" },
]

const skills = [
  "AI Agents",
  "LangChain",
  "Backend Architecture",
  "API Orchestration",
  "Workflow Engines",
  "Python",
  "Node.js",
  "FastAPI",
  "Temporal.io",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "OpenAI",
  "n8n",
  "Make.com",
]

export function AboutSection() {
  return (
    <section className="relative border-y border-border/30 py-28 md:py-36" id="about">
      <div className="absolute inset-0 bg-secondary/15" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-shrink-0 gap-3">
            <div className="flex flex-col gap-3">
              <div className="h-56 w-44 overflow-hidden rounded-2xl border border-border/30 sm:h-64 sm:w-48 md:h-72 md:w-56">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="h-36 w-44 overflow-hidden rounded-2xl border border-border/30 sm:h-40 sm:w-48 md:h-44 md:w-56">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="h-72 w-44 overflow-hidden rounded-2xl border border-border/30 sm:h-80 sm:w-48 md:h-[380px] md:w-56">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-6">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent/80">
                About
              </p>
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                Vishnu Vardhan Burri
              </h2>
              <p className="mt-2 text-lg font-medium text-primary/80">
                {"Backend-First Automation Architect \u2014 Vishnu Labs"}
              </p>
            </div>

            {/* Experience badges */}
            <div className="flex flex-wrap gap-3">
              {experience.map((exp) => (
                <div
                  key={exp.company}
                  className="flex items-center gap-2.5 rounded-lg border border-border/30 bg-card/80 px-4 py-2.5"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
                    <span className="text-[10px] font-bold text-primary">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      {exp.company}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{exp.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                {"I'm the person teams call when automation is brittle, AI tools are unreliable, and backend architecture can't keep up. I deliver production systems with clear ownership and no duct tape."}
              </p>
              <p>
                {"Every engagement starts with an audit, an architecture blueprint, and a phased delivery plan. No black boxes or lock-in—you own the code, integrations, and deployment runbooks."}
              </p>
              <p>
                {"I've built systems handling 50,000+ daily events, agents qualifying thousands of leads, and workflow engines that replaced entire manual teams—running at 99.9% uptime without hand-holding."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-secondary/80 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social links + CTA */}
            <div className="mt-2 flex flex-col gap-5 border-t border-border/30 pt-6">
              <div className="flex flex-wrap items-center gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="sm"
                  asChild
                  className="gap-2 rounded-lg bg-foreground px-5 text-background hover:bg-foreground/90"
                >
                  <a
                    href="https://calendly.com/vishnuvardhanburri19/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Architecture Audit Call
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2 rounded-lg border-border/50 px-5 hover:bg-secondary"
                >
                  <a
                    href="https://www.linkedin.com/in/vishnuvardhanburri/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
