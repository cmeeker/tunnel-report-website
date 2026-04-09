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

export const citySlugs = [
  "los-angeles",
  "new-york",
  "chicago",
  "houston",
  "miami",
] as const;

export type CitySlug = (typeof citySlugs)[number];

export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
};

export type NavColumn = {
  heading?: string;
  items: NavDropdownItem[];
};

export type PrimaryNavItem = {
  href: string;
  label: string;
  columns?: NavColumn[];
  featured?: {
    label: string;
    href: string;
    description: string;
    badge?: string;
  };
};

export const primaryNav: PrimaryNavItem[] = [
  {
    href: "/best-vpns",
    label: "Best VPNs",
    featured: {
      label: "Best VPNs 2026",
      href: "/best-vpns",
      description: "Our top-ranked providers scored across speed, privacy, jurisdiction, and pricing transparency.",
      badge: "Updated April 2026",
    },
    columns: [
      {
        heading: "By Use Case",
        items: [
          { label: "Best VPN for Streaming", href: "/best-vpns#streaming", description: "No buffering, no geo-blocks" },
          { label: "Best VPN for Privacy", href: "/best-vpns#privacy", description: "Audited no-log policies" },
          { label: "Best VPN for Torrenting", href: "/best-vpns#torrenting", description: "P2P-optimized servers" },
          { label: "Best Cheap VPN 2026", href: "/best-vpns#budget", description: "Under $3/mo, still solid" },
          { label: "Best VPN for Gaming", href: "/best-vpns#gaming", description: "Low latency, stable connections" },
          { label: "Best VPN for Work", href: "/best-vpns#work", description: "Split tunneling + kill switch" },
        ],
      },
    ],
  },
  {
    href: "/reviews/nordvpn",
    label: "Reviews",
    featured: {
      label: "NordVPN Review",
      href: "/reviews/nordvpn",
      description: "In-depth audit of speed benchmarks, privacy policy language, and security architecture.",
      badge: "Verified 2026",
    },
    columns: [
      {
        heading: "Provider Reviews",
        items: [
          { label: "NordVPN", href: "/reviews/nordvpn", description: "Full review + speed data" },
          { label: "ExpressVPN", href: "/reviews/nordvpn", description: "Coming soon", badge: "Soon" },
          { label: "Surfshark", href: "/reviews/nordvpn", description: "Coming soon", badge: "Soon" },
          { label: "Mullvad VPN", href: "/reviews/nordvpn", description: "Coming soon", badge: "Soon" },
          { label: "ProtonVPN", href: "/reviews/nordvpn", description: "Coming soon", badge: "Soon" },
        ],
      },
    ],
  },
  {
    href: "/compare/nordvpn-vs-purevpn",
    label: "Compare",
    featured: {
      label: "NordVPN vs PureVPN",
      href: "/compare/nordvpn-vs-purevpn",
      description: "Head-to-head across 6 scored categories — speed, privacy, price, UX, jurisdiction, and support.",
    },
    columns: [
      {
        heading: "Head-to-Head",
        items: [
          { label: "NordVPN vs PureVPN", href: "/compare/nordvpn-vs-purevpn", description: "Full 6-category breakdown" },
          { label: "NordVPN vs ExpressVPN", href: "/compare/nordvpn-vs-purevpn", description: "Coming soon", badge: "Soon" },
          { label: "Surfshark vs NordVPN", href: "/compare/nordvpn-vs-purevpn", description: "Coming soon", badge: "Soon" },
          { label: "Mullvad vs ProtonVPN", href: "/compare/nordvpn-vs-purevpn", description: "Coming soon", badge: "Soon" },
        ],
      },
    ],
  },
  {
    href: "/vpn/los-angeles",
    label: "City Guides",
    columns: [
      {
        heading: "US Metro Guides",
        items: [
          { label: "Best VPN for Los Angeles", href: "/vpn/los-angeles", description: "ISP: Spectrum, AT&T, Cox" },
          { label: "Best VPN for New York", href: "/vpn/new-york", description: "ISP: Optimum, Verizon, Astound" },
          { label: "Best VPN for Chicago", href: "/vpn/chicago", description: "ISP: Comcast, RCN, AT&T" },
          { label: "Best VPN for Houston", href: "/vpn/houston", description: "ISP: Comcast, AT&T, Spectrum" },
          { label: "Best VPN for Miami", href: "/vpn/miami", description: "ISP: Comcast, AT&T, T-Mobile" },
        ],
      },
    ],
  },
  {
    href: "/about",
    label: "About",
    columns: [
      {
        heading: "The Publication",
        items: [
          { label: "Our Methodology", href: "/about#methodology", description: "How we score and test VPNs" },
          { label: "Editorial Standards", href: "/about#editorial", description: "Independence & disclosure policy" },
          { label: "The Team", href: "/about#team", description: "Meet our three editors" },
          { label: "Affiliate Disclosure", href: "/about#disclosure", description: "How commissions work here" },
        ],
      },
    ],
  },
];

