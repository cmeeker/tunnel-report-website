import { buildOgImage } from "@/lib/seo/og";

export const alt = "NordPass Review 2026: Pricing, Security and Specs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "NordPass Review 2026: Pricing, Security and Specs",
    subtitle: "Based on published specs and pricing. No star score.",
    badge: "Review",
  });
}
