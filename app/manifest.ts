import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#00d4aa",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icon", type: "image/png", sizes: "32x32" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
