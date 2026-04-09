export const siteConfig = {
  name: "Tunnel Report",
  shortName: "TunnelReport",
  url: "https://tunnelreport.com",
  tagline: "Independent VPN Intelligence",
  description:
    "Tunnel Report publishes independent VPN reviews with real speed benchmarks, cited privacy audits, and editorial analysis from security professionals. No pay-to-rank. No sponsored results.",
  locale: "en_US",
  defaultAuthor: "Tunnel Report Security Team",
  updatedDate: "April 8, 2026",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/best-vpns", label: "Best VPNs" },
  { href: "/reviews/nordvpn", label: "NordVPN Review" },
  { href: "/compare/nordvpn-vs-purevpn", label: "Compare" },
  { href: "/vpn/los-angeles", label: "City Guides" },
  { href: "/about", label: "About" },
];

export const citySlugs = [
  "los-angeles",
  "new-york",
  "chicago",
  "houston",
  "miami",
] as const;

export type CitySlug = (typeof citySlugs)[number];
