import type { EditorialPersona } from "@/lib/editorial-personas";

type AuthorBylineProps = {
  persona: EditorialPersona;
  showBio?: boolean;
  date?: string;
};

export function AuthorByline({ persona, showBio = false, date }: AuthorBylineProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00d4aa] to-[#06b6d4] text-xs font-bold tracking-tight text-[#0a0f1e]">
        {persona.avatar}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold leading-snug text-[#e8ecf4]">
          {persona.name}
          <span className="ml-2 font-normal text-[#64748b]">{persona.role}</span>
        </p>
        {date && (
          <p className="text-xs text-[#475569]">
            Updated <span className="text-[#64748b]">{date}</span>
          </p>
        )}
        {showBio && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#64748b]">
            {persona.shortBio}
          </p>
        )}
      </div>
    </div>
  );
}
