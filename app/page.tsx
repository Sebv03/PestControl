import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ServiceGrid from "./components/ServiceGrid";
import Process from "./components/Process";
import LeadCapture from "./components/LeadCapture";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="banner">
        <Hero />
      </section>
      <SocialProof />
      <section id="services">
        <ServiceGrid />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="about">
        {/* Using LeadCapture as 'contact' or 'about' placeholder for now since we don't have a dedicated About section yet */}
        <LeadCapture />
      </section>
      <FAQ />
      <section id="contact">
        {/* Footer also serves as contact info area */}
      </section>
      <Footer />
    </main>
  );
}
