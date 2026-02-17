import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const locationSlugs = locations.map((l) => ({ slug: l.slug }));
  const serviceSlugs = services.map((s) => ({ slug: s.slug }));
  return [...locationSlugs, ...serviceSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const location = locations.find((l) => l.slug === slug);
  if (location) {
    return {
      title: { absolute: location.title },
      description: location.description,
      keywords: location.keywords,
      alternates: {
        canonical: `https://www.silentdiscorentalbali.com/${location.slug}`,
      },
      openGraph: {
        title: location.title,
        description: location.description,
        url: `https://www.silentdiscorentalbali.com/${location.slug}`,
        siteName: "Silent Disco Rental Bali",
        type: "website",
        locale: "en_US",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Silent Disco Rental ${location.location}` }],
      },
    };
  }

  const service = services.find((s) => s.slug === slug);
  if (service) {
    return {
      title: { absolute: service.title },
      description: service.description,
      keywords: service.keywords,
      alternates: {
        canonical: `https://www.silentdiscorentalbali.com/${service.slug}`,
      },
      openGraph: {
        title: service.title,
        description: service.description,
        url: `https://www.silentdiscorentalbali.com/${service.slug}`,
        siteName: "Silent Disco Rental Bali",
        type: "website",
        locale: "en_US",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: service.title }],
      },
    };
  }

  notFound();
}

export default async function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
