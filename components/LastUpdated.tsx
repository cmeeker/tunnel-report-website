type LastUpdatedProps = {
  date: string;
};

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <p className="text-sm text-[#64748b]">
      <span className="font-medium text-[#94a3b8]">Last verified:</span> {date}
    </p>
  );
}
