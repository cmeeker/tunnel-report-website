import type { RelatedCard } from "@/components/RelatedCards";
import { blackFridayHub, nordBlackFriday, surfsharkBlackFriday } from "@/lib/content/black-friday-2026";
import { comparisonMap, comparisons } from "@/lib/content/comparisons";
import { guideMap } from "@/lib/content/guides";
import { providerMap, providerSlugs } from "@/lib/content/providers";
import { getSiteRoutes } from "@/lib/seo/routes";
import { citySlugs } from "@/lib/site";

type RouteCard = Omit<RelatedCard, "description"> & { description: string };

const siteRouteCardMap: Map<string, RouteCard> = new Map(
  getSiteRoutes().map((route) => [
    route.path,
    {
      href: route.path,
      title: route.title,
      description: route.description,
    },
  ]),
);

function cardFromRoute(path: string): RelatedCard | null {
  const route = siteRouteCardMap.get(path);
  if (!route) return null;
  return { href: route.href, title: route.title, description: route.description };
}

function cardFromGuideSlug(slug: string): RelatedCard | null {
  const guide = guideMap[slug];
  if (!guide) return null;
  return { href: `/guides/${slug}`, title: guide.title, description: guide.description };
}

function cardFromComparisonSlug(slug: string): RelatedCard | null {
  const comparison = comparisonMap[slug];
  if (!comparison) return null;
  return { href: `/compare/${slug}`, title: comparison.title, description: comparison.description };
}

function isRelatedCard(value: RelatedCard | null | undefined): value is RelatedCard {
  return Boolean(value);
}

function uniqueByHref(cards: RelatedCard[]) {
  const seen = new Set<string>();
  return cards.filter((card) => {
    if (seen.has(card.href)) return false;
    seen.add(card.href);
    return true;
  });
}

function pickFirst<T>(items: T[], max: number) {
  return items.length <= max ? items : items.slice(0, max);
}

