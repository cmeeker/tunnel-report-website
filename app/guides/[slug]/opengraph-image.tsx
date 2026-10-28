import { guideMap } from "@/lib/content/guides";
import { buildOgImage } from "@/lib/seo/og";

export const alt = "Tunnel Report VPN Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const guide = guideMap[slug];

  return buildOgImage({
    title: guide?.title ?? "VPN Guide",
    subtitle: "VPN guides based on published specs, pricing and third-party reports.",
    badge: `${guide?.category ?? "Guide"} · 2026`,
  });
}
