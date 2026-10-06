import Image from "next/image";
import { images } from "@/lib/content";
import { SplitHeading } from "./SplitHeading";

export function About() {
  return (
    <section
      id="about"
      data-bg="paper"
      aria-labelledby="about-title"
      className="bg-paper py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <figure
              data-clip
              data-parallax
              className="relative col-span-8 aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-sand"
            >
              <div data-parallax-inner className="absolute inset-x-0 -top-[8%] h-[116%]">
                <Image
                  src={images.aboutPrimary.src}
                  alt={images.aboutPrimary.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 66vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="col-span-4 flex flex-col justify-end gap-4 pb-6">
              <figure
                data-clip
                data-parallax
                className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-sand"
              >
                <div data-parallax-inner className="absolute inset-x-0 -top-[8%] h-[116%]">
                  <Image
                    src={images.aboutSecondary.src}
                    alt={images.aboutSecondary.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <p className="text-xs leading-snug text-ink-soft">[Team photo]</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
          <p data-fade className="eyebrow mb-6 text-sage-deep">About the firm</p>
          <SplitHeading
            id="about-title"
            className="text-[clamp(2.4rem,4.6vw,4rem)] font-light leading-[1.02]"
            lines={["Close personal", "attention, backed", <em key="w" className="italic">by a whole firm.</em>]}
          />
          <div data-fade className="mt-9 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              We are a well-established tax and accounting firm in Winter Park, Florida, offering a
              full range of tax and accounting services. Our specialty is the electronic filing of
              Federal and State personal and corporate returns.
            </p>
            <p>
              As the largest independent tax firm in Florida, our experienced staff of tax
              specialists brings expertise, experience, and energy to every return, so each client
              receives close personal and professional attention, backed by the expertise of the
              whole firm.
            </p>
          </div>
          <dl data-fade className="mt-10 grid grid-cols-2 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-ink-soft">Credentials</dt>
              <dd className="mt-1 font-semibold">IRS Registered Tax Preparer · NATP Member</dd>
            </div>
            <div className="border-l border-line pl-6">
              <dt className="text-ink-soft">Reach</dt>
              <dd className="mt-1 font-semibold">Clients in all 50 states</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
