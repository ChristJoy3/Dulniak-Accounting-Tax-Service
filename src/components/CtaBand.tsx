import { Button } from "./Button";
import { SplitHeading } from "./SplitHeading";

export function CtaBand() {
  return (
    <section data-bg="sand" aria-labelledby="cta-title" className="bg-sand pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-paper px-6 py-20 text-center sm:px-12 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sage/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-sand/80 blur-3xl"
          />
          <SplitHeading
            id="cta-title"
            className="relative mx-auto max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)] font-light leading-[1]"
            lines={["Ready for a great", <em key="e" className="italic">tax return experience?</em>]}
          />
          <div data-fade className="relative mt-12 flex justify-center">
            <Button href="#contact">Book an Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
