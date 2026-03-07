import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VishnuLabs",
    short_name: "VishnuLabs",
    description: "AI automation systems and private AI vault infrastructure for US SMB teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7ed",
    theme_color: "#f97316",
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
