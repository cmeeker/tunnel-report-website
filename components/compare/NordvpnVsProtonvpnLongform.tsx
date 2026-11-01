import type { ReactNode } from "react";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AFFILIATE_URLS } from "@/lib/content/providers";

const linkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

const urlLinkClassName = `${linkClassName} break-words`;

function PlainSourceLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={urlLinkClassName}>
      {href}
    </a>
  );
}

function PricingLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
      {children}
    </a>
  );
}

export function NordvpnVsProtonvpnLongform() {
  return (
    <div className="space-y-10">
      <section className="prose-dark space-y-4">
        <p>
          <strong>Affiliate disclosure.</strong> Tunnel Report earns a commission if you buy through outbound links on
          this page. See our{" "}
          <Link href="/methodology" className={linkClassName}>
            methodology
          </Link>{" "}
          page. Read this page before you click a buy link.
        </p>

        <p>
          <strong>Pricing.</strong> Check{" "}
          <PricingLink href="https://nordvpn.com/pricing/">NordVPN&apos;s page</PricingLink> and{" "}
          <PricingLink href="https://protonvpn.com/pricing">Proton VPN&apos;s page</PricingLink> for current pricing.
        </p>

        <p>{"Check each provider's page for current features and pricing before you choose."}</p>
      </section>

      <section className="space-y-4">
        <div className="glass-card flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between">
          <AffiliateCTA
            href={AFFILIATE_URLS.nordvpn}
            partner="nordvpn"
            label="Visit NordVPN"
          />
          <AffiliateCTA
            href={AFFILIATE_URLS.protonvpn}
            partner="protonvpn"
            label="Visit Proton VPN"
          />
        </div>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Category-by-category</h2>
        <p>
          Prices change often, so check
          the provider&apos;s site before you buy.
        </p>

        <div className="glass-card overflow-x-auto">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Category</th>
                <th>NordVPN</th>
                <th>Proton VPN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open source</td>
                <td>{"Check NordVPN's page for current details."}</td>
                <td><a href="https://protonvpn.com/blog/open-source" target="_blank" rel="noopener noreferrer" className={linkClassName}>Proton VPN says</a> its apps are open source.</td>
              </tr>
              <tr>
                <td>Audit PDF access</td>
                <td>{"Check NordVPN's page for current details."}</td>
                <td>{"Check Proton VPN's page for current details."}</td>
              </tr>
              <tr>
                <td>Jurisdiction</td>
                <td>{"Check NordVPN's page for current details."}</td>
                <td><a href="https://protonvpn.com/about" target="_blank" rel="noopener noreferrer" className={linkClassName}>Proton VPN says</a> it is a Swiss corporation.</td>
              </tr>
              <tr>
                <td>Free tier</td>
                <td>{"Check NordVPN's page for current details."}</td>
                <td><a href="https://protonvpn.com/free-vpn" target="_blank" rel="noopener noreferrer" className={linkClassName}>Proton VPN says</a> it has a free plan.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          NordVPN is our pick in the{" "}
          <Link href="/best-vpns" className={linkClassName}>
            2026 rankings
          </Link>.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Privacy and audits: two different kinds of proof</h2>

        <p>{"Check NordVPN's page for current details."}</p>

        <h3 className="text-xl font-bold text-white">Proton VPN: audit reports and open-source apps</h3>
        <p>
          <a href="https://protonvpn.com/blog/no-logs-audit" target="_blank" rel="noopener noreferrer" className={linkClassName}>Proton VPN says</a> it has had a fifth consecutive annual third-party audit of its no-logs policy. Proton&apos;s apps are open source (<a href="https://github.com/ProtonVPN" target="_blank" rel="noopener noreferrer" className={linkClassName}>github.com/ProtonVPN</a>).
        </p>

        <p>{"Privacy: Proton publishes open-source apps. Check NordVPN's page for current details."}</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Jurisdiction</h2>
        <p><a href="https://protonvpn.com/about" target="_blank" rel="noopener noreferrer" className={linkClassName}>Proton VPN says</a> it is a Swiss corporation. Check NordVPN&apos;s page for current details.</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Streaming</h2>
        <p>{"Check each provider's page for which streaming services it says it supports."}</p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Free tier and trying the product</h2>
        <p>
          Proton Free: unlimited data, 1 device, 10 randomly selected countries (plans explained article; homepage may
          say 5). NordVPN no free tier; 30-day money-back on first term only. Proton terms §9 23 June 2026: 30-day
          refund official channels, one per user.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Apps, devices, and network claims</h2>
        <p>
          Both 10 simultaneous connections. NordVPN: check{" "}
          <PricingLink href="https://nordvpn.com/pricing/">NordVPN&apos;s page</PricingLink> for current server counts. NordLynx.
          Proton Plus: check{" "}
          <PricingLink href="https://protonvpn.com/pricing">Proton VPN&apos;s page</PricingLink> for current server counts.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Pricing</h2>
        <p>
          Check{" "}
          <PricingLink href="https://nordvpn.com/pricing/">NordVPN&apos;s page</PricingLink> and{" "}
          <PricingLink href="https://protonvpn.com/pricing">Proton VPN&apos;s page</PricingLink> for current pricing.
          Free plan is separate; Plus standalone; Unlimited ecosystem.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who should actually buy which</h2>
        <p>
          NordVPN household speed/streaming, budget renewal: see current pricing. Proton transparency/open-source/Swiss/suite, start
          Free. Do not buy a VPN for coffee-shop Wi-Fi once a year. No overall trophy.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">FAQ</h2>
        <p>
          At renewal, check NordVPN&apos;s page and Proton VPN&apos;s page for current pricing.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Related coverage</h2>
        <p className="flex flex-wrap gap-x-3 gap-y-2">
          <Link href="/reviews/nordvpn" className={linkClassName}>
            /reviews/nordvpn
          </Link>
          <Link href="/reviews/protonvpn" className={linkClassName}>
            /reviews/protonvpn
          </Link>
          <Link href="/methodology" className={linkClassName}>
            /methodology
          </Link>
          <Link href="/best-vpns" className={linkClassName}>
            /best-vpns
          </Link>
          <Link href="/compare/mullvad-vs-protonvpn" className={linkClassName}>
            /compare/mullvad-vs-protonvpn
          </Link>
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Sources &amp; References</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-[#cbd5e1]">
          <li>
            <a href="https://tunnelreport.com/compare/nordvpn-vs-protonvpn" className={urlLinkClassName}>
              tunnelreport.com/compare/nordvpn-vs-protonvpn
            </a>{" "}
            fetched 1 Sep 2026
          </li>
          <li>tunnelreport.com/methodology</li>
          <li>tunnelreport.com/best-vpns</li>
          <li>
            <PlainSourceLink href="https://nordvpn.com/pricing/" /> live intro/renewal
          </li>
          <li>
            <PlainSourceLink href="https://nordvpn.com/blog/how-much-does-nordvpn-cost/" />{" "}
            24 Oct 2025
          </li>
          <li>
            <PlainSourceLink href="https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/" />{" "}
            3 Feb 2026
          </li>
          <li>
            <PlainSourceLink href="https://nordvpn.com/features/no-log-vpn/" />
          </li>
          <li>
            <PlainSourceLink href="https://nordvpn.com/blog/ram-based-servers/" /> 28 Aug 2024
          </li>
          <li>
            <PlainSourceLink href="https://support.nordvpn.com/hc/en-us/articles/19441152966161-Where-is-NordVPN-based" />
          </li>
          <li>
            <PlainSourceLink href="https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/pricing" />{" "}
            Proton VPN pricing page
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/support/proton-vpn-plans" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/blog/no-logs-audit" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/features/no-logs-policy" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/support/no-logs-vpn/" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/blog/open-source" />{" "}
            updated 1 Dec 2025
          </li>
          <li>
            <PlainSourceLink href="https://github.com/ProtonVPN" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/blog/transparency-report" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/terms-and-conditions" />{" "}
            last modified 23 June 2026
          </li>
          <li>
            <a href="https://www.fedlex.admin.ch/eli/cc/2022/491/en" className={urlLinkClassName}>
              https://www.fedlex.admin.ch/eli/cc/2022/491/en
            </a>{" "}
            FADP SR 235.1
          </li>
          <li>
            <a href="https://www.ic3.gov/AnnualReport/Reports/2023_IC3Report.pdf" className={urlLinkClassName}>
              https://www.ic3.gov/AnnualReport/Reports/2023_IC3Report.pdf
            </a>
          </li>
          <li>
            <a href="https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online" className={urlLinkClassName}>
              https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online
            </a>
          </li>
        </ol>

        <p>End: Prices change. Confirm at checkout on the provider&apos;s own page.</p>
      </section>
    </div>
  );
}

