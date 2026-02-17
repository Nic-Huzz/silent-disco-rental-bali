import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "FAQ — Silent Disco Rental Bali | Your Questions Answered" },
  description:
    "FAQs about silent disco headset rental in Bali. Pricing, delivery, how it works, event types & specs. 300+ headsets, free delivery island-wide.",
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com/faq",
  },
  openGraph: {
    title: "FAQ — Silent Disco Rental Bali | Your Questions Answered",
    description: "FAQs about silent disco headset rental in Bali. Pricing, delivery, how it works, event types & specs.",
    url: "https://www.silentdiscorentalbali.com/faq",
    siteName: "Silent Disco Rental Bali",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Silent Disco Rental Bali FAQ" }],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
