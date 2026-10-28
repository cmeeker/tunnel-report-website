import { buildOgImage } from "@/lib/seo/og";

export const alt = "Best VPNs of 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "Best VPNs of 2026",
    subtitle: "Compared on published specs, pricing and third-party reports",
    badge: "Rankings",
  });
}
