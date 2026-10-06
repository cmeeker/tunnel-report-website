import { CitationLink } from "@/components/CitationLink";
import { citationSources } from "@/lib/content/facts";

const CITATION_PATTERN = /(\[[A-Z]{1,4}\d{1,3}[a-z]?\])/g;

export function CitedText({ text }: { text: string }) {
  const parts = text.split(CITATION_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([A-Z]{1,4}\d{1,3}[a-z]?)\]$/);
        if (!match) return part;
        const source = citationSources[match[1]];
        if (!source) return part;
        return <CitationLink key={`${match[1]}-${index}`} source={source} />;
      })}
    </>
  );
}
