import type { Metadata } from "next";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { PaidPick } from "@/components/PaidPick";
import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CitationLink } from "@/components/CitationLink";
import { CitedText } from "@/components/CitedText";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PlainInternalLinkList } from "@/components/PlainInternalLinkList";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourcesList } from "@/components/SourcesList";
import { relatedPriceGuides } from "@/lib/content/latest-price-checks";
import { citationSources } from "@/lib/content/facts";
import { getProviderCtaHref, providerMap } from "@/lib/content/providers";
import { AFFILIATE_URLS, rankedVpns, useCaseSections } from "@/lib/content/vpn-metrics";
import { getBestVpnsRelatedLinks } from "@/lib/seo/related-links";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema, buildItemListSchema } from "@/lib/seo/schema";
import { getPageOgImageUrl } from "@/lib/seo/share-images";
import { siteConfig, affiliateDisclosureAnswer } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Best VPNs of 2026: Compared on Published Specs, Pricing and Third-Party Reports",
  description:
    "Comparison of VPN services based on published specs, pricing and third-party reports.",
  path: "/best-vpns",
});

const bestVpnsArticleDescription =
  "Comparison of VPN services based on published specs, pricing and third-party reports.";

export const PICK_LABELS: Record<string, string> = {
  nordvpn: "Our default pick",
  surfshark: "Our family-value pick",
  protonvpn: "Our privacy-first pick",
  expressvpn: "Alternative pick",
  purevpn: "Budget alternative",
  hideme: "Alternative pick",
  mullvad: "Alternative pick",
};

const bestVpnFaqs = [
  {
    question: "How do you pick VPNs?",
    answer: affiliateDisclosureAnswer,
  },
  {
    question: "Why is NordVPN listed first?",
    answer:
      "It is our default pick based on published specs, pricing and third-party reports. We may earn a commission from some links.",
  },
  {
    question: "A free VPN instead?",
    answer:
      "Free VPNs typically monetize through advertising, data collection, or bandwidth resale. If your threat model includes any form of surveillance or credential protection, the economics of free VPN providers should give you serious pause.",
  },
];

