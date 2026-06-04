import { providerMap } from "@/lib/content/providers";
import { buildOgImage } from "@/lib/seo/og";

export const alt = "VPN Review";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ provider: string }> };

export default async function Image({ params }: Props) {
  const { provider } = await params;
  const p = providerMap[provider];
  return buildOgImage({
    title: p?.reviewTitle ?? "VPN Review",
    subtitle: p?.reviewSummary?.slice(0, 120) ?? "Independent VPN review",
    badge: "Full Review · 2026",
  });
}
