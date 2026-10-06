import type { SVGProps } from "react";
import type { IconName } from "@/lib/content";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowRight(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={1.8} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={1.8} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function Phone(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M5 4h3.5l1.8 4.4-2.2 1.4a11 11 0 0 0 6.1 6.1l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function Plus(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} strokeWidth={1.6} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" {...base} strokeWidth={2.4} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Star(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"
      />
    </svg>
  );
}

export function Shield(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Printer(props: P) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7z" />
    </svg>
  );
}

export function ServiceIcon({ name, ...props }: P & { name: IconName }) {
  const common = { viewBox: "0 0 48 48", width: 44, height: 44, ...base, strokeWidth: 1.2, ...props };
  switch (name) {
    case "file":
      return (
        <svg {...common}>
          <path d="M13 5h16l8 8v30H13z" />
          <path d="M29 5v8h8M19 22h12M19 28h12M19 34h7" />
          <path d="m31 36 3 3 6-7" />
        </svg>
      );
    case "ledger":
      return (
        <svg {...common}>
          <rect x="9" y="7" width="30" height="36" rx="3" />
          <path d="M17 7v36M22 16h11M22 22h11M22 28h11M22 34h6" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M8 42h32M12 42V18l12-9 12 9v24" />
          <path d="M19 42V31h10v11M18 22h3M27 22h3" />
        </svg>
      );
    case "receipt":
      return (
        <svg {...common}>
          <path d="M12 5h24v38l-4-3-4 3-4-3-4 3-4-3-4 3z" />
          <path d="M18 15h12M18 21h12M18 27h7M28 32h2" />
        </svg>
      );
  }
}
