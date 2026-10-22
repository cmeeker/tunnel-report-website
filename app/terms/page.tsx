import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/schema";

const pageTitle = "Terms of Use";
const pageDescription =
  "Terms of Use for tunnelreport.com, operated by Strand and Stone LLC.";
const effectiveDate = "October 21, 2026";

const linkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/terms",
  type: "website",
});

export default function TermsPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildArticleSchema({
          headline: pageTitle,
          description: pageDescription,
          path: "/terms",
          datePublished: "2026-10-21",
          dateModified: "2026-10-21",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          Terms of Use
        </h1>
        <p className="text-lg font-semibold text-white">Effective date: {effectiveDate}</p>
      </header>

      <section className="prose-dark space-y-4">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your use of tunnelreport.com (the
          &quot;Site&quot;), operated by Strand and Stone LLC, a New Mexico limited liability company
          (entity no. 0008085725) (&quot;we,&quot; &quot;us&quot;). By using the Site you agree to
          these Terms. If you do not agree, please do not use the Site.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Information only, not professional advice</h2>
        <p>
          The Site publishes reviews, comparisons and guides about VPNs, password managers and related
          products. It is for general information only. It is not professional, legal, or security
          advice, and it is not a security audit of any product. Your needs and risks are your own;
          consult a qualified professional where it matters.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Affiliate links</h2>
        <p>
          Some links on the Site are affiliate links. If you click one and buy something, we may earn
          a commission at no extra cost to you. This does not change the price you pay. We aim to keep
          our rankings independent of commissions; see our methodology and editorial standards on the
          Site.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Prices and features change</h2>
        <p>
          Prices, discounts, renewal rates, server counts, features and policies are set by the
          providers and change often. What we publish may be out of date. Always verify the current
          details on the provider&apos;s own website before you buy.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">4. Third-party sites</h2>
        <p>
          The Site links to websites we do not control. We are not responsible for their content,
          products, privacy practices or terms. Your purchase from any provider is solely between you
          and that provider.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">5. Intellectual property</h2>
        <p>
          The Site&apos;s content, including text, rankings, graphics and design, is owned by us or
          our licensors and protected by law. You may view and share links to it for personal,
          non-commercial use. You may not copy, republish or scrape substantial parts of it without
          our written permission. Product names and logos belong to their owners.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">6. No warranty</h2>
        <p>
          The Site is provided &quot;as is&quot; and &quot;as available.&quot; To the fullest extent
          the law allows, we disclaim all warranties, express or implied, including accuracy,
          completeness, merchantability, fitness for a particular purpose and non-infringement.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">7. Limitation of liability</h2>
        <p>
          To the fullest extent the law allows, Strand and Stone LLC will not be liable for any
          indirect, incidental, special, consequential or punitive damages, or for any loss arising
          from your use of the Site or reliance on its content or from any third-party product or
          site. Our total liability for any claim relating to the Site is limited to $100.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">8. Privacy</h2>
        <p>
          Our{" "}
          <Link href="/privacy" className={linkClassName}>
            Privacy Policy
          </Link>{" "}
          explains what information the Site collects and how it is used.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">9. Changes</h2>
        <p>
          We may update these Terms. The updated version takes effect when posted, with a new
          effective date. Continued use of the Site means you accept the changes.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">10. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New Mexico, without regard to
          conflict-of-law rules. Any dispute will be brought in the state or federal courts located
          in New Mexico.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">11. Contact</h2>
        <p>
          Strand and Stone LLC —{" "}
          <a href="mailto:robert@strandandstonellc.com" className={linkClassName}>
            robert@strandandstonellc.com
          </a>
        </p>
      </section>
    </article>
  );
}
