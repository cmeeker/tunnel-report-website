import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RatingStars } from "@/components/RatingStars";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourcesList } from "@/components/SourcesList";
import {
  AFFILIATE_URLS,
  getProviderCtaHref,
  providerMap,
  providerSlugs,
  type Provider,
} from "@/lib/content/providers";
import { reviewSources } from "@/lib/content/facts";
import { personas } from "@/lib/editorial-personas";
import { getReviewRelatedLinks } from "@/lib/seo/related-links";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildProductSchema, buildReviewSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

type ReviewPageProps = {
  params: Promise<{ provider: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return providerSlugs.map((provider) => ({ provider }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { provider } = await params;
  const p = providerMap[provider];
  if (!p) {
    return buildPageMetadata({
      title: "VPN Review",
      description: "Independent VPN review from Tunnel Report.",
      path: `/reviews/${provider}`,
    });
  }
  return buildPageMetadata({
    title: p.reviewTitle,
    description: p.reviewDescription,
    path: `/reviews/${p.slug}`,
  });
}

function NordPassAddon() {
  return (
    <section className="glass-card border border-[#8b5cf6]/20 p-8">
      <span className="badge badge-violet mb-3">Password Security Add-On</span>
      <h2 className="text-xl font-bold text-white">Pair With NordPass for Full Protection</h2>
      <p className="mt-3 leading-relaxed text-[#94a3b8]">
        A VPN encrypts your connection, but weak or reused passwords remain the most common breach
        vector. NordPass offers zero-knowledge encrypted password management from the same team behind
        NordVPN — useful if you want one vendor for connection privacy and credential hygiene.
      </p>
      <div className="mt-5">
        <AffiliateCTA href={AFFILIATE_URLS.nordpass} partner="nordpass" label="Visit NordPass" />
      </div>
      <p className="mt-3 text-xs text-[#475569]">
        Separate affiliate link — Tunnel Report may earn a commission. Not required to use NordVPN.
      </p>
    </section>
  );
}

function ReviewContent({ provider }: { provider: Provider }) {
  const persona = personas[provider.authorId];
  const ctaHref = getProviderCtaHref(provider);
  const path = `/reviews/${provider.slug}`;

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={[
          buildReviewSchema({
            itemName: provider.name,
            ratingValue: provider.score,
            reviewCount: provider.reviewCount,
            summary: provider.reviewSummary,
            path,
            dateModified: provider.dateModified,
          }),
          buildProductSchema(
            provider.name,
            `Consumer VPN service evaluated by Tunnel Report for speed, privacy, and pricing clarity.`,
            path,
            provider.score,
            provider.reviewCount,
          ),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews/nordvpn" },
          { name: provider.name, path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-teal">Full Review</span>
          <span className="badge badge-violet">Updated April 2026</span>
          {!provider.affiliateKey && (
            <span className="badge badge-cyan text-[0.65rem]">No affiliate — editorial pick</span>
          )}
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {provider.reviewTitle}
        </h1>
        <AuthorByline persona={persona} date={siteConfig.updatedDate} />
        <RatingStars rating={provider.score} size="lg" />
      </header>

      <DisclosureBanner />

      {provider.sections.map((section) => (
        <section key={section.heading} className="prose-dark space-y-4">
          <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
          {section.paragraphs.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </section>
      ))}

      <div className="glass-card grid gap-5 p-8 md:grid-cols-4">
        {provider.speedMetrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-[#1e293b] bg-[#0d1221] p-6">
            <p className="text-xs font-semibold uppercase text-[#64748b]">{metric.label}</p>
            <p className="mt-1 text-xl font-extrabold gradient-text">{metric.value}</p>
            <p className="mt-0.5 text-xs text-[#475569]">{metric.sub}</p>
          </div>
        ))}
      </div>

      <hr className="divider-glow" />

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who Should Buy {provider.name} — and Who Should Not?</h2>
        <p>
          <strong>Buy {provider.name} if</strong> {provider.whoShouldBuy.buy}
        </p>
        <p>
          <strong>Consider alternatives if</strong> {provider.whoShouldBuy.alternatives}
        </p>
        <p>
          <strong>Skip or look elsewhere if</strong> {provider.whoShouldBuy.skip}
        </p>
      </section>

      {provider.showNordPassAddon && <NordPassAddon />}

      <section className="overflow-hidden rounded-2xl border border-[#00d4aa]/20 bg-gradient-to-br from-[#0d1221] to-[#111827]">
        <div className="border-b border-[#1e293b] px-6 py-4">
          <span className="badge badge-teal">Verdict</span>
        </div>
        <div className="space-y-6 p-8">
          <h2 className="text-2xl font-bold text-white">Is {provider.name} Worth It in 2026?</h2>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">{provider.reviewSummary}</p>
          <RatingStars rating={provider.score} size="lg" />
          {ctaHref ? (
            <AffiliateCTA
              href={ctaHref}
              partner={provider.affiliateKey!}
              label={`Visit ${provider.name}`}
            />
          ) : (
            <a
              href="https://mullvad.net"
              className="affiliate-cta inline-flex"
              rel="noopener noreferrer"
              data-partner="mullvad"
            >
              Visit Mullvad (direct — no affiliate)
            </a>
          )}
        </div>
      </section>

      <AuthorByline persona={persona} showBio />

      <hr className="divider-glow" />

      <RelatedLinks links={getReviewRelatedLinks(provider.slug)} />

      <FaqSection faqs={provider.faqs} />

      <SourcesList sources={reviewSources} />
    </article>
  );
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { provider } = await params;
  const p = providerMap[provider];
  if (!p) notFound();
  return <ReviewContent provider={p} />;
}
