"use client";

import { useEffect, useRef, useState } from "react";
import { business, nav } from "@/lib/content";
import { Button } from "./Button";
import { Phone } from "./icons";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      setScrolled(y > 12);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 160);
        last = y;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isHidden = hidden && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out-soft ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      onFocusCapture={() => setHidden(false)}
    >
      <div
        className={`border-b transition-colors duration-500 ${
          scrolled || open
            ? "border-line bg-paper/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" className="font-serif text-[1.3rem] leading-none tracking-[-0.02em] text-ink">
            Dulniak <span className="italic text-sage-deep">Tax</span> &amp; Accounting
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.92rem] font-medium text-ink-soft">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative py-1 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500 hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-ink"
            >
              <Phone className="text-sage-deep" />
              {business.phone}
            </a>
            <Button href="#contact" className="!py-2.5 !px-5 !text-[0.88rem]">
              Book an Appointment
            </Button>
          </div>

          <button
            type="button"
            className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden
              className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-500 ease-out-soft lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          inert={!open}
        >
          <div className="overflow-hidden">
            <nav aria-label="Mobile" className="px-5 pb-8 pt-2 sm:px-8">
              <ul className="divide-y divide-line border-y border-line">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-serif text-2xl tracking-[-0.02em]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button href="#contact" onClick={() => setOpen(false)}>
                  Book an Appointment
                </Button>
                <a href={business.phoneHref} className="inline-flex items-center gap-2 font-semibold">
                  <Phone className="text-sage-deep" />
                  {business.phone}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 h-[2px]" aria-hidden>
        <div ref={progress} className="h-full origin-left scale-x-0 bg-sage" />
      </div>
    </header>
  );
}
