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
  alt: "Bar chart of NordVPN median speeds in Tunnel Report testing on a 1 Gbps line: 905 Mbps US domestic, 720 Mbps US to London, 685 Mbps US to Frankfurt, and a highlighted domestic speed floor of 780 Mbps. As of April 8, 2026.",
} as const;

export const nordvpnVsProtonvpnChart = {
  src: "/charts/compare-nordvpn-vs-protonvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Grouped bar chart of median speeds from Tunnel Report's April 2026 tests, NordVPN vs Proton VPN: domestic 905 vs 650 Mbps, US to London 720 vs 520 Mbps, US to Frankfurt 685 vs 490 Mbps, speed floor 780 vs 480 Mbps. NordVPN is highlighted as faster in every test. Page updated September 1, 2026.",
} as const;
