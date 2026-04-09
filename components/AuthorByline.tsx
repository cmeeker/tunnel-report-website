import type { EditorialPersona } from "@/lib/editorial-personas";

type AuthorBylineProps = {
  persona: EditorialPersona;
  showBio?: boolean;
};

export function AuthorByline({ persona, showBio = false }: AuthorBylineProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] text-sm font-bold text-[#0a0f1e]">
        {persona.avatar}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#e8ecf4]">
          {persona.name}
          <span className="ml-2 font-normal text-[#94a3b8]">{persona.role}</span>
        </p>
        {showBio && (
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#94a3b8]">{persona.shortBio}</p>
        )}
      </div>
    </div>
  );
}
