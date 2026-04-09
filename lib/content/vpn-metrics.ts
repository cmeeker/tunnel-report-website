export type VpnTableEntry = {
  name: string;
  speedMbps: number;
  privacy: string;
  pricePerMonth: string;
  score: number;
  href: string;
  partner: string;
};

export const AFFILIATE_URLS: Record<string, string> = {
  nordvpn: "https://nordvpn.com/pricing/",
  purevpn: "https://www.purevpn.com/pricing",
  surfshark: "https://surfshark.com/deals",
  expressvpn: "https://www.expressvpn.com/order",
  protonvpn: "https://proton.me/vpn/pricing",
};

export const homepageComparison: VpnTableEntry[] = [
  {
    name: "NordVPN",
    speedMbps: 905,
    privacy: "Panama jurisdiction, independent no-logs audits",
    pricePerMonth: "$3.99",
    score: 4.8,
    href: AFFILIATE_URLS.nordvpn,
    partner: "nordvpn",
  },
  {
    name: "PureVPN",
    speedMbps: 610,
    privacy: "Always-on audit claims, split tunneling options",
    pricePerMonth: "$2.14",
    score: 4.2,
    href: AFFILIATE_URLS.purevpn,
    partner: "purevpn",
  },
  {
    name: "Surfshark",
    speedMbps: 820,
    privacy: "Diskless infrastructure and independent audits",
    pricePerMonth: "$2.49",
    score: 4.6,
    href: AFFILIATE_URLS.surfshark,
    partner: "surfshark",
  },
  {
    name: "ExpressVPN",
    speedMbps: 700,
    privacy: "TrustedServer architecture with regular audits",
    pricePerMonth: "$6.67",
    score: 4.5,
    href: AFFILIATE_URLS.expressvpn,
    partner: "expressvpn",
  },
];

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
};

export const rankedVpns: RankedVpn[] = [
  {
    rank: 1,
    name: "NordVPN",
    score: 4.8,
    quickVerdict: "Best balance of speed, privacy posture, and app consistency in 2026.",
    pros: [
      "Fast WireGuard-based performance under long-distance load",
      "Frequent third-party security and no-logs assessments",
      "Strong malware and tracker blocking controls",
    ],
    cons: ["Price increases at renewal", "UI depth can overwhelm first-time users"],
    speedSummary: "Strong 4K streaming and gaming latency across US and EU exit nodes.",
    privacySummary: "Audit cadence and public incident handling continue to set a high bar.",
    pricingSummary: "Entry promo pricing is competitive; long-term value depends on renewal terms.",
    ctaHref: AFFILIATE_URLS.nordvpn,
    partner: "nordvpn",
  },
  {
    rank: 2,
    name: "Surfshark",
    score: 4.6,
    quickVerdict: "Excellent multi-device value with modern privacy defaults.",
    pros: [
      "Unlimited simultaneous connections",
      "Stable speeds on nearby and transatlantic routes",
      "Mature kill switch behavior on desktop and mobile",
    ],
    cons: ["Occasional CAPTCHAs during search traffic", "Fewer advanced split tunneling options"],
    speedSummary: "High throughput in most metro regions with minimal startup delay.",
    privacySummary: "Solid security architecture with ongoing external validation.",
    pricingSummary: "Entry plan is among the most affordable in this group.",
    ctaHref: AFFILIATE_URLS.surfshark,
    partner: "surfshark",
  },
  {
    rank: 3,
    name: "ExpressVPN",
    score: 4.5,
    quickVerdict: "Strong reliability and polished apps, but often priced above peers.",
    pros: [
      "Consistently stable apps and straightforward onboarding",
      "Reliable geo-unblocking in major streaming regions",
      "Good support quality with clear setup guides",
    ],
    cons: ["Higher monthly equivalent price", "Fewer customization controls for power users"],
    speedSummary: "Very stable for streaming and general browsing with predictable routing.",
    privacySummary: "Transparent trust-center messaging and regular security communications.",
    pricingSummary: "Premium positioning can still make sense for users prioritizing simplicity.",
    ctaHref: AFFILIATE_URLS.expressvpn,
    partner: "expressvpn",
  },
  {
    rank: 4,
    name: "Proton VPN",
    score: 4.4,
    quickVerdict: "Best for privacy-focused users who want transparency over aggressive promos.",
    pros: [
      "Strong public privacy mission and open-source posture",
      "Well-documented security practices",
      "Free tier useful for low-risk testing",
    ],
    cons: ["Smaller streaming success footprint", "Premium plans can feel complex"],
    speedSummary: "Good peak speeds, with variability under congested routes.",
    privacySummary: "Strong transparency culture and technical documentation quality.",
    pricingSummary: "Value is strongest for users already in the Proton ecosystem.",
    ctaHref: AFFILIATE_URLS.protonvpn,
    partner: "protonvpn",
  },
  {
    rank: 5,
    name: "PureVPN",
    score: 4.2,
    quickVerdict: "Feature-rich budget option with improving consistency.",
    pros: [
      "Aggressive introductory pricing",
      "Large server footprint marketing",
      "Useful split tunneling and protocol options",
    ],
    cons: ["Speed consistency varies by region", "Trust recovery still in progress"],
    speedSummary: "Adequate for HD streaming and typical remote-work traffic.",
    privacySummary: "Current trust profile is better than legacy perception, but still monitored closely.",
    pricingSummary: "Budget-friendly entry makes it attractive for price-sensitive users.",
    ctaHref: AFFILIATE_URLS.purevpn,
    partner: "purevpn",
  },
];
