import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import LocationPage from "@/components/seo/LocationPage";
import ServicePage from "@/components/seo/ServicePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  const location = locations.find((l) => l.slug === slug);
  if (location) {
    return (
      <>
        <Header />
        <LocationPage data={location} />
        <Footer />
        <MobileFloatingCTA />
      </>
    );
  }

  const service = services.find((s) => s.slug === slug);
  if (service) {
    return (
      <>
        <Header />
        <ServicePage data={service} />
        <Footer />
        <MobileFloatingCTA />
      </>
    );
  }

  notFound();
}
