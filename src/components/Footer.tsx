import { business, services } from "@/lib/content";

const quick = [
  { label: "Checklist", href: "#checklist" },
  { label: "Appointments", href: "#appointments" },
  { label: "Contact", href: "#contact" },
];
const h = "eyebrow mb-5 text-sand";
const a = "transition-colors hover:text-paper";

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-paper/75">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 border-t border-paper/15 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl tracking-[-0.02em] text-paper">
              Dulniak <span className="italic text-sand">Tax</span> &amp; Accounting
            </p>
            <p className="mt-4 max-w-xs leading-relaxed">
              {business.tagline}. A full range of tax and accounting services from Winter Park,
              Florida, for clients in all 50 states.
            </p>
            <ul className="mt-6 space-y-1 text-sm">
              {business.credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className={h}>Services</h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className={a}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h2 className={h}>Quick links</h2>
            <ul className="space-y-3">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className={a}>
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <h2 className={h}>Contact</h2>
            <address className="space-y-3 not-italic">
              <p>
                {business.street}
                <br />
                {business.city}, {business.region} {business.postalCode}
              </p>
              <p>
                Phone{" "}
                <a href={business.phoneHref} className={a}>
                  {business.phone}
                </a>
                <br />
                Fax {business.fax}
              </p>
              <p>
                <a href={`mailto:${business.email}`} className={`${a} break-all`}>
                  {business.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-paper/15 py-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <a href="#top" className={a}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
