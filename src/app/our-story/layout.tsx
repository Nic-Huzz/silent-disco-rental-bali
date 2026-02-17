import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Our Story | Silent Disco Rental Bali - Meet Nic Huzz" },
  description: "Meet Nic Huzz, founder of Silent Disco Rental Bali. 100+ events across 5 countries. Bali's most trusted silent disco hire provider. Discover our journey.",
  keywords: [
    "silent disco bali founder",
    "nic huzz bali",
    "silent disco rental bali story",
    "bali event organizer",
    "silent disco entrepreneur",
    "silent disco hire bali about",
    "headset rental bali founder",
    "bali silent disco company",
  ],
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com/our-story",
  },
  openGraph: {
    title: "Our Story | Silent Disco Rental Bali",
    description: "Meet Nic Huzz, founder of Bali's most trusted silent disco rental. 100+ events, 5 countries, one mission: to make people dance.",
    url: "https://www.silentdiscorentalbali.com/our-story",
    siteName: "Silent Disco Rental Bali",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Our Story - Silent Disco Rental Bali" }],
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
