import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type Variant = "primary" | "outline" | "light" | "ghost-light";

const styles: Record<Variant, string> = {
  primary: "bg-sage-deep text-white hover:bg-ink",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-ink hover:bg-sand",
  "ghost-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  arrow = true,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  arrow?: boolean;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">) {
  return (
    <a
      href={href}
      data-magnetic
      className={`group relative inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-300 ${styles[variant]} ${className}`}
      {...rest}
    >
      {icon}
      <span data-magnetic-label className="inline-block">
        {children}
      </span>
      {arrow && (
        <span className="relative inline-flex h-[18px] w-[18px] overflow-hidden" aria-hidden>
          <ArrowRight className="absolute inset-0 transition-transform duration-500 ease-out-soft group-hover:translate-x-[140%]" />
          <ArrowRight className="absolute inset-0 -translate-x-[140%] transition-transform duration-500 ease-out-soft group-hover:translate-x-0" />
        </span>
      )}
    </a>
  );
}
