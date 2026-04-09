type RatingStarsProps = {
  rating: number;
  max?: number;
  size?: "sm" | "lg";
};

export function RatingStars({ rating, max = 5, size = "sm" }: RatingStarsProps) {
  const pct = (rating / max) * 100;
  return (
    <div
      className="flex min-h-10 items-center gap-3"
      role="img"
      aria-label={`Rating ${rating} out of ${max}`}
    >
      <div className={`font-bold ${size === "lg" ? "text-4xl" : "text-2xl"} gradient-text`}>
        {rating.toFixed(1)}
      </div>
      <div className="flex flex-col gap-1">
        <div className="score-bar w-28">
          <div className="score-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs text-[#64748b]">out of {max}</span>
      </div>
    </div>
  );
}
