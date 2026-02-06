import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Silent Disco Rental Bali | Your Questions Answered",
  description:
    "Frequently asked questions about silent disco headset rental in Bali. Pricing, delivery, how it works, event types, technical specs, and more. 300+ headsets, free delivery island-wide.",
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
