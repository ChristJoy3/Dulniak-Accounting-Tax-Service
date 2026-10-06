"use client";

import { useRef, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight, Star } from "./icons";
import { SplitHeading } from "./SplitHeading";

// TODO: replace with real client testimonials (with permission)
const placeholders = [1, 2, 3];

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 20), behavior: "smooth" });
  };

  const onDown = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { active: true, startX: e.clientX, startScroll: track.current.scrollLeft, moved: false };
  };
  const onMove = (e: PointerEvent<HTMLUListElement>) => {
    const d = drag.current;
    const el = track.current;
    if (!d.active || !el) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 4) {
      d.moved = true;
      el.setPointerCapture(e.pointerId);
      el.style.scrollSnapType = "none";
    }
    if (d.moved) el.scrollLeft = d.startScroll - dx;
  };
  const onUp = () => {
    drag.current.active = false;
    if (track.current) track.current.style.scrollSnapType = "";
  };

  return (
    <section data-bg="paper" aria-labelledby="testimonials-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p data-fade className="eyebrow mb-6 text-sage-deep">Kind words</p>
            <SplitHeading
              id="testimonials-title"
              className="text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1]"
              lines={["What our clients", <em key="s" className="italic">say.</em>]}
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="sr-only">Previous testimonial</span>
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="sr-only">Next testimonial</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        data-fade
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        aria-label="Client testimonials"
        className="no-scrollbar mt-14 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 select-none active:cursor-grabbing sm:scroll-px-8 sm:px-8 xl:scroll-px-[max(2rem,calc((100vw_-_1320px)/2_+_2rem))] xl:px-[max(2rem,calc((100vw_-_1320px)/2_+_2rem))]"
      >
        {placeholders.map((n) => (
          <li
            key={n}
            className="flex w-[85vw] max-w-[30rem] shrink-0 snap-start flex-col rounded-[var(--radius-card)] border border-line bg-white/60 p-8 sm:p-10"
          >
            <div className="flex gap-1 text-sage-deep" role="img" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} />
              ))}
            </div>
            <blockquote className="mt-8 flex-1 font-serif text-[1.6rem] leading-snug tracking-[-0.015em] text-ink-soft">
              “[Client testimonial]”
            </blockquote>
            <p className="mt-10 border-t border-line pt-5 text-sm font-semibold">[Client name]</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
