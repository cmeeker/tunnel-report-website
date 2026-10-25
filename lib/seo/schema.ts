import type { FaqItem } from "@/components/FaqSection";
import { staffAuthorName } from "@/lib/editorial-personas";
import { siteConfig } from "@/lib/site";

const revisedDateModified = "2026-10-17";

function resolveDateModified(dateModified: string) {
  return dateModified > revisedDateModified ? dateModified : revisedDateModified;
}

const staffAuthor = {
  "@type": "Organization",
  name: staffAuthorName,
  url: `${siteConfig.url}/about`,
};

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/best-vpns?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    sameAs: [siteConfig.url],
  };
}

function visibleFaqAnswer(answer: string) {
  return answer.replace(/\[([^\]]+)\]\(https?:\/\/[^)\s]+\)/g, "$1");
}

export function buildFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: visibleFaqAnswer(faq.answer),
      },
    })),
  };
}

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  dateModified: string;
  datePublished?: string;
  authorName?: string;
  image?: string;
};

export function buildArticleSchema({
  headline,
  description,
  path,
  dateModified,
  datePublished,
  image,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: datePublished ?? dateModified,
    dateModified: resolveDateModified(dateModified),
    ...(image ? { image } : {}),
    author: staffAuthor,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${path}`,
  };
}

type WebPageSchemaInput = {
  name: string;
  description: string;
  path: string;
  datePublished: string;
};

export function buildWebPageSchema({
  name,
  description,
  path,
  datePublished,
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    datePublished,
    dateModified: revisedDateModified,
    author: staffAuthor,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

type ItemListElement = {
  name: string;
  url: string;
  position: number;
};

export function buildItemListSchema(items: ItemListElement[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };
}

type ReviewSchemaInput = {
  itemName: string;
  summary: string;
  path: string;
  dateModified: string;
  datePublished?: string;
  description?: string;
  ratingValue?: number;
  bestRating?: number;
};

export function buildReviewSchema({
  itemName,
  summary,
  path,
  dateModified,
  datePublished,
  description,
  ratingValue,
  bestRating = 5,
}: ReviewSchemaInput) {
  const pageUrl = `${siteConfig.url}${path}`;
  const author = staffAuthor;
  const published = datePublished ?? dateModified;

  if (typeof ratingValue !== "number") {
    return {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": `${pageUrl}#review`,
      itemReviewed: {
        "@type": "Organization",
        "@id": `${pageUrl}#organization`,
        name: itemName,
      },
      author,
      reviewBody: summary,
      datePublished: published,
      dateModified: resolveDateModified(dateModified),
      url: pageUrl,
    };
  }

  const productId = `${pageUrl}#product`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productId,
    name: itemName,
    description,
    url: pageUrl,
    brand: {
      "@type": "Brand",
      name: itemName,
    },
    review: {
      "@type": "Review",
      "@id": `${pageUrl}#review`,
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating,
      },
      author,
      reviewBody: summary,
      datePublished: published,
      dateModified: resolveDateModified(dateModified),
      url: pageUrl,
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

type GeoArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  city: string;
  region: string;
  dateModified: string;
  datePublished?: string;
};

export function buildGeoArticleSchema({
  headline,
  description,
  path,
  city,
  region,
  dateModified,
  datePublished,
}: GeoArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: datePublished ?? dateModified,
    dateModified: resolveDateModified(dateModified),
    author: staffAuthor,
    mainEntityOfPage: `${siteConfig.url}${path}`,
    about: [
      {
        "@type": "Thing",
        name: `VPN usage in ${city}`,
      },
      {
        "@type": "Thing",
        name: `Local internet privacy in ${city}, ${region}`,
      },
    ],
    spatialCoverage: {
      "@type": "Place",
      name: `${city}, ${region}`,
    },
  };
}
