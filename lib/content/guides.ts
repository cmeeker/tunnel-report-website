import type { FaqItem } from "@/components/FaqSection";

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
];

export const guideSlugs = guides.map((guide) => guide.slug);

export const guideMap = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<
  string,
  Guide
>;
