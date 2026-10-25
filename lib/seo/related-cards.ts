import type { RelatedCard } from "@/components/RelatedCards";
import { blackFridayHub, nordBlackFriday, surfsharkBlackFriday } from "@/lib/content/black-friday-2026";
import { comparisonMap, comparisons } from "@/lib/content/comparisons";
import { cityGuideMap } from "@/lib/content/cities";
import { guideMap } from "@/lib/content/guides";
import { providerMap, providerSlugs } from "@/lib/content/providers";
import { useCaseGuideMap, type UseCaseSlug } from "@/lib/content/use-cases";
import { getSiteRoutes } from "@/lib/seo/routes";
import {
  getAlternativesRelatedLinks,
  getCityRelatedLinks,
  getCompareRelatedLinks,
  getReviewRelatedLinks,
} from "@/lib/seo/related-links";
import { citySlugs, type CitySlug } from "@/lib/site";

const routeTitle = new Map(getSiteRoutes().map((route) => [route.path, route.title]));

function cleanCopy(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s*\[[A-Za-z0-9]+\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentence(text: string): string {
  const cleaned = cleanCopy(text);
  const match = cleaned.match(/^.*?[.!](?:\s|$)/);
  return (match ? match[0] : cleaned).trim();
}

function failsEditorial(text: string): boolean {
  return (
    text.length < 40 ||
    /\bbest\b/i.test(text) ||
    /#1/.test(text) ||
    /\$\s?\d/.test(text) ||
    /\b(test|tested|testing|we checked)\b/i.test(text) ||
    /independent alternatives to/i.test(text) ||
    /localized vpn recommendations/i.test(text)
  );
}

function accept(text: string): string | null {
  const sentence = firstSentence(text);
  return failsEditorial(sentence) ? null : sentence;
}

const fixedDescriptions: Record<string, string> = {
  "/best-vpns":
    "Tunnel Report ranks VPN providers using published specs, pricing, and third-party reports.",
  "/methodology":
    "Tunnel Report ranks VPNs and password managers using published specs, pricing, and third-party reports.",
  "/vpn":
    "City guides for 10 US cities covering local ISPs, privacy points, and which published VPN specs fit each market.",
  "/best-vpn-for/streaming":
    "Streaming notes on server locations, Smart TV and router support, simultaneous connections, and refund windows, from published specs.",
  "/best-vpn-for/budget":
    "Budget notes on full-term cost, renewal pricing, device limits, and which privacy features stay on the discounted plan.",
  "/best-vpn-for/gaming":
    "Gaming notes on WireGuard support, nearby server exits, and router or console setup when a network restricts the connection.",
  "/guides/vpn-renewal-pricing-traps":
    "How introductory VPN pricing differs from the renewal rate for NordVPN, Surfshark, ExpressVPN, Proton VPN, and others, where each provider publishes both.",
  [blackFridayHub.path]:
    "Black Friday 2026 VPN deal tracker for NordVPN, Surfshark, Proton VPN, and hide.me, pointing to current pricing on each provider's site.",
  [nordBlackFriday.path]:
    "What NordVPN's Black Friday 2026 offer covers, which plans it includes, and what to check at renewal on NordVPN's site.",
  [surfsharkBlackFriday.path]:
    "Surfshark's Black Friday 2026 offer covers Surfshark One for 24 months plus 3 extra months, with renewal terms shown at checkout.",
  "/compare/nordpass-vs-bitwarden":
    "NordPass vs Bitwarden on published pricing, encryption, audits, and free plans.",
  "/reviews/nordpass":
    "NordPass review of published specs: XChaCha20 encryption, audits, and who should skip it.",
};

function alternativesDescription(slug: string): string | null {
  const provider = providerMap[slug];
  if (!provider) return null;
  const limitation = cleanCopy(provider.cons[0] ?? "its published limits").replace(/\.$/, "");
  return `Alternatives to ${provider.name} for readers who want a different answer to its main limitation: ${limitation}.`;
}

function cityDescription(slug: string): string | null {
  const city = cityGuideMap[slug as CitySlug];
  if (!city) return null;
  return `VPN notes for ${city.city}, ${city.region}, where common ISPs include ${city.localIsps.join(", ")}.`;
}

function reviewDescription(slug: string): string | null {
  const provider = providerMap[slug];
  if (!provider) return fixedDescriptions[`/reviews/${slug}`] ?? null;
  const fromPage = accept(provider.reviewDescription);
  if (fromPage) return fromPage;
  const jurisdiction = cleanCopy(provider.jurisdiction);
  const protocol = cleanCopy(provider.protocolNote);
  return `${provider.name}, based in ${jurisdiction}, publishes ${protocol} plus its privacy and pricing terms.`;
}

function compareDescription(slug: string): string | null {
  if (fixedDescriptions[`/compare/${slug}`]) return fixedDescriptions[`/compare/${slug}`];
  const comparison = comparisonMap[slug];
  if (!comparison) return null;
  return (
    accept(comparison.description) ??
    accept(comparison.intro) ??
    `${comparison.title.split(":")[0]} on published specs, privacy policy, pricing, and features.`
  );
}

function guideDescription(slug: string): string | null {
  if (fixedDescriptions[`/guides/${slug}`]) return fixedDescriptions[`/guides/${slug}`];
  const guide = guideMap[slug];
  if (!guide) return null;
  return accept(guide.description) ?? accept(guide.dek);
}

function describeUseCase(slug: string): string | null {
  const fixed = fixedDescriptions[`/best-vpn-for/${slug}`];
  if (fixed) return fixed;
  const guide = useCaseGuideMap[slug as UseCaseSlug];
  if (!guide) return null;
  return accept(guide.description) ?? accept(guide.intro);
}

export function factualCardDescription(path: string): string {
  let description: string | null = fixedDescriptions[path] ?? null;

  if (!description && path.startsWith("/alternatives/")) {
    description = alternativesDescription(path.slice("/alternatives/".length));
  } else if (!description && path.startsWith("/vpn/")) {
    description = cityDescription(path.slice("/vpn/".length));
  } else if (!description && path.startsWith("/reviews/")) {
    description = reviewDescription(path.slice("/reviews/".length));
  } else if (!description && path.startsWith("/compare/")) {
    description = compareDescription(path.slice("/compare/".length));
  } else if (!description && path.startsWith("/guides/")) {
    description = guideDescription(path.slice("/guides/".length));
  } else if (!description && path.startsWith("/best-vpn-for/")) {
    description = describeUseCase(path.slice("/best-vpn-for/".length));
  }

  if (!description || failsEditorial(description)) {
    throw new Error(`Related card description for ${path} is missing or failed editorial checks: ${description ?? ""}`);
  }
  return description;
}

function cardFor(path: string): RelatedCard | null {
  const title = routeTitle.get(path);
  if (!title) return null;
  return { href: path, title, description: factualCardDescription(path) };
}

function append(cards: RelatedCard[], paths: string[], limit?: number) {
  let added = 0;
  for (const path of paths) {
    if (limit !== undefined && added >= limit) break;
    if (cards.some((card) => card.href === path)) continue;
    const card = cardFor(path);
    if (!card) continue;
    cards.push(card);
    added += 1;
  }
}

function compareSlugsForProvider(providerSlug: string): string[] {
  const orphans: string[] = [];
  if (providerSlug === "expressvpn" || providerSlug === "purevpn") orphans.push("expressvpn-vs-purevpn");
  if (providerSlug === "nordvpn" || providerSlug === "mullvad") orphans.push("nordvpn-vs-mullvad");

  const involved = comparisons
    .filter((comparison) => comparison.leftSlug === providerSlug || comparison.rightSlug === providerSlug)
    .map((comparison) => comparison.slug);

  const seen = new Set<string>();
  return [...orphans, ...involved].filter((slug) => {
    if (seen.has(slug) || !comparisonMap[slug]) return false;
    seen.add(slug);
    return true;
  });
}

export function getAlternativesRelatedCards(providerSlug: string): RelatedCard[] {
  const cards: RelatedCard[] = [];
  append(
    cards,
    getAlternativesRelatedLinks(providerSlug).map((link) => link.href),
  );
  append(cards, ["/methodology", "/best-vpns", blackFridayHub.path]);
  append(
    cards,
    compareSlugsForProvider(providerSlug).map((slug) => `/compare/${slug}`),
    2,
  );
  if (providerSlug === "nordvpn") append(cards, [nordBlackFriday.path]);
  if (providerSlug === "surfshark") append(cards, [surfsharkBlackFriday.path]);

  const others = providerSlugs.filter((slug) => slug !== providerSlug);
  const ordered = [
    ...others.filter((slug) => slug === "hideme"),
    ...others.filter((slug) => slug !== "hideme"),
  ];
  append(
    cards,
    ordered.map((slug) => `/alternatives/${slug}`),
    4,
  );
  return cards;
}

export function getCompareRelatedCards(matchupSlug: string): RelatedCard[] {
  const comparison = comparisonMap[matchupSlug];
  if (!comparison) return [];

  const base = comparison.relatedLinks ?? getCompareRelatedLinks(matchupSlug);
  const cards: RelatedCard[] = [];
  append(
    cards,
    base.map((link) => link.href),
  );
  append(cards, [
    `/reviews/${comparison.leftSlug}`,
    `/reviews/${comparison.rightSlug}`,
    `/alternatives/${comparison.leftSlug}`,
    `/alternatives/${comparison.rightSlug}`,
    "/best-vpns",
    "/methodology",
    "/best-vpn-for/budget",
    "/best-vpn-for/privacy",
    blackFridayHub.path,
  ]);

  const related = comparisons
    .filter((item) => item.slug !== matchupSlug)
    .filter((item) => {
      const slugs = [item.leftSlug, item.rightSlug];
      return slugs.includes(comparison.leftSlug) || slugs.includes(comparison.rightSlug);
    })
    .map((item) => item.slug);

  const wantsNordMullvad =
    matchupSlug !== "nordvpn-vs-mullvad" &&
    [comparison.leftSlug, comparison.rightSlug].some((slug) => slug === "nordvpn" || slug === "mullvad");
  const wantsExpressPure =
    matchupSlug !== "expressvpn-vs-purevpn" &&
    [comparison.leftSlug, comparison.rightSlug].some((slug) => slug === "expressvpn" || slug === "purevpn");

  const prioritized = [
    ...(wantsNordMullvad ? ["nordvpn-vs-mullvad"] : []),
    ...(wantsExpressPure ? ["expressvpn-vs-purevpn"] : []),
    ...related,
  ].filter((slug, index, all) => slug !== matchupSlug && all.indexOf(slug) === index);

  append(
    cards,
    prioritized.map((slug) => `/compare/${slug}`),
    4,
  );
  if (matchupSlug === "nordvpn-vs-protonvpn") append(cards, ["/compare/nordpass-vs-bitwarden"]);
  return cards;
}

export function getReviewRelatedCards(providerSlug: string): RelatedCard[] {
  if (!providerMap[providerSlug]) return [];

  const cards: RelatedCard[] = [];
  append(
    cards,
    getReviewRelatedLinks(providerSlug).map((link) => link.href),
  );
  append(cards, [
    `/alternatives/${providerSlug}`,
    "/methodology",
    "/best-vpns",
    "/best-vpn-for/privacy",
    blackFridayHub.path,
  ]);
  append(
    cards,
    compareSlugsForProvider(providerSlug).map((slug) => `/compare/${slug}`),
    3,
  );

  const renewalGuideSlug =
    providerSlug === "surfshark"
      ? "surfshark-renewal-price"
      : providerSlug === "protonvpn"
        ? "protonvpn-renewal-price"
        : "vpn-renewal-pricing-traps";
  append(cards, [`/guides/${renewalGuideSlug}`]);

  if (providerSlug === "nordvpn") append(cards, [nordBlackFriday.path]);
  if (providerSlug === "surfshark") append(cards, [surfsharkBlackFriday.path]);
  return cards;
}

export function getCitySiblingCards(citySlug: string): RelatedCard[] {
  const cards: RelatedCard[] = [];
  append(
    cards,
    getCityRelatedLinks(citySlug)
      .map((link) => link.href)
      .filter((href) => href !== `/vpn/${citySlug}`),
  );
  append(cards, ["/vpn", "/methodology", "/best-vpns", "/reviews/nordvpn", "/compare/nordvpn-vs-purevpn", blackFridayHub.path]);

  const mustLink = ["dallas", "atlanta", "denver"].filter((slug) => slug !== citySlug);
  append(
    cards,
    mustLink.map((slug) => `/vpn/${slug}`),
  );

  append(
    cards,
    citySlugs.filter((slug) => slug !== citySlug && !mustLink.includes(slug)).map((slug) => `/vpn/${slug}`),
    2,
  );
  return cards;
}
