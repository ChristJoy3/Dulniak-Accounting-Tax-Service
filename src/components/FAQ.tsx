"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Plus } from "./icons";
import { SplitHeading } from "./SplitHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" data-bg="sand" aria-labelledby="faq-title" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p data-fade className="eyebrow mb-6 text-sage-deep">FAQ</p>
          <SplitHeading
            id="faq-title"
            className="text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1]"
            lines={["Good", <em key="q" className="italic">questions.</em>]}
          />
        </div>
        <div data-fade className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left font-serif text-[clamp(1.35rem,2.2vw,1.8rem)] leading-tight tracking-[-0.02em]"
                  >
                    {f.q}
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-out-soft ${
                        isOpen ? "rotate-45 border-ink bg-ink text-paper" : "border-ink/25"
                      }`}
                    >
                      <Plus />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-8 text-lg leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
