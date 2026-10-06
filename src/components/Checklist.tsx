"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { checklist } from "@/lib/content";
import { Check, Plus, Printer } from "./icons";
import { SplitHeading } from "./SplitHeading";

const STORAGE_KEY = "dulniak-checklist-v1";
const total = checklist.reduce((n, g) => n + g.items.length, 0);

function load(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function Checklist() {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openItem, setOpenItem] = useState<string | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Restore saved progress after hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecked(load());
  }, []);

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });

  const reset = () => {
    setChecked({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = checklist.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section
      id="checklist"
      data-bg="paper"
      aria-labelledby="checklist-title"
      className="bg-paper py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p data-fade className="eyebrow no-print mb-6 text-sage-deep">Tax document checklist</p>
            <SplitHeading
              id="checklist-title"
              className="text-[clamp(2.4rem,4.6vw,4rem)] font-light leading-[1.02]"
              lines={["What to bring", "to your tax", <em key="a" className="italic">appointment.</em>]}
            />
            <div data-fade className="no-print mt-10">
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-semibold">Your progress</span>
                <span className="text-ink-soft" aria-live="polite">
                  {done} of {total} items ready
                </span>
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full origin-left bg-sage transition-transform duration-700 ease-out-soft"
                  style={{ transform: `scaleX(${done / total})` }}
                />
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                Tick items off as you gather them. Your progress is saved in this browser.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  data-magnetic
                  onClick={() => window.print()}
                  className="group inline-flex items-center gap-3 rounded-full border border-ink/25 px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <Printer />
                  <span data-magnetic-label>Download / Print checklist</span>
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full px-4 py-3 text-sm font-medium text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div data-fade className="min-w-0 lg:col-span-7">
            <div
              role="tablist"
              aria-label="Document categories"
              className="no-print no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
            >
              {checklist.map((g, i) => {
                const count = g.items.filter((it) => checked[it.id]).length;
                const selected = i === active;
                return (
                  <button
                    key={g.id}
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${g.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${g.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={onTabKey}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                      selected
                        ? "border-ink bg-ink text-paper"
                        : "border-ink/15 text-ink hover:border-ink/50"
                    }`}
                  >
                    {g.label}
                    <span className={`ml-2 font-normal ${selected ? "text-paper/70" : "text-ink-soft"}`}>
                      {count}/{g.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-[var(--radius-card)] border border-line bg-white/50 p-2 sm:p-4">
              {checklist.map((g, i) => (
                <div
                  key={g.id}
                  role="tabpanel"
                  id={`panel-${g.id}`}
                  aria-labelledby={`tab-${g.id}`}
                  tabIndex={0}
                  className={`focus-visible:outline-offset-[-2px] ${i === active ? "" : "hidden"}`}
                >
                  <h3 className="print-only hidden px-3 pt-3 font-serif text-xl">{g.label}</h3>
                  <ul className="divide-y divide-line">
                    {g.items.map((item) => {
                      const isChecked = !!checked[item.id];
                      const isOpen = openItem === item.id;
                      return (
                        <li key={item.id} className="px-2 sm:px-3">
                          <div className="flex items-center gap-4 py-3.5">
                            <label className="flex flex-1 cursor-pointer items-center gap-4">
                              <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={isChecked}
                                onChange={() => toggle(item.id)}
                              />
                              <span
                                aria-hidden
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-300 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sage ${
                                  isChecked ? "border-sage-deep bg-sage-deep text-white" : "border-ink/30 bg-paper"
                                }`}
                              >
                                <Check className={isChecked ? "opacity-100" : "opacity-0"} />
                              </span>
                              <span
                                className={`font-medium transition-colors duration-300 ${
                                  isChecked ? "text-ink-soft line-through decoration-ink/30" : ""
                                }`}
                              >
                                {item.title}
                              </span>
                            </label>
                            {item.detail && (
                              <button
                                type="button"
                                aria-expanded={isOpen}
                                aria-controls={`detail-${item.id}`}
                                onClick={() => setOpenItem(isOpen ? null : item.id)}
                                className="no-print flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink/40 hover:text-ink"
                              >
                                <span className="sr-only">
                                  {isOpen ? "Hide" : "Show"} details for {item.title}
                                </span>
                                <Plus
                                  className={`transition-transform duration-500 ease-out-soft ${isOpen ? "rotate-45" : ""}`}
                                />
                              </button>
                            )}
                          </div>
                          {item.detail && (
                            <div
                              id={`detail-${item.id}`}
                              inert={!isOpen}
                              className={`item-detail grid transition-[grid-template-rows] duration-500 ease-out-soft ${
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="pb-4 pl-10 pr-12 text-[0.95rem] leading-relaxed text-ink-soft">
                                  {item.detail}
                                </p>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
