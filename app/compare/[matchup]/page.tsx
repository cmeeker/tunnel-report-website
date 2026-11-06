import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CitedText } from "@/components/CitedText";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PaidPick } from "@/components/PaidPick";
import { RelatedCards } from "@/components/RelatedCards";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourcesList } from "@/components/SourcesList";
import { NordvpnVsProtonvpnLongform } from "@/components/compare/NordvpnVsProtonvpnLongform";
import { comparisonMap, comparisonSlugs, type Comparison } from "@/lib/content/comparisons";
import { citationSources, compareSources, getCitationSourcesById } from "@/lib/content/facts";
import {
  getProviderCtaHref,
  providerMap,
  type Provider,
} from "@/lib/content/providers";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getCompareRelatedCards } from "@/lib/seo/related-cards";
import { getCompareRelatedLinks } from "@/lib/seo/related-links";
import { buildArticleSchema } from "@/lib/seo/schema";
import { getPageOgImageUrl } from "@/lib/seo/share-images";

type ComparePageProps = {
  params: Promise<{ matchup: string }>;
};

/**
 * Official pricing pages already recorded in repo content, with no affiliate
 * or tracking parameters. Mullvad's URL is source MV1 in lib/content/facts.ts.
 * Providers absent from this map get no outbound button.
 */
const OFFICIAL_PRICING_CTA: Record<string, { href: string; label: string }> = {
  mullvad: {
    href: "https://mullvad.net/en/pricing",
    label: "See Mullvad's pricing page",
  },
};

