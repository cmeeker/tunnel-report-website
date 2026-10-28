import { buildOgImage } from "@/lib/seo/og";

export const alt = "Tunnel Report VPN Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "VPN Guides",
    subtitle: "VPN guides based on published specs, pricing and third-party reports.",
    badge: "Guides · 2026",
  });
}
