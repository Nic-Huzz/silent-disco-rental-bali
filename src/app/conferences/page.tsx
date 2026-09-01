"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConferencesPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const caseStudies = [
    {
      company: "Amazon Web Services (AWS)",
      location: "Jakarta",
      headsets: 280,
      exhibits: 4,
      video: "/Conference Videos/aws-conference.mp4",
      videoType: "video/mp4",
      description: "Multi-track conference with simultaneous presentations across exhibition hall",
    },
    {
      company: "EPSON",
      location: "Bali",
      headsets: 100,
      exhibits: 3,
      video: "/Conference Videos/epson-conference.mp4",
      videoType: "video/mp4",
      description: "Product launch event with dedicated audio channels per demo station",
    },
    {
      company: "IBM",
      location: "Jakarta",
      headsets: 120,
      exhibits: 2,
      video: "/Conference Videos/ibm-conference.mp4",
      videoType: "video/mp4",
      description: "Corporate conference with multilingual simultaneous translation",
    },
    {
      company: "Salesforce",
      location: "Jakarta",
      headsets: 150,
      exhibits: 3,
      video: "/Conference Videos/salesforce-conference.mp4",
      videoType: "video/mp4",
      description: "Tech summit with multi-track keynotes and breakout sessions",
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Multiple Speakers",
      description: "Run multiple presentations simultaneously in the same room without sound bleed",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Multi-Language",
      description: "Simultaneous translation channels - attendees choose their preferred language",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "No Noise Restrictions",
      description: "Host events in any venue without worrying about sound limits or complaints",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Crystal Clear Audio",
      description: "Hi-Fi sound quality ensures every word is heard clearly by all attendees",
    },
  ];

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingVideo === index) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
      }
      video.play();
      setPlayingVideo(index);
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conference Headset Rental Bali",
    description: "Professional multi-channel wireless headset rental for corporate conferences, exhibitions, and simultaneous translation in Bali. Trusted by AWS, IBM, EPSON, and Salesforce.",
    provider: {
      "@type": "LocalBusiness",
      name: "Silent Disco Rental Bali",
      "@id": "https://www.silentdiscorentalbali.com",
    },
    areaServed: [
      { "@type": "Place", name: "Bali, Indonesia" },
      { "@type": "Place", name: "Jakarta, Indonesia" },
    ],
    url: "https://www.silentdiscorentalbali.com/conferences",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.silentdiscorentalbali.com" },
      { "@type": "ListItem", position: 2, name: "Conferences", item: "https://www.silentdiscorentalbali.com/conferences" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#5e17eb] font-semibold mb-3">Trusted by AWS, IBM & Salesforce</p>
              <h1 className="speakable-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Conference Headset Rental Bali & Jakarta
              </h1>
              <p className="speakable-intro text-xl md:text-2xl text-gray-600 leading-relaxed">
                Multi-track conferences, simultaneous translation, exhibitions. We&apos;ve delivered 800+ headsets to Indonesia&apos;s biggest international brands.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#5e17eb] font-semibold mb-2">Why Silent Disco?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Silent Disco Headphones for Conferences?
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-[#5e17eb] mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We've Supported */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#ffdd27] font-semibold mb-2">Trusted By Industry Leaders in Jakarta & Bali</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who we&apos;ve supported
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {/* AWS */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <Image
                  src="/Conference Videos/aws-logo.png"
                  alt="AWS logo - conference headset rental client in Jakarta"
                  width={120}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              {/* EPSON */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <Image
                  src="/Conference Videos/epson-logo.png"
                  alt="EPSON logo - conference headset hire client in Bali"
                  width={120}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              {/* IBM */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <Image
                  src="/Conference Videos/ibm-logo.png"
                  alt="IBM logo - conference headset rental client in Jakarta"
                  width={120}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              {/* Salesforce */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <Image
                  src="/Conference Videos/salesforce-logo.svg"
                  alt="Salesforce logo - conference headset rental client in Jakarta"
                  width={160}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Video */}
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div
                      className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-900 cursor-pointer group"
                      onClick={() => handleVideoClick(index)}
                    >
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster=""
                      >
                        <source src={study.video} type={study.videoType} />
                      </video>
                      {/* Play button overlay */}
                      {playingVideo !== index && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#5e17eb] ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {/* Label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                          {study.company.split(" ")[0]} Conference
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#5e17eb] mb-2">
                      {study.company}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{study.location}, Indonesia</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-lg text-gray-700">
                        <span className="font-semibold">{study.headsets}</span> Headsets
                      </p>
                      <p className="text-lg text-gray-700">
                        <span className="font-semibold">{study.exhibits}</span> Exhibits
                      </p>
                    </div>
                    <p className="text-gray-600">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#ffdd27] font-semibold mb-2">Ready to Get Started?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a quote
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Planning a conference or corporate event? Let us help you deliver crystal-clear audio to every attendee.
            </p>
            <a
              href="https://wa.me/6282266355322?text=Hi! I'm interested in silent disco headsets for a conference."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#5e17eb] px-8 py-4 rounded-full font-semibold hover:bg-[#ffdd27] transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send WhatsApp Message
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
