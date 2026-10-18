import type { ReactNode } from "react";
import Link from "next/link";

import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AFFILIATE_URLS } from "@/lib/content/providers";

const linkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

function PlainSourceLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
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
          this page. That does not change scores, category winners, or the use-case recommendation. Editorial scoring
          is walled off from commercial relationships; the method is on our{" "}
          <Link href="/methodology" className={linkClassName}>
            methodology
          </Link>{" "}
          page. Read this page before you click a buy link.
        </p>

        <p>
          <strong>Verification.</strong> NordVPN prices were re-checked on the public pricing page on Oct 15, 2026.
          Proton VPN Plus: $3.49/mo on the 2-year plan ($83.76 for the first 24 months, then $83.88 every 12 months){" "}
          <PricingLink href="https://protonvpn.com/pricing">protonvpn.com/pricing</PricingLink>, as of Oct 2026.
        </p>

        <p>
          <strong>Use-case verdict, not a trophy.</strong> NordVPN is the household default if you want a mature app.
          Proton VPN is the better pick if you want public
          audit PDFs, open-source clients, Swiss legal posture, and a credible free tier.
        </p>
      </section>

      <section className="space-y-4">
        <div className="glass-card overflow-x-auto">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Use case</th>
                <th>Pick</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Streaming geo-unblocking</td>
                <td>
                  <strong>NordVPN</strong>
                </td>
                <td>We do not publish invented Netflix win rates.</td>
              </tr>
              <tr>
                <td>Verifiable no-logs + open-source apps</td>
                <td>
                  <strong>Proton VPN</strong>
                </td>
                <td>
                  Fifth annual Securitum infrastructure audit; 2025 report is a public PDF. Apps are on GitHub.
                </td>
              </tr>
              <tr>
                <td>Swiss jurisdiction / Proton Mail–Drive stack</td>
                <td>
                  <strong>Proton VPN</strong>
                </td>
                <td>Proton AG, Geneva. Value is strongest if you already pay for the ecosystem.</td>
              </tr>
              <tr>
                <td>Try before you pay</td>
                <td>
                  <strong>Proton VPN</strong>
                </td>
                <td>
                  Audited no-logs free plan. NordVPN has no free tier; it sells a 30-day money-back window on the first
                  term.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="glass-card flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between">
          <AffiliateCTA
            href={AFFILIATE_URLS.nordvpn}
            partner="nordvpn"
            label="Visit NordVPN"
          />
          <AffiliateCTA
            href="https://protonvpn.com/"
            partner="protonvpn"
            label="Visit Proton VPN"
          />
        </div>

        <section className="prose-dark space-y-4">
          <p>Visit NordVPN uses the tracked href above. Visit Proton VPN links to https://protonvpn.com/.</p>
        </section>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Category-by-category</h2>
        <p>
          Prices checked on each provider&apos;s official pricing page on Oct 15, 2026. Prices change often, so check
          the provider&apos;s site before you buy.
        </p>

        <div className="glass-card overflow-x-auto">
          <table className="table-dark">
            <thead>
              <tr>
                <th>Category</th>
                <th>Advantage</th>
                <th>NordVPN</th>
                <th>Proton VPN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open source</td>
                <td>Proton VPN</td>
                <td>Closed-source apps</td>
                <td>Open-source clients (GitHub)</td>
              </tr>
              <tr>
                <td>Audit PDF access</td>
                <td>Proton VPN</td>
                <td>Deloitte ISAE 3000; full report behind Nord Account login</td>
                <td>Securitum annual reports; 2025 PDF is public</td>
              </tr>
              <tr>
                <td>Jurisdiction</td>
                <td>Draw, different risks</td>
                <td>Panama (Tefincom / NordVPN); parent Nord Security in the Netherlands</td>
                <td>Switzerland (Proton AG, Geneva)</td>
              </tr>
              <tr>
                <td>Free tier</td>
                <td>Proton VPN</td>
                <td>None</td>
                <td>Credible free plan (1 device, limited countries)</td>
              </tr>
              <tr>
                <td>App reliability</td>
                <td>NordVPN</td>
                <td>Mature across platforms</td>
                <td>Good, more technical</td>
              </tr>
              <tr>
                <td>Composite score (our reviews)</td>
                <td>NordVPN</td>
                <td>4.8 / 5</td>
                <td>4.4 / 5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Those scores are from our standalone reviews, not a new head-to-head trophy. NordVPN is our pick in the{" "}
          <Link href="/best-vpns" className={linkClassName}>
            2026 rankings
          </Link>
          . Proton VPN is ranked for transparency.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Privacy and audits: two different kinds of proof</h2>

        <p>
          <a
            href="https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            NordVPN says it has passed six independent assurance engagements; the full report is behind a Nord Account login.
          </a>{" "}
          Sixth: Deloitte Lithuania, ISAE 3000 (Revised), fieldwork 10 November – 12 December
          2025, report 12 December 2025, blog 3 February 2026. Full Deloitte report is not public (Nord Account login).
          RAM-only diskless servers (explainer 28 August 2024). Panama operating jurisdiction; Nord Security
          Netherlands.
        </p>

        <h3 className="text-xl font-bold text-white">Proton VPN — public PDFs, open clients, court-tested empty logs</h3>
        <p>
          2025 Securitum PDF opened: 18 August 2025 – 19 September 2025; on-site 18–20 August 2025 Zürich; Martin
          Matyja, Maciej Szymczak; bare-metal Proton AG owns. Conclusion: no user activity logging / connection
          metadata / traffic inspection contradicting no-logs.           2026 Securitum quoted on Proton blog; Drive{" "}
          <PlainSourceLink href="https://protonvpn.com/" />
          ; guessed Securitum 2026 PDF 404. Treat 2026 as published by Proton, not independently downloaded. Apps open
          source{" "}
          <PricingLink href="https://github.com/ProtonVPN">github.com/ProtonVPN</PricingLink>
          . Transparency report through June 2026: 458 Swiss orders, every request denied (47 of 47 through June 2026;
          59 of 59 in 2025).
        </p>

        <p>
          Privacy: Proton publishes open-source apps;{" "}
          <a
            href="https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            NordVPN says
          </a>{" "}
          it has passed six independent assurance engagements (full report behind a Nord Account login).
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Jurisdiction: Panama vs Switzerland is a draw with different failure modes
        </h2>
        <p>
          Neither Five Eyes. Proton AG Route de la Galaise 32, 1228 Plan-les-Ouates, Geneva, Proton Foundation. FADP
          SR 235.1 in force 1 September 2023 is general data protection not a VPN logging mandate. Call it a draw.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Streaming: NordVPN, without fake win rates</h2>
        <p>
          No invented Netflix/Hulu/BBC percentages. NordVPN more consistent. Proton marketing claims streaming on Plus;
          our qualitative result is weaker.
        </p>
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
          Both 10 simultaneous connections. NordVPN thousands of servers in 225+ locations{" "}
          <PricingLink href="https://nordvpn.com/pricing/">nordvpn.com/pricing</PricingLink>, as of Oct 2026, NordLynx.
          Proton Plus 20,000+ servers 140+ countries{" "}
          <PricingLink href="https://protonvpn.com/pricing">protonvpn.com/pricing</PricingLink>, as of Oct 2026. Price
          Basic not Complete/Prime extras.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Pricing: what we could verify on Oct 15, 2026</h2>
        <p>
          NordVPN live{" "}
          <PricingLink href="https://nordvpn.com/pricing/">nordvpn.com/pricing</PricingLink>: 2-year+3mo Basic $3.49
          intro, $94.23 / 27 months, renews $139.08/year; 1-year Basic $5.49 / $65.88, as of Oct 2026. Older blog $2.99
          is stale. Proton VPN Plus: $3.49/mo on the 2-year plan ($83.76 for the first 24 months, then $83.88 every 12
          months) <PricingLink href="https://protonvpn.com/pricing">protonvpn.com/pricing</PricingLink>, as of Oct 2026.
          Free $0; Plus standalone; Unlimited ecosystem.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">Who should actually buy which</h2>
        <p>
          NordVPN household speed/streaming, budget $139.08 renewal. Proton transparency/open-source/Swiss/suite, start
          Free. Do not buy a VPN for coffee-shop Wi-Fi once a year. No overall trophy.
        </p>
      </section>

      <section className="prose-dark space-y-4">
        <h2 className="text-2xl font-bold text-white">FAQ</h2>
        <p>
          Safer for whom / streaming NordVPN no fake % / NordVPN Deloitte not independently read / Proton 2025 Securitum
          yes, 2026 not downloaded / try Proton free vs Nord 30-day / Same intro rate ($3.49/mo on 2-year plans). At
          renewal, Proton VPN Plus is $83.88/year and NordVPN Basic is $139.08/year, as of Oct 2026.
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
            <a href="https://tunnelreport.com/compare/nordvpn-vs-protonvpn" className={linkClassName}>
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
            24 Oct 2025 stale $2.99
          </li>
          <li>
            <PlainSourceLink href="https://nordvpn.com/blog/nordvpn-no-logs-assurance-engagement-2025/" />{" "}
            3 Feb 2026 Deloitte PDF not public
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
            <PlainSourceLink href="https://protonvpn.com/" />{" "}
            USD not in fetched HTML
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/pricing" />{" "}
            Proton VPN Plus 2-year price, as of Oct 2026
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/support/proton-vpn-plans" />
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/blog/no-logs-audit" />
          </li>
          <li>
            <a
              href="https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"
              className={linkClassName}
            >
              https://www.securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf
            </a>{" "}
            also{" "}
            <a
              href="https://securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf"
              className={linkClassName}
            >
              https://securitum.com/public-reports/securitum-protonvpn-nologs-2025.pdf
            </a>
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/" />{" "}
            2026 Drive, 2026 public PDF 404
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
            <PlainSourceLink href="https://protonvpn.com/blog/transparency-report" />{" "}
            458/458 denied
          </li>
          <li>
            <PlainSourceLink href="https://protonvpn.com/terms-and-conditions" />{" "}
            last modified 23 June 2026
          </li>
          <li>
            <a href="https://www.fedlex.admin.ch/eli/cc/2022/491/en" className={linkClassName}>
              https://www.fedlex.admin.ch/eli/cc/2022/491/en
            </a>{" "}
            FADP SR 235.1
          </li>
          <li>
            <a href="https://www.ic3.gov/AnnualReport/Reports/2023_IC3Report.pdf" className={linkClassName}>
              https://www.ic3.gov/AnnualReport/Reports/2023_IC3Report.pdf
            </a>
          </li>
          <li>
            <a href="https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online" className={linkClassName}>
              https://freedomhouse.org/report/freedom-net/2024/struggle-trust-online
            </a>
          </li>
        </ol>

        <p>End: Prices and audit-access notes re-checked Oct 15, 2026. Confirm at checkout.</p>
      </section>
    </div>
  );
}

