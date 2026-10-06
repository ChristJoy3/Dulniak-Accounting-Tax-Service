import type { ReactNode } from "react";

/** Heading pre-split into masked lines for the line-by-line reveal. */
export function SplitHeading({
  as: Tag = "h2",
  lines,
  className = "",
  id,
}: {
  as?: "h1" | "h2" | "h3";
  lines: ReactNode[];
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} data-split className={`font-serif tracking-[-0.035em] ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="line">
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
