import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Silent Disco Rental Bali",
  description: "Tips, guides, and inspiration for planning silent disco events in Bali. Venue recommendations, pricing info, and expert advice.",
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com/blog",
  },
  openGraph: {
    title: "Blog | Silent Disco Rental Bali",
    description: "Tips, guides, and inspiration for planning silent disco events in Bali.",
    url: "https://www.silentdiscorentalbali.com/blog",
    siteName: "Silent Disco Rental Bali",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Silent Disco Rental Bali Blog" }],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
