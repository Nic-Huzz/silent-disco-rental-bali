import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Silent Disco for Retreats Bali | Vibe Rise Dance Journey" },
  description: "Silent disco rental for retreats in Bali. Guided meditation, breathwork & dance journeys. Perfect for wellness, yoga & corporate retreats. Book Nic Huzz!",
  keywords: [
    "silent disco retreat bali",
    "silent disco hire retreat bali",
    "silent disco rental retreat bali",
    "wellness retreat bali",
    "yoga retreat bali",
    "vibe rise dance journey",
    "retreat activities bali",
    "breathwork bali",
    "guided meditation bali",
    "retreat entertainment bali",
    "corporate retreat bali",
    "healing retreat bali",
    "ecstatic dance bali",
    "silent disco yoga bali",
    "retreat headset rental bali",
  ],
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com/retreats",
  },
  openGraph: {
    title: "Silent Disco Hire for Retreats Bali | Vibe Rise Dance Journey",
    description: "Transform your Bali retreat with silent disco. Guided meditation, breathwork & dance journey. Trusted by top retreat hosts. Book now!",
    url: "https://www.silentdiscorentalbali.com/retreats",
    siteName: "Silent Disco Rental Bali",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Silent Disco for Retreats Bali" }],
  },
};

export default function RetreatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
