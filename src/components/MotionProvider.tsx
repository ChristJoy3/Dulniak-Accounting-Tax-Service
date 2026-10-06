"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BG: Record<string, string> = {
  paper: "#F7F4EE",
  sand: "#E8DCC8",
  navy: "#0F1B2D",
};

/**
 * Owns smooth scrolling and every scroll-driven animation on the page.
 * Markup hooks:
 *   [data-split]          heading built from .line > span, revealed line by line
 *   [data-clip]           clip-path reveal on enter
 *   [data-parallax]       wrapper whose [data-parallax-inner] drifts slower than scroll
 *   [data-fade]           fade-up on enter
 *   [data-stagger]        children marked [data-stagger-item] reveal in sequence
 *   [data-bg]             section background color the body blends to
 *   [data-pin-steps]      the pinned "How it works" section
 *   [data-magnetic]       magnetic hover
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const mm = gsap.matchMedia();
    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    // Pinned steps on large screens only. Created first so triggers further down
    // the page measure their positions with the pin spacing included.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const section = document.querySelector<HTMLElement>("[data-pin-steps]");
      if (!section) return;
      root.classList.add("pin-ok");
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", section);
      const markers = gsap.utils.toArray<HTMLElement>("[data-step-marker]", section);
      const bar = section.querySelector("[data-step-progress]");

      gsap.set(steps.slice(1), { autoAlpha: 0, y: 60 });
      gsap.set(markers.slice(1), { opacity: 0.35 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(bar, { scaleY: 0 }, { scaleY: 1, ease: "none", duration: steps.length }, 0);
      steps.forEach((step, i) => {
        if (i === 0) return;
        const at = i;
        tl.to(steps[i - 1], { autoAlpha: 0, y: -60, duration: 0.4 }, at - 0.45)
          .to(step, { autoAlpha: 1, y: 0, duration: 0.4 }, at - 0.2)
          .to(markers[i - 1], { opacity: 0.35, duration: 0.3 }, at - 0.3)
          .to(markers[i], { opacity: 1, duration: 0.3 }, at - 0.3);
      });

      return () => root.classList.remove("pin-ok");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      lenis = new Lenis({ anchors: { offset: -24 }, autoRaf: false, lerp: 0.09 });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Headlines: masked line-by-line rise
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".line > span"), {
          yPercent: 115,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Image clip-path reveal
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(18% 8% 18% 8% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      // Parallax: inner image is oversized and drifts against the scroll
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((wrap) => {
        const inner = wrap.querySelector<HTMLElement>("[data-parallax-inner]");
        if (!inner) return;
        gsap.fromTo(
          inner,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-stagger-item]"), {
          y: 48,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: Number(group.dataset.stagger) || 0.12,
          scrollTrigger: { trigger: group, start: "top 80%" },
        });
      });

      // Body background blends between section colors
      const sections = gsap.utils.toArray<HTMLElement>("[data-bg]");
      if (sections.length) {
        root.classList.add("bg-driven");
        const setBg = (key: string | undefined) =>
          gsap.to(document.body, {
            backgroundColor: BG[key ?? "paper"] ?? BG.paper,
            duration: 0.7,
            ease: "power2.out",
            overwrite: "auto",
          });
        gsap.set(document.body, { backgroundColor: BG[sections[0].dataset.bg ?? "paper"] });
        sections.forEach((s) => {
          ScrollTrigger.create({
            trigger: s,
            start: "top 55%",
            end: "bottom 55%",
            onEnter: () => setBg(s.dataset.bg),
            onEnterBack: () => setBg(s.dataset.bg),
          });
        });
      }

      return () => {
        root.classList.remove("bg-driven");
        gsap.set(document.body, { clearProps: "backgroundColor" });
        if (tick) gsap.ticker.remove(tick);
        lenis?.destroy();
        lenis = null;
      };
    });

    // Smaller screens: steps simply fade up instead of pinning
    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });

    // Magnetic buttons for fine pointers
    mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cleanups: (() => void)[] = [];
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
        const label = el.querySelector<HTMLElement>("[data-magnetic-label]");
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const lx = label && gsap.quickTo(label, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const ly = label && gsap.quickTo(label, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          xTo(dx * 0.25);
          yTo(dy * 0.35);
          lx?.(dx * 0.1);
          ly?.(dy * 0.12);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
          lx?.(0);
          ly?.(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
          gsap.set([el, label].filter(Boolean), { clearProps: "transform" });
        });
      });
      return () => cleanups.forEach((fn) => fn());
    });

    // Keep trigger positions in sync when accordions/tabs change page height
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    ro.observe(document.querySelector("main") ?? document.body);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      mm.revert();
    };
  }, []);

  return <>{children}</>;
}
