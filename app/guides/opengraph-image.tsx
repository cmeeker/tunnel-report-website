import { buildOgImage } from "@/lib/seo/og";

export const alt = "Tunnel Report VPN Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "VPN Guides",
    subtitle: "Protocols, privacy, pricing, jurisdiction, and speed testing explained",
    badge: "Guides · 2026",
  });
}
