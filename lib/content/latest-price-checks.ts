export type PriceCheckLink = {
  href: string;
  label: string;
};

/**
 * Pages refreshed in PR #27. Labels are each page's visible H1.
 * Keep "trap", "scam", and "deceptive" out of these labels.
 */
export const latestPriceChecks: PriceCheckLink[] = [
  {
    href: "/guides/vpn-renewal-pricing-traps",
    label: "VPN renewal increases: what you pay after the intro deal",
  },
  {
    href: "/best-vpns",
    label: "Best VPNs of 2026: Compared on Published Specs, Pricing and Third-Party Reports",
  },
  {
    href: "/reviews/nordvpn",
    label: "NordVPN Review 2026: Overview, Privacy, and Pricing Breakdown",
  },
  {
    href: "/compare/nordvpn-vs-protonvpn",
    label: "NordVPN vs Proton VPN 2026: Features, Privacy and Pricing Compared",
  },
  {
    href: "/compare/nordvpn-vs-purevpn",
    label: "NordVPN vs PureVPN 2026: Head-to-Head Comparison",
  },
  {
    href: "/compare/nordvpn-vs-expressvpn",
    label: "NordVPN vs ExpressVPN 2026: Which Premium VPN Fits You?",
  },
  {
    href: "/compare/surfshark-vs-nordvpn",
    label: "Surfshark vs NordVPN 2026: Value vs Performance",
  },
];

export function relatedPriceGuides(): PriceCheckLink[] {
  return latestPriceChecks.filter((link) => link.href !== "/best-vpns");
}
