import { CitationLink } from "@/components/CitationLink";
import { citationLinkRel, citationSources } from "@/lib/content/facts";

const TOKEN_PATTERN = /(\[[A-Z]{1,4}\d{1,3}[a-z]?\]|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;

const linkClassName =
  "font-semibold text-[#00d4aa] underline decoration-[#00d4aa]/60 underline-offset-2 transition hover:text-[#5eead4] hover:decoration-[#00d4aa]";

export function CitedText({ text }: { text: string }) {
  const parts = text.split(TOKEN_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        const citation = part.match(/^\[([A-Z]{1,4}\d{1,3}[a-z]?)\]$/);
        if (citation) {
          const source = citationSources[citation[1]];
          if (!source) return part;
          return <CitationLink key={`${citation[1]}-${index}`} source={source} />;
        }

        const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
        if (!link) return part;
        return (
          <a
            key={`link-${index}`}
            href={link[2]}
            target="_blank"
            rel={citationLinkRel(link[2])}
            className={linkClassName}
          >
            {link[1]}
          </a>
        );
      })}
    </>
  );
}
