import type { MetadataRoute } from "next"

const siteUrl = "https://vishnulabs.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/book",
    "/backup",
    "/stealth-vault",
    "/stealth-vault/guide",
    "/industries/pi-law-firms",
    "/industries/real-estate",
    "/industries/mortgage",
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
    priority: route === "/" ? 1 : route === "/stealth-vault" ? 0.9 : 0.7,
  }))
}
