export type CitationSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  year: number;
  retrievedAt: string;
};

const TRACKED_CITATION_URLS = new Set([
  "https://billing.purevpn.com/aff.php?aff=49388038",
  "https://get.surfshark.net/aff_c?offer_id=926&aff_id=49525",
  "https://go.getproton.me/aff_c?offer_id=26&aff_id=19779",
  "https://hide.me/?friend=6a89f8e9ae1ca",
]);

export function citationLinkRel(url: string): string {
  if (TRACKED_CITATION_URLS.has(url)) {
    return "nofollow sponsored noopener noreferrer";
  }
  return "noopener noreferrer";
}

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
    url: "https://nordvpn.com/pricing/",
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
    url: "https://get.surfshark.net/aff_c?offer_id=926&aff_id=49525",
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
    url: "https://hide.me/?friend=6a89f8e9ae1ca",
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
  V1: {
    id: "V1",
    title: "Pricing",
    publisher: "Surfshark",
    url: "https://surfshark.com/pricing",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  V2: {
    id: "V2",
    title: "No-logs policy",
    publisher: "Surfshark",
    url: "https://surfshark.com/features/no-logs",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  V3: {
    id: "V3",
    title: "Deloitte no-logs policy verified again (Jun 16, 2025)",
    publisher: "Surfshark",
    url: "https://surfshark.com/blog/deloitte-nologs-policy-verified-again",
    year: 2025,
    retrievedAt: "Oct 6, 2026",
  },
  V5: {
    id: "V5",
    title: "VPN protocols",
    publisher: "Surfshark",
    url: "https://surfshark.com/features/surfshark-vpn-protocols",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  V6: {
    id: "V6",
    title: "Server list",
    publisher: "Surfshark",
    url: "https://surfshark.com/servers",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  V7: {
    id: "V7",
    title: "Deals",
    publisher: "Surfshark",
    url: "https://surfshark.com/deals",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  V8: {
    id: "V8",
    title: "Manage your subscription",
    publisher: "Surfshark Support",
    url: "https://support.surfshark.com/hc/en-us/articles/17673853278226-Manage-your-subscription",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P1: {
    id: "P1",
    title: "Pricing",
    publisher: "Proton VPN",
    url: "https://protonvpn.com/pricing",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P2: {
    id: "P2",
    title: "For 5th year running, Proton VPN passes external no-logs audit",
    publisher: "Proton VPN",
    url: "https://protonvpn.com/blog/no-logs-audit",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P3: {
    id: "P3",
    title: "Proton VPN no-log report 2025 (PDF)",
    publisher: "Securitum",
    url: "https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf",
    year: 2025,
    retrievedAt: "Oct 6, 2026",
  },
  P3b: {
    id: "P3b",
    title: "Proton VPN's no-logs policy holds up under scrutiny of fourth independent audit",
    publisher: "TechRadar",
    url: "https://www.techradar.com/vpn/vpn-privacy-security/proton-vpns-no-logs-policy-holds-up-under-scrutiny-of-fourth-independent-audit",
    year: 2025,
    retrievedAt: "Oct 6, 2026",
  },
  P4: {
    id: "P4",
    title: "Free VPN",
    publisher: "Proton VPN",
    url: "https://protonvpn.com/free-vpn",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P5: {
    id: "P5",
    title: "Port forwarding",
    publisher: "Proton VPN Support",
    url: "https://protonvpn.com/support/port-forwarding",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P6: {
    id: "P6",
    title: "How to change VPN protocols",
    publisher: "Proton VPN Support",
    url: "https://protonvpn.com/support/how-to-change-vpn-protocols",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P7: {
    id: "P7",
    title: "VPN deals",
    publisher: "Proton VPN",
    url: "https://protonvpn.com/vpn-deals",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  P8: {
    id: "P8",
    title: "Upgrade or downgrade your plan",
    publisher: "Proton VPN Support",
    url: "https://protonvpn.com/support/upgrade-downgrade",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  H1: {
    id: "H1",
    title: "Pricing",
    publisher: "hide.me",
    url: "https://hide.me/en/pricing",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  T1: {
    id: "T1",
    title: "Surfshark Review 2026",
    publisher: "Tunnel Report",
    url: "https://tunnelreport.com/reviews/surfshark",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
  },
  T2: {
    id: "T2",
    title: "Proton VPN Review 2026",
    publisher: "Tunnel Report",
    url: "https://tunnelreport.com/reviews/protonvpn",
    year: 2026,
    retrievedAt: "Oct 6, 2026",
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
