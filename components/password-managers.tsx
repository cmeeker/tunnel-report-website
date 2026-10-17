import Link from "next/link";
import type { ReactNode } from "react";

export const NORDPASS_AFFILIATE_HREF =
  "https://go.nordpass.io/aff_c?offer_id=488&aff_id=158647&url_id=9356";

export const textLinkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

const NORDPASS_REL = "sponsored nofollow noopener noreferrer";

export function NordPassPricingLink({ presentation = "inline" }: { presentation?: "inline" | "button" }) {
  return (
    <a
      href={NORDPASS_AFFILIATE_HREF}
      target="_blank"
      rel={NORDPASS_REL}
      className={presentation === "button" ? "affiliate-cta" : textLinkClassName}
    >
      Check NordPass pricing
    </a>
  );
}

export function PricingLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={textLinkClassName}>
      {children}
    </a>
  );
}

export function EditorialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={textLinkClassName}>
      {children}
    </Link>
  );
}

export function Cite({ id }: { id: string }) {
  return (
    <a href={`#source-${id}`} className={textLinkClassName} aria-label={`Jump to source ${id}`}>
      [{id}]
    </a>
  );
}

export function AffiliateDisclosure({ children }: { children: ReactNode }) {
  return (
    <aside
      className="rounded-xl border border-[#1e293b] bg-[#111827] px-6 py-4 text-sm leading-relaxed text-[#94a3b8]"
      aria-label="Affiliate disclosure"
    >
      <span className="mr-2 inline-block rounded bg-[#1e293b] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#64748b]">
        Disclosure
      </span>
      {children}
    </aside>
  );
}

export type PasswordSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  year: number;
};

function isNordPassHost(url: string) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host === "nordpass.com" || host.endsWith(".nordpass.com") || host === "go.nordpass.io";
  } catch {
    return false;
  }
}

export function PasswordManagerSources({ sources }: { sources: PasswordSource[] }) {
  return (
    <section className="surface-card p-8">
      <h2 className="text-lg font-bold text-white">Sources &amp; References</h2>
      <ol className="mt-4 space-y-2 text-sm text-[#94a3b8]">
        {sources.map((source) => {
          const linkSource = !isNordPassHost(source.url);
          return (
            <li key={source.id} id={`source-${source.id}`}>
              <span className="font-semibold text-[#00d4aa]">[{source.id}]</span> {source.publisher}.{" "}
              {linkSource ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cbd5e1] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-white hover:decoration-[#00d4aa]"
                >
                  {source.title}
                </a>
              ) : (
                <span className="text-[#cbd5e1]">{source.title}</span>
              )}{" "}
              ({source.year}). <span className="break-all text-[#64748b]">{source.url}</span> (checked Oct 2026).
            </li>
          );
        })}
      </ol>
    </section>
  );
}

type PriceBar = {
  label: string;
  amountLabel: string;
  value: number;
  tone?: "neutral" | "accent";
};

export function PriceBarChart({
  title,
  bars,
  note,
  source,
}: {
  title: string;
  bars: PriceBar[];
  note?: string;
  source: string;
}) {
  const max = Math.max(...bars.map((bar) => bar.value));

  return (
    <figure className="glass-card space-y-4 p-6 md:p-8">
      <figcaption className="text-lg font-bold text-white">{title}</figcaption>
      {note ? <p className="text-sm leading-relaxed text-[#94a3b8]">{note}</p> : null}
      <ul className="space-y-4">
        {bars.map((bar) => (
          <li key={bar.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-[#cbd5e1]">{bar.label}</span>
              <span className="shrink-0 font-semibold text-white">{bar.amountLabel}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-[#1e293b]" aria-hidden="true">
              <div
                className={`h-2 rounded-full ${bar.tone === "accent" ? "bg-[#00d4aa]" : "bg-[#94a3b8]"}`}
                style={{ width: `${Math.max(8, (bar.value / max) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xs leading-relaxed text-[#64748b]">{source}</p>
    </figure>
  );
}
