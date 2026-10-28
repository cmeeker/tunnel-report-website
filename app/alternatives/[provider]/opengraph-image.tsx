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
    title: target ? `Alternatives to ${target.name}` : "Alternatives to VPN services",
    subtitle: target
      ? `Alternatives to ${target.name} compared on published specs, pricing and third-party reports.`
      : "Alternatives to VPN services compared on published specs, pricing and third-party reports.",
    badge: "Alternatives · 2026",
  });
}
