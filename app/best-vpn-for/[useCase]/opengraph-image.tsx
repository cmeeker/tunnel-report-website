import { useCaseGuideMap, type UseCaseSlug } from "@/lib/content/use-cases";
import { buildOgImage } from "@/lib/seo/og";

export const alt = "Best VPN by use case";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ useCase: string }> };

export default async function Image({ params }: Props) {
  const { useCase } = await params;
  const guide = useCaseGuideMap[useCase as UseCaseSlug];

  return buildOgImage({
    title: guide?.title ?? "Best VPN by Use Case",
    subtitle: guide?.description.slice(0, 125) ?? "Independent VPN recommendations by use case",
    badge: "Use Case Guide · 2026",
  });
}
