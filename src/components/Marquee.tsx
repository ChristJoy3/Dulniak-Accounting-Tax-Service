import { marquee } from "@/lib/content";

export function Marquee() {
  const row = (
    <>
      {marquee.map((m) => (
        <span key={m} className="flex shrink-0 items-center gap-10 pr-10">
          <span>{m}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
        </span>
      ))}
    </>
  );
  return (
    <section data-bg="paper" aria-label="Credentials" className="bg-paper">
      <ul className="sr-only">
        {marquee.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <div
        aria-hidden
        className="overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div className="marquee-track flex w-max animate-marquee font-serif text-[clamp(1.5rem,3vw,2.4rem)] italic tracking-[-0.02em] text-ink">
          {row}
          {row}
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}
