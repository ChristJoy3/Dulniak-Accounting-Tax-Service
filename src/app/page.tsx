import { About } from "@/components/About";
import { Checklist } from "@/components/Checklist";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { MotionProvider } from "@/components/MotionProvider";
import { ScamAlert } from "@/components/ScamAlert";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <HowItWorks />
        <Checklist />
        <ScamAlert />
        <Testimonials />
        <FAQ />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
