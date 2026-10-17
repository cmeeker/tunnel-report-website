import { buildOgImage } from "@/lib/seo/og";

export const alt = "Best Password Managers 2026: Prices & Specs Compared";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "Best Password Managers 2026: Prices & Specs Compared",
    subtitle: "Published pricing, encryption, and audits. No hands-on scores.",
    badge: "Published specs",
  });
}
