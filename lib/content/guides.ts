import type { FaqItem } from "@/components/FaqSection";
import type { RelatedLink } from "@/components/RelatedLinks";
import type { PaidPartnerKey } from "@/lib/content/paid-picks";

export type GuideTable = {
  headers: string[];
  rows: string[][];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  dek: string;
  authorId: "marcus" | "sarah" | "daniel";
  dateModified: string;
  category: "Methodology" | "Privacy" | "Pricing" | "Protocol";
  sections: { heading: string; paragraphs: string[] }[];
  faqs: FaqItem[];
  relatedReviewSlugs: string[];
  relatedCompareSlugs: string[];
  h1?: string;
  updatedBadgeLabel?: string;
  updatedDateLabel?: string;
  shortAnswer?: string;
  table?: GuideTable;
  cta?: { partner: PaidPartnerKey; label: string };
  sourceIds?: string[];
  relatedLinks?: RelatedLink[];
};

export const guides: Guide[] = [
  {
    slug: "wireguard-vs-openvpn",
    title: "WireGuard vs OpenVPN: Which VPN Protocol Should You Use?",
    description:
      "WireGuard vs OpenVPN explained in plain English: speed, privacy, auditability, battery life, censorship resistance, and when to switch protocols.",
    dek:
      "WireGuard is usually faster and easier on battery. OpenVPN is older, battle-tested, and sometimes better for restrictive networks. The right protocol depends on your threat model, not brand marketing.",
    authorId: "marcus",
    dateModified: "2026-04-08",
    category: "Protocol",
    relatedReviewSlugs: ["nordvpn", "surfshark", "protonvpn"],
    relatedCompareSlugs: ["surfshark-vs-nordvpn", "nordvpn-vs-expressvpn"],
    sections: [
      {
        heading: "The short version",
        paragraphs: [
          "For most users in 2026, WireGuard or a WireGuard-based implementation should be the default protocol. It is leaner, faster to reconnect, and typically easier on laptop and phone batteries than OpenVPN.",
          "OpenVPN still matters. It has a long security history, mature tooling, and can be easier to disguise on networks that aggressively block newer VPN protocols.",
        ],
      },
      {
        heading: "Why WireGuard feels faster",
        paragraphs: [
          "WireGuard's codebase is dramatically smaller than OpenVPN's, which reduces overhead and simplifies implementation. In consumer VPN apps, that usually translates into faster connection setup and higher median throughput.",
          "NordVPN's NordLynx, Surfshark's WireGuard mode, and Proton VPN's WireGuard support all performed better than OpenVPN in our current benchmark cycle, especially on domestic routes.",
        ],
      },
      {
        heading: "When OpenVPN still wins",
        paragraphs: [
          "OpenVPN can run over TCP/443, which makes it look more like ordinary HTTPS traffic. That can help on restrictive hotel, campus, or workplace networks where UDP-based VPN traffic is blocked.",
          "If your VPN fails to connect on WireGuard while traveling, OpenVPN TCP is the first fallback we recommend before switching providers.",
        ],
      },
      {
        heading: "Privacy is about implementation",
        paragraphs: [
          "Protocol choice alone does not determine privacy. Logging policy, account model, DNS handling, kill switch behavior, and provider jurisdiction matter more than the acronym printed in the app settings.",
          "A well-implemented WireGuard provider with audited no-logs controls beats a poorly managed OpenVPN provider every time.",
        ],
      },
    ],
    faqs: [
      { question: "Is WireGuard safer than OpenVPN?", answer: "WireGuard is modern and small, which helps security review, but safety depends on provider implementation. OpenVPN remains secure when configured correctly." },
      { question: "Should I use TCP or UDP?", answer: "Use UDP for speed when possible. Use TCP/443 when networks block VPN traffic or you need better compatibility." },
      { question: "What protocol does NordVPN use?", answer: "NordVPN's default protocol is NordLynx, its WireGuard-based implementation." },
    ],
  },
  {
    slug: "what-is-a-no-logs-vpn",
    title: "What Is a No-Logs VPN, Really?",
    description:
      "No-logs VPN claims explained: what providers can still collect, what audits verify, and how to evaluate no-logs marketing without trusting slogans.",
    dek:
      "A no-logs claim is only useful when you understand what data is excluded, what metadata remains, and whether an independent audit tested real infrastructure.",
    authorId: "daniel",
    dateModified: "2026-04-08",
    category: "Privacy",
    relatedReviewSlugs: ["mullvad", "protonvpn", "nordvpn"],
    relatedCompareSlugs: ["mullvad-vs-protonvpn", "nordvpn-vs-protonvpn"],
    sections: [
      {
        heading: "No logs does not mean no data",
        paragraphs: [
          "Every VPN needs some operational data to run: account status, payment state, abuse controls, server load, and support history. The question is whether the provider stores activity logs that can reconstruct browsing behavior or connection history.",
          "A serious no-logs VPN should clearly separate account data from traffic data and explain retention periods in plain language.",
        ],
      },
      {
        heading: "Audit scope is everything",
        paragraphs: [
          "The strongest audits test server infrastructure, logging pipelines, configuration, and retention controls. Weak audits review policy language and call it verification.",
          "When we evaluate providers, we look for evidence that auditors had access to systems, not just marketing copy.",
        ],
      },
      {
        heading: "Legal jurisdiction still matters",
        paragraphs: [
          "Jurisdiction determines what demands a provider may face and how it can contest them. Panama, Switzerland, and the British Virgin Islands are structurally different from countries with expansive data-retention obligations.",
          "Jurisdiction is not a magic shield. A provider with weak infrastructure and vague policies is still risky, even in a privacy-friendly country.",
        ],
      },
    ],
    faqs: [
      { question: "Can a no-logs VPN identify me?", answer: "It may still have account, payment, or support records. Strong providers minimize this data and keep it separate from traffic activity." },
      { question: "Are no-logs audits trustworthy?", answer: "Some are. Trust depends on auditor reputation, technical scope, publication detail, and whether audits repeat over time." },
      { question: "Which VPN has the best no-logs posture?", answer: "Mullvad leads on account minimization. NordVPN leads among mainstream affiliate providers on audit cadence and infrastructure maturity." },
    ],
  },
  {
    slug: "vpn-jurisdictions-explained",
    title: "VPN Jurisdictions Explained: Five Eyes, Panama, Switzerland, and BVI",
    description:
      "VPN jurisdiction explained: how country law, data-retention demands, and intelligence-sharing alliances affect VPN privacy claims.",
    dek:
      "Jurisdiction does not replace technical controls, but it shapes the legal pressure a VPN company can face. Here is how we weigh it in reviews.",
    authorId: "daniel",
    dateModified: "2026-04-08",
    category: "Privacy",
    relatedReviewSlugs: ["nordvpn", "protonvpn", "expressvpn"],
    relatedCompareSlugs: ["mullvad-vs-protonvpn", "nordvpn-vs-expressvpn"],
    sections: [
      {
        heading: "Jurisdiction is pressure, not proof",
        paragraphs: [
          "A privacy-friendly jurisdiction can reduce compelled data-retention risk, but it cannot make a bad logging system safe. Technical architecture and audit evidence still matter.",
          "We treat jurisdiction as one factor in a broader trust model: policy language, audits, incident response, ownership, and infrastructure design.",
        ],
      },
      {
        heading: "Five Eyes and intelligence-sharing alliances",
        paragraphs: [
          "Five Eyes, Nine Eyes, and Fourteen Eyes refer to intelligence-sharing relationships. They are not VPN-specific laws, but they matter because they indicate broader surveillance cooperation.",
          "Providers outside these alliances often market jurisdiction aggressively. That can be meaningful, but only when paired with real no-logs controls.",
        ],
      },
      {
        heading: "How top providers compare",
        paragraphs: [
          "NordVPN operates from Panama, Proton VPN from Switzerland, and ExpressVPN from the British Virgin Islands. Each offers legal advantages over providers in aggressive retention regimes.",
          "Mullvad operates from Sweden, which is less marketing-friendly than Panama or Switzerland, but its account model and transparency posture offset some jurisdiction concerns.",
        ],
      },
    ],
    faqs: [
      { question: "What is the best VPN jurisdiction?", answer: "There is no single best jurisdiction. Switzerland and Panama are strong on paper; implementation and audits matter just as much." },
      { question: "Should I avoid US-based VPNs?", answer: "Not automatically, but US jurisdiction increases legal exposure. We prefer providers that combine strong jurisdiction with audited no-logs infrastructure." },
      { question: "Is British Virgin Islands jurisdiction good for VPNs?", answer: "It is generally favorable for consumer VPN privacy, which is one reason ExpressVPN uses it prominently in trust messaging." },
    ],
  },
  {
    slug: "how-we-test-vpn-speed",
    title: "How We Test VPN Speed: Median Beats Peak",
    description:
      "Tunnel Report's VPN speed-testing methodology: routes, time windows, median throughput, speed floors, and why screenshot benchmarks mislead buyers.",
    dek:
      "Peak speed screenshots are easy to game. We report medians and floors because those numbers better match what readers experience during real use.",
    authorId: "marcus",
    dateModified: "2026-04-08",
    category: "Methodology",
    relatedReviewSlugs: ["nordvpn", "surfshark", "expressvpn"],
    relatedCompareSlugs: ["surfshark-vs-nordvpn", "surfshark-vs-expressvpn"],
    sections: [
      {
        heading: "Why we avoid single-run screenshots",
        paragraphs: [
          "A single speed-test screenshot tells you almost nothing about a VPN. Server load, time of day, route selection, protocol, and local ISP conditions can all swing results dramatically.",
          "We run repeated sessions and publish median numbers because a stable middle result is harder to manipulate than a best-case peak.",
        ],
      },
      {
        heading: "Routes and time windows",
        paragraphs: [
          "Our standard cycle tests US East, US West, London, and Frankfurt routes across morning, afternoon, and evening windows. Evening results matter because that is when most readers actually stream, game, and work.",
          "We track domestic median, transatlantic median, and the lowest observed domestic speed floor. The floor often separates good providers from providers with flashy peaks.",
        ],
      },
      {
        heading: "Interpreting the numbers",
        paragraphs: [
          "A VPN that averages 700 Mbps with a 620 Mbps floor can feel better than a VPN that peaks at 900 Mbps and drops to 250 Mbps at night.",
          "For most readers, latency stability and reconnection behavior matter as much as raw throughput once speeds exceed 200 Mbps.",
        ],
      },
    ],
    faqs: [
      { question: "What VPN speed is good enough?", answer: "For 4K streaming, 25 Mbps per stream is enough. For households and gaming, consistency and latency matter more than raw peak speed." },
      { question: "Why do your VPN speeds differ from provider claims?", answer: "Provider claims often reflect idealized peak runs. We test repeated sessions across routes and time windows." },
      { question: "Which VPN is fastest?", answer: "NordVPN currently leads our median domestic and transatlantic benchmarks, with Surfshark close behind on domestic routes." },
    ],
  },
  {
    slug: "vpn-renewal-pricing-traps",
    title: "VPN Renewal Pricing Traps: How to Avoid Overpaying",
    description:
      "VPN renewal pricing explained: why introductory VPN deals jump in year two, how to compare lifecycle cost, and when to switch providers.",
    dek:
      "The cheapest VPN at checkout is not always the cheapest VPN over two years. Renewal pricing is where many buyers lose the savings they thought they were getting.",
    authorId: "sarah",
    dateModified: "2026-04-08",
    category: "Pricing",
    relatedReviewSlugs: ["surfshark", "purevpn", "nordvpn"],
    relatedCompareSlugs: ["nordvpn-vs-purevpn", "surfshark-vs-purevpn"],
    sections: [
      {
        heading: "Introductory pricing is a funnel",
        paragraphs: [
          "Most VPN providers sell multi-year introductory offers and raise the rate at renewal. That is not automatically predatory, but it is often under-explained.",
          "A fair comparison looks at the full lifecycle cost: first term, renewal term, add-ons, taxes, refund policy, and device limits.",
        ],
      },
      {
        heading: "Set a renewal reminder",
        paragraphs: [
          "If you buy a two-year VPN plan, set a calendar reminder 30 days before renewal. That gives you time to re-check pricing, negotiate, cancel, or switch.",
          "Do not assume the checkout price is the long-term price. The year-two or year-three rate can materially change the value equation.",
        ],
      },
      {
        heading: "When switching makes sense",
        paragraphs: [
          "Switch when renewal pricing rises and your current provider is not clearly better for your use case. Surfshark and PureVPN often win on entry price; NordVPN and ExpressVPN justify higher prices with stronger performance or polish.",
          "If your current provider is reliable and the renewal rate is fair, switching for a marginal discount may not be worth the setup friction.",
        ],
      },
    ],
    faqs: [
      { question: "Why do VPN prices go up at renewal?", answer: "Introductory discounts are acquisition offers. Renewal pricing usually reflects the standard plan rate after the promotional term ends." },
      { question: "Which VPN has the best long-term value?", answer: "Surfshark is strongest for multi-device households. Mullvad has the cleanest flat-rate pricing but no affiliate program and fewer streaming features." },
      { question: "Can I cancel before VPN renewal?", answer: "Usually yes, but policies vary. Set a reminder before the renewal date and confirm cancellation in your account dashboard." },
    ],
  },
  {
    slug: "surfshark-renewal-price",
    title: "Surfshark Renewal Price (2026)",
    h1: "Surfshark Renewal Price: What Happens When the Intro Deal Ends",
    description:
      "How Surfshark renewal works: when the intro deal ends, how it renews, how to turn off auto-renew, and what Surfshark says about renewal pricing.",
    dek:
      "The 2-year plan is billed once up front, then renews annually. Surfshark charges \"the applicable renewal price\" at renewal. Check that amount in your account before the date.",
    authorId: "sarah",
    dateModified: "2026-10-06",
    updatedBadgeLabel: "Updated Oct 6, 2026",
    updatedDateLabel: "October 6, 2026",
    category: "Pricing",
    shortAnswer:
      "The 2-year plan is billed once up front, then renews annually after it expires [V1]. At renewal you're charged \"the applicable renewal price\" [V1]. Check the renewal amount in your account before the date [V8].",
    relatedReviewSlugs: ["surfshark"],
    relatedCompareSlugs: ["surfshark-vs-purevpn"],
    relatedLinks: [
      { href: "/guides/vpn-renewal-pricing-traps", label: "VPN Renewal Pricing Traps" },
      { href: "/reviews/surfshark", label: "Surfshark Review" },
      { href: "/alternatives/surfshark", label: "Surfshark Alternatives" },
      { href: "/compare/surfshark-vs-purevpn", label: "Surfshark vs PureVPN" },
      { href: "/best-vpn-for/budget", label: "Best Cheap VPN" },
      { href: "/methodology", label: "Methodology" },
    ],
    cta: { partner: "surfshark", label: "See Surfshark's current deal" },
    sourceIds: ["V1", "V7", "V8", "H1"],
    sections: [
      {
        heading: "How the billing cycle works",
        paragraphs: [
          "Surfshark's pricing FAQ, as published on surfshark.com/pricing on Oct 6, 2026, describes three cycles [V1]. The monthly plan is billed every month. The 1-year plan is billed every 12 months. The 2-year plan is billed once at the start, then annually after it expires.",
          "A longer intro term is not a promise that the renewal will repeat that same term. The 2-year plan does not renew for another two years. It renews annually [V1].",
        ],
      },
      {
        heading: "What renewal will cost",
        paragraphs: [
          "Surfshark's own FAQ says the cost after two years \"depends on the chosen plan\" and that renewal is charged at \"the applicable renewal price\" [V1]. That page does not publish one fixed dollar amount that applies to every visitor.",
          "On Oct 6, 2026 the pricing payload for the Starter plan listed more than one recurring field for the same term, so this page does not state a dollar renewal price. Third-party sites that quote a single renewal number are not used here.",
        ],
      },
      {
        heading: "How to turn off auto-renew",
        paragraphs: [
          "Surfshark's support article, updated September 11, 2026, says to log in, open your email menu, and choose Subscription [V8]. The Subscription page shows the current plan and either an expiration date or a renewal date.",
          "To stop future charges, open the Payments tab, then under Subscription details click Cancel renewal and confirm [V8]. The subscription stays active until the expiration date, and Surfshark says no additional charges are made after that.",
          "Cancelling auto-renew does not trigger a refund [V8]. The money-back window is 30 days from purchase [V1][V8]. If the subscription was bought through Apple, Google Play, or Amazon, Surfshark says you manage renewal in that store, not in the Surfshark account [V8].",
        ],
      },
      {
        heading: "Ways to pay less at renewal",
        paragraphs: [
          "Check Surfshark's official deals page before the term ends [V7]. This page does not publish coupon codes. If a discount exists, it is whatever that page or your account shows on the day you look.",
          "Turn auto-renew off and compare prices before the expiration date. hide.me says its plans renew at the same price and duration you signed up for [H1]. That is a different promise from Surfshark's \"applicable renewal price,\" and it is a reason to read both pricing pages before you renew.",
        ],
      },
    ],
    table: {
      headers: ["Plan length", "How it renews", "Where to check", "Source"],
      rows: [
        ["Monthly", "Billed every month", "Surfshark account → Subscription", "[V1][V8]"],
        ["1-year", "Billed every 12 months", "Surfshark account → Subscription", "[V1][V8]"],
        [
          "2-year",
          "Billed once up front, then annually after it expires, at the applicable renewal price",
          "Surfshark account → Subscription, before the renewal date",
          "[V1][V8]",
        ],
      ],
    },
    faqs: [
      {
        question: "Does Surfshark auto-renew?",
        answer:
          "Yes, unless you turn it off. The Subscription page shows whether auto-renewal is enabled [V8]. Some subscriptions bought through an app store are managed in that store instead.",
      },
      {
        question: "Does a 2-year Surfshark plan renew for 2 years again?",
        answer:
          "No. Surfshark says the 2-year plan is billed once at the start and then renews annually after it expires [V1].",
      },
      {
        question: "Is there a Surfshark renewal discount for existing customers?",
        answer:
          "Only what the official deals page or your account shows on the day you check [V7]. This page does not promise a renewal discount.",
      },
      {
        question: "Is there a Surfshark coupon code?",
        answer:
          "We don't publish codes. Surfshark's current offers are on its deals page [V7].",
      },
      {
        question: "Can I get a refund after renewal?",
        answer:
          "Cancelling auto-renew does not grant a refund [V8]. Surfshark's money-back window is 30 days from purchase [V1][V8]. For a charge that already renewed, use the refund-policy steps linked from that support article rather than assuming the intro-term window still applies.",
      },
    ],
  },
  {
    slug: "protonvpn-renewal-price",
    title: "Proton VPN Renewal Price (2026)",
    h1: "Proton VPN Renewal Price: What Renews, and How to Pay Less",
    description:
      "How Proton VPN renewal works: intro deal vs renewal rate, switching plans with prorated credit, the 30-day refund, and why Proton says no codes needed.",
    dek:
      "Proton shows the intro price and the renewal price on its plan cards. Plan changes use prorated credit, and the money-back window is 30 days.",
    authorId: "sarah",
    dateModified: "2026-10-06",
    updatedBadgeLabel: "Updated Oct 6, 2026",
    updatedDateLabel: "October 6, 2026",
    category: "Pricing",
    shortAnswer:
      "Proton shows the intro price and the renewal price on its plan cards (\"Billed at … for the first …, then renews at …\") [P1]. Plan changes apply prorated credit [P1][P8]. Proton offers a 30-day money-back guarantee [P1][P7].",
    relatedReviewSlugs: ["protonvpn"],
    relatedCompareSlugs: ["surfshark-vs-protonvpn"],
    relatedLinks: [
      { href: "/guides/vpn-renewal-pricing-traps", label: "VPN Renewal Pricing Traps" },
      { href: "/reviews/protonvpn", label: "Proton VPN Review" },
      { href: "/alternatives/protonvpn", label: "Proton VPN Alternatives" },
      { href: "/compare/surfshark-vs-protonvpn", label: "Surfshark vs Proton VPN" },
      { href: "/best-vpn-for/privacy", label: "Best VPN for Privacy" },
      { href: "/guides/what-is-a-no-logs-vpn", label: "What Is a No-Logs VPN?" },
    ],
    cta: { partner: "protonvpn", label: "See Proton VPN's current deal" },
    sourceIds: ["P1", "P4", "P7", "P8"],
    sections: [
      {
        heading: "Where the renewal number is shown",
        paragraphs: [
          "Proton's pricing page renders each plan card with a billing line: \"Billed at <price> for the first <cycle> months, then renews at <price> every <cycle> month(s)\" [P1]. The intro amount and the renewal amount are supposed to sit on that same card.",
          "A static fetch of protonvpn.com/pricing on Oct 6, 2026 returned JavaScript placeholders ($0.00 and $XX.XX) instead of live prices, so this page does not state a dollar renewal rate.",
        ],
      },
      {
        heading: "Switching plans or lengths before renewal",
        paragraphs: [
          "Proton's pricing FAQ says you can switch plans at any time, including a change of length such as 1 month to 1 year, or an upgrade from VPN Plus to Proton Unlimited [P1]. Prorated credit is applied toward the new plan [P1][P8].",
          "A downgrade can require the account to fit the smaller plan. Proton says that may mean deactivating extra email addresses or calendars, or reducing storage, when you leave a bundle such as Proton Unlimited [P1].",
        ],
      },
      {
        heading: "Coupons",
        paragraphs: [
          "Proton's deals page says no codes are necessary [P7]. The pricing FAQ says longer terms are discounted versus monthly, but the static page we checked replaced those percentages with placeholders [P1].",
          "We don't publish coupon codes. If an offer exists, it is the one on Proton's deals page or in your account, not a code from a third-party list.",
        ],
      },
      {
        heading: "If you don't renew",
        paragraphs: [
          "Proton VPN Free stays available if you don't renew a paid plan. Proton says the free plan has no data cap and no artificial speed cap, and it covers 1 device [P1][P4]. Paid VPN Plus covers 10 devices [P1].",
          "The free plan is a fallback for low-risk browsing, not a match for VPN Plus server choice. VPN Plus is the plan that lists streaming support and 10 devices [P1].",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Proton VPN auto-renew?",
        answer:
          "Paid plans renew at the renewal price shown on the plan card unless you cancel before that date [P1]. The card text is \"Billed at … for the first …, then renews at …\"",
      },
      {
        question: "Is there a renewal discount for existing customers?",
        answer:
          "Don't count on one we didn't see. Check your account and Proton's official deals page [P7]. This page does not promise an existing-customer discount.",
      },
      {
        question: "Is there a Proton VPN coupon code?",
        answer:
          "Proton's deals page says no codes are necessary [P7]. We don't publish codes.",
      },
      {
        question: "What happens if I downgrade?",
        answer:
          "Proton applies prorated credit when you change plans [P1][P8]. If you downgrade from Proton Unlimited, the account has to fit the smaller plan, which can mean fewer addresses, calendars, or less storage [P1].",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Proton offers a 30-day money-back guarantee on subscriptions if you request it within the first 30 days [P1][P7]. You can cancel at any time; the refund window is that 30-day period.",
      },
    ],
  },
];

export const guideSlugs = guides.map((guide) => guide.slug);

export const guideMap = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<
  string,
  Guide
>;
