import { staffAuthorName } from "@/lib/editorial-personas";

type AuthorBylineProps = {
  date?: string;
};

export function AuthorByline({ date }: AuthorBylineProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-sm font-semibold leading-snug text-[#e8ecf4]">{staffAuthorName}</p>
      {date ? (
        <p className="text-xs text-[#475569]">
          Updated <span className="text-[#64748b]">{date}</span>
        </p>
      ) : null}
    </div>
  );
}
