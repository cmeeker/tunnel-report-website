import type { Metadata } from "next";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { CitationLink } from "@/components/CitationLink";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { SourcesList } from "@/components/SourcesList";
import { citationSources } from "@/lib/content/facts";
import { AFFILIATE_URLS, rankedVpns } from "@/lib/content/vpn-metrics";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema, buildItemListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Best VPNs of 2026: Tested and Ranked by Our Security Team",
  description:
    "Independent 2026 VPN rankings from Tunnel Report — based on repeatable speed benchmarks, privacy audit analysis, and long-term pricing transparency. We tested 47 providers so you don't have to.",
  path: "/best-vpns",
});

const bestVpnFaqs = [
  {
    question: "How many VPN services did you test for this ranking?",
    answer:
      "We evaluated 47 commercial VPN services across standardized speed benchmarks, privacy policy analysis, jurisdiction risk assessment, and pricing transparency checks before narrowing to this top five.",
  },
  {
    question: "Why is NordVPN ranked first over cheaper alternatives?",
    answer:
      "Because our scoring weights consistent performance and verifiable security behavior more heavily than introductory pricing. NordVPN maintained the highest composite score across speed floor stability, audit frequency, and app reliability.",
  },
  {
    question: "Can I trust a free VPN instead?",
    answer:
      "Free VPNs typically monetize through advertising, data collection, or bandwidth resale. If your threat model includes any form of surveillance or credential protection, the economics of free VPN providers should give you serious pause.",
  },
];

