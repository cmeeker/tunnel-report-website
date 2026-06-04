import {
  AFFILIATE_URLS,
  rankedProviders,
  type Provider,
} from "@/lib/content/providers";

export { AFFILIATE_URLS };

export type VpnTableEntry = {
  name: string;
  speedMbps: number;
  privacy: string;
  pricePerMonth: string;
  score: number;
  href: string;
  partner: string;
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
  };
}

export const rankedVpns: RankedVpn[] = rankedProviders.map(toRankedVpn);

export const homepageComparison: VpnTableEntry[] = rankedVpns
  .filter((v) => ["nordvpn", "purevpn", "surfshark", "expressvpn"].includes(v.slug))
  .map((v) => ({
    name: v.name,
    speedMbps: rankedProviders.find((p) => p.slug === v.slug)!.speedMbps,
    privacy: rankedProviders.find((p) => p.slug === v.slug)!.privacyBlurb,
    pricePerMonth: rankedProviders.find((p) => p.slug === v.slug)!.pricePerMonth,
    score: v.score,
    href: v.ctaHref,
    partner: v.partner,
  }));

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
      "Streaming requires consistent geo-unblocking, low buffering overhead, and stable reconnect behavior when platforms detect VPN traffic. NordVPN and ExpressVPN lead our streaming success rates; Surfshark is a strong budget alternative for US libraries.",
    pickSlug: "nordvpn",
    pickReason: "Highest streaming success rate across Netflix, Hulu, and BBC iPlayer in our April 2026 cycle.",
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
    pickReason: "P2P-optimized servers, RAM-only infrastructure, and the strongest audit track record in our top five.",
  },
  {
    id: "budget",
    title: "Best Cheap VPN in 2026",
    description:
      "Budget buyers face a real tradeoff: introductory pricing versus renewal surprises and speed consistency. Surfshark offers the best value with unlimited devices; PureVPN has the lowest entry price but more variable performance.",
    pickSlug: "surfshark",
    pickReason: "Under $2.50/month entry pricing with unlimited devices and credible audit program.",
  },
  {
    id: "gaming",
    title: "Best VPN for Gaming in 2026",
    description:
      "Gaming VPNs need low latency, stable UDP routing, and minimal packet loss — not just high throughput. NordVPN's speed floor advantage matters most for competitive online play; WireGuard protocol is essential.",
    pickSlug: "nordvpn",
    pickReason: "Highest domestic speed floor (780 Mbps minimum observed) with WireGuard/NordLynx on all platforms.",
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
