import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";

import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { StickySiteChrome } from "@/components/StickySiteChrome";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="mesh-bg min-h-full">
        <JsonLd data={[buildWebsiteSchema(), buildOrganizationSchema()]} />
        <div className="flex min-h-full flex-col">
          <StickySiteChrome />
          <ScrollToTop />
          <main className="mx-auto w-full max-w-7xl flex-1 px-6 pb-14 pt-10 has-[.hero-gradient]:pt-0 md:px-10 md:pt-12 lg:px-14">
            {children}
          </main>
          <SiteFooter />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
