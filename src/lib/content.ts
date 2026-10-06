export const business = {
  name: "Dulniak Tax and Accounting Services LLC",
  shortName: "Dulniak Tax & Accounting",
  tagline: "The best tax place in town",
  street: "2265 Lee Road, Suite 128",
  city: "Winter Park",
  region: "FL",
  postalCode: "32789",
  locationNote: "On Lee Road between I-4 and 17-92",
  phone: "407.339.2887",
  phoneHref: "tel:+14073392887",
  fax: "407.339.2872",
  email: "customerservice@dulniaktax.com",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=2265+Lee+Road+Suite+128+Winter+Park+FL+32789",
  mapEmbed:
    "https://maps.google.com/maps?q=2265+Lee+Road+Suite+128+Winter+Park+FL+32789&z=15&output=embed",
  credentials: [
    "Designated IRS Registered Tax Preparer",
    "Member of NATP (National Association of Tax Professionals)",
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Checklist", href: "#checklist" },
  { label: "Appointments", href: "#appointments" },
  { label: "Contact", href: "#contact" },
];

// TODO: replace these Unsplash placeholders with real firm photography.
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=75",
    alt: "Tax forms, a calculator and a pen spread out for review",
  },
  aboutPrimary: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=75",
    alt: "Two colleagues celebrating while reviewing paperwork in a sunlit office",
  },
  aboutSecondary: {
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1000&q=75",
    alt: "A bright home office desk by the window",
  },
};

export const marquee = [
  "IRS Registered Tax Preparer",
  "NATP Member",
  "All 50 States",
  "Federal & State E-Filing",
  "Winter Park, FL",
];

export type IconName = "file" | "ledger" | "building" | "receipt";

export const services: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Tax Preparation & E-Filing",
    body: "Federal and State personal and corporate tax returns, filed electronically, for all 50 states.",
    icon: "file",
  },
  {
    title: "Bookkeeping",
    body: "Bookkeeping for businesses and sole proprietors.",
    icon: "ledger",
  },
  {
    title: "Business Formation",
    body: "Set up a Corporation, Partnership, LLC, or DBA. We obtain your EIN from the IRS and apply for S corp status if needed.",
    icon: "building",
  },
  {
    title: "Billing Services",
    body: "Billing support for your business.",
    icon: "receipt",
  },
];

export const steps = [
  {
    n: "01",
    title: "Book your appointment.",
    body: "Walk-ins are welcome, but appointments always have priority. Please book no more than two weeks in advance.",
  },
  {
    n: "02",
    title: "Bring your documents.",
    body: "Use our checklist so nothing is missed.",
  },
  {
    n: "03",
    title: "We prepare and e-file.",
    body: "Your Federal and State returns are filed electronically.",
  },
];

export type ChecklistItem = { id: string; title: string; detail?: string };
export type ChecklistGroup = { id: string; label: string; items: ChecklistItem[] };

export const checklist: ChecklistGroup[] = [
  {
    id: "identity",
    label: "Identity",
    items: [
      {
        id: "photo-id",
        title: "Photo ID",
        detail: "Driver license, state ID, military ID, passport, or matricular consular card.",
      },
      {
        id: "ssn",
        title: "Social Security cards & birth dates",
        detail: "For the filer, spouse, and all dependents.",
      },
    ],
  },
  {
    id: "income",
    label: "Income",
    items: [
      {
        id: "w2",
        title: "W-2 and 1099-MISC",
        detail: "Bring the entire form. Flag any out-of-state or overseas earnings.",
      },
      {
        id: "1099k",
        title: "1099-K",
        detail: "If your business accepts credit cards.",
      },
      { id: "1099div", title: "1099-DIV and 1099-INT", detail: "Dividend and interest income." },
      { id: "1099b", title: "1099-B", detail: "For stock trades." },
      {
        id: "1099r",
        title: "1099-R",
        detail: "For IRA, 401(k), pension, and retirement distributions.",
      },
      {
        id: "1099g",
        title: "1099-G",
        detail: "For unemployment, gambling, and lottery winnings.",
      },
      {
        id: "ssa",
        title: "SSA-1099 and RRB-1099",
        detail: "For Social Security and disability benefits.",
      },
      {
        id: "alimony",
        title: "Alimony received or paid",
        detail: "Include the recipient's SSN.",
      },
    ],
  },
  {
    id: "home",
    label: "Home & Property",
    items: [
      {
        id: "1098",
        title: "Form 1098",
        detail: "For mortgage interest, PMI, and property tax.",
      },
      {
        id: "hud-closing",
        title: "Closing statement (HUD)",
        detail: "If you bought, sold, or refinanced.",
      },
      { id: "1099s", title: "HUD and 1099-S", detail: "If you sold property." },
      { id: "1099c", title: "1099-C or 1099-A", detail: "For a foreclosure or short sale." },
      { id: "rental", title: "Rental property", detail: "Rental income and expenses." },
    ],
  },
  {
    id: "family",
    label: "Family & Education",
    items: [
      {
        id: "dependent-care",
        title: "Dependent care expenses",
        detail:
          "For a child under 14 or a disabled dependent: provider name, address, and SSN or EIN.",
      },
      {
        id: "foster",
        title: "Court documents",
        detail: "For foster or adopted children.",
      },
      { id: "1098t", title: "1098-T", detail: "Tuition, books, and supplies." },
      { id: "1098e", title: "1098-E", detail: "Student loan interest." },
    ],
  },
  {
    id: "deductions",
    label: "Deductions & Health",
    items: [
      {
        id: "medical",
        title: "Medical expenses & premiums",
        detail: "Annual medical expenses, plus health and long-term care insurance premiums.",
      },
      {
        id: "charity",
        title: "Cash charitable donations",
        detail: "Canceled checks or a letter from the charity.",
      },
      {
        id: "ira",
        title: "Retirement contributions",
        detail: "Traditional IRA, Keogh, and SEP IRA contributions.",
      },
      { id: "job-expenses", title: "Unreimbursed job expenses" },
      { id: "moving", title: "Moving expenses" },
      {
        id: "1095",
        title: "Form 1095-A, 1095-B, or 1095-C",
        detail: "Health coverage forms (1095-A is from the Marketplace).",
      },
    ],
  },
  {
    id: "self-employed",
    label: "Self-Employed",
    items: [
      {
        id: "se-1099",
        title: "All 1099 income",
        detail: "Plus a Profit/Loss Statement and Balance Sheet.",
      },
    ],
  },
];

export const scamCards = [
  "Call about taxes you owe without first mailing an official notice.",
  "Demand payment without letting you question or appeal the amount.",
  "Require a specific payment method, such as a prepaid debit card.",
  "Ask for credit or debit card numbers over the phone.",
  "Threaten to have police arrest you for not paying.",
];

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome, but appointments always have priority. Please don't book more than two weeks in advance.",
  },
  {
    q: "Can I send my documents instead of coming in?",
    a: "Yes, we accept mail-ins and faxes.",
  },
  { q: "Do you only serve Florida?", a: "No, we serve all 50 states." },
  {
    q: "Can you help me start a business?",
    a: "Yes: Corporation, Partnership, LLC, DBA, EIN, and S corp elections.",
  },
];
