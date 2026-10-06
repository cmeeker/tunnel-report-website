import type { FaqItem } from "@/components/FaqSection";
import type { RelatedLink } from "@/components/RelatedLinks";
import { compareExpressPaidPicks, type PaidPickSpec } from "@/lib/content/paid-picks";

export type CompareRow = {
  category: string;
  left: { value: string; pct: number };
  right: { value: string; pct: number };
  winner: "left" | "right" | "draw";
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
  authorId: "marcus" | "sarah" | "daniel";
  dateModified: string;
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
      "NordVPN vs PureVPN: a straight-talking 2026 comparison of speed consistency, privacy posture, pricing transparency, and real-world usability.",
    intro:
      "These two providers sit at opposite ends of the value spectrum in our rankings. NordVPN leads on consistency and trust signals. PureVPN undercuts on price. The question is whether the savings justify what you give up — and for some readers, the honest answer is yes.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    rows: [
      { category: "Speed (US Domestic)", left: { value: "905 Mbps median", pct: 95 }, right: { value: "610 Mbps median", pct: 64 }, winner: "left" },
      { category: "Speed (Transatlantic)", left: { value: "720 Mbps median", pct: 88 }, right: { value: "430 Mbps median", pct: 53 }, winner: "left" },
      { category: "Privacy Audit Depth", left: { value: "Multiple infrastructure audits", pct: 92 }, right: { value: "Improving, legacy concerns remain", pct: 58 }, winner: "left" },
      { category: "Entry Pricing", left: { value: "$3.99/mo (2yr plan)", pct: 72 }, right: { value: "$2.14/mo (2yr plan)", pct: 90 }, winner: "right" },
      { category: "App Reliability", left: { value: "Polished, mature across platforms", pct: 90 }, right: { value: "Functional, occasional reconnect issues", pct: 65 }, winner: "left" },
      { category: "Server Network", left: { value: "6,400+ servers, 111 countries", pct: 88 }, right: { value: "6,500+ servers, 78 countries", pct: 78 }, winner: "draw" },
    ],
    verdictParagraphs: [
      "Choose NordVPN if you want predictable performance across streaming, remote work, and general browsing without thinking about it. You are willing to pay a modest premium for a provider with a stronger audit narrative.",
      "Choose PureVPN if first-year price is your dominant buying criteria and you are mostly using the VPN for domestic browsing or light streaming. You are comfortable with a provider actively rebuilding its trust profile.",
      "For most readers who email us asking which to pick, the answer is NordVPN. The speed consistency gap is real on longer routes, and the privacy posture difference means something if your threat model extends beyond casual browsing.",
    ],
    leftPickLabel: "Recommended",
    rightPickLabel: "Budget Pick",
    leftBadge: "NordVPN wins",
    rightBadge: "PureVPN wins",
    faqs: [
      {
        question: "Is PureVPN a good budget alternative to NordVPN?",
        answer:
          "PureVPN offers genuinely lower introductory pricing, but the speed consistency gap on long-distance routes and the less-established audit track record mean you are trading reliability for savings.",
      },
      {
        question: "Which VPN is better for streaming?",
        answer:
          "NordVPN has a more consistent track record with major streaming platforms in our testing. PureVPN works for many services but has more variable success rates.",
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
      "NordVPN vs ExpressVPN compared across speed, privacy, pricing, streaming, and app quality — with a clear winner for most buyers in 2026.",
    intro:
      "Both NordVPN and ExpressVPN target the premium consumer segment. NordVPN wins our rankings on speed and value; ExpressVPN wins on app polish and support. This comparison breaks down where each actually delivers.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    rows: [
      { category: "Speed (US Domestic)", left: { value: "905 Mbps median", pct: 95 }, right: { value: "700 Mbps median", pct: 74 }, winner: "left" },
      { category: "Speed (Transatlantic)", left: { value: "720 Mbps median", pct: 88 }, right: { value: "580 Mbps median", pct: 71 }, winner: "left" },
      { category: "Privacy Audits", left: { value: "Frequent infrastructure audits", pct: 92 }, right: { value: "TrustedServer RAM-only audits", pct: 88 }, winner: "left" },
      { category: "Entry Pricing", left: { value: "$3.99/mo (2yr plan)", pct: 78 }, right: { value: "$6.67/mo (1yr plan)", pct: 55 }, winner: "left" },
      { category: "App Experience", left: { value: "Feature-rich, some complexity", pct: 85 }, right: { value: "Polished, minimal friction", pct: 92 }, winner: "right" },
      { category: "Streaming Reliability", left: { value: "Consistent major platforms", pct: 90 }, right: { value: "Very reliable geo-unblocking", pct: 91 }, winner: "draw" },
    ],
    verdictParagraphs: [
      "Choose NordVPN if speed, audit frequency, and price-per-performance matter most. It is faster, cheaper, and maintains the strongest composite score in our testing.",
      "Choose ExpressVPN if you want the smoothest onboarding experience and are willing to pay a premium for support quality and app polish.",
      "For most readers, NordVPN is the better default. ExpressVPN justifies its premium only if you specifically value frictionless setup over raw throughput.",
    ],
    leftPickLabel: "Best Overall",
    rightPickLabel: "Best UX",
    leftBadge: "NordVPN wins",
    rightBadge: "ExpressVPN wins",
    faqs: [
      {
        question: "Is ExpressVPN faster than NordVPN?",
        answer: "No. In our April 2026 benchmarks, NordVPN delivered higher median throughput on both domestic and transatlantic routes.",
      },
      {
        question: "Which is better for Netflix?",
        answer:
          "Both work reliably for major US streaming libraries. ExpressVPN has a slight edge in session stability during server switches; NordVPN has a slight edge in raw speed overhead.",
      },
    ],
  },
  {
    slug: "surfshark-vs-nordvpn",
    leftSlug: "surfshark",
    rightSlug: "nordvpn",
    title: "Surfshark vs NordVPN 2026: Value vs Performance",
    description:
      "Surfshark vs NordVPN — unlimited devices and budget pricing versus speed-floor leadership. Our 2026 head-to-head tells you which to buy.",
    intro:
      "Surfshark and NordVPN are the two most common comparison queries we receive. Surfshark offers unlimited devices and aggressive pricing; NordVPN offers the highest speed floors and audit cadence. Here is how they actually compare.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    rows: [
      { category: "Speed (US Domestic)", left: { value: "820 Mbps median", pct: 86 }, right: { value: "905 Mbps median", pct: 95 }, winner: "right" },
      { category: "Speed (Transatlantic)", left: { value: "640 Mbps median", pct: 78 }, right: { value: "720 Mbps median", pct: 88 }, winner: "right" },
      { category: "Device Limit", left: { value: "Unlimited connections", pct: 98 }, right: { value: "10 simultaneous devices", pct: 70 }, winner: "left" },
      { category: "Entry Pricing", left: { value: "$2.49/mo (2yr plan)", pct: 88 }, right: { value: "$3.99/mo (2yr plan)", pct: 72 }, winner: "left" },
      { category: "Privacy Audits", left: { value: "Regular independent audits", pct: 82 }, right: { value: "Frequent infrastructure audits", pct: 92 }, winner: "right" },
      { category: "App Maturity", left: { value: "Modern, improving rapidly", pct: 85 }, right: { value: "Mature across all platforms", pct: 90 }, winner: "right" },
    ],
    verdictParagraphs: [
      "Choose Surfshark if you need unlimited device coverage, want the lowest entry price, and primarily use domestic connections. The value proposition for families is genuinely strong.",
      "Choose NordVPN if you want the highest speed floors, the strongest audit track record, and the best long-distance performance. The modest price premium is justified for mixed workloads.",
      "For households with many devices on a budget, Surfshark wins. For users who want the best overall VPN without compromise, NordVPN remains our top pick.",
    ],
    leftPickLabel: "Best Value",
    rightPickLabel: "Best Overall",
    leftBadge: "Surfshark wins",
    rightBadge: "NordVPN wins",
    faqs: [
      {
        question: "Is Surfshark as good as NordVPN?",
        answer:
          "For domestic household use, often yes. For transatlantic performance and audit depth, NordVPN still leads. The gap has narrowed significantly since our last ranking cycle.",
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
      "Mullvad vs Proton VPN — anonymous payments, open-source clients, and jurisdiction compared. Neither pays us a commission; here is our honest verdict.",
    intro:
      "Mullvad and Proton VPN represent the privacy-first tier of the VPN market. Neither runs aggressive affiliate programs — Tunnel Report earns zero commission from either. That independence makes this comparison particularly important.",
    authorId: "daniel",
    dateModified: "2026-04-08",
    rows: [
      { category: "Payment Anonymity", left: { value: "Cash, crypto, no email", pct: 98 }, right: { value: "Standard + crypto options", pct: 82 }, winner: "left" },
      { category: "Open Source", left: { value: "All clients open source", pct: 95 }, right: { value: "All clients open source", pct: 95 }, winner: "draw" },
      { category: "Jurisdiction", left: { value: "Sweden (EU)", pct: 75 }, right: { value: "Switzerland (strong)", pct: 92 }, winner: "right" },
      { category: "Pricing Model", left: { value: "€5/mo flat, no promos", pct: 95 }, right: { value: "Tiered plans + free tier", pct: 80 }, winner: "left" },
      { category: "Speed (EU Domestic)", left: { value: "720 Mbps median", pct: 85 }, right: { value: "650 Mbps median", pct: 77 }, winner: "left" },
      { category: "Censorship Tools", left: { value: "Bridge servers available", pct: 78 }, right: { value: "Specialized anti-censorship", pct: 88 }, winner: "right" },
    ],
    verdictParagraphs: [
      "Choose Mullvad if payment anonymity is your top priority. No email signup, cash-by-mail payments, and flat honest pricing without promotional tricks.",
      "Choose Proton VPN if Swiss jurisdiction, a functional free tier, and integrated Proton ecosystem tools matter more than maximum payment anonymity.",
      "For most privacy-focused readers, Mullvad wins on operational anonymity while Proton VPN wins on legal jurisdiction and ecosystem breadth. You cannot go wrong with either — both are meaningfully better than marketing-heavy consumer VPNs on privacy fundamentals.",
    ],
    leftPickLabel: "Best Anonymity",
    rightPickLabel: "Best Jurisdiction",
    leftBadge: "Mullvad wins",
    rightBadge: "Proton VPN wins",
    faqs: [
      {
        question: "Does Tunnel Report earn commission from Mullvad or Proton VPN?",
        answer:
          "No. Neither provider operates a traditional affiliate program that pays us. We include them because editorial independence requires covering the best privacy options regardless of revenue.",
      },
      {
        question: "Which is better for torrenting?",
        answer:
          "Both allow P2P on their networks. Mullvad's anonymity model is stronger for users who want no account trail; Proton VPN offers comparable technical support with more hand-holding documentation.",
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
      "Surfshark and ExpressVPN serve different buyers. Surfshark wins on value and device coverage. ExpressVPN wins on app polish and support quality. The right choice depends on whether you are optimizing for household economics or premium convenience.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    rows: [
      { category: "Entry Pricing", left: { value: "$2.49/mo (2yr plan)", pct: 88 }, right: { value: "$6.67/mo (1yr plan)", pct: 55 }, winner: "left" },
      { category: "Device Limit", left: { value: "Unlimited devices", pct: 98 }, right: { value: "8 simultaneous devices", pct: 72 }, winner: "left" },
      { category: "Domestic Speed", left: { value: "820 Mbps median", pct: 86 }, right: { value: "700 Mbps median", pct: 74 }, winner: "left" },
      { category: "App Polish", left: { value: "Modern, improving", pct: 85 }, right: { value: "Best-in-class simplicity", pct: 92 }, winner: "right" },
      { category: "Streaming Reliability", left: { value: "Strong US libraries", pct: 84 }, right: { value: "Very consistent region switching", pct: 91 }, winner: "right" },
      { category: "Privacy Audits", left: { value: "Regular external audits", pct: 82 }, right: { value: "TrustedServer audits", pct: 88 }, winner: "right" },
    ],
    verdictParagraphs: [
      "Choose Surfshark if you want the best value for a household with many devices. It is faster in our domestic benchmarks and dramatically cheaper at checkout.",
      "Choose ExpressVPN if you want fewer decisions, cleaner setup flows, and support quality that justifies premium pricing.",
      "Most budget-conscious readers should pick Surfshark. Readers who value frictionless streaming and do not mind paying more should pick ExpressVPN.",
    ],
    leftPickLabel: "Best Value",
    rightPickLabel: "Best Premium UX",
    leftBadge: "Surfshark wins",
    rightBadge: "ExpressVPN wins",
    faqs: [
      { question: "Is Surfshark better than ExpressVPN?", answer: "Surfshark is better for price, device coverage, and domestic speed. ExpressVPN is better for app polish and streaming simplicity." },
      { question: "Which is cheaper long-term?", answer: "Surfshark is cheaper for most households, especially when unlimited devices replace multiple subscriptions." },
    ],
  },
  {
    slug: "nordvpn-vs-protonvpn",
    leftSlug: "nordvpn",
    rightSlug: "protonvpn",
    title: "NordVPN vs Proton VPN 2026: Speed Leader or Privacy Ecosystem?",
    description:
      "NordVPN vs Proton VPN compared across speed, privacy transparency, pricing, streaming, and open-source posture.",
    intro:
      "NordVPN is the better all-around consumer VPN. Proton VPN is the stronger transparency story for users who want open-source clients and Swiss jurisdiction. This is a performance-versus-philosophy comparison.",
    authorId: "marcus",
    dateModified: "2026-09-01",
    rows: [
      { category: "Domestic Speed", left: { value: "905 Mbps median", pct: 95 }, right: { value: "650 Mbps median", pct: 77 }, winner: "left" },
      { category: "Open Source", left: { value: "Closed-source apps", pct: 62 }, right: { value: "Open-source clients", pct: 95 }, winner: "right" },
      { category: "Jurisdiction", left: { value: "Panama", pct: 90 }, right: { value: "Switzerland", pct: 92 }, winner: "draw" },
      { category: "Streaming", left: { value: "Very consistent", pct: 90 }, right: { value: "Moderate success", pct: 70 }, winner: "left" },
      { category: "Free Tier", left: { value: "None", pct: 0 }, right: { value: "Credible free plan", pct: 90 }, winner: "right" },
      { category: "App Reliability", left: { value: "Mature across platforms", pct: 90 }, right: { value: "Good, more technical", pct: 78 }, winner: "left" },
    ],
    verdictParagraphs: [
      "Choose NordVPN if you want speed, streaming reliability, and the easiest default recommendation for a household.",
      "Choose Proton VPN if open-source transparency, Swiss jurisdiction, and the Proton ecosystem are more important than maximum throughput.",
      "NordVPN wins for most buyers. Proton VPN wins for readers who are consciously optimizing for transparency over convenience.",
    ],
    leftPickLabel: "Best Overall",
    rightPickLabel: "Best Transparency",
    leftBadge: "NordVPN wins",
    rightBadge: "Proton VPN wins",
    faqs: [
      { question: "Is Proton VPN safer than NordVPN?", answer: "Proton VPN is more transparent due to open-source clients. NordVPN has stronger speed and audit cadence among mainstream providers." },
      { question: "Which is better for streaming?", answer: "NordVPN is better for streaming in our testing." },
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
    authorId: "daniel",
    dateModified: "2026-04-08",
    rows: [
      { category: "App Simplicity", left: { value: "Best-in-class polish", pct: 92 }, right: { value: "Powerful but denser", pct: 78 }, winner: "left" },
      { category: "Open Source", left: { value: "Limited", pct: 60 }, right: { value: "Open-source clients", pct: 95 }, winner: "right" },
      { category: "Domestic Speed", left: { value: "700 Mbps median", pct: 74 }, right: { value: "650 Mbps median", pct: 77 }, winner: "draw" },
      { category: "Streaming", left: { value: "Very reliable", pct: 91 }, right: { value: "Variable", pct: 70 }, winner: "left" },
      { category: "Pricing", left: { value: "Premium", pct: 55 }, right: { value: "Mid-tier + free", pct: 78 }, winner: "right" },
      { category: "Jurisdiction", left: { value: "British Virgin Islands", pct: 88 }, right: { value: "Switzerland", pct: 92 }, winner: "right" },
    ],
    verdictParagraphs: [
      "Choose ExpressVPN if you prioritize streaming, support, and low-maintenance setup.",
      "Choose Proton VPN if open-source clients, Swiss jurisdiction, and ecosystem privacy matter more than app polish.",
      "ExpressVPN is easier. Proton VPN is more transparent. The better pick depends on your tolerance for complexity.",
    ],
    leftPickLabel: "Best UX",
    rightPickLabel: "Best Transparency",
    leftBadge: "ExpressVPN wins",
    rightBadge: "Proton VPN wins",
    faqs: [
      { question: "Is ExpressVPN better than Proton VPN?", answer: "ExpressVPN is better for streaming and simplicity. Proton VPN is better for transparency and privacy ecosystem features." },
      { question: "Which has better jurisdiction?", answer: "Both are favorable; Proton's Switzerland positioning is stronger for privacy-first users." },
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
      "Surfshark and PureVPN both compete on price, but they are not interchangeable. Surfshark is the stronger value pick for most households. PureVPN is the aggressive entry-price option with more trust and consistency tradeoffs.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    rows: [
      { category: "Entry Pricing", left: { value: "$2.49/mo", pct: 88 }, right: { value: "$2.14/mo", pct: 92 }, winner: "right" },
      { category: "Device Limit", left: { value: "Unlimited devices", pct: 98 }, right: { value: "10 devices", pct: 75 }, winner: "left" },
      { category: "Domestic Speed", left: { value: "820 Mbps median", pct: 86 }, right: { value: "610 Mbps median", pct: 64 }, winner: "left" },
      { category: "Trust Profile", left: { value: "Improving audit cadence", pct: 82 }, right: { value: "Legacy concerns remain", pct: 58 }, winner: "left" },
      { category: "Streaming", left: { value: "Strong US libraries", pct: 84 }, right: { value: "Variable", pct: 68 }, winner: "left" },
      { category: "Feature Depth", left: { value: "Modern consumer suite", pct: 86 }, right: { value: "Broad feature list", pct: 78 }, winner: "left" },
    ],
    verdictParagraphs: [
      "Choose Surfshark if you want the better cheap VPN for a household. Unlimited devices and stronger speeds outweigh PureVPN's small price advantage.",
      "Choose PureVPN if the lowest first-term price is your dominant criterion and you mostly use domestic connections.",
      "For most budget buyers, Surfshark is worth the small premium.",
    ],
    leftPickLabel: "Best Cheap VPN",
    rightPickLabel: "Lowest Entry Price",
    leftBadge: "Surfshark wins",
    rightBadge: "PureVPN wins",
    faqs: [
      { question: "Is PureVPN cheaper than Surfshark?", answer: "PureVPN often has a lower introductory price, but Surfshark's unlimited devices can make it cheaper for households." },
      { question: "Which budget VPN is faster?", answer: "Surfshark is faster in our domestic and transatlantic testing." },
    ],
  },
  {
    slug: "nordvpn-vs-mullvad",
    leftSlug: "nordvpn",
    rightSlug: "mullvad",
    title: "NordVPN vs Mullvad 2026: Mainstream Power or Privacy Purism?",
    description:
      "NordVPN vs Mullvad compared on speed, account anonymity, streaming, audits, pricing, and affiliate independence.",
    intro:
      "NordVPN is the best mainstream VPN in our rankings. Mullvad is the privacy purist's choice and pays us nothing. This comparison is useful because both can be the right answer for different readers.",
    authorId: "marcus",
    dateModified: "2026-04-08",
    rows: [
      { category: "Domestic Speed", left: { value: "905 Mbps median", pct: 95 }, right: { value: "720 Mbps EU median", pct: 85 }, winner: "left" },
      { category: "Account Anonymity", left: { value: "Email/account required", pct: 65 }, right: { value: "No email, account number", pct: 98 }, winner: "right" },
      { category: "Streaming", left: { value: "Very consistent", pct: 90 }, right: { value: "Not a focus", pct: 55 }, winner: "left" },
      { category: "Pricing Honesty", left: { value: "Promo + renewal", pct: 72 }, right: { value: "Flat €5/mo", pct: 95 }, winner: "right" },
      { category: "Mainstream UX", left: { value: "Polished apps", pct: 90 }, right: { value: "Functional, sparse", pct: 74 }, winner: "left" },
      { category: "Affiliate Bias Risk", left: { value: "Affiliate program", pct: 70 }, right: { value: "No affiliate program", pct: 98 }, winner: "right" },
    ],
    verdictParagraphs: [
      "Choose NordVPN if you want speed, streaming support, and polished consumer apps.",
      "Choose Mullvad if you want anonymous signup, flat pricing, and a provider whose business model avoids affiliate incentives.",
      "NordVPN wins for most households. Mullvad wins for readers who care more about anonymity than convenience.",
    ],
    leftPickLabel: "Best Mainstream",
    rightPickLabel: "Best Privacy Purist",
    leftBadge: "NordVPN wins",
    rightBadge: "Mullvad wins",
    faqs: [
      { question: "Is Mullvad better than NordVPN?", answer: "Mullvad is better for anonymity and pricing honesty. NordVPN is better for speed, streaming, and mainstream usability." },
      { question: "Why recommend Mullvad if there is no affiliate commission?", answer: "Because it is a genuinely strong privacy product and editorial independence requires non-monetized recommendations." },
    ],
  },
  {
    slug: "expressvpn-vs-purevpn",
    leftSlug: "expressvpn",
    rightSlug: "purevpn",
    expressPaidPick: compareExpressPaidPicks["expressvpn-vs-purevpn"],
    title: "ExpressVPN vs PureVPN 2026: Premium Reliability or Budget Savings?",
    description:
      "ExpressVPN vs PureVPN compared across price, speed consistency, streaming, trust posture, app reliability, and support.",
    intro:
      "ExpressVPN and PureVPN are almost opposite buying decisions. ExpressVPN is expensive but polished. PureVPN is cheap but more variable. This is the clearest premium-versus-budget comparison in our matrix.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    rows: [
      { category: "Entry Pricing", left: { value: "$6.67/mo", pct: 55 }, right: { value: "$2.14/mo", pct: 92 }, winner: "right" },
      { category: "App Reliability", left: { value: "Polished, stable", pct: 92 }, right: { value: "Functional, variable", pct: 65 }, winner: "left" },
      { category: "Domestic Speed", left: { value: "700 Mbps median", pct: 74 }, right: { value: "610 Mbps median", pct: 64 }, winner: "left" },
      { category: "Streaming", left: { value: "Very reliable", pct: 91 }, right: { value: "Variable", pct: 68 }, winner: "left" },
      { category: "Trust Profile", left: { value: "TrustedServer audits", pct: 88 }, right: { value: "Improving, legacy concerns", pct: 58 }, winner: "left" },
      { category: "Support Quality", left: { value: "Excellent docs/chat", pct: 90 }, right: { value: "Adequate", pct: 70 }, winner: "left" },
    ],
    verdictParagraphs: [
      "Choose ExpressVPN if support quality, streaming reliability, and app polish justify premium pricing.",
      "Choose PureVPN if first-term cost is the only thing that matters and you accept weaker consistency.",
      "ExpressVPN is the better product. PureVPN is the cheaper tool. That distinction matters.",
    ],
    leftPickLabel: "Best Premium",
    rightPickLabel: "Budget Pick",
    leftBadge: "ExpressVPN wins",
    rightBadge: "PureVPN wins",
    faqs: [
      { question: "Is ExpressVPN worth paying more than PureVPN?", answer: "Yes if streaming reliability and support matter. No if your only goal is cheap domestic browsing." },
      { question: "Which is faster?", answer: "ExpressVPN is faster and more stable in our testing, though neither matches NordVPN's throughput." },
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
      "Surfshark scores higher in our testing (4.6 vs 4.4) and covers unlimited devices. Proton VPN is the pick when you want public audit reports, open-source apps, and a free plan to start on.",
    authorId: "sarah",
    dateModified: "2026-10-06",
    updatedBadgeLabel: "Updated Oct 6, 2026",
    verdictBox:
      "Surfshark scores higher in our testing (4.6 vs 4.4) and covers unlimited devices. Proton VPN is the pick if you want to read the audits yourself: Swiss jurisdiction, open-source apps, and published yearly no-logs reports.",
    specRows: [
      {
        spec: "Servers / countries",
        left: "4,500+ servers in 100 countries [V1]",
        right: "20,000+ servers in 140+ countries [P1]",
      },
      {
        spec: "Jurisdiction",
        left: "Netherlands (Surfshark B.V., Amsterdam) [V1]",
        right: "Switzerland (Proton AG, Geneva) [P1]",
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
        spec: "Streaming",
        left: "Reliable on major US libraries in our April 2026 testing [T1]",
        right: "VPN Plus lists streaming support [P1]. Our April 2026 results are in the Proton VPN review [T2]",
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
      { category: "Devices", left: { value: "Unlimited", pct: 98 }, right: { value: "10 on VPN Plus", pct: 70 }, winner: "left" },
      { category: "Privacy & audits", left: { value: "Deloitte, customer-only report", pct: 82 }, right: { value: "Public Securitum reports", pct: 94 }, winner: "right" },
      { category: "Jurisdiction", left: { value: "Netherlands", pct: 80 }, right: { value: "Switzerland", pct: 92 }, winner: "right" },
      { category: "Speed", left: { value: "820 Mbps US median", pct: 86 }, right: { value: "650 Mbps US median", pct: 72 }, winner: "left" },
      { category: "Streaming", left: { value: "Strong US libraries in our tests", pct: 84 }, right: { value: "Plus lists streaming support", pct: 70 }, winner: "left" },
      { category: "Torrenting", left: { value: "Marked P2P locations", pct: 80 }, right: { value: "P2P plus port forwarding", pct: 88 }, winner: "right" },
      { category: "Free option", left: { value: "Trial, 3 devices", pct: 40 }, right: { value: "Free plan, 1 device", pct: 88 }, winner: "right" },
      { category: "Price", left: { value: "Intro deal, then applicable renewal price", pct: 70 }, right: { value: "Intro price and renewal price on the plan card", pct: 70 }, winner: "draw" },
    ],
    notes: [
      {
        heading: "Speed",
        paragraphs: [
          "These medians are from our April 2026 review pages, not a new test run. Surfshark's US domestic median was 820 Mbps, with 640 Mbps to London, 610 Mbps to Frankfurt, and a 690 Mbps domestic floor [T1].",
          "Proton VPN's US domestic median was 650 Mbps, with 520 Mbps to London, 490 Mbps to Frankfurt, and a 480 Mbps domestic floor [T2]. Surfshark is the faster of the two in that cycle. Proton is still fast enough for streaming and remote work.",
        ],
      },
      {
        heading: "Price",
        paragraphs: [
          "Both providers show an introductory price and a later renewal rate. Surfshark's pricing FAQ says a 2-year plan is billed once up front and then renews annually at \"the applicable renewal price\" [V1]. Proton's plan cards use the line \"Billed at … for the first …, then renews at …\" [P1].",
          "TODO-CWS: capture price + date. Surfshark's pricing payload on Oct 6, 2026 listed conflicting recurring fields for the same plan, and Proton's static page still rendered price placeholders, so this page does not state a dollar amount.",
        ],
      },
    ],
    verdictParagraphs: [
      "Pick Surfshark if you're covering a whole household — phones, laptops, and several TVs — on one plan, or you want the higher-scoring all-rounder in our testing (4.6).",
      "Pick Proton VPN if you want public audit reports and open-source apps, need port forwarding for torrents, or want to start on a free plan.",
    ],
    leftPickLabel: "Household value",
    rightPickLabel: "Verifiable privacy",
    leftBadge: "Surfshark wins",
    rightBadge: "Proton VPN wins",
    faqs: [
      {
        question: "Is Surfshark or Proton VPN better for torrenting?",
        answer:
          "Both allow P2P. Proton VPN adds port forwarding on paid plans [P5]. Surfshark marks P2P locations on its server list [V6].",
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
