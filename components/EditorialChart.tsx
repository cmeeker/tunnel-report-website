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

export const nordvpnVsProtonvpnChart = {
  src: "/charts/compare-nordvpn-vs-protonvpn-chart.webp",
  width: 1200,
  height: 675,
  alt: "Comparison of Nord and Proton based on published specs and pricing.",
} as const;

export const renewalPricesChart = {
  src: "/charts/guides-vpn-renewal-prices-chart.webp",
  width: 1200,
  height: 760,
  alt: "Renewal pricing reminder for NordVPN, ExpressVPN, Surfshark, PureVPN, Proton VPN, and hide.me. See current pricing on each provider's site.",
} as const;
