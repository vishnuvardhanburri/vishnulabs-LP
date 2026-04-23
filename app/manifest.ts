import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Xavira Tech Labs",
    short_name: "Xavira Tech Labs",
    description: "Xavira Tech Labs fixes missed leads, no-shows, and AI data exposure for teams handling real revenue and real data.",
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
