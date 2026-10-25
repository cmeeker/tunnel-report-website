import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedCards, type RelatedCard } from "@/components/RelatedCards";
import { affiliateDisclosure } from "@/lib/content/hubs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildItemListSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

type HubCopy = {
  path: string;
  title: string;
  description: string;
  intro: string;
};

export function buildHubMetadata(hub: Pick<HubCopy, "path" | "title" | "description">): Metadata {
  return {
    ...buildPageMetadata({
      title: hub.title,
      description: hub.description,
      path: hub.path,
      type: "website",
    }),
    title: { absolute: hub.title },
    robots: "index,follow",
  };
}

export function HubIndex({
  hub,
  breadcrumbName,
  cards,
}: {
  hub: HubCopy;
  breadcrumbName: string;
  cards: RelatedCard[];
}) {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildItemListSchema(
          cards.map((card, index) => ({
            position: index + 1,
            name: card.title,
            url: `${siteConfig.url}${card.href}`,
          })),
        )}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: breadcrumbName, path: hub.path },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">{hub.title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">{hub.intro}</p>
      </header>

      <p className="max-w-3xl text-sm leading-relaxed text-[#94a3b8]">{affiliateDisclosure}</p>

      <RelatedCards cards={cards} showHeading={false} />
    </article>
  );
}