export default function BestVpnsPage() {
  const articleSchema = buildArticleSchema({
    headline: "Best VPNs of 2026: Compared on Published Specs, Pricing and Third-Party Reports",
    description: bestVpnsArticleDescription,
    path: "/best-vpns",
    datePublished: "2026-04-08",
    dateModified: "2026-10-18",
    image: getPageOgImageUrl("/best-vpns"),
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

        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Best VPNs", path: "/best-vpns" },
          ]}
        />

        <header className="space-y-5">
          <span className="badge badge-teal">Updated October 18, 2026</span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            Best VPNs of 2026: Compared on Published Specs, Pricing and Third-Party Reports
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
            Several providers have shifted position since our last update. Here is where the market
            stands.
          </p>
          <AuthorByline date="October 18, 2026" />
        </header>

        <DisclosureBanner />

        <section className="prose-dark space-y-4">
          <h2 className="text-xl font-bold text-white">What Changed in This Update</h2>
          <p>
            The biggest shift since our Q4 2025 comparison is in the mid-tier: Proton VPN&apos;s free tier
            continues to function as a credible entry point for low-risk users. NordVPN stays our default pick.
          </p>
          <p>
            The regulatory backdrop matters too. The FBI&apos;s IC3 reported $12.5 billion in online
            fraud losses for 2023<CitationLink source={citationSources.S1} />, and the FCC&apos;s
            broadband labeling mandate<CitationLink source={citationSources.S4} /> now gives consumers
            baseline data to compare against VPN performance claims. Both developments raise the
            stakes for choosing the right provider.
          </p>
        </section>

        <hr className="divider-glow" />

        {/* Ranked VPN cards */}
        <section className="space-y-6">
          {rankedVpns.map((vpn, i) => {
            const pickLabel = PICK_LABELS[vpn.slug];
            return (
            <div
              key={vpn.name}
              id={vpn.name.toLowerCase().replace(/\s+/g, "-")}
              className={`glass-card overflow-hidden fade-in-up delay-${Math.min((i + 1) * 100, 500)}`}
            >
              <div className="flex items-center justify-between border-b border-[#1e293b] px-6 py-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{vpn.name}</h3>
                    <p className="text-sm text-[#64748b]">{vpn.quickVerdict}</p>
                    {pickLabel ? <span className="badge badge-cyan mt-2">{pickLabel}</span> : null}
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

                <div className="grid gap-4 rounded-lg border border-[#1e293b] bg-[#0d1221] p-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#64748b]">Privacy</p>
                    <p className="mt-1 text-sm text-[#94a3b8]">
                      <CitedText text={vpn.privacySummary} />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#64748b]">Value</p>
                    <p className="mt-1 text-sm text-[#94a3b8]">{vpn.pricingSummary}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <AffiliateCTA href={vpn.ctaHref} partner={vpn.partner} label={`Visit ${vpn.name}`} />
                  {vpn.paidPick ? <PaidPick pick={vpn.paidPick} className="basis-full" /> : null}
                  <Link
                    href={`/reviews/${vpn.slug}`}
                    className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]"
                  >
                    Full {vpn.name} review &rarr;
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
        </section>

        <hr className="divider-glow" />

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Best VPN by Use Case</h2>
          <p className="max-w-3xl text-[#94a3b8]">
            If you have a specific use case, these targeted picks may serve you.
          </p>
          {useCaseSections.map((section) => {
            const pick = providerMap[section.pickSlug];
            const ctaHref = pick ? getProviderCtaHref(pick) : null;
            return (
              <div
                key={section.id}
                id={section.id}
                className="glass-card scroll-mt-28 p-8"
              >
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                <p className="mt-3 leading-relaxed text-[#94a3b8]">
                  <CitedText text={section.description} />
                </p>
                <p className="mt-4 text-sm text-[#cbd5e1]">
                  <strong className="text-[#00d4aa]">Our pick:</strong> {pick?.name}
                  {section.pickReason ? (
                    <>
                      {" "}
                      — <CitedText text={section.pickReason} />
                    </>
                  ) : null}
                </p>
                {ctaHref && pick?.affiliateKey && (
                  <div className="mt-5">
                    <AffiliateCTA
                      href={ctaHref}
                      partner={pick.affiliateKey}
                      label={`Visit ${pick.name}`}
                    />
                  </div>
                )}
                {!pick?.affiliateKey && pick && (
                  <div className="mt-5">
                    <Link
                      href={`/reviews/${pick.slug}`}
                      className="text-sm font-medium text-[#00d4aa] hover:underline"
                    >
                      Read our {pick.name} review (no affiliate) &rarr;
                    </Link>
                  </div>
                )}
                <div className="mt-4">
                  <Link
                    href={`/best-vpn-for/${section.id}`}
                    className="text-sm font-medium text-[#94a3b8] transition hover:text-[#00d4aa]"
                  >
                    Read the full {section.title.toLowerCase()} guide &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        <hr className="divider-glow" />

        <section className="prose-dark space-y-4">
          <h2 className="text-xl font-bold text-white">How We Built This Comparison</h2>
          <p>
            Where a provider publishes a report, we note what it covered, per the
            provider&apos;s own report.
          </p>
          <p>
            Pricing analysis looks beyond introductory offers. We track renewal rates, mandatory add-on
            bundling, and refund policy enforcement because a cheap first year means nothing if year two
            doubles the cost without notice.
          </p>
          <p>
            Read the full methodology breakdown on our{" "}
            <Link href="/methodology" className="text-[#00d4aa] underline decoration-[#1e293b] underline-offset-2 hover:decoration-[#00d4aa]">
              Methodology page
            </Link>.
          </p>
        </section>

        <RelatedLinks links={getBestVpnsRelatedLinks()} />

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

        <PlainInternalLinkList title="Related guides" links={relatedPriceGuides()} />
      </article>

      {/* Sticky sidebar */}
        <aside className="hidden h-fit space-y-6 lg:sticky lg:top-24 lg:block">
        <div className="glass-card p-7">
          <span className="badge badge-teal mb-3 text-[0.65rem]">Editor&apos;s Choice</span>
          <h2 className="text-lg font-bold text-white">Quick Pick: NordVPN</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
            If you need one recommendation, NordVPN is our default pick in this update, based on published
            specs.
          </p>
          <div className="mt-4">
            <AffiliateCTA href={AFFILIATE_URLS.nordvpn} partner="nordvpn" label="Visit NordVPN" />
          </div>
        </div>

        <RelatedLinks title="More Coverage" links={getBestVpnsRelatedLinks()} />
      </aside>
    </div>
  );
}