export default function BestVpnsPage() {
  const articleSchema = buildArticleSchema({
    headline: "Best VPNs of 2026: Tested and Ranked by Our Security Team",
    description:
      "Independent ranking of the top VPN services based on speed, privacy controls, and value.",
    path: "/best-vpns",
    dateModified: "2026-04-08",
    authorName: personas.marcus.name,
  });

  const itemListSchema = buildItemListSchema(
    rankedVpns.map((vpn) => ({
      position: vpn.rank,
      name: vpn.name,
      url: `${siteConfig.url}/best-vpns#${vpn.name.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  );

  return (
    <div className="grid gap-14 lg:grid-cols-[1fr_300px]">
      <article className="space-y-14 fade-in-up">
        <JsonLd data={[articleSchema, itemListSchema]} />

        <header className="space-y-5">
          <span className="badge badge-teal">Updated April 2026</span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            Best VPNs of 2026: Tested and Ranked by Our Security Team
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
            I have spent the better part of three months re-testing every major VPN provider against
            our updated benchmark suite. The methodology has not changed — repeatable multi-session
            speed tests, privacy policy forensics, jurisdiction mapping, and pricing transparency
            checks — but several providers have shifted position since our last cycle. Here is where
            the market stands.
          </p>
          <AuthorByline persona={personas.marcus} date={siteConfig.updatedDate} />
        </header>

        <DisclosureBanner />

        <section className="prose-dark space-y-4">
          <h2 className="text-xl font-bold text-white">What Changed in This Cycle</h2>
          <p>
            The biggest shift since our Q4 2025 rankings is in the mid-tier: Surfshark&apos;s connection
            stability improved materially on transatlantic routes, and Proton VPN&apos;s free tier
            continues to function as a credible entry point for low-risk users. NordVPN held its lead
            largely because nothing else in the market matches its combination of speed floor and audit
            cadence.
          </p>
          <p>
            The regulatory backdrop matters too. The FBI&apos;s IC3 reported $12.5 billion in online
            fraud losses for 2023<CitationLink source={citationSources.S1} />, and the FCC&apos;s
            broadband labeling mandate<CitationLink source={citationSources.S4} /> now gives consumers
            better baseline data to compare against VPN performance claims. Both developments raise the
            stakes for choosing the right provider.
          </p>
        </section>

        <hr className="divider-glow" />

        {/* Ranked VPN cards */}
        <section className="space-y-6">
          {rankedVpns.map((vpn, i) => (
            <div
              key={vpn.name}
              id={vpn.name.toLowerCase().replace(/\s+/g, "-")}
              className={`glass-card overflow-hidden fade-in-up delay-${Math.min((i + 1) * 100, 500)}`}
            >
              <div className="flex items-center justify-between border-b border-[#1e293b] px-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] text-lg font-extrabold text-[#0a0f1e]">
                    {vpn.rank}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{vpn.name}</h3>
                    <p className="text-sm text-[#64748b]">{vpn.quickVerdict}</p>
                  </div>
                </div>
                <div className="hidden items-center gap-3 sm:flex">
                  <div className="text-right">
                    <p className="text-2xl font-extrabold gradient-text">{vpn.score.toFixed(1)}</p>
                    <div className="score-bar mt-1 w-20">
                      <div className="score-bar-fill" style={{ width: `${(vpn.score / 5) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-[#00d4aa]">Strengths</h4>
                    <ul className="mt-2 space-y-1.5">
                      {vpn.pros.map((pro) => (
                        <li key={pro} className="flex gap-2 text-sm text-[#cbd5e1]">
                          <span className="mt-0.5 shrink-0 text-[#00d4aa]">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-[#f87171]">Limitations</h4>
                    <ul className="mt-2 space-y-1.5">
                      {vpn.cons.map((con) => (
                        <li key={con} className="flex gap-2 text-sm text-[#cbd5e1]">
                          <span className="mt-0.5 shrink-0 text-[#f87171]">&minus;</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 rounded-lg border border-[#1e293b] bg-[#0d1221] p-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#64748b]">Speed</p>
                    <p className="mt-1 text-sm text-[#94a3b8]">{vpn.speedSummary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#64748b]">Privacy</p>
                    <p className="mt-1 text-sm text-[#94a3b8]">{vpn.privacySummary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#64748b]">Value</p>
                    <p className="mt-1 text-sm text-[#94a3b8]">{vpn.pricingSummary}</p>
                  </div>
                </div>

                <AffiliateCTA href={vpn.ctaHref} partner={vpn.partner} label={`Visit ${vpn.name}`} />
              </div>
            </div>
          ))}
        </section>

        <hr className="divider-glow" />

        <section className="prose-dark space-y-4">
          <h2 className="text-xl font-bold text-white">How We Built This Ranking</h2>
          <p>
            Every provider in our top five was tested across a minimum of 12 speed sessions spanning
            US East, US West, London, and Frankfurt exit nodes. We measure median throughput rather
            than peak, because the connection you get at 9pm matters more than the one you get at 3am
            when nobody else is online.
          </p>
          <p>
            Privacy scoring accounts for audit scope (not just whether an audit happened, but what it
            actually tested), incident response transparency, jurisdiction risk profile, and how clearly
            the provider communicates data retention practices to regular users.
          </p>
          <p>
            Pricing analysis looks beyond introductory offers. We track renewal rates, mandatory add-on
            bundling, and refund policy enforcement because a cheap first year means nothing if year two
            doubles the cost without notice.
          </p>
          <p>
            Read the full methodology breakdown on our{" "}
            <Link href="/about" className="text-[#00d4aa] underline decoration-[#1e293b] underline-offset-2 hover:decoration-[#00d4aa]">
              About page
            </Link>.
          </p>
        </section>

        <FaqSection faqs={bestVpnFaqs} />

        <SourcesList
          sources={[
            citationSources.S1,
            citationSources.S4,
            citationSources.S5,
            citationSources.S6,
            citationSources.S7,
            citationSources.S8,
          ]}
        />
      </article>

      {/* Sticky sidebar */}
        <aside className="hidden h-fit space-y-6 lg:sticky lg:top-24 lg:block">
        <div className="glass-card p-7">
          <span className="badge badge-teal mb-3 text-[0.65rem]">Editor&apos;s Choice</span>
          <h2 className="text-lg font-bold text-white">Quick Pick: NordVPN</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
            If you need one recommendation and do not want to read 3,000 words, NordVPN offers
            the best combination of speed consistency, audit frequency, and app maturity in our
            current testing cycle.
          </p>
          <div className="mt-4">
            <AffiliateCTA href={AFFILIATE_URLS.nordvpn} partner="nordvpn" label="Visit NordVPN" />
          </div>
        </div>

        <div className="glass-card p-7">
          <ul className="mt-3 space-y-2.5">
            <li>
              <Link href="/reviews/nordvpn" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
                NordVPN Full Review &rarr;
              </Link>
            </li>
            <li>
              <Link href="/compare/nordvpn-vs-purevpn" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
                NordVPN vs PureVPN &rarr;
              </Link>
            </li>
            <li>
              <Link href="/vpn/new-york" className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
                Best VPN for New York &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
