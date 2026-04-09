import { JsonLd } from "@/components/JsonLd";
import { buildFAQSchema } from "@/lib/seo/schema";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: FaqItem[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="space-y-4">
      <JsonLd data={buildFAQSchema(faqs)} />
      <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="glass-card group overflow-hidden p-7"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-[#e8ecf4] transition group-open:text-[#00d4aa]">
              {faq.question}
            </summary>
            <p className="mt-3 leading-relaxed text-[#94a3b8]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
