import Image from "next/image";

type EditorialChartProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function EditorialChart({ src, alt, width, height }: EditorialChartProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      unoptimized
      className="h-auto max-w-full"
    />
  );
}

export const bestVpnsChart = {
  src: "/charts/best-vpns-chart.webp",
  width: 1200,
  height: 675,
  alt: "Horizontal bar chart of Tunnel Report's 2026 VPN scores out of 5: NordVPN 4.8 (highlighted, ranked first), Surfshark 4.6, ExpressVPN 4.5, Proton VPN 4.4, PureVPN 4.2. Source: Tunnel Report editorial scores, as of April 8, 2026.",
} as const;

export const nordvpnReviewChart = {
  src: "/charts/reviews-nordvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Bar chart of NordVPN median speeds in Tunnel Report testing on a 1 Gbps line: 905 Mbps US domestic, 720 Mbps US to London, 685 Mbps US to Frankfurt, and a highlighted domestic figure of 780 Mbps. As of April 8, 2026.",
} as const;

export const nordvpnVsProtonvpnChart = {
  src: "/charts/compare-nordvpn-vs-protonvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of median speeds from Tunnel Report's April 2026 tests, NordVPN vs Proton VPN: domestic 905 vs 650 Mbps, US to London 720 vs 520 Mbps, US to Frankfurt 685 vs 490 Mbps, 780 vs 480 Mbps. NordVPN is highlighted as faster in every test. Page updated September 1, 2026.",
} as const;

export const nordvpnVsPurevpnChart = {
  src: "/charts/compare-nordvpn-vs-purevpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of NordVPN vs PureVPN median speeds and intro prices. US domestic: NordVPN 905 Mbps, PureVPN 610 Mbps. Transatlantic: NordVPN 720 Mbps, PureVPN 430 Mbps. Intro price: NordVPN $3.49/mo (USD, 2 yrs + 3 mo) and PureVPN $2.15/mo (USD, 2 yrs + 3 mo). Speeds from Tunnel Report, April 2026. Prices from nordvpn.com and purevpn.com as of Oct 15, 2026.",
} as const;

export const nordvpnVsExpressvpnChart = {
  src: "/charts/compare-nordvpn-vs-expressvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of NordVPN vs ExpressVPN median speeds and intro prices. US domestic: NordVPN 905 Mbps, ExpressVPN 700 Mbps. Transatlantic: NordVPN 720 Mbps, ExpressVPN 580 Mbps. Intro price: NordVPN $3.49/mo (USD, 2 yrs + 3 mo) and ExpressVPN $4.99/mo (USD, 12 + 3 mo). Speeds from Tunnel Report, April 2026. Prices from nordvpn.com and expressvpn.com as of Oct 15, 2026.",
} as const;

export const surfsharkVsNordvpnChart = {
  src: "/charts/compare-surfshark-vs-nordvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of Surfshark vs NordVPN median speeds and intro prices. US domestic: Surfshark 820 Mbps, NordVPN 905 Mbps. Transatlantic: Surfshark 640 Mbps, NordVPN 720 Mbps. Intro price: Surfshark $2.49/mo (USD, 24 + 3 mo) and NordVPN $3.49/mo (USD, 2 yrs + 3 mo). Speeds from Tunnel Report, April 2026. Prices from surfshark.com and nordvpn.com as of Oct 15, 2026.",
} as const;

export const renewalPricesChart = {
  src: "/charts/guides-vpn-renewal-prices-chart.webp",
  width: 1200,
  height: 760,
  alt: "Table of six USD VPN plans with intro price, renewal, and a check date on each row. NordVPN Basic 2 yr + 3 mo: $3.49/mo ($94.23 for 27 months), renews at $139.08/year, checked Oct 15, 2026. ExpressVPN Basic 12 mo + 3 mo: $4.99/mo ($74.85 for 15 months), renews at $99.95/year, checked Oct 15, 2026. Surfshark Starter 24 mo + 3 mo: $2.49/mo ($67.23 for 27 months), renewal not listed on the pricing page, checked Oct 15, 2026. PureVPN Standard 2 yr + 3 mo: $2.15/mo ($58.20 for 27 months), renews at $47.95/year, checked Oct 15, 2026. Proton VPN Plus 2 yr: $3.49/mo ($83.76 for 24 months), renews at $83.88 every 12 months, checked Oct 6, 2026. hide.me Premium 24 mo + 2 mo: $2.69/mo ($69.99 for 26 months), renews at $69.99 every 26 months, checked Oct 6, 2026.",
} as const;
