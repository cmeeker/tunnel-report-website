import type { Metadata } from "next";
import Link from "next/link";

import { AuthorByline } from "@/components/AuthorByline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/lib/content/guides";
import { personas } from "@/lib/editorial-personas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildItemListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "VPN Guides: Protocols, Privacy, Pricing, and Testing",
  description:
    "Tunnel Report's evergreen VPN guides explain protocols, no-logs claims, jurisdiction, speed testing, and renewal pricing traps.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildItemListSchema(
          guides.map((guide, index) => ({
            position: index + 1,
            name: guide.title,
            url: `${siteConfig.url}/guides/${guide.slug}`,
          })),
        )}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />

      <header className="space-y-5">
        <span className="badge badge-cyan">VPN Guides</span>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          VPN Guides: Protocols, Privacy, Pricing, and Testing
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Evergreen explainers for readers who want to understand the mechanics behind our rankings:
          how protocols work, what no-logs claims mean, why jurisdiction matters, and how pricing
          changes after checkout.
        </p>
        <AuthorByline persona={personas.marcus} date={siteConfig.updatedDate} />
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="glass-card glass-card-hover block p-8">
            <span className="badge badge-violet mb-4 text-[0.65rem]">{guide.category}</span>
            <h2 className="text-xl font-bold text-white">{guide.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">{guide.dek}</p>
            <p className="mt-5 text-sm font-medium text-[#00d4aa]">Read guide &rarr;</p>
          </Link>
        ))}
      </section>
    </article>
  );
}
