import type { CitationSource } from "@/lib/content/facts";

type CitationLinkProps = {
  source: CitationSource;
};

export function CitationLink({ source }: CitationLinkProps) {
  return (
    <sup className="ml-0.5 whitespace-nowrap text-xs">
      [
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#00d4aa] hover:underline"
      >
        {source.id}
      </a>
      ]
    </sup>
  );
}
