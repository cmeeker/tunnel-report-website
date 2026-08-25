import type { CitationSource } from "@/lib/content/facts";

type SourcesListProps = {
  sources: CitationSource[];
};

export function SourcesList({ sources }: SourcesListProps) {
  return (
    <section className="surface-card p-8">
      <h2 className="text-lg font-bold text-white">Sources &amp; References</h2>
      <ol className="mt-4 space-y-2 text-sm text-[#94a3b8]">
        {sources.map((source) => (
          <li key={source.id} id={`source-${source.id}`}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]"
            >
              [{source.id}]
            </a>{" "}
            {source.publisher}.{" "}
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cbd5e1] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-white hover:decoration-[#00d4aa]"
            >
              {source.title}
            </a>{" "}
            ({source.year}).
          </li>
        ))}
      </ol>
    </section>
  );
}
