import { buildOgImage } from "@/lib/seo/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: siteConfig.name,
    subtitle: siteConfig.tagline,
    badge: "Independent VPN Testing",
  });
}
