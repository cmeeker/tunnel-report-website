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
    url: "https://nordvpn.com/pricing/",
    year: 2026,
    retrievedAt: "April 8, 2026",
  },
  S6: {
    id: "S6",
    title: "PureVPN Pricing",
    publisher: "PureVPN",
    url: "https://www.purevpn.com/pricing",
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
