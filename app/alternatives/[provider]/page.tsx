import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RatingStars } from "@/components/RatingStars";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getProviderCtaHref, providerMap, providers, providerSlugs, type Provider } from "@/lib/content/providers";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAlternativesRelatedLinks } from "@/lib/seo/related-links";
import { buildArticleSchema, buildItemListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

type AlternativesPageProps = {
  params: Promise<{ provider: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return providerSlugs.map((provider) => ({ provider }));
}

function alternativesFor(provider: Provider) {
  return providers
    .filter((candidate) => candidate.slug !== provider.slug)
    .sort((a, b) => {
      const scoreGap = Math.abs(b.score - provider.score) - Math.abs(a.score - provider.score);
      if (scoreGap !== 0) return scoreGap;
      return b.score - a.score;
    })
    .slice(0, 4);
}

export async function generateMetadata({ params }: AlternativesPageProps): Promise<Metadata> {
  const { provider } = await params;
  const target = providerMap[provider];
  if (!target) {
    return buildPageMetadata({
      title: "Best VPN Alternatives",
      description: "Independent VPN alternative recommendations from Tunnel Report.",
      path: `/alternatives/${provider}`,
    });
  }

  return buildPageMetadata({
    title: `Best ${target.name} Alternatives in 2026`,
    description: `The best ${target.name} alternatives based on speed, privacy posture, pricing, and real-world usability. Independent recommendations from Tunnel Report.`,
    path: `/alternatives/${target.slug}`,
  });
}

export default async function AlternativesPage({ params }: AlternativesPageProps) {
  const { provider } = await params;
  const target = providerMap[provider];
  if (!target) notFound();

  const alternatives = alternativesFor(target);
  const path = `/alternatives/${target.slug}`;
  const author = personas.sarah;

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={[
          buildArticleSchema({
            headline: `Best ${target.name} Alternatives in 2026`,
            description: `Independent alternatives to ${target.name}.`,
            path,
            dateModified: target.dateModified,
            authorName: author.name,
          }),
          buildItemListSchema(
            alternatives.map((alt, index) => ({
              position: index + 1,
              name: alt.name,
              url: `${siteConfig.url}/reviews/${alt.slug}`,
            })),
          ),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Alternatives", path: "/alternatives/nordvpn" },
          { name: target.name, path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">Alternatives</span>
          <span className="badge badge-violet">Updated April 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          Best {target.name} Alternatives in 2026
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          {target.name} is a strong fit for some buyers, but it is not the right default for every
          use case. We compared speed floors, privacy posture, pricing lifecycle, app polish, and
          threat model fit to identify the strongest alternatives.
        </p>
        <AuthorByline persona={author} date={siteConfig.updatedDate} />
      </header>

      <DisclosureBanner />

      <section className="glass-card p-8">
        <h2 className="text-2xl font-bold text-white">Why look beyond {target.name}?</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase text-[#64748b]">Current score</p>
            <RatingStars rating={target.score} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-[#64748b]">Main limitation</p>
            <p className="mt-2 text-sm text-[#94a3b8]">{target.cons[0]}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-[#64748b]">Best reason to stay</p>
            <p className="mt-2 text-sm text-[#94a3b8]">{target.pros[0]}</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-white">Top Alternatives to {target.name}</h2>
        {alternatives.map((alt, index) => {
          const href = getProviderCtaHref(alt);
          return (
            <div key={alt.slug} className="glass-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#1e293b] px-6 py-4">
                <div>
                  <span className="badge badge-teal mb-2 text-[0.65rem]">#{index + 1} Alternative</span>
                  <h3 className="text-xl font-bold text-white">{alt.name}</h3>
                </div>
                <RatingStars rating={alt.score} />
              </div>
              <div className="space-y-5 p-8">
                <p className="leading-relaxed text-[#94a3b8]">{alt.quickVerdict}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-[#00d4aa]">
                      Why switch
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {alt.pros.slice(0, 2).map((pro) => (
                        <li key={pro} className="text-sm text-[#cbd5e1]">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-[#f87171]">
                      Tradeoff
                    </h4>
                    <p className="mt-2 text-sm text-[#cbd5e1]">{alt.cons[0]}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {href && alt.affiliateKey ? (
                    <AffiliateCTA href={href} partner={alt.affiliateKey} label={`Visit ${alt.name}`} />
                  ) : (
                    <Link href={`/reviews/${alt.slug}`} className="text-sm font-medium text-[#00d4aa] hover:underline">
                      Read review
                    </Link>
                  )}
                  <Link href={`/reviews/${alt.slug}`} className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]">
                    Full {alt.name} review &rarr;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">The honest recommendation</h2>
        <p>
          If {target.name} solves your main use case and you are comfortable with its limitations, you
          do not need to switch just because another provider ranks higher in one category. VPNs are
          tools, not collectibles.
        </p>
        <p>
          The strongest alternative for most readers is usually the provider that fixes the specific
          thing {target.name} does not do well enough for your situation: lower renewal cost, stronger
          privacy posture, better streaming reliability, or simpler apps.
        </p>
      </section>

      <RelatedLinks links={getAlternativesRelatedLinks(target.slug)} />

      <FaqSection
        faqs={[
          {
            question: `What is the best ${target.name} alternative?`,
            answer: `${alternatives[0]?.name ?? "NordVPN"} is the strongest alternative for most readers because it offers the best blend of score, feature coverage, and real-world fit against ${target.name}'s limitations.`,
          },
          {
            question: `Should I switch from ${target.name}?`,
            answer: `Only if ${target.name}'s limitations affect your actual use case. If your current provider is fast, private enough for your threat model, and priced fairly at renewal, switching may not be worth the hassle.`,
          },
          {
            question: "Do affiliate commissions affect these alternatives?",
            answer:
              "No. Tunnel Report includes non-affiliate recommendations like Mullvad when they serve readers. Commercial relationships do not determine rankings or editorial conclusions.",
          },
        ]}
      />
    </article>
  );
}
