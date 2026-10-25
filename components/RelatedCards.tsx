import Link from "next/link";
import type { ReactNode } from "react";

export type RelatedCard = {
  href: string;
  title: string;
  description: ReactNode;
};

export function RelatedCards({
  title = "Related pages",
  cards,
}: {
  title?: string;
  cards: RelatedCard[];
}) {
  if (cards.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="glass-card glass-card-hover group p-7 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-lg font-bold text-white transition group-hover:text-[#00d4aa]">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{card.description}</p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-[#00d4aa] opacity-80 transition group-hover:opacity-100">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

