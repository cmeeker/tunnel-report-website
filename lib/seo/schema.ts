import type { FaqItem } from "@/components/FaqSection";
import { siteConfig } from "@/lib/site";

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

export function buildFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
};

export function buildArticleSchema({
  headline,
  description,
  path,
  dateModified,
  datePublished,
  authorName = siteConfig.defaultAuthor,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: datePublished ?? dateModified,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${path}`,
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
  ratingValue: number;
  bestRating?: number;
  summary: string;
  path: string;
  dateModified: string;
};

export function buildReviewSchema({
  itemName,
  ratingValue,
  bestRating = 5,
  summary,
  path,
  dateModified,
}: ReviewSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: itemName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    reviewBody: summary,
    datePublished: dateModified,
    dateModified,
    url: `${siteConfig.url}${path}`,
  };
}

export function buildProductSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    brand: {
      "@type": "Brand",
      name,
    },
  };
}

type GeoArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  city: string;
  region: string;
  dateModified: string;
};

export function buildGeoArticleSchema({
  headline,
  description,
  path,
  city,
  region,
  dateModified,
}: GeoArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: dateModified,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
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
