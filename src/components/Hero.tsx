import Image from "next/image";
import { business, images } from "@/lib/content";
import { Button } from "./Button";
import { SplitHeading } from "./SplitHeading";
import { Phone, Shield } from "./icons";

const badges = ["IRS Registered Tax Preparer", "NATP Member", "Federal & State E-Filing"];

export function Hero() {
  return (
    <section
      id="top"
      data-bg="paper"
      aria-labelledby="hero-title"
      className="relative bg-paper pt-[120px] pb-20 sm:pt-[140px] lg:pb-28"
    >
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p data-fade className="eyebrow mb-7 flex items-center gap-3 text-sage-deep">
            <span className="h-px w-8 bg-sage" aria-hidden />
            Winter Park, Florida
          </p>
          <SplitHeading
            as="h1"
            id="hero-title"
            className="text-[clamp(3.1rem,8.4vw,7.4rem)] font-light leading-[0.94]"
            lines={[
              "The best",
              <>
                tax place <em className="font-normal italic text-sage-deep">in</em>
              </>,
              <em key="t" className="font-normal italic">town.</em>,
            ]}
          />
          <p data-fade className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-soft">
            Personal and business tax preparation, bookkeeping, and entity setup from an experienced
            Winter Park team, serving clients in all 50 states.
          </p>
          <div data-fade className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">Book an Appointment</Button>
            <Button
              href={business.phoneHref}
              variant="outline"
              arrow={false}
              icon={<Phone />}
            >
              Call {business.phone}
            </Button>
          </div>
          <ul
            data-fade
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6 text-sm font-medium text-ink-soft"
            aria-label="Credentials"
          >
            {badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-2">
                <Shield className="text-sage-deep" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            data-clip
            data-parallax
            className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-sand sm:aspect-[5/5] lg:aspect-[4/5]"
          >
            <div data-parallax-inner className="absolute inset-x-0 -top-[8%] h-[116%]">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </div>
          <div
            data-fade
            className="absolute -bottom-6 left-4 max-w-[17.5rem] rounded-2xl border border-line bg-paper/90 px-5 py-4 text-sm leading-snug shadow-[0_20px_50px_-30px_rgba(15,27,45,.5)] backdrop-blur sm:left-[-1.5rem]"
          >
            <span className="block font-serif text-lg tracking-tight">{business.locationNote}</span>
            <span className="text-ink-soft">{business.street}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
