import type { MetadataRoute } from "next"

const siteUrl = "https://vishnulabs.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/automations",
    "/products",
    "/websites",
    "/custom-software",
    "/backup",
    "/services",
    "/industries",
    "/industries/startups",
    "/industries/hospitals-clinics",
    "/industries/transport-logistics",
    "/industries/law-services",
    "/industries/pi-law-firms",
    "/industries/real-estate",
    "/industries/mortgage",
    "/proof",
    "/pricing",
    "/blog",
    "/blog/why-law-firms-lose-leads",
    "/blog/how-to-reduce-clinic-no-shows",
    "/blog/why-follow-ups-fail",
    "/blog/ai-data-leak-risks",
    "/law-firm-intake-system",
    "/reduce-clinic-no-shows",
    "/real-estate-lead-followup",
    "/ai-data-leak-prevention",
    "/best-law-firm-intake-system",
    "/best-ai-data-protection-platform",
    "/sentinel",
    "/sentinel/faq",
    "/services/ai-voice-receptionist",
    "/services/ai-scheduling-reminder",
    "/services/ai-legal-intake",
    "/privacy",
    "/terms",
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route === "/sentinel" ? 0.9 : 0.7,
  }))
}
