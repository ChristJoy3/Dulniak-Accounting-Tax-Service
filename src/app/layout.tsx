import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { business } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Tax preparation in Winter Park, FL. Personal and business tax returns, e-filing, bookkeeping, and business formation from an IRS Registered Tax Preparer and NATP member, serving clients in all 50 states.";

export const metadata: Metadata = {
  // TODO: set to the production domain
  metadataBase: new URL("https://www.dulniaktax.com"),
  title: "Tax Preparation Winter Park FL | Dulniak Tax & Accounting",
  description,
  keywords: [
    "tax preparation Winter Park FL",
    "Winter Park tax preparer",
    "accountant Winter Park Florida",
    "bookkeeping Winter Park",
    "LLC formation Florida",
    "electronic tax filing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.shortName,
    title: "Dulniak Tax & Accounting | The best tax place in town",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulniak Tax & Accounting | Winter Park, FL",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: business.name,
  slogan: business.tagline,
  telephone: "+1-407-339-2887",
  faxNumber: "+1-407-339-2872",
  email: business.email,
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
