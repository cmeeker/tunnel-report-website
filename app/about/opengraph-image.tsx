import { buildOgImage } from "@/lib/seo/og";

export const alt = "About Tunnel Report";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "About Tunnel Report: Team, Methodology, and Editorial Standards",
    badge: "About",
  });
}

