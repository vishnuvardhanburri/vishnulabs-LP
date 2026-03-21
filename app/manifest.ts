import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VishnuLabs",
    short_name: "VishnuLabs",
    description: "Stealth Vault is the AI usage control layer that blocks sensitive data before it reaches AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      {
        src: "/vishnulabs-logo-mark.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/vishnulabs-logo-mark.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  }
}
