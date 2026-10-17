import { buildOgImage } from "@/lib/seo/og";

export const alt = "NordPass vs Bitwarden 2026: Price, Security, Fit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "NordPass vs Bitwarden 2026: Price, Security, Fit",
    subtitle: "Published pricing, encryption, audits, and free plans.",
    badge: "Comparison",
  });
}
