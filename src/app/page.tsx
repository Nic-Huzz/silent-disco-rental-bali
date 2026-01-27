import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechSpecs from "@/components/TechSpecs";
import VideoShowcase from "@/components/VideoShowcase";
import TicketSalesSupport from "@/components/TicketSalesSupport";
import HowItWorks from "@/components/HowItWorks";
import PriceCalculator from "@/components/PriceCalculator";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import SocialImpact from "@/components/SocialImpact";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <TechSpecs />
        <VideoShowcase />
        <WhyChooseUs />
        <TicketSalesSupport />
        <HowItWorks />
        <PriceCalculator />
        <Testimonials />
        <UseCases />
        <SocialImpact />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}
