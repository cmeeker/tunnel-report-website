import { comparisonMap, comparisons } from "@/lib/content/comparisons";
import { guideMap, guides } from "@/lib/content/guides";
import { providerMap, providers } from "@/lib/content/providers";
import { useCaseGuideMap, useCaseGuides, type UseCaseSlug } from "@/lib/content/use-cases";
import { citySlugs } from "@/lib/site";

import type { RelatedLink } from "@/components/RelatedLinks";

export function getReviewRelatedLinks(slug: string): RelatedLink[] {
  const provider = providerMap[slug];
  if (!provider) return [];

  const links: RelatedLink[] = [
    { href: "/best-vpns", label: "Best VPNs of 2026 — Full Rankings" },
    ...provider.relatedCompareSlugs
      .filter((s) => comparisonMap[s])
      .slice(0, 2)
      .map((s) => ({
        href: `/compare/${s}`,
        label: comparisonMap[s].title.replace(/ 2026:.*/, ""),
      })),
  ];

  const otherReviews = providers
    .filter((p) => p.slug !== slug)
    .slice(0, 2)
    .map((p) => ({ href: `/reviews/${p.slug}`, label: `${p.name} Review` }));

  const city = citySlugs[0];
  return [
    ...links.slice(0, 4),
    ...otherReviews,
    { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
    { href: "/guides/what-is-a-no-logs-vpn", label: "What Is a No-Logs VPN?" },
    { href: `/vpn/${city}`, label: `Best VPN for ${city.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}` },
  ].filter((l, i, arr) => arr.findIndex((x) => x.href === l.href) === i);
}

export function getCompareRelatedLinks(slug: string): RelatedLink[] {
  const comparison = comparisonMap[slug];
  if (!comparison) return [];

  return [
    { href: `/reviews/${comparison.leftSlug}`, label: `Full ${providerMap[comparison.leftSlug]?.name ?? comparison.leftSlug} Review` },
    { href: `/reviews/${comparison.rightSlug}`, label: `Full ${providerMap[comparison.rightSlug]?.name ?? comparison.rightSlug} Review` },
    { href: "/best-vpns", label: "Best VPN Rankings 2026" },
    { href: "/best-vpn-for/budget", label: "Best Cheap VPN" },
    { href: "/guides/how-we-test-vpn-speed", label: "How We Test VPN Speed" },
    ...comparisons
      .filter((c) => c.slug !== slug)
      .slice(0, 2)
      .map((c) => ({ href: `/compare/${c.slug}`, label: c.title.replace(/ 2026:.*/, "") })),
  ];
}

export function getCityRelatedLinks(citySlug: string): RelatedLink[] {
  const cityName = citySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return [
    { href: "/best-vpns", label: "Best VPNs of 2026" },
    { href: "/reviews/nordvpn", label: "NordVPN Full Review" },
    { href: "/compare/nordvpn-vs-purevpn", label: "NordVPN vs PureVPN" },
    { href: "/best-vpn-for/streaming", label: "Best VPN for Streaming" },
    { href: "/guides/wireguard-vs-openvpn", label: "WireGuard vs OpenVPN" },
    ...citySlugs
      .filter((s) => s !== citySlug)
      .slice(0, 2)
      .map((s) => ({
        href: `/vpn/${s}`,
        label: `Best VPN for ${s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}`,
      })),
    { href: `/vpn/${citySlug}`, label: `Best VPN for ${cityName}` },
  ].filter((l, i, arr) => arr.findIndex((x) => x.href === l.href) === i);
}

export function getBestVpnsRelatedLinks(): RelatedLink[] {
  return [
    { href: "/reviews/nordvpn", label: "NordVPN Full Review" },
    { href: "/reviews/surfshark", label: "Surfshark Review" },
    { href: "/compare/nordvpn-vs-expressvpn", label: "NordVPN vs ExpressVPN" },
    { href: "/compare/surfshark-vs-nordvpn", label: "Surfshark vs NordVPN" },
    { href: "/best-vpn-for/streaming", label: "Best VPN for Streaming" },
    { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
    { href: "/vpn/new-york", label: "Best VPN for New York" },
    { href: "/vpn/los-angeles", label: "Best VPN for Los Angeles" },
  ];
}

export function getUseCaseRelatedLinks(slug: UseCaseSlug): RelatedLink[] {
  const guide = useCaseGuideMap[slug];
  const pick = guide ? providerMap[guide.primaryPick] : undefined;

  return [
    { href: "/best-vpns", label: "Best VPN Rankings 2026" },
    ...(pick ? [{ href: `/reviews/${pick.slug}`, label: `${pick.name} Full Review` }] : []),
    { href: "/compare/surfshark-vs-nordvpn", label: "Surfshark vs NordVPN" },
    { href: "/compare/nordvpn-vs-expressvpn", label: "NordVPN vs ExpressVPN" },
    ...useCaseGuides
      .filter((item) => item.slug !== slug)
      .slice(0, 2)
      .map((item) => ({ href: `/best-vpn-for/${item.slug}`, label: item.title })),
    { href: "/vpn/new-york", label: "Best VPN for New York" },
  ];
}

export function getAlternativesRelatedLinks(slug: string): RelatedLink[] {
  const provider = providerMap[slug];
  const similarReviews = providers
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => ({ href: `/reviews/${item.slug}`, label: `${item.name} Review` }));

  return [
    { href: "/best-vpns", label: "Best VPN Rankings 2026" },
    ...(provider ? [{ href: `/reviews/${provider.slug}`, label: `${provider.name} Review` }] : []),
    ...similarReviews,
    { href: "/best-vpn-for/budget", label: "Best Cheap VPN" },
    { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
  ].filter((link, index, arr) => arr.findIndex((item) => item.href === link.href) === index);
}

export function getGuideRelatedLinks(slug: string): RelatedLink[] {
  const guide = guideMap[slug];
  if (!guide) return getBestVpnsRelatedLinks();

  return [
    { href: "/best-vpns", label: "Best VPN Rankings 2026" },
    ...guide.relatedReviewSlugs
      .filter((providerSlug) => providerMap[providerSlug])
      .slice(0, 3)
      .map((providerSlug) => ({
        href: `/reviews/${providerSlug}`,
        label: `${providerMap[providerSlug].name} Review`,
      })),
    ...guide.relatedCompareSlugs
      .filter((comparisonSlug) => comparisonMap[comparisonSlug])
      .slice(0, 2)
      .map((comparisonSlug) => ({
        href: `/compare/${comparisonSlug}`,
        label: comparisonMap[comparisonSlug].title.replace(/ 2026:.*/, ""),
      })),
    ...guides
      .filter((item) => item.slug !== slug)
      .slice(0, 2)
      .map((item) => ({ href: `/guides/${item.slug}`, label: item.title })),
  ];
}
