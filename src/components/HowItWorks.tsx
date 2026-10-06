import { steps } from "@/lib/content";
import { Button } from "./Button";
import { SplitHeading } from "./SplitHeading";

export function HowItWorks() {
  return (
    <section
      id="appointments"
      data-bg="sand"
      data-pin-steps
      aria-labelledby="how-title"
      className="bg-sand"
    >
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:min-h-screen lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="how-intro lg:col-span-5">
          <p data-fade className="eyebrow mb-6 text-sage-deep">How it works</p>
          <SplitHeading
            id="how-title"
            className="text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1]"
            lines={["Three steps to", <em key="d" className="italic">done.</em>]}
          />
          <p data-fade className="mt-8 max-w-sm text-ink-soft">
            Can&apos;t come in? We accept tax documents by mail and fax.
          </p>
          <div data-fade className="mt-10">
            <Button href="#contact">Book an Appointment</Button>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          {/* Progress rail, shown while pinned */}
          <div className="absolute -left-10 top-0 bottom-0 hidden w-px bg-ink/15 [.pin-ok_&]:block" aria-hidden>
            <div data-step-progress className="h-full w-full origin-top scale-y-0 bg-sage" />
          </div>
          <div className="mb-10 hidden gap-6 font-serif text-lg [.pin-ok_&]:flex" aria-hidden>
            {steps.map((s) => (
              <span key={s.n} data-step-marker>
                {s.n}
              </span>
            ))}
          </div>

          <ol className="steps-stack">
            {steps.map((s) => (
              <li key={s.n} data-step className="border-t border-ink/15 py-10 first:border-t-0 first:pt-0">
                <span className="block font-serif text-[clamp(4.5rem,10vw,9rem)] font-light leading-none tracking-[-0.05em] text-sage-deep">
                  {s.n}
                </span>
                <h3 className="mt-6 font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                  {s.body}
                  {s.n === "02" && (
                    <>
                      {" "}
                      <a href="#checklist" className="font-semibold text-ink underline decoration-sage underline-offset-4">
                        View the checklist
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
