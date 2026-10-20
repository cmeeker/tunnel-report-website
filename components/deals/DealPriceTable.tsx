import type { ReactNode } from "react";

import { AffiliateCTA } from "@/components/AffiliateCTA";

export const textLinkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

export function PlainOutboundLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={textLinkClassName}>
      {children}
    </a>
  );
}

export function PaidVisitLink({
  href,
  partner,
  label,
}: {
  href: string;
  partner: string;
  label: string;
}) {
  return <AffiliateCTA href={href} partner={partner} label={label} />;
}

export function PriceTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="glass-card overflow-x-auto p-2">
      <table className="table-dark">
        {caption ? (
          <caption className="caption-top px-5 pb-2 pt-4 text-left text-sm italic text-[#94a3b8]">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SourceLine({ href, label }: { href: string; label: string }) {
  return (
    <p className="text-sm text-[#94a3b8]">
      Source: <PlainOutboundLink href={href}>{label}</PlainOutboundLink> (accessed Oct 17, 2026)
    </p>
  );
}
