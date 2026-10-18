import { expressBestVpnsPaidPick, expressHomePaidPick, type PaidPickSpec } from "@/lib/content/paid-picks";
import {
  AFFILIATE_URLS,
  rankedProviders,
  type Provider,
  providerMap,
} from "@/lib/content/providers";

export { AFFILIATE_URLS };

export type VpnTableEntry = {
  slug: string;
  name: string;
  speedMbps: number;
  privacy: string;
  pricePerMonth: string;
  score: number;
  href: string;
  partner: string;
  ctaLabel?: string;
  isAffiliate?: boolean;
  paidPick?: PaidPickSpec;
};

export type RankedVpn = {
  rank: number;
  name: string;
  score: number;
  quickVerdict: string;
  pros: string[];
  cons: string[];
  speedSummary: string;
  privacySummary: string;
  pricingSummary: string;
  ctaHref: string;
  partner: string;
  slug: string;
  paidPick?: PaidPickSpec;
};

function toRankedVpn(p: Provider): RankedVpn {
  const href = p.affiliateKey ? AFFILIATE_URLS[p.affiliateKey] : "#";
  return {
    rank: p.rank,
    name: p.name,
    score: p.score,
    quickVerdict: p.quickVerdict,
    pros: p.pros,
    cons: p.cons,
    speedSummary: p.speedSummary,
    privacySummary: p.privacySummary,
    pricingSummary: p.pricingSummary,
    ctaHref: href,
    partner: p.affiliateKey ?? p.slug,
    slug: p.slug,
    paidPick: p.slug === "expressvpn" ? expressBestVpnsPaidPick : undefined,
  };
}

export const rankedVpns: RankedVpn[] = rankedProviders.map(toRankedVpn);

const HOMEPAGE_COMPARISON_SLUGS = [
  "nordvpn",
  "surfshark",
  "expressvpn",
  "protonvpn",
  "purevpn",
  "hideme",
  "mullvad",
] as const;

const HOMEPAGE_PRICE_COPY: Record<(typeof HOMEPAGE_COMPARISON_SLUGS)[number], string> = {
  nordvpn:
    "$3.49/mo intro (USD) on the 2-year + 3-month Basic plan: $94.23 for the first 27 months. Renews at $139.08/year.",
  surfshark:
    "$2.49/mo intro (USD) on the 24-month + 3-month Starter plan: $67.23 for the first 27 months (VAT may apply). Renewal price isn't listed on Surfshark's pricing page; check at checkout.",
  expressvpn:
    "$4.99/mo intro (USD) on the 12-month + 3-month Basic plan: $74.85 for the first 15 months. Renews at $99.95/year.",
  protonvpn:
    "$3.49/mo intro (USD) on the 2-year VPN Plus plan: $83.76 for the first 24 months. Renews at $83.88 every 12 months.",
  purevpn:
    "$2.15/mo intro (USD) on the 2-year + 3-month Standard plan: $58.20 for 27 months. Renews at $47.95/year.",
  hideme:
    "$2.69/mo (USD) on the 24-month + 2-month Premium plan: $69.99 every 26 months. No intro rate: it renews at the same price and term.",
  mullvad:
    "€5/mo (EUR, incl. VAT) on any term (1 month, 1 year or 1 decade). No intro rate: same €5/mo at renewal.",
};

export const homepageComparison: VpnTableEntry[] = HOMEPAGE_COMPARISON_SLUGS.map((slug) => {
  const provider = providerMap[slug];
  const isAffiliate = Boolean(provider.affiliateKey);

  return {
    slug: provider.slug,
    name: provider.name,
    speedMbps: provider.speedMbps,
    privacy: provider.privacyBlurb,
    pricePerMonth: HOMEPAGE_PRICE_COPY[slug],
    score: provider.score,
    href: isAffiliate ? AFFILIATE_URLS[provider.affiliateKey as keyof typeof AFFILIATE_URLS] : `/reviews/${provider.slug}`,
    partner: provider.affiliateKey ?? provider.slug,
    isAffiliate,
    ctaLabel: isAffiliate ? "Visit" : "Read review",
    paidPick: slug === "expressvpn" ? expressHomePaidPick : undefined,
  };
});

export type UseCaseId =
  | "streaming"
  | "privacy"
  | "torrenting"
  | "budget"
  | "gaming"
  | "work";

export type UseCaseSection = {
  id: UseCaseId;
  title: string;
  description: string;
  pickSlug: string;
  pickReason: string;
};

export const useCaseSections: UseCaseSection[] = [
  {
    id: "streaming",
    title: "Best VPN for Streaming in 2026",
    description:
      "For streaming, look at server locations, supported devices (Smart TVs, routers) and the provider's refund window, so you can cancel if a service you use doesn't work. NordVPN and ExpressVPN are our top streaming picks based on published specs; Surfshark is our budget pick.",
    pickSlug: "nordvpn",
    pickReason: "",
  },
  {
    id: "privacy",
    title: "Best VPN for Privacy in 2026",
    description:
      "Privacy-first buyers should prioritize audit scope, jurisdiction, open-source clients, and payment anonymity over raw speed. Mullvad and Proton VPN lead this category; NordVPN is the best mainstream option with verified infrastructure audits.",
    pickSlug: "mullvad",
    pickReason: "Anonymous account numbers, cash/crypto payments, and zero affiliate marketing funnel.",
  },
  {
    id: "torrenting",
    title: "Best VPN for Torrenting in 2026",
    description:
      "P2P users need verified no-logs policies, kill switch reliability, and jurisdictions that resist copyright trolling pressure. NordVPN, Mullvad, and Proton VPN all allow P2P; avoid providers with unclear logging history.",
    pickSlug: "nordvpn",
    pickReason: "P2P-optimized servers and RAM-only infrastructure.",
  },
  {
    id: "budget",
    title: "Best Cheap VPN in 2026",
    description:
      "Budget buyers face a real tradeoff: a low first-term price versus a higher renewal price. Surfshark is our budget pick, and its pricing page lists unlimited simultaneous device connections ([Surfshark pricing](https://surfshark.com/pricing), accessed Oct 17, 2026). PureVPN Standard is $2.15/mo on its 2-year plan [purevpn.com/order](https://www.purevpn.com/order), as of Oct 2026.",
    pickSlug: "surfshark",
    pickReason:
      "$2.49/mo on the 2-year Starter plan ($67.23 for the first 27 months) [surfshark.com/pricing](https://surfshark.com/pricing), as of Oct 2026",
  },
  {
    id: "gaming",
    title: "Best VPN for Gaming in 2026",
    description:
      "Gaming VPNs need low latency, stable UDP routing, and minimal packet loss — not just high throughput. For competitive online play, a WireGuard-based protocol matters most.",
    pickSlug: "nordvpn",
    pickReason: "WireGuard-based NordLynx on all platforms.",
  },
  {
    id: "work",
    title: "Best VPN for Remote Work in 2026",
    description:
      "Remote work VPNs need reliable kill switches, split tunneling for corporate apps, and stable connections across network changes. NordVPN and ExpressVPN offer the most mature split-tunnel implementations.",
    pickSlug: "nordvpn",
    pickReason: "Mature kill switch, Threat Protection for malware blocking, and consistent performance on video calls.",
  },
];
