import Link from "next/link";

import type { PriceCheckLink } from "@/lib/content/latest-price-checks";

type PlainInternalLinkListProps = {
  title: string;
  links: PriceCheckLink[];
};

export function PlainInternalLinkList({ title, links }: PlainInternalLinkListProps) {
  if (links.length === 0) return null;

  return (
    <section className="surface-card p-8">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <ul className="mt-3 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[#94a3b8] transition hover:text-[#00d4aa]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
