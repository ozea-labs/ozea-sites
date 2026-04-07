import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
import { Audience } from "@/components/Audience";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <About />
        <Method />
        <Audience />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
