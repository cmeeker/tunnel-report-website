import type { Metadata } from "next";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { CitationLink } from "@/components/CitationLink";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { SourcesList } from "@/components/SourcesList";
import { citationSources, compareSources } from "@/lib/content/facts";
import { AFFILIATE_URLS } from "@/lib/content/vpn-metrics";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "NordVPN vs PureVPN 2026: Head-to-Head Comparison",
  description:
    "NordVPN vs PureVPN: a straight-talking 2026 comparison of speed consistency, privacy posture, pricing transparency, and real-world usability. We tell you which to buy and why.",
  path: "/compare/nordvpn-vs-purevpn",
});

const compareFaqs = [
  {
    question: "Is PureVPN a good budget alternative to NordVPN?",
    answer:
      "PureVPN offers genuinely lower introductory pricing, but the speed consistency gap on long-distance routes and the less-established audit track record mean you are trading reliability for savings. If budget is your primary constraint and you mostly use domestic connections, PureVPN can work. For mixed workloads, NordVPN is worth the premium.",
  },
  {
    question: "Which VPN is better for streaming?",
    answer:
      "NordVPN has a more consistent track record with major streaming platforms in our testing. PureVPN works for many services but has more variable success rates, particularly with region-locked content libraries.",
  },
];

const compareRows = [
  {
    category: "Speed (US Domestic)",
    nord: { value: "905 Mbps median", pct: 95 },
    pure: { value: "610 Mbps median", pct: 64 },
    winner: "nord",
  },
  {
    category: "Speed (Transatlantic)",
    nord: { value: "720 Mbps median", pct: 88 },
    pure: { value: "430 Mbps median", pct: 53 },
    winner: "nord",
  },
  {
    category: "Privacy Audit Depth",
    nord: { value: "Multiple infrastructure audits", pct: 92 },
    pure: { value: "Improving, legacy concerns remain", pct: 58 },
    winner: "nord",
  },
  {
    category: "Entry Pricing",
    nord: { value: "$3.99/mo (2yr plan)", pct: 72 },
    pure: { value: "$2.14/mo (2yr plan)", pct: 90 },
    winner: "pure",
  },
  {
    category: "App Reliability",
    nord: { value: "Polished, mature across platforms", pct: 90 },
    pure: { value: "Functional, occasional reconnect issues", pct: 65 },
    winner: "nord",
  },
  {
    category: "Server Network",
    nord: { value: "6,400+ servers, 111 countries", pct: 88 },
    pure: { value: "6,500+ servers, 78 countries", pct: 78 },
    winner: "draw",
  },
];

