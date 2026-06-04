import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#64748b]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden className="text-[#334155]">/</span>}
              {isLast ? (
                <span className="font-medium text-[#94a3b8]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition hover:text-[#00d4aa]">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
