import { providerMap } from "@/lib/content/providers";
import { buildOgImage } from "@/lib/seo/og";

export const alt = "VPN alternatives";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ provider: string }> };

export default async function Image({ params }: Props) {
  const { provider } = await params;
  const target = providerMap[provider];

  return buildOgImage({
    title: target ? `Best ${target.name} Alternatives` : "Best VPN Alternatives",
    subtitle: "Independent picks based on speed, privacy, pricing, and real-world usability",
    badge: "Alternatives · 2026",
  });
}
