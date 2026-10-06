import { business } from "@/lib/content";
import { ContactForm } from "./ContactForm";
import { SplitHeading } from "./SplitHeading";
import { ArrowRight } from "./icons";

const row = "grid grid-cols-[4.5rem_1fr] gap-4 sm:grid-cols-[6rem_1fr] border-b border-paper/15 py-5";
const link = "underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-sand";

export function Contact() {
  return (
    <section
      id="contact"
      data-bg="navy"
      aria-labelledby="contact-title"
      className="on-dark bg-ink py-24 text-paper sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <p data-fade className="eyebrow mb-6 text-sand">Contact &amp; visit</p>
        <SplitHeading
          id="contact-title"
          className="max-w-4xl text-[clamp(2.6rem,6vw,5.2rem)] font-light leading-[1]"
          lines={["Come see us", <em key="w" className="italic">in Winter Park.</em>]}
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <div data-fade className="lg:col-span-5">
            <address className="not-italic">
              <div className={`${row} border-t`}>
                <span className="text-sm text-paper/60">Address</span>
                <span>
                  {business.street}
                  <br />
                  {business.city}, {business.region} {business.postalCode}
                  <span className="mt-1 block text-sm text-paper/60">{business.locationNote}</span>
                </span>
              </div>
              <div className={row}>
                <span className="text-sm text-paper/60">Phone</span>
                <a href={business.phoneHref} className={link}>
                  {business.phone}
                </a>
              </div>
              <div className={row}>
                <span className="text-sm text-paper/60">Fax</span>
                <span>{business.fax}</span>
              </div>
              <div className={row}>
                <span className="text-sm text-paper/60">Email</span>
                <a href={`mailto:${business.email}`} className={`${link} [overflow-wrap:anywhere]`}>
                  {business.email}
                </a>
              </div>
            </address>

            <a
              href={business.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-sand"
            >
              Get Driving Directions
              <ArrowRight className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1.5" />
            </a>

            <div className="mt-10 rounded-[var(--radius-card)] border border-paper/15 p-6">
              <h3 className="font-serif text-xl tracking-[-0.01em]">Can&apos;t come in?</h3>
              <p className="mt-2 text-paper/75 leading-relaxed">
                We accept tax documents by mail and fax. Mail to {business.street},{" "}
                {business.city}, {business.region} {business.postalCode}, or fax to {business.fax}.
              </p>
            </div>
          </div>

          <div data-fade className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        <div
          data-fade
          className="map-frame mt-16 overflow-hidden rounded-[var(--radius-card)] border border-paper/15"
        >
          <iframe
            src={business.mapEmbed}
            title="Map of Dulniak Tax and Accounting, 2265 Lee Road, Suite 128, Winter Park, FL"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full border-0 sm:h-[440px]"
          />
        </div>
      </div>
    </section>
  );
}
