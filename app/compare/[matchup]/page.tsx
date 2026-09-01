import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourcesList } from "@/components/SourcesList";
import { NordvpnVsProtonvpnLongform } from "@/components/compare/NordvpnVsProtonvpnLongform";
import { comparisonMap, comparisonSlugs, type Comparison } from "@/lib/content/comparisons";
import { citationSources, compareSources } from "@/lib/content/facts";
import {
  getProviderCtaHref,
  providerMap,
} from "@/lib/content/providers";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getCompareRelatedLinks } from "@/lib/seo/related-links";
import { buildArticleSchema } from "@/lib/seo/schema";

type ComparePageProps = {
  params: Promise<{ matchup: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisonSlugs.map((matchup) => ({ matchup }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { matchup } = await params;
  const c = comparisonMap[matchup];
  if (!c) {
    return buildPageMetadata({
      title: "VPN Comparison",
      description: "Independent VPN comparison from Tunnel Report.",
      path: `/compare/${matchup}`,
    });
  }
  return buildPageMetadata({
    title: c.title,
    description: c.description,
    path: `/compare/${c.slug}`,
  });
}

function CompareContent({ comparison }: { comparison: Comparison }) {
  const left = providerMap[comparison.leftSlug];
  const right = providerMap[comparison.rightSlug];
  if (!left || !right) return null;

  const formatIsoDateForByline = (iso: string) => {
    const date = new Date(`${iso}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime())) return iso;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  };

  const persona = personas[comparison.authorId];
  const leftCta = getProviderCtaHref(left);
  const rightCta = getProviderCtaHref(right);
  const path = `/compare/${comparison.slug}`;
  const isLongform = comparison.slug === "nordvpn-vs-protonvpn";
  const updatedDateLabel = formatIsoDateForByline(comparison.dateModified);

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: comparison.title,
          description: comparison.description,
          path,
          dateModified: comparison.dateModified,
          authorName: persona.name,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare/nordvpn-vs-purevpn" },
          { name: comparison.title.replace(/ 2026:.*/, ""), path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">Comparison</span>
          <span className="badge badge-violet">April 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {comparison.title}
        </h1>
        {!isLongform && (
          <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">{comparison.intro}</p>
        )}
        <AuthorByline persona={persona} date={updatedDateLabel} />
      </header>

      <DisclosureBanner />

      {isLongform ? (
        <NordvpnVsProtonvpnLongform />
      ) : (
        <>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">Category-by-Category Breakdown</h2>
            <div className="space-y-3">
              {comparison.rows.map((row, i) => (
                <div
                  key={row.category}
                  className={`glass-card p-7 fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-[#e8ecf4]">{row.category}</h3>
                    {row.winner === "left" && (
                      <span className="badge badge-teal text-[0.6rem]">{left.name} wins</span>
                    )}
                    {row.winner === "right" && (
                      <span className="badge badge-cyan text-[0.6rem]">{right.name} wins</span>
                    )}
                    {row.winner === "draw" && (
                      <span className="badge badge-violet text-[0.6rem]">Draw</span>
                    )}
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{left.name}</span>
                        <span className="text-[#94a3b8]">{row.left.value}</span>
                      </div>
                      <div className="score-bar mt-1.5">
                        <div className="score-bar-fill" style={{ width: `${row.left.pct}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{right.name}</span>
                        <span className="text-[#94a3b8]">{row.right.value}</span>
                      </div>
                      <div className="mt-1.5 h-[6px] overflow-hidden rounded-[3px] bg-[#1e293b]">
                        <div
                          className="h-full rounded-[3px] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
                          style={{ width: `${row.right.pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#475569]">
              Speed data from Tunnel Report benchmark suite. Pricing from provider websites.
            </p>
          </section>

          <hr className="divider-glow" />

          <section className="prose-dark space-y-4">
            <h2 className="text-2xl font-bold text-white">Which VPN Should You Actually Pick?</h2>
            {comparison.verdictParagraphs.map((para) => (
              <p key={para.slice(0, 50)}>{para}</p>
            ))}
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card p-8 text-center">
              <span className="badge badge-teal mb-4">{comparison.leftPickLabel}</span>
              <h3 className="text-xl font-bold text-white">{left.name}</h3>
              <div className="mt-5">
                {leftCta ? (
                  <AffiliateCTA
                    href={leftCta}
                    partner={left.affiliateKey!}
                    label={`Visit ${left.name}`}
                  />
                ) : (
                  <a
                    href="https://mullvad.net"
                    className="affiliate-cta inline-flex"
                    rel="noopener noreferrer"
                    data-partner="mullvad"
                  >
                    Visit Mullvad (direct)
                  </a>
                )}
              </div>
            </div>
            <div className="glass-card p-8 text-center">
              <span className="badge badge-cyan mb-4">{comparison.rightPickLabel}</span>
              <h3 className="text-xl font-bold text-white">{right.name}</h3>
              <div className="mt-5">
                {rightCta ? (
                  <AffiliateCTA
                    href={rightCta}
                    partner={right.affiliateKey!}
                    label={`Visit ${right.name}`}
                  />
                ) : (
                  <a
                    href="https://go.getproton.me/aff_c?offer_id=26&aff_id=19779"
                    className="affiliate-cta inline-flex"
                    rel="noopener noreferrer"
                    data-partner="protonvpn"
                  >
                    Visit Proton VPN (direct)
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <AuthorByline persona={persona} showBio />

      <hr className="divider-glow" />

      <RelatedLinks links={getCompareRelatedLinks(comparison.slug)} />

      {!isLongform && (
        <>
          <FaqSection faqs={comparison.faqs} />
          <SourcesList sources={[...compareSources, citationSources.S9]} />
        </>
      )}
    </article>
  );
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { matchup } = await params;
  const c = comparisonMap[matchup];
  if (!c) notFound();
  return <CompareContent comparison={c} />;
}
