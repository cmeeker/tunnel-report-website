import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourcesList } from "@/components/SourcesList";
import { homepageSources } from "@/lib/content/facts";
import { getProviderCtaHref, providerMap } from "@/lib/content/providers";
import { useCaseGuideMap, useCaseGuides, useCaseSlugs, type UseCaseSlug } from "@/lib/content/use-cases";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getUseCaseRelatedLinks } from "@/lib/seo/related-links";
import { buildArticleSchema, buildItemListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

type UseCasePageProps = {
  params: Promise<{ useCase: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return useCaseSlugs.map((useCase) => ({ useCase }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { useCase } = await params;
  const guide = useCaseGuideMap[useCase as UseCaseSlug];
  if (!guide) {
    return buildPageMetadata({
      title: "Best VPN by Use Case",
      description: "Use-case VPN recommendations from Tunnel Report.",
      path: `/best-vpn-for/${useCase}`,
    });
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/best-vpn-for/${guide.slug}`,
  });
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { useCase } = await params;
  const guide = useCaseGuideMap[useCase as UseCaseSlug];
  if (!guide) notFound();

  const persona = personas[guide.authorId];
  const path = `/best-vpn-for/${guide.slug}`;
  const picks = guide.picks
    .map((pick) => ({ ...pick, provider: providerMap[pick.providerSlug] }))
    .filter((pick) => pick.provider);

  const articleSchema = buildArticleSchema({
    headline: guide.title,
    description: guide.description,
    path,
    dateModified: guide.dateModified,
    authorName: persona.name,
  });

  const itemListSchema = buildItemListSchema(
    picks.map((pick, index) => ({
      position: index + 1,
      name: pick.provider.name,
      url: `${siteConfig.url}/reviews/${pick.provider.slug}`,
    })),
  );

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd data={[articleSchema, itemListSchema]} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Best VPNs", path: "/best-vpns" },
          { name: guide.shortTitle, path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-teal">Use Case Guide</span>
          <span className="badge badge-violet">Updated April 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {guide.title}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">{guide.intro}</p>
        <AuthorByline persona={persona} date={siteConfig.updatedDate} />
      </header>

      <DisclosureBanner />

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-white">Quick Picks</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {picks.map((pick, index) => {
            const href = getProviderCtaHref(pick.provider);
            return (
              <div key={pick.provider.slug} className="glass-card p-7">
                <span className="badge badge-cyan mb-4 text-[0.65rem]">#{index + 1} {pick.label}</span>
                <h3 className="text-xl font-bold text-white">{pick.provider.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">{pick.reason}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {href && pick.provider.affiliateKey ? (
                    <AffiliateCTA href={href} partner={pick.provider.affiliateKey} label={`Visit ${pick.provider.name}`} />
                  ) : (
                    <Link
                      href={`/reviews/${pick.provider.slug}`}
                      className="text-sm font-medium text-[#00d4aa] hover:underline"
                    >
                      Read review
                    </Link>
                  )}
                  <Link
                    href={`/reviews/${pick.provider.slug}`}
                    className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]"
                  >
                    Full review
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="divider-glow" />

      {guide.sections.map((section) => (
        <section key={section.heading} className="prose-dark space-y-4">
          <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </section>
      ))}

      <RelatedLinks links={getUseCaseRelatedLinks(guide.slug)} />

      <FaqSection faqs={guide.faqs} />

      <SourcesList sources={homepageSources} />
    </article>
  );
}

export function generateStaticUseCasePathsForTests() {
  return useCaseGuides.map((guide) => `/best-vpn-for/${guide.slug}`);
}
