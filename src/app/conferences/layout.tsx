import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Headset Rental Bali | Silent Disco Corporate Events",
  description: "Conference headset rental & hire in Bali. Multi-channel wireless headsets for translation, exhibitions & speakers. Trusted by AWS, IBM & EPSON. Get a quote!",
  keywords: [
    "conference headsets bali",
    "conference headset rental bali",
    "conference headset hire bali",
    "corporate event audio bali",
    "simultaneous translation bali",
    "exhibition headphones bali",
    "conference equipment rental bali",
    "wireless headsets conference bali",
    "multi-language conference bali",
    "corporate retreat audio bali",
    "silent conference bali",
    "event technology bali",
    "silent disco corporate events bali",
    "conference audio hire bali",
    "wireless translation headsets bali",
  ],
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com/conferences",
  },
  openGraph: {
    title: "Conference Headset Rental & Hire Bali | Corporate Event Audio",
    description: "Professional wireless headset rental for conferences in Bali. Multi-track audio, simultaneous translation. Trusted by AWS, IBM & EPSON.",
    url: "https://www.silentdiscorentalbali.com/conferences",
  },
};

export default function ConferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
