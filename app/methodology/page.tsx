import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LastUpdated } from "@/components/LastUpdated";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildWebPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site";

const pageTitle = "How We Pick VPNs and Password Managers";
const pageDescription =
  "2026 VPN comparison guides based on published specs, pricing and third-party reports.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/methodology",
  type: "website",
});

export default function MethodologyPage() {
  return (
    <article className="space-y-14 fade-in-up">
      <JsonLd
        data={buildWebPageSchema({
          name: pageTitle,
          description: pageDescription,
          path: "/methodology",
          datePublished: "2026-04-08",
        })}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "How We Pick", path: "/methodology" },
        ]}
      />

      <header className="space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          How We Pick
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          Tunnel Report compares VPNs and password managers using published specs, pricing and
          third-party reports. We don&apos;t run our own lab tests, so you won&apos;t see our own
          speed numbers here.
        </p>
        <LastUpdated date={siteConfig.updatedDate} />
      </header>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">What we look at</h2>
        <ul className="list-disc space-y-2 pl-5 text-[#94a3b8]">
          <li>
            Published specs: protocols, encryption, server count, device limits, and features like
            kill switches and split tunneling.
          </li>
          <li>
            Pricing: plan length, currency, and intro vs renewal price where the provider shows it.
            Prices change often, so check the provider&apos;s site.
          </li>
          <li>
            Published audits and privacy policies: what&apos;s been audited, by whom, and when, as
            the provider or auditor publishes it.
          </li>
          <li>
            Third-party reports: named outside sources, linked and dated when we cite them.
          </li>
        </ul>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">How money fits in</h2>
        <p>
          We may earn a commission from some links. Our picks are based on published specs, pricing
          and third-party reports.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who writes this</h2>
        <p>
          Pages are written and updated by Tunnel Report Staff. If something&apos;s out of date,
          tell us and we&apos;ll fix it.
        </p>
      </section>
    </article>
  );
}
