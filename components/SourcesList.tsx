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
            <span className="font-semibold text-[#00d4aa]">[{source.id}]</span>{" "}
            {source.publisher}.{" "}
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#1e293b] underline-offset-2 transition hover:decoration-[#00d4aa]"
            >
              {source.title}
            </a>{" "}
            ({source.year}). Retrieved {source.retrievedAt}.
          </li>
        ))}
      </ol>
    </section>
  );
}