function PickCardButton({
  provider,
  affiliateHref,
}: {
  provider: Provider;
  affiliateHref: string | null;
}) {
  if (affiliateHref && provider.affiliateKey) {
    return (
      <AffiliateCTA
        href={affiliateHref}
        partner={provider.affiliateKey}
        label={`Visit ${provider.name}`}
      />
    );
  }

  const plain = OFFICIAL_PRICING_CTA[provider.slug];
  if (!plain) return null;

  // Unpaid partner: AffiliateCTA renders a plain link (noopener only).
  // Mullvad is not a paid partner, so this does not add rel=sponsored or data-partner.
  return <AffiliateCTA href={plain.href} partner={provider.slug} label={plain.label} />;
}

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

  const leftCta = getProviderCtaHref(left);
  const rightCta = getProviderCtaHref(right);
  const path = `/compare/${comparison.slug}`;
  const isLongform = comparison.slug === "nordvpn-vs-protonvpn";
  const updatedDateLabel = formatIsoDateForByline(comparison.dateModified);

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: comparison.h1 ?? comparison.title,
          description: comparison.description,
          path,
          datePublished: comparison.datePublished,
          dateModified: comparison.dateModified,
          image: getPageOgImageUrl(path),
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: comparison.breadcrumbLabel ?? comparison.title.replace(/ 2026:.*/, ""), path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">Comparison</span>
          <span className="badge badge-violet">{comparison.updatedBadgeLabel ?? "April 2026"}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {comparison.h1 ?? comparison.title}
        </h1>
        {!isLongform && (
          <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
            <CitedText text={comparison.intro} />
          </p>
        )}
        <AuthorByline date={updatedDateLabel} />
      </header>

      {comparison.slug === "surfshark-vs-protonvpn" ? <DisclosureBanner /> : null}

      {comparison.verdictBox ? (
        <section className="glass-card space-y-6 p-8">
          <span className="badge badge-teal">Verdict</span>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">{comparison.verdictBox}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {leftCta && left.affiliateKey ? (
              <AffiliateCTA href={leftCta} partner={left.affiliateKey} label={`Visit ${left.name}`} />
            ) : null}
            {rightCta && right.affiliateKey ? (
              <AffiliateCTA href={rightCta} partner={right.affiliateKey} label={`Visit ${right.name}`} />
            ) : null}
          </div>
        </section>
      ) : null}

      {comparison.slug === "surfshark-vs-protonvpn" || isLongform ? null : <DisclosureBanner />}

      {comparison.specRows ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">Spec comparison</h2>
          <div className="glass-card overflow-x-auto p-2">
            <table className="table-dark">
              <thead>
                <tr>
                  <th>Spec</th>
                  <th>{left.name}</th>
                  <th>{right.name}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.specRows.map((row) => (
                  <tr key={row.spec}>
                    <td className="font-semibold text-white">{row.spec}</td>
                    <td><CitedText text={row.left} /></td>
                    <td><CitedText text={row.right} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

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
                    {row.winner === "uncompared" && (
                      <span className="badge badge-violet text-[0.6rem]">Not compared</span>
                    )}
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <span className="font-semibold text-white">{left.name}</span>
                        <span className="text-right text-[#94a3b8]">
                          <CitedText text={row.left.value} />
                        </span>
                      </div>
                      {row.winner !== "uncompared" ? (
                        <div className="score-bar mt-1.5">
                          <div className="score-bar-fill" style={{ width: `${row.left.pct}%` }} />
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <span className="font-semibold text-white">{right.name}</span>
                        <span className="text-right text-[#94a3b8]">
                          <CitedText text={row.right.value} />
                        </span>
                      </div>
                      {row.winner !== "uncompared" ? (
                        <div className="mt-1.5 h-[6px] overflow-hidden rounded-[3px] bg-[#1e293b]">
                          <div
                            className="h-full rounded-[3px] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
                            style={{ width: `${row.right.pct}%` }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {row.note ? (
                    <p className="mt-3 text-sm text-[#94a3b8]">
                      <CitedText text={row.note} />
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#475569]">
              Prices change often, so check the provider&apos;s site before you buy.
            </p>
          </section>

          {comparison.notes?.map((note) => (
            <section key={note.heading} className="prose-dark space-y-4">
              <h3 className="text-xl font-bold text-white">{note.heading}</h3>
              {note.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>
                  <CitedText text={paragraph} />
                </p>
              ))}
            </section>
          ))}

          <hr className="divider-glow" />

          <section className="prose-dark space-y-4">
            <h2 className="text-2xl font-bold text-white">How to Choose a VPN</h2>
            {comparison.verdictParagraphs.map((para) => (
              <p key={para.slice(0, 50)}>{para}</p>
            ))}
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card p-8 text-center">
              {comparison.leftPickLabel ? (
                <span className="badge badge-teal mb-4">{comparison.leftPickLabel}</span>
              ) : null}
              <h3 className="text-xl font-bold text-white">{left.name}</h3>
              <div className="mt-5">
                <PickCardButton provider={left} affiliateHref={leftCta} />
                {left.affiliateKey === "expressvpn" && comparison.expressPaidPick ? (
                  <PaidPick pick={comparison.expressPaidPick} />
                ) : null}
              </div>
            </div>
            <div className="glass-card p-8 text-center">
              {comparison.rightPickLabel ? (
                <span className="badge badge-cyan mb-4">{comparison.rightPickLabel}</span>
              ) : null}
              <h3 className="text-xl font-bold text-white">{right.name}</h3>
              <div className="mt-5">
                <PickCardButton provider={right} affiliateHref={rightCta} />
                {right.affiliateKey === "expressvpn" && comparison.expressPaidPick ? (
                  <PaidPick pick={comparison.expressPaidPick} />
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}

      <AuthorByline />

      <hr className="divider-glow" />

      <div className="grid items-start gap-5 lg:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)]">
        <RelatedLinks links={comparison.relatedLinks ?? getCompareRelatedLinks(comparison.slug)} />
        <div className="min-w-0">
          <RelatedCards cards={getCompareRelatedCards(comparison.slug)} />
        </div>
      </div>

      {!isLongform && (
        <>
          <FaqSection
            faqs={comparison.faqs}
            renderAnswer={
              comparison.sourceIds ? (answer) => <CitedText text={answer} /> : undefined
            }
          />
          <SourcesList
            sources={
              comparison.sourceIds
                ? getCitationSourcesById(comparison.sourceIds)
                : [...compareSources, citationSources.S9]
            }
            showRetrievedAt={Boolean(comparison.sourceIds)}
          />
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
