"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "./icons";

const field =
  "mt-2 w-full rounded-xl border border-paper/20 bg-paper/[0.05] px-4 py-3.5 text-paper placeholder:text-paper/40 transition-colors focus:border-sand focus:bg-paper/[0.08] focus:outline-none";
const label = "text-sm font-medium text-paper/85";

export function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to a form endpoint (email service or CRM)
    setStatus(
      "[Form endpoint not connected] Your message was not sent. Please call 407.339.2887 or email customerservice@dulniaktax.com.",
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby="form-title"
      className="rounded-[var(--radius-card)] border border-paper/15 bg-paper/[0.03] p-6 sm:p-9"
    >
      <h3 id="form-title" className="font-serif text-3xl tracking-[-0.02em]">
        Send us a message
      </h3>
      <p className="mt-2 text-sm text-paper/70">
        Fields marked <span aria-hidden>*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first" className={label}>
            First name <span aria-hidden>*</span>
          </label>
          <input id="first" name="firstName" required autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor="last" className={label}>
            Last name <span aria-hidden>*</span>
          </label>
          <input id="last" name="lastName" required autoComplete="family-name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email <span aria-hidden>*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            Message <span aria-hidden>*</span>
          </label>
          <textarea id="message" name="message" required rows={5} className={`${field} resize-y`} />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-paper/85">
        <input
          type="checkbox"
          name="updates"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-sand"
        />
        Send me tax law updates by email.
      </label>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          data-magnetic
          className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition-colors duration-300 hover:bg-sand"
        >
          <span data-magnetic-label>Send message</span>
          <ArrowRight className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1" />
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-5 text-sm text-sand empty:hidden">
        {status}
      </p>
    </form>
  );
}
