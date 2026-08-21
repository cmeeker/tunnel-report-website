import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CitationLink } from "@/components/CitationLink";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourcesList } from "@/components/SourcesList";
import { citationSources, homepageSources } from "@/lib/content/facts";
import { guideMap, guides, guideSlugs } from "@/lib/content/guides";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getGuideRelatedLinks } from "@/lib/seo/related-links";
import { buildArticleSchema } from "@/lib/seo/schema";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) {
    return buildPageMetadata({
      title: "VPN Guide",
      description: "VPN guidance from Tunnel Report.",
      path: `/guides/${slug}`,
    });
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) notFound();

  const persona = personas[guide.authorId];
  const path = `/guides/${guide.slug}`;

  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: guide.title,
          description: guide.description,
          path,
          dateModified: guide.dateModified,
          authorName: persona.name,
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path },
        ]}
      />

      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-cyan">{guide.category}</span>
          <span className="badge badge-violet">Updated April 2026</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          {guide.title}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">{guide.dek}</p>
        <AuthorByline persona={persona} date="April 8, 2026" />
      </header>

      <section className="surface-card p-8">
        <h2 className="text-lg font-bold text-white">Quick Take</h2>
        <p className="mt-3 leading-relaxed text-[#94a3b8]">
          This guide supports our VPN rankings and comparisons. It is written for readers who want
          the methodology behind our recommendations, not just a one-click buying decision.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/best-vpns" className="text-sm font-medium text-[#00d4aa] hover:underline">
            Best VPN rankings
          </Link>
          <Link href="/methodology" className="text-sm font-medium text-[#00d4aa] hover:underline">
            Full methodology
          </Link>
        </div>
      </section>

      {guide.sections.map((section) => (
        <section key={section.heading} className="prose-dark space-y-4">
          <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 48)}>
              {paragraph}
              {guide.slug === "how-we-test-vpn-speed" && index === 1 && (
                <>
                  <CitationLink source={citationSources.S4} />
                </>
              )}
            </p>
          ))}
        </section>
      ))}

      <RelatedLinks links={getGuideRelatedLinks(guide.slug)} />

      <FaqSection faqs={guide.faqs} />

      <SourcesList sources={homepageSources} />
    </article>
  );
}

export function generateStaticGuidePathsForTests() {
  return guides.map((guide) => `/guides/${guide.slug}`);
}
