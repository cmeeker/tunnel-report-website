import { buildOgImage } from "@/lib/seo/og";

export const alt = "Tunnel Report Methodology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    title: "Tunnel Report Methodology: How We Test and Score VPNs",
    badge: "Methodology",
  });
}

