import { buildOgImage } from "@/lib/seo/og";

export const alt = "Best VPNs of 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "Best VPNs of 2026",
    subtitle: "Tested and ranked by our security team — 47 providers evaluated",
    badge: "Rankings",
  });
}
