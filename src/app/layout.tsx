import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.silentdiscorentalbali.com'),
  title: {
    default: "Silent Disco Rental Bali | #1 Headset Hire for Events & Parties",
    template: "%s | Silent Disco Rental Bali",
  },
  description: "Bali's #1 silent disco rental & hire. 300+ premium headsets from IDR 100k. Weddings, parties, retreats & conferences. Free delivery island-wide. Book now!",
  keywords: [
    "silent disco rental bali",
    "silent disco hire bali",
    "silent disco bali",
    "headset rental bali",
    "silent disco headphones bali",
    "silent disco equipment rental bali",
    "silent party bali",
    "wireless headphones rental bali",
    "silent disco wedding bali",
    "silent disco party bali",
    "conference headsets bali",
    "retreat audio equipment bali",
    "silent yoga bali",
    "silent disco canggu",
    "silent disco ubud",
    "silent disco seminyak",
    "silent disco uluwatu",
    "silent disco nusa dua",
    "event equipment rental bali",
    "headphone party bali",
    "silent disco beach party bali",
    "silent disco for events bali",
    "rent silent disco headphones bali",
    "3 channel headphones bali",
    "silent disco jakarta",
    "silent disco rental jakarta",
    "conference headsets jakarta",
    "headset rental jakarta",
    "silent disco rental indonesia",
    "silent disco indonesia",
  ],
  authors: [{ name: "Silent Disco Rental Bali" }],
  creator: "Silent Disco Rental Bali",
  publisher: "Silent Disco Rental Bali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Silent Disco Rental Bali | #1 Headset Hire for Events & Parties",
    description: "Bali's #1 silent disco rental & hire service. 300+ premium wireless headsets, best prices, 5-star rated. Weddings, parties, retreats & conferences. Book now!",
    url: "https://www.silentdiscorentalbali.com",
    siteName: "Silent Disco Rental Bali",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silent Disco Rental Bali - Premium Headsets for Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silent Disco Rental & Hire Bali | #1 Headset Provider",
    description: "Bali's #1 silent disco rental & hire. 300+ premium headsets, best prices, 73 five-star Google reviews. Book now!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.silentdiscorentalbali.com",
  },
  verification: {
    google: "google60a5e3f70ef3221b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* LLMs.txt discovery */}
        <link rel="llms-txt" href="https://www.silentdiscorentalbali.com/llms.txt" />
        {/* Preconnect hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Silent Disco Rental Bali",
              "alternateName": ["Silent Disco Hire Bali", "Headset Rental Bali"],
              "url": "https://www.silentdiscorentalbali.com",
              "logo": "https://www.silentdiscorentalbali.com/images/hero-headphones.jpg",
              "description": "Bali's largest and most trusted silent disco rental and hire service. Premium wireless headsets for weddings, parties, retreats, yoga, and conferences.",
              "founder": {
                "@type": "Person",
                "name": "Nic Huzz",
                "jobTitle": "Founder"
              },
              "foundingDate": "2023",
              "foundingLocation": {
                "@type": "Place",
                "name": "Bali, Indonesia"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+6282266355322",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/silentdiscorentalbali",
                "https://www.instagram.com/nichuzz"
              ]
            }),
          }}
        />
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Silent Disco Rental Bali",
              "alternateName": ["Silent Disco Hire Bali", "Headset Rental Bali", "Silent Disco Equipment Rental Bali"],
              "image": "https://www.silentdiscorentalbali.com/images/hero-headphones.jpg",
              "description": "Bali's largest and most trusted silent disco rental and hire provider. Premium Hi-Fi wireless headsets and headphones for weddings, parties, retreats, yoga, and conferences. Free delivery across Bali.",
              "@id": "https://www.silentdiscorentalbali.com",
              "url": "https://www.silentdiscorentalbali.com",
              "telephone": "+6282266355322",
              "email": "contact@headsetrentalbali.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bali",
                "addressRegion": "Bali",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -8.4095,
                "longitude": 115.1889
              },
              "areaServed": [
                { "@type": "Place", "name": "Bali, Indonesia" },
                { "@type": "Place", "name": "Canggu, Bali" },
                { "@type": "Place", "name": "Seminyak, Bali" },
                { "@type": "Place", "name": "Ubud, Bali" },
                { "@type": "Place", "name": "Uluwatu, Bali" },
                { "@type": "Place", "name": "Sanur, Bali" },
                { "@type": "Place", "name": "Kuta, Bali" },
                { "@type": "Place", "name": "Nusa Dua, Bali" },
                { "@type": "Place", "name": "Jimbaran, Bali" },
                { "@type": "Place", "name": "Jakarta, Indonesia" }
              ],
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "22:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "73",
                "ratingCount": "73"
              },
              "sameAs": [
                "https://www.instagram.com/silentdiscorentalbali",
                "https://www.instagram.com/nichuzz"
              ]
            }),
          }}
        />
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Silent Disco Rental Bali",
              "serviceType": "Silent Disco Equipment Rental & Hire",
              "description": "Premium silent disco headset rental and hire in Bali. Hi-Fi wireless headphones with 3 LED colour-coded channels, noise-cancelling, 10-hour battery. Free delivery across Bali.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Silent Disco Rental Bali",
                "@id": "https://www.silentdiscorentalbali.com"
              },
              "areaServed": [
                { "@type": "Place", "name": "Bali, Indonesia" },
                { "@type": "Place", "name": "Jakarta, Indonesia" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Silent Disco Rental & Hire Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Silent Disco Party Rental Bali",
                      "description": "Wireless headphone hire for beach parties, weddings, and private events in Bali"
                    },
                    "priceCurrency": "IDR",
                    "price": "100000",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "100000",
                      "priceCurrency": "IDR",
                      "unitText": "per headset"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conference Headset Rental Bali",
                      "description": "Multi-channel wireless headsets for conferences, exhibitions, and simultaneous translation in Bali"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Silent Disco Retreat Experience Bali",
                      "description": "Guided silent disco experiences for wellness retreats, yoga retreats, and corporate retreats in Bali"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Silent Disco Wedding Hire Bali",
                      "description": "Silent disco headset hire for weddings and wedding after-parties in Bali"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Google Analytics — loaded after interactive to reduce render-blocking */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TLELHGSR50" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TLELHGSR50');
          `}
        </Script>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
