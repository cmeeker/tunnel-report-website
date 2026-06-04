import { cityGuideMap } from "@/lib/content/cities";
import { buildOgImage } from "@/lib/seo/og";

export const alt = "City VPN Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ city: string }> };

export default async function Image({ params }: Props) {
  const { city } = await params;
  const guide = cityGuideMap[city as keyof typeof cityGuideMap];
  return buildOgImage({
    title: guide ? `Best VPN for ${guide.city}` : "City VPN Guide",
    subtitle: guide
      ? `Local ISP data and privacy analysis for ${guide.region}`
      : "Localized VPN guidance",
    badge: "City Guide · 2026",
  });
}
