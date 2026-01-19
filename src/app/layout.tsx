import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silent Disco Rental Bali | Premium Headset Rental for Events",
  description: "Bali's largest, best quality and most affordable silent disco rental provider. Perfect for parties, conferences, retreats and wellness experiences. Noise-cancelling headsets with Hi-Fi sound quality.",
  keywords: "silent disco bali, headset rental bali, silent party bali, wireless headphones rental, event equipment bali, conference audio bali, retreat experiences bali",
  openGraph: {
    title: "Silent Disco Rental Bali | Premium Headset Rental",
    description: "Bali's #1 silent disco provider. 50+ events, 2000+ happy groovers, 5-star reviews. Book now for your next event!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silent Disco Rental Bali",
    description: "Premium silent disco equipment for events in Bali",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