export default function NordVsPurePage() {
  return (
    <article className="space-y-14">
      <JsonLd
        data={buildArticleSchema({
          headline: "NordVPN vs PureVPN 2026: Head-to-Head Comparison",
          description: "Side-by-side editorial comparison for security-focused buyers.",
          path: "/compare/nordvpn-vs-purevpn",
          dateModified: "2026-04-08",
          authorName: personas.sarah.name,
        })}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">Comparison</span>
          <span className="badge badge-violet">April 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          NordVPN vs PureVPN 2026: Head-to-Head Comparison
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          These two providers sit at opposite ends of the value spectrum in our rankings. NordVPN
          leads on consistency and trust signals. PureVPN undercuts on price. The question is whether
          the savings justify what you give up — and for some readers, the honest answer is yes.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <AuthorByline persona={personas.sarah} />
          <LastUpdated date={siteConfig.updatedDate} />
        </div>
      </header>

      <DisclosureBanner />

      {/* Visual comparison bars */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Category-by-Category Breakdown</h2>
        <div className="space-y-3">
          {compareRows.map((row) => (
            <div key={row.category} className="glass-card p-7">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#e8ecf4]">{row.category}</h3>
                {row.winner === "nord" && <span className="badge badge-teal text-[0.6rem]">NordVPN wins</span>}
                {row.winner === "pure" && <span className="badge badge-cyan text-[0.6rem]">PureVPN wins</span>}
                {row.winner === "draw" && <span className="badge badge-violet text-[0.6rem]">Draw</span>}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">NordVPN</span>
                    <span className="text-[#94a3b8]">{row.nord.value}</span>
                  </div>
                  <div className="score-bar mt-1.5">
                    <div className="score-bar-fill" style={{ width: `${row.nord.pct}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white">PureVPN</span>
                    <span className="text-[#94a3b8]">{row.pure.value}</span>
                  </div>
                  <div className="mt-1.5 h-[6px] rounded-[3px] bg-[#1e293b] overflow-hidden">
                    <div
                      className="h-full rounded-[3px] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
                      style={{ width: `${row.pure.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#475569]">
          Pricing data from provider websites
          <CitationLink source={citationSources.S5} />
          <CitationLink source={citationSources.S6} />. Speed data from Tunnel Report benchmark suite.
        </p>
      </section>

      <hr className="divider-glow" />

      {/* Editorial verdict - Sarah voice */}
      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Which VPN Should You Actually Pick?</h2>
        <p>
          I have been covering this market long enough to know that &quot;it depends&quot; is the honest answer
          to most comparison questions, even though readers hate hearing it. So let me be as specific as
          I can about who should pick which.
        </p>
        <p>
          <strong>Choose NordVPN if:</strong> you want predictable performance across streaming, remote
          work, and general browsing without thinking about it. You are willing to pay a modest premium
          for a provider with a stronger audit narrative and more polished apps. You value the peace of
          mind that comes from a repeated, publicly documented security verification process.
        </p>
        <p>
          <strong>Choose PureVPN if:</strong> first-year price is your dominant buying criteria and you
          are mostly using the VPN for domestic browsing or light streaming. You are comfortable with a
          provider that is actively rebuilding its trust profile rather than one with an established track
          record. And you are willing to validate your own settings rather than relying on smart defaults.
        </p>
        <p>
          <strong>The honest middle ground:</strong> for most readers who email us asking which to pick,
          the answer is NordVPN. The speed consistency gap is real and noticeable on longer routes, and
          the privacy posture difference means something if your threat model extends beyond casual
          browsing. PureVPN is a legitimate option for budget-constrained users, but I would not recommend
          it as a default.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-card p-8 text-center">
          <span className="badge badge-teal mb-4">Recommended</span>
          <h3 className="text-xl font-bold text-white">NordVPN</h3>
          <p className="mt-3 text-sm text-[#94a3b8]">Best for most readers</p>
          <div className="mt-5">
            <AffiliateCTA href={AFFILIATE_URLS.nordvpn} partner="nordvpn" label="Visit NordVPN" />
          </div>
        </div>
        <div className="glass-card p-8 text-center">
          <span className="badge badge-cyan mb-4">Budget Pick</span>
          <h3 className="text-xl font-bold text-white">PureVPN</h3>
          <p className="mt-3 text-sm text-[#94a3b8]">Best for price-first buyers</p>
          <div className="mt-5">
            <AffiliateCTA href={AFFILIATE_URLS.purevpn} partner="purevpn" label="Visit PureVPN" />
          </div>
        </div>
      </div>

      <AuthorByline persona={personas.sarah} showBio />

      <hr className="divider-glow" />

      <section className="surface-card p-8">
        <ul className="mt-3 space-y-2.5">
          <li>
            <Link href="/reviews/nordvpn" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              Full NordVPN Review &rarr;
            </Link>
          </li>
          <li>
            <Link href="/best-vpns" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
              Best VPN Rankings 2026 &rarr;
            </Link>
          </li>
        </ul>
      </section>

      <FaqSection faqs={compareFaqs} />

      <SourcesList sources={[...compareSources, citationSources.S9]} />
    </article>
  );
}
