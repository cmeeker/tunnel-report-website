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
  alt: "Grouped bar chart of NordVPN vs PureVPN median speeds. US domestic: NordVPN 905 Mbps, PureVPN 610 Mbps. Transatlantic: NordVPN 720 Mbps, PureVPN 430 Mbps. Intro price: see current pricing. Speeds from Tunnel Report, April 2026.",
} as const;

export const nordvpnVsExpressvpnChart = {
  src: "/charts/compare-nordvpn-vs-expressvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of NordVPN vs ExpressVPN median speeds. US domestic: NordVPN 905 Mbps, ExpressVPN 700 Mbps. Transatlantic: NordVPN 720 Mbps, ExpressVPN 580 Mbps. Intro price: see current pricing. Speeds from Tunnel Report, April 2026.",
} as const;

export const surfsharkVsNordvpnChart = {
  src: "/charts/compare-surfshark-vs-nordvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of Surfshark vs NordVPN median speeds. US domestic: Surfshark 820 Mbps, NordVPN 905 Mbps. Transatlantic: Surfshark 640 Mbps, NordVPN 720 Mbps. Intro price: see current pricing. Speeds from Tunnel Report, April 2026.",
} as const;

export const renewalPricesChart = {
  src: "/charts/guides-vpn-renewal-prices-chart.webp",
  width: 1200,
  height: 760,
  alt: "Renewal pricing reminder for NordVPN, ExpressVPN, Surfshark, PureVPN, Proton VPN, and hide.me. See current pricing on each provider's site.",
} as const;
