import type { FaqItem } from "@/components/FaqSection";
import type { RelatedLink } from "@/components/RelatedLinks";
import { compareExpressPaidPicks, type PaidPickSpec } from "@/lib/content/paid-picks";

export type CompareRow = {
  category: string;
  left: { value: string; pct: number };
  right: { value: string; pct: number };
  winner: "left" | "right" | "draw" | "uncompared";
  note?: string;
};

export type ComparisonSpecRow = {
  spec: string;
  left: string;
  right: string;
};

export type Comparison = {
  slug: string;
  leftSlug: string;
  rightSlug: string;
  title: string;
  description: string;
  intro: string;
  dateModified: string;
  datePublished?: string;
  rows: CompareRow[];
  verdictParagraphs: string[];
  leftPickLabel: string;
  rightPickLabel: string;
  leftBadge: string;
  rightBadge: string;
  faqs: FaqItem[];
  h1?: string;
  breadcrumbLabel?: string;
  updatedBadgeLabel?: string;
  verdictBox?: string;
  specRows?: ComparisonSpecRow[];
  notes?: { heading: string; paragraphs: string[] }[];
  expressPaidPick?: PaidPickSpec;
  sourceIds?: string[];
  relatedLinks?: RelatedLink[];
};

export const comparisons: Comparison[] = [
  {
    slug: "nordvpn-vs-purevpn",
    leftSlug: "nordvpn",
    rightSlug: "purevpn",
    title: "NordVPN vs PureVPN 2026: Head-to-Head Comparison",
    description:
      "NordVPN vs PureVPN: a straight-talking 2026 comparison of specs, privacy policies, pricing and features.",
    intro:
      "These two providers sit at opposite ends of the value spectrum in our rankings. PureVPN undercuts on price. The question is whether the savings justify what you give up — and for some readers, the honest answer is yes.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Entry Pricing", left: { value: "Check [NordVPN's page](https://nordvpn.com/pricing/) for current pricing.", pct: 0 }, right: { value: "Check [PureVPN's page](https://www.purevpn.com/order) for current pricing.", pct: 0 }, winner: "uncompared" },
      { category: "Server Network", left: { value: "Check [NordVPN's page](https://nordvpn.com/pricing/) for current server counts.", pct: 0 }, right: { value: "Check [PureVPN's page](https://www.purevpn.com/order) for current server counts.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Choose PureVPN if first-year price is your dominant buying criteria and you are mostly using the VPN for domestic browsing or light streaming. You are comfortable with a provider actively rebuilding its trust profile.",
      "For most readers, our pick is NordVPN based on published specs. The privacy-policy difference matters if your threat model goes beyond casual browsing.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      {
        question: "How do PureVPN and NordVPN compare on price?",
        answer:
          "Check each provider's page for current pricing, device limits and features before you choose.",
      },
    ],
  },
  {
    slug: "nordvpn-vs-expressvpn",
    leftSlug: "nordvpn",
    rightSlug: "expressvpn",
    expressPaidPick: compareExpressPaidPicks["nordvpn-vs-expressvpn"],
    title: "NordVPN vs ExpressVPN 2026: Which Premium VPN Wins?",
    description:
      "NordVPN vs ExpressVPN compared across speed, privacy, pricing, streaming, and app quality.",
    intro:
      "Both NordVPN and ExpressVPN target the premium consumer segment. This comparison sets out what each provider's own pages say so you can decide which fits.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Privacy Audits", left: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, right: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Entry Pricing", left: { value: "Check [NordVPN's page](https://nordvpn.com/pricing/) for current pricing.", pct: 0 }, right: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/order) for current pricing.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Check each provider's page for current features and pricing before you choose.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    sourceIds: ["S5", "S8"],
    faqs: [
      {
        question: "How do NordVPN and ExpressVPN compare on streaming?",
        answer:
          "Check each provider's page for which streaming services it says it supports.",
      },
    ],
  },
  {
    slug: "surfshark-vs-nordvpn",
    leftSlug: "surfshark",
    rightSlug: "nordvpn",
    title: "Surfshark vs NordVPN 2026: Value vs Performance",
    description:
      "Surfshark vs NordVPN — unlimited devices and budget pricing compared side by side.",
    intro:
      "Surfshark and NordVPN are two of the most compared VPNs. Surfshark's pricing page lists [unlimited](https://surfshark.com/pricing) simultaneous device connections. Here is how they compare on published specs and pricing.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Device Limit", left: { value: "Unlimited connections ([Surfshark's page](https://surfshark.com/pricing))", pct: 0 }, right: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Entry Pricing", left: { value: "Check [Surfshark's page](https://surfshark.com/pricing) for current pricing.", pct: 0 }, right: { value: "Check [NordVPN's page](https://nordvpn.com/pricing/) for current pricing.", pct: 0 }, winner: "uncompared" },
      { category: "Privacy Audits", left: { value: "Check [Surfshark's page](https://surfshark.com/) for current details.", pct: 0 }, right: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Check each provider's page for current pricing.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      {
        question: "Is Surfshark as good as NordVPN?",
        answer:
          "For domestic household use, often yes.",
      },
      {
        question: "Can I switch from NordVPN to Surfshark?",
        answer:
          "Yes. Both offer money-back guarantees on initial purchases. Test Surfshark on your primary devices before committing to a multi-year plan.",
      },
    ],
  },
  {
    slug: "mullvad-vs-protonvpn",
    leftSlug: "mullvad",
    rightSlug: "protonvpn",
    title: "Mullvad vs Proton VPN 2026: Privacy-First Showdown",
    description:
      "Mullvad vs Proton VPN — anonymous payments, open-source clients, and jurisdiction compared.",
    intro:
      "Mullvad and Proton VPN represent the privacy-first tier of the VPN market.",
    dateModified: "2026-10-15",
    rows: [
      { category: "Payment Anonymity", left: { value: "Cash, crypto, no email ([Mullvad's page](https://mullvad.net/en/pricing))", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/support/payment-options) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Open Source", left: { value: "All clients open source ([Mullvad's page](https://mullvad.net/en/why-mullvad-vpn))", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/blog/open-source) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Jurisdiction", left: { value: "Check [Mullvad's page](https://mullvad.net/en/about) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/about) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Pricing Model", left: { value: "Check [Mullvad's page](https://mullvad.net/en/pricing) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/pricing) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Censorship Tools", left: { value: "Check [Mullvad's page](https://mullvad.net/en/) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Choose Mullvad if payment anonymity matters to you; see Mullvad's pricing page.",
      "Choose Proton VPN if Swiss jurisdiction, a functional free tier, and integrated Proton ecosystem tools matter more than maximum payment anonymity.",
      "Mullvad says its signup needs no email address ([Mullvad's page](https://mullvad.net/en/help/no-logging-data-policy)). Proton VPN says it is based in Switzerland ([Proton VPN's page](https://protonvpn.com/about)).",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      {
        question: "Does Tunnel Report earn a commission from links on this site?",
        answer:
          "Some links on Tunnel Report are affiliate links, and we may earn a commission if you buy through them. See our affiliate disclosure on each page.",
      },
      {
        question: "How do Mullvad and Proton VPN compare on torrenting?",
        answer:
          "Check each provider's page for current features and pricing before you choose.",
      },
    ],
  },
  {
    slug: "surfshark-vs-expressvpn",
    leftSlug: "surfshark",
    rightSlug: "expressvpn",
    expressPaidPick: compareExpressPaidPicks["surfshark-vs-expressvpn"],
    title: "Surfshark vs ExpressVPN 2026: Budget Value or Premium Polish?",
    description:
      "Surfshark vs ExpressVPN compared across speed, price, streaming, privacy, and device limits for 2026 buyers.",
    intro:
      "Surfshark and ExpressVPN serve different buyers. Check each provider's page for current pricing, device limits and features before you choose.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Entry Pricing", left: { value: "Check [Surfshark's page](https://surfshark.com/pricing) for current pricing.", pct: 0 }, right: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/order) for current pricing.", pct: 0 }, winner: "uncompared" },
      { category: "Device Limit", left: { value: "Unlimited devices ([Surfshark's page](https://surfshark.com/pricing))", pct: 0 }, right: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/order) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Privacy Audits", left: { value: "Check [Surfshark's page](https://surfshark.com/) for current details.", pct: 0 }, right: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Choose Surfshark for a household with many devices.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      { question: "How do Surfshark and ExpressVPN compare on pricing and features?", answer: "Check each provider's page for current features and pricing before you choose." },
    ],
  },
  {
    slug: "nordvpn-vs-protonvpn",
    leftSlug: "nordvpn",
    rightSlug: "protonvpn",
    title: "NordVPN vs Proton VPN 2026: Features, Privacy and Pricing Compared",
    description:
      "NordVPN vs Proton VPN compared across speed, privacy transparency, pricing, streaming, and open-source posture.",
    intro:
      "Check each provider's page for current features and pricing before you choose.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Open Source", left: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/blog/open-source) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Jurisdiction", left: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, right: { value: "Switzerland ([Proton VPN's page](https://protonvpn.com/about))", pct: 0 }, winner: "uncompared" },
      { category: "Free Tier", left: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/free-vpn) for current details.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Choose Proton VPN if you want open-source transparency, Swiss jurisdiction, and the Proton ecosystem.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      { question: "Is Proton VPN safer than NordVPN?", answer: "Proton VPN is more transparent due to open-source clients." },
    ],
  },
  {
    slug: "expressvpn-vs-protonvpn",
    leftSlug: "expressvpn",
    rightSlug: "protonvpn",
    expressPaidPick: compareExpressPaidPicks["expressvpn-vs-protonvpn"],
    title: "ExpressVPN vs Proton VPN 2026: Premium Simplicity or Privacy Transparency?",
    description:
      "ExpressVPN vs Proton VPN compared for app polish, privacy, speed, streaming, jurisdiction, and price.",
    intro:
      "ExpressVPN is built for people who want the VPN to disappear into the background. Proton VPN is built for people who want to understand and verify the privacy model. Both are good; they optimize for different readers.",
    dateModified: "2026-10-15",
    rows: [
      { category: "Open Source", left: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/blog/open-source) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Pricing", left: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/order) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/pricing) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Jurisdiction", left: { value: "British Virgin Islands ([ExpressVPN's page](https://www.expressvpn.com/privacy-policy))", pct: 0 }, right: { value: "Switzerland ([Proton VPN's page](https://protonvpn.com/about))", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Choose Proton VPN if Swiss jurisdiction, as stated on Proton VPN's own page, matters to you.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      { question: "How do ExpressVPN and Proton VPN compare on features and pricing?", answer: "Check each provider's page for current features and pricing before you choose." },
    ],
  },
  {
    slug: "surfshark-vs-purevpn",
    leftSlug: "surfshark",
    rightSlug: "purevpn",
    title: "Surfshark vs PureVPN 2026: Which Cheap VPN Is Better?",
    description:
      "Surfshark vs PureVPN compared for budget buyers: price, speed, device limits, trust posture, and streaming reliability.",
    intro:
      "Surfshark and PureVPN both compete on price, but they are not interchangeable. PureVPN is the aggressive entry-price option with more trust and consistency tradeoffs.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Entry Pricing", left: { value: "Check [Surfshark's page](https://surfshark.com/pricing) for current pricing.", pct: 0 }, right: { value: "Check [PureVPN's page](https://www.purevpn.com/order) for current pricing.", pct: 0 }, winner: "uncompared" },
      { category: "Device Limit", left: { value: "Unlimited devices ([Surfshark's page](https://surfshark.com/pricing))", pct: 0 }, right: { value: "Up to 10 devices ([PureVPN's page](https://www.purevpn.com/order))", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Choose PureVPN if the lowest first-term price is your dominant criterion and you mostly use domestic connections.",
      "Check each provider's page for current pricing.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      { question: "Is PureVPN cheaper than Surfshark?", answer: "Check each provider's page for current pricing, device limits and features before you choose." },
    ],
  },
  {
    slug: "nordvpn-vs-mullvad",
    leftSlug: "nordvpn",
    rightSlug: "mullvad",
    title: "NordVPN vs Mullvad 2026: Mainstream Power or Privacy Purism?",
    description:
      "NordVPN vs Mullvad compared on speed, account anonymity, streaming, audits, and pricing.",
    intro:
      "Mullvad is the privacy purist's choice and pays us nothing. This comparison is useful because both can be the right answer for different readers.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Account Anonymity", left: { value: "Check [NordVPN's page](https://nordvpn.com/) for current details.", pct: 0 }, right: { value: "No email, account number ([Mullvad's page](https://mullvad.net/en/help/no-logging-data-policy))", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Check each provider's page for current features and pricing before you choose.",
      "Choose Mullvad if signing up without an email address matters to you; see Mullvad's page.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      { question: "How do Mullvad and NordVPN compare on features and pricing?", answer: "Mullvad says on its own page that signup needs no email address. Check NordVPN's page for its current sign-up requirements." },
    ],
  },
  {
    slug: "expressvpn-vs-purevpn",
    leftSlug: "expressvpn",
    rightSlug: "purevpn",
    expressPaidPick: compareExpressPaidPicks["expressvpn-vs-purevpn"],
    title: "ExpressVPN vs PureVPN 2026: Premium Reliability or Budget Savings?",
    description:
      "ExpressVPN vs PureVPN compared across price, streaming, trust posture, app reliability, and support.",
    intro:
      "ExpressVPN and PureVPN are almost opposite buying decisions. ExpressVPN is expensive but polished. PureVPN is cheap but more variable. This is the clearest premium-versus-budget comparison in our matrix.",
    datePublished: "2026-10-15",
    dateModified: "2026-10-18",
    updatedBadgeLabel: "Updated Oct 18, 2026",
    rows: [
      { category: "Entry Pricing", left: { value: "Check [ExpressVPN's page](https://www.expressvpn.com/order) for current pricing.", pct: 0 }, right: { value: "Check [PureVPN's page](https://www.purevpn.com/order) for current pricing.", pct: 0 }, winner: "uncompared" },
    ],
    verdictParagraphs: [
      "Check each provider's page for current features and pricing before you choose.",
      "Choose PureVPN if first-term cost is the only thing that matters.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      { question: "How do ExpressVPN and PureVPN compare on price?", answer: "Check ExpressVPN's and PureVPN's pages for current pricing and features before you choose." },
    ],
  },
  {
    slug: "surfshark-vs-protonvpn",
    leftSlug: "surfshark",
    rightSlug: "protonvpn",
    title: "Surfshark vs Proton VPN (2026): Compared",
    h1: "Surfshark vs Proton VPN 2026: Household Value or Verifiable Privacy?",
    breadcrumbLabel: "Surfshark vs Proton VPN",
    description:
      "Surfshark vs Proton VPN compared on devices, audits, jurisdiction, servers, streaming, torrenting and refunds, with a source for each spec.",
    intro:
      "Surfshark covers unlimited devices on one plan. Proton VPN is the pick when you want public audit reports, open-source apps, and a free plan to start on.",
    dateModified: "2026-10-06",
    updatedBadgeLabel: "Updated Oct 6, 2026",
    verdictBox:
      "Surfshark covers unlimited devices on one plan. Proton VPN is the pick if you want to read the audits yourself: Swiss jurisdiction, open-source apps, and published yearly no-logs reports.",
    specRows: [
      {
        spec: "Servers / countries",
        left: "4,500+ servers in 100 countries [V1]",
        right: "20,000+ servers in 140+ countries [P1]",
      },
      {
        spec: "Jurisdiction",
        left: "Netherlands (Surfshark B.V., Amsterdam) [V1]",
        right: "[Proton VPN says](https://protonvpn.com/about) it is a Swiss corporation.",
      },
      {
        spec: "No-logs audits",
        left: "Deloitte assurance in 2023 and 2025 (ISAE 3000). The full report is available only inside a Surfshark account [V2][V3]",
        right: "Securitum audits every year from 2022 through 2026, with public reports [P2][P3]",
      },
      {
        spec: "Simultaneous devices",
        left: "Unlimited [V1]",
        right: "10 on VPN Plus. Free plan: 1 [P1][P4]",
      },
      {
        spec: "Protocols",
        left: "WireGuard, OpenVPN, IKEv2, Dausos [V5]",
        right: "WireGuard, OpenVPN, IKEv2, Stealth, Smart Protocol [P6]",
      },
      {
        spec: "Torrenting / P2P",
        left: "P2P locations are marked on the server list [V6]",
        right: "P2P servers, plus port forwarding on paid plans for Windows, macOS, and Linux [P5]",
      },
      {
        spec: "Free option",
        left: "No free plan. The free trial is limited to 3 devices [V1]",
        right: "Free plan with no data cap, on 1 device [P4]",
      },
      {
        spec: "Money-back window",
        left: "30 days [V1]",
        right: "30 days [P1]",
      },
      {
        spec: "Server storage",
        left: "RAM-only servers [V2]",
        right: "Not stated on the Proton pages we checked on Oct 6, 2026",
      },
    ],
    rows: [
      { category: "Devices", left: { value: "Unlimited", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/pricing) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Privacy & audits", left: { value: "Check [Surfshark's page](https://surfshark.com/) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Jurisdiction", left: { value: "Check [Surfshark's page](https://surfshark.com/) for current details.", pct: 0 }, right: { value: "Switzerland", pct: 0 }, winner: "uncompared" },
      { category: "Torrenting", left: { value: "Check [Surfshark's page](https://surfshark.com/) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Free option", left: { value: "Check [Surfshark's page](https://surfshark.com/pricing) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/free-vpn) for current details.", pct: 0 }, winner: "uncompared" },
      { category: "Price", left: { value: "Check [Surfshark's page](https://surfshark.com/pricing) for current details.", pct: 0 }, right: { value: "Check [Proton VPN's page](https://protonvpn.com/pricing) for current details.", pct: 0 }, winner: "uncompared" },
    ],
    notes: [
      {
        heading: "Price",
        paragraphs: [
          "Both providers show an introductory price and a later renewal rate. Surfshark's pricing FAQ says a 2-year plan is billed once up front and then renews annually at \"the applicable renewal price\" [V1]. Proton's plan cards use the line \"Billed at … for the first …, then renews at …\" [P1].",
          "Surfshark's pricing payload on Oct 6, 2026 listed conflicting recurring fields for the same plan, and Proton's static page still rendered price placeholders, so this page does not state a dollar amount.",
        ],
      },
    ],
    verdictParagraphs: [
      "Pick Surfshark if you're covering a whole household — phones, laptops, and several TVs — on one plan.",
      "Pick Proton VPN if you want public audit reports and open-source apps, need port forwarding for torrents, or want to start on a free plan.",
    ],
    leftPickLabel: "",
    rightPickLabel: "",
    leftBadge: "",
    rightBadge: "",
    faqs: [
      {
        question: "How do Surfshark and Proton VPN compare on torrenting?",
        answer:
          "Check each provider's page for current features and pricing before you choose.",
      },
      {
        question: "Does either have a free plan?",
        answer:
          "Proton VPN Free has no data cap but covers 1 device [P4]. Surfshark has no free plan; its free trial is limited to 3 devices [V1].",
      },
      {
        question: "Can I read their no-logs audits?",
        answer:
          "Proton publishes every Securitum report [P2][P3]. Surfshark's Deloitte report is available only to logged-in customers [V3].",
      },
      {
        question: "Which covers more devices?",
        answer: "Surfshark covers unlimited devices [V1]. Proton VPN Plus covers 10 [P1].",
      },
    ],
    sourceIds: ["V1", "V2", "V3", "V5", "V6", "P1", "P2", "P3", "P3b", "P4", "P5", "P6", "T1", "T2"],
    relatedLinks: [
      { href: "/reviews/surfshark", label: "Surfshark Review" },
      { href: "/reviews/protonvpn", label: "Proton VPN Review" },
      { href: "/alternatives/surfshark", label: "Surfshark Alternatives" },
      { href: "/alternatives/protonvpn", label: "Proton VPN Alternatives" },
      { href: "/compare/surfshark-vs-purevpn", label: "Surfshark vs PureVPN" },
      { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
      { href: "/best-vpn-for/streaming", label: "Best VPN for Streaming" },
      { href: "/best-vpn-for/torrenting", label: "Best VPN for Torrenting" },
      { href: "/guides/what-is-a-no-logs-vpn", label: "What Is a No-Logs VPN?" },
      { href: "/guides/vpn-jurisdictions-explained", label: "VPN Jurisdictions Explained" },
      { href: "/methodology", label: "Methodology" },
    ],
  },
];

export const comparisonSlugs = comparisons.map((c) => c.slug) as readonly string[];

export const comparisonMap = Object.fromEntries(comparisons.map((c) => [c.slug, c])) as Record<
  string,
  Comparison
>;
