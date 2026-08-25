export type CitationSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  year: number;
  retrievedAt: string;
};

export const citationSources: Record<string, CitationSource> = {
  S1: {
    id: "S1",
    title: "2023 Internet Crime Report",
    publisher: "FBI Internet Crime Complaint Center (IC3)",
    url: "https://www.ic3.gov/AnnualReport/Reports/2023_ic3report.pdf",
    year: 2024,
    retrievedAt: "April 8, 2026",
  },
  S2: {
    id: "S2",
    title: "2023 Annual Data Breach Report",
    publisher: "Identity Theft Resource Center",
    url: "https://www.idtheftcenter.org/wp-content/uploads/2024/01/ITRC_2023-Annual-Data-Breach-Report.pdf",
    year: 2024,
    retrievedAt: "April 8, 2026",
  },
  S3: {
    id: "S3",
    title: "Freedom on the Net 2024: The Struggle for Trust Online",
    publisher: "Freedom House",
    url: "https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online/",
    year: 2024,
    retrievedAt: "April 8, 2026",
  },
  S4: {
    id: "S4",
    title: "Consumer Broadband Labels Now Required Nationwide at Points of Sale",
    publisher: "Federal Communications Commission",
    url: "https://www.fcc.gov/document/consumer-broadband-labels-now-required-nationwide-points-sale",
    year: 2024,
    retrievedAt: "April 8, 2026",
  },
  S5: {
    id: "S5",
    title: "NordVPN Pricing",
    publisher: "Nord Security",
    url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=145333&url_id=902",
    year: 2026,
    retrievedAt: "April 8, 2026",
  },
  S6: {
    id: "S6",
    title: "PureVPN Pricing",
    publisher: "PureVPN",
    url: "https://billing.purevpn.com/aff.php?aff=49388038",
    year: 2026,
    retrievedAt: "April 8, 2026",
  },
  S7: {
    id: "S7",
    title: "Surfshark Pricing",
    publisher: "Surfshark",
    url: "https://surfshark.com/deals",
    year: 2026,
    retrievedAt: "April 8, 2026",
  },
  S8: {
    id: "S8",
    title: "ExpressVPN Pricing",
    publisher: "ExpressVPN",
    url: "https://www.expressvpn.com/order",
    year: 2026,
    retrievedAt: "April 8, 2026",
  },
  S9: {
    id: "S9",
    title: "Broadband Consumer Labels",
    publisher: "Federal Communications Commission",
    url: "https://www.fcc.gov/broadband-consumer-labels",
    year: 2026,
    retrievedAt: "April 8, 2026",
  },
  HM1: {
    id: "HM1",
    title: "hide.me VPN (Homepage)",
    publisher: "hide.me",
    url: "https://hide.me/",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM2: {
    id: "HM2",
    title: "Pricing",
    publisher: "hide.me",
    url: "https://hide.me/en/pricing",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM3: {
    id: "HM3",
    title: "Free VPN",
    publisher: "hide.me",
    url: "https://hide.me/en/free-vpn",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM4: {
    id: "HM4",
    title: "Privacy Policy",
    publisher: "hide.me",
    url: "https://hide.me/privacy",
    year: 2023,
    retrievedAt: "Aug 25, 2026",
  },
  HM5: {
    id: "HM5",
    title: "Legal / Terms of Service",
    publisher: "hide.me",
    url: "https://hide.me/legal",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM6: {
    id: "HM6",
    title: "About",
    publisher: "hide.me",
    url: "https://hide.me/en/about",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM7: {
    id: "HM7",
    title: "Offshore VPN (Malaysia jurisdiction page)",
    publisher: "hide.me",
    url: "https://hide.me/en/offshore-vpn",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM8: {
    id: "HM8",
    title: "No-Logs Policy (Marketing / feature page)",
    publisher: "hide.me",
    url: "https://hide.me/en/features/no-logs-policy",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM9: {
    id: "HM9",
    title: "Securitum Audit: hide.me no-log policy (v1.0, 7 Jun 2024)",
    publisher: "Securitum",
    url: "https://hide.me/downloads/Securitum_Hide.me_no-log-policy_20240607.pdf",
    year: 2024,
    retrievedAt: "Aug 25, 2026",
  },
  HM10: {
    id: "HM10",
    title: "Transparency Report 2024 (PDF)",
    publisher: "hide.me",
    url: "https://hide.me/downloads/hide.me-transparency-report-2024.pdf",
    year: 2024,
    retrievedAt: "Aug 25, 2026",
  },
  HM11: {
    id: "HM11",
    title: "Transparency Report 2025 (PDF)",
    publisher: "hide.me",
    url: "https://hide.me/downloads/hide.me-transparency-report-2025.pdf",
    year: 2025,
    retrievedAt: "Aug 25, 2026",
  },
  HM12: {
    id: "HM12",
    title: "Press",
    publisher: "hide.me",
    url: "https://hide.me/en/press",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM13: {
    id: "HM13",
    title: "VPN Protocols",
    publisher: "hide.me",
    url: "https://hide.me/en/features/vpn-protocols",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
  HM14: {
    id: "HM14",
    title: "Software / Apps",
    publisher: "hide.me",
    url: "https://hide.me/en/software",
    year: 2026,
    retrievedAt: "Aug 25, 2026",
  },
};

export const homepageSources = [
  citationSources.S1,
  citationSources.S2,
  citationSources.S3,
  citationSources.S4,
  citationSources.S5,
  citationSources.S6,
  citationSources.S7,
  citationSources.S8,
];

export const reviewSources = [
  citationSources.S1,
  citationSources.S3,
  citationSources.S5,
  citationSources.S9,
];

export const compareSources = [citationSources.S5, citationSources.S6, citationSources.S9];

export const citySources = [citationSources.S1, citationSources.S3, citationSources.S4];

export function getCitationSourcesById(ids: string[]): CitationSource[] {
  return ids
    .map((id) => citationSources[id])
    .filter((source): source is CitationSource => Boolean(source));
}
