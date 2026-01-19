import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PriceCalculator from "@/components/PriceCalculator";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <WhyChooseUs />
        <HowItWorks />
        <PriceCalculator />
        <Testimonials />
        <UseCases />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
