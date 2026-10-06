import { services } from "@/lib/content";
import { ServiceIcon } from "./icons";
import { SplitHeading } from "./SplitHeading";

export function Services() {
  return (
    <section
      id="services"
      data-bg="sand"
      aria-labelledby="services-title"
      className="bg-sand py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-12 md:flex-row md:items-end">
          <div>
            <p data-fade className="eyebrow mb-6 text-sage-deep">Services</p>
            <SplitHeading
              id="services-title"
              className="text-[clamp(2.4rem,5vw,4.4rem)] font-light leading-[1]"
              lines={["Everything your", <em key="r" className="italic">return needs.</em>]}
            />
          </div>
          <p data-fade className="max-w-sm text-ink-soft">
            Full-range tax and accounting for individuals, sole proprietors, and businesses.
          </p>
        </div>

        <ul data-stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li
              key={s.title}
              data-stagger-item
              className="group flex min-h-[21rem] flex-col rounded-[var(--radius-card)] border border-ink/10 bg-paper/70 p-7 transition-[transform,box-shadow,background-color] duration-500 ease-out-soft hover:-translate-y-2 hover:bg-paper hover:shadow-[0_30px_60px_-35px_rgba(15,27,45,.45)]"
            >
              <div className="flex items-start justify-between">
                <ServiceIcon name={s.icon} className="text-sage-deep" />
                <span className="font-serif text-sm text-ink-soft">0{i + 1}</span>
              </div>
              <h3 className="mt-auto pt-12 font-serif text-[1.65rem] leading-[1.1] tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