function prioritizedCompareSlugsForProvider(providerSlug: string): string[] {
  const orphans: string[] = [];
  if (providerSlug === "expressvpn" || providerSlug === "purevpn") orphans.push("expressvpn-vs-purevpn");
  if (providerSlug === "nordvpn" || providerSlug === "mullvad") orphans.push("nordvpn-vs-mullvad");

  const all = comparisons
    .filter((c) => c.leftSlug === providerSlug || c.rightSlug === providerSlug)
    .map((c) => c.slug);

  const ordered = [...orphans, ...all];
  const seen = new Set<string>();
  return ordered.filter((slug) => {
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

function compareSlugsForProvider(providerSlug: string) {
  const preferred = prioritizedCompareSlugsForProvider(providerSlug);
  const seen = new Set<string>();
  const result: string[] = [];
  for (const slug of preferred) {
    if (seen.has(slug)) continue;
    if (!comparisonMap[slug]) continue;
    seen.add(slug);
    result.push(slug);
  }
  return result;
}

export function getAlternativesRelatedCards(providerSlug: string): RelatedCard[] {
  const cards: RelatedCard[] = [];

  const review = cardFromRoute(`/reviews/${providerSlug}`);
  if (review) cards.push(review);

  const compareCards = pickFirst(compareSlugsForProvider(providerSlug).map(cardFromComparisonSlug).filter(isRelatedCard), 2);
  cards.push(...compareCards);

  if (providerSlug === "nordvpn") {
    const deal = cardFromRoute(nordBlackFriday.path);
    if (deal) cards.push(deal);
  }
  if (providerSlug === "surfshark") {
    const deal = cardFromRoute(surfsharkBlackFriday.path);
    if (deal) cards.push(deal);
  }

  const otherAlternativeSlugs = providerSlugs.filter((slug) => slug !== providerSlug);
  const mustInclude = ["hideme"].filter((slug) => slug !== providerSlug);
  const orderedOtherSlugs = [
    ...mustInclude.filter((slug) => otherAlternativeSlugs.includes(slug)),
    ...otherAlternativeSlugs.filter((slug) => !mustInclude.includes(slug)),
  ];
  const otherAlternatives = orderedOtherSlugs
    .map((slug) => cardFromRoute(`/alternatives/${slug}`))
    .filter(isRelatedCard);
  cards.push(...pickFirst(otherAlternatives, 4));

  return pickFirst(uniqueByHref(cards), 8);
}

export function getCompareRelatedCards(matchupSlug: string): RelatedCard[] {
  const comparison = comparisonMap[matchupSlug];
  if (!comparison) return [];

  const cards: RelatedCard[] = [];

  const leftReview = cardFromRoute(`/reviews/${comparison.leftSlug}`);
  const rightReview = cardFromRoute(`/reviews/${comparison.rightSlug}`);
  const leftAlt = cardFromRoute(`/alternatives/${comparison.leftSlug}`);
  const rightAlt = cardFromRoute(`/alternatives/${comparison.rightSlug}`);

  if (leftReview) cards.push(leftReview);
  if (rightReview) cards.push(rightReview);
  if (leftAlt) cards.push(leftAlt);
  if (rightAlt) cards.push(rightAlt);

  const relatedCompareCandidates = comparisons
    .filter((c) => c.slug !== matchupSlug)
    .filter((c) => {
      const involvesLeft = c.leftSlug === comparison.leftSlug || c.rightSlug === comparison.leftSlug;
      const involvesRight = c.leftSlug === comparison.rightSlug || c.rightSlug === comparison.rightSlug;
      return involvesLeft || involvesRight;
    })
    .map((c) => c.slug);

  const wantsNordMullvad =
    matchupSlug !== "nordvpn-vs-mullvad" &&
    (comparison.leftSlug === "nordvpn" ||
      comparison.rightSlug === "nordvpn" ||
      comparison.leftSlug === "mullvad" ||
      comparison.rightSlug === "mullvad");
  const wantsExpressPure =
    matchupSlug !== "expressvpn-vs-purevpn" &&
    (comparison.leftSlug === "expressvpn" ||
      comparison.rightSlug === "expressvpn" ||
      comparison.leftSlug === "purevpn" ||
      comparison.rightSlug === "purevpn");

  const prioritized = [
    ...(wantsNordMullvad ? ["nordvpn-vs-mullvad"] : []),
    ...(wantsExpressPure ? ["expressvpn-vs-purevpn"] : []),
    ...relatedCompareCandidates,
  ]
    .filter((slug) => slug !== matchupSlug)
    .filter((slug, index, arr) => arr.indexOf(slug) === index);

  cards.push(...pickFirst(prioritized.map(cardFromComparisonSlug).filter(isRelatedCard), 4));

  return pickFirst(uniqueByHref(cards), 8);
}

export function getReviewRelatedCards(providerSlug: string): RelatedCard[] {
  const provider = providerMap[providerSlug];
  if (!provider) return [];

  const cards: RelatedCard[] = [];

  const alternatives = cardFromRoute(`/alternatives/${providerSlug}`);
  if (alternatives) cards.push(alternatives);

  const compares = pickFirst(compareSlugsForProvider(providerSlug).map(cardFromComparisonSlug).filter(isRelatedCard), 3);
  cards.push(...compares);

  const renewalGuideSlug =
    providerSlug === "surfshark"
      ? "surfshark-renewal-price"
      : providerSlug === "protonvpn"
        ? "protonvpn-renewal-price"
        : "vpn-renewal-pricing-traps";
  const renewalGuide = cardFromGuideSlug(renewalGuideSlug);
  if (renewalGuide) cards.push(renewalGuide);

  if (providerSlug === "nordvpn") {
    const deal = cardFromRoute(nordBlackFriday.path);
    if (deal) cards.push(deal);
  }
  if (providerSlug === "surfshark") {
    const deal = cardFromRoute(surfsharkBlackFriday.path);
    if (deal) cards.push(deal);
  }

  // A small shared hub link helps distribute inbound links without introducing new copy.
  const hub = cardFromRoute(blackFridayHub.path);
  if (hub && (providerSlug === "nordvpn" || providerSlug === "surfshark")) cards.push(hub);

  return pickFirst(uniqueByHref(cards), 8);
}

export function getCitySiblingCards(citySlug: string): RelatedCard[] {
  const cards: RelatedCard[] = [];

  const hub = cardFromRoute("/vpn");
  if (hub) cards.push(hub);

  const mustLink = ["dallas", "atlanta", "denver"].filter((slug) => slug !== citySlug);
  for (const slug of mustLink) {
    const card = cardFromRoute(`/vpn/${slug}`);
    if (card) cards.push(card);
  }

  for (const slug of citySlugs) {
    if (slug === citySlug) continue;
    if (slug === "dallas" || slug === "atlanta" || slug === "denver") continue;
    const card = cardFromRoute(`/vpn/${slug}`);
    if (card) cards.push(card);
    if (cards.length >= 4) break;
  }

  return pickFirst(uniqueByHref(cards), 8);
}

