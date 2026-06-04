import { comparisonMap } from "@/lib/content/comparisons";
import { buildOgImage } from "@/lib/seo/og";

export const alt = "VPN Comparison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ matchup: string }> };

export default async function Image({ params }: Props) {
  const { matchup } = await params;
  const c = comparisonMap[matchup];
  return buildOgImage({
    title: c?.title ?? "VPN Comparison",
    subtitle: c?.intro?.slice(0, 120) ?? "Head-to-head VPN comparison",
    badge: "Comparison · 2026",
  });
}
