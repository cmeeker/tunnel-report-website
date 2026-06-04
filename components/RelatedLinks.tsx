import Link from "next/link";

export type RelatedLink = {
  href: string;
  label: string;
};

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

export function RelatedLinks({ title = "Related Coverage", links }: RelatedLinksProps) {
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
              {link.label} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
