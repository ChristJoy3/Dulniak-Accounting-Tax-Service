import { scamCards } from "@/lib/content";
import { SplitHeading } from "./SplitHeading";

const ext = "font-semibold text-paper underline decoration-sand/60 underline-offset-4 hover:decoration-sand";

export function ScamAlert() {
  return (
    <section
      id="scam-alert"
      data-bg="navy"
      aria-labelledby="scam-title"
      className="on-dark bg-ink py-24 text-paper sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p data-fade className="eyebrow mb-6 inline-flex items-center gap-3 text-sand">
              <span className="inline-block h-2 w-2 rounded-full bg-sand" aria-hidden />
              IRS scam alert
            </p>
            <SplitHeading
              id="scam-title"
              className="text-[clamp(2.8rem,6.4vw,5.6rem)] font-light leading-[0.98]"
              lines={["The IRS", <em key="n" className="italic">will never…</em>]}
            />
          </div>
        </div>

        <ol data-stagger="0.14" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {scamCards.map((text, i) => (
            <li
              key={i}
              data-stagger-item
              className="flex min-h-[15rem] flex-col rounded-[var(--radius-card)] border border-paper/15 bg-paper/[0.04] p-6 transition-colors duration-500 hover:border-paper/40 hover:bg-paper/[0.07]"
            >
              <span className="font-serif text-4xl font-light text-sand" aria-hidden>
                0{i + 1}
              </span>
              <p className="mt-auto pt-10 text-[1.05rem] leading-snug">{text}</p>
            </li>
          ))}
        </ol>

        <div data-fade className="mt-14 grid gap-8 border-t border-paper/15 pt-10 lg:grid-cols-12">
          <h3 className="font-serif text-2xl tracking-[-0.02em] lg:col-span-4">Got a suspicious call?</h3>
          <div className="space-y-4 leading-relaxed text-paper/80 lg:col-span-8">
            <p>
              If you might owe taxes, call the IRS at{" "}
              <a href="tel:+18008291040" className={ext}>1.800.829.1040</a>. If not, report it to
              TIGTA at <a href="tel:+18003664484" className={ext}>1.800.366.4484</a> or{" "}
              <a href="https://www.tigta.gov" target="_blank" rel="noopener noreferrer" className={ext}>
                tigta.gov
              </a>
              , and file with the FTC Complaint Assistant at{" "}
              <a href="https://www.ftc.gov" target="_blank" rel="noopener noreferrer" className={ext}>
                FTC.gov
              </a>
              .
            </p>
            <p>The IRS does not use email, text, or social media to discuss your personal tax issue.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
