"use client";

import { useState, useMemo } from "react";
import Script from "next/script";

export default function PriceCalculator() {
  const [headsets, setHeadsets] = useState(100);
  const [channels, setChannels] = useState("one");
  const [support, setSupport] = useState("diy");
  const [location, setLocation] = useState("uluwatu");

  const locations = [
    { value: "seminyak", label: "Seminyak" },
    { value: "canggu", label: "Canggu" },
    { value: "uluwatu", label: "Uluwatu" },
    { value: "ubud", label: "Ubud" },
    { value: "sanur", label: "Sanur" },
    { value: "nusa-dua", label: "Nusa Dua" },
    { value: "kuta", label: "Kuta" },
    { value: "jimbaran", label: "Jimbaran" },
    { value: "other", label: "Other" },
  ];

  const channelOptions = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ];

  const supportOptions = [
    { value: "diy", label: "DIY - Equipment + instructions" },
    { value: "event", label: "Event Support - Setup help included" },
    { value: "guided", label: "Full Service - DJ + facilitation" },
  ];

  const price = useMemo(() => {
    // Base price per headset (in IDR)
    let basePrice = 100000;

    // Volume discounts
    if (headsets >= 100) basePrice = 85000;
    else if (headsets >= 75) basePrice = 90000;
    else if (headsets >= 50) basePrice = 95000;

    // Channel multiplier
    const channelMultiplier = channels === "three" ? 1.3 : channels === "two" ? 1.15 : 1;

    // Support multiplier
    const supportMultiplier = support === "guided" ? 1.5 : support === "event" ? 1.25 : 1;

    // Round to nearest 50000
    const total = headsets * basePrice * channelMultiplier * supportMultiplier;
    return Math.round(total / 50000) * 50000;
  }, [headsets, channels, support]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeadsets(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 20 && value <= 150) {
      setHeadsets(value);
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Rental Price Calculator
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Inputs */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            {/* Number of Headsets */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-semibold text-gray-900">
                  Number of Headsets:
                </label>
                <input
                  type="number"
                  min="20"
                  max="150"
                  value={headsets}
                  onChange={handleInputChange}
                  className="w-20 text-center text-lg font-medium border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] focus:border-transparent"
                />
              </div>
              <input
                type="range"
                min="20"
                max="150"
                value={headsets}
                onChange={handleSliderChange}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #5e17eb 0%, #5e17eb ${((headsets - 20) / 130) * 100}%, #e5e7eb ${((headsets - 20) / 130) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>20</span>
                <span>150</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                For enquiries of less than 20 headsets & more than 150 (our capacity is over 800) we&apos;ll create a custom package for you
              </p>
            </div>

            {/* Music Channels Dropdown */}
            <div>
              <label className="font-semibold text-gray-900 block mb-3">
                How many music channels would you like?
              </label>
              <select
                value={channels}
                onChange={(e) => setChannels(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] focus:border-transparent bg-gray-50 text-gray-900 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '20px'
                }}
              >
                {channelOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Support Level Dropdown */}
            <div>
              <label className="font-semibold text-gray-900 block mb-3">
                What level of support would you like?
              </label>
              <select
                value={support}
                onChange={(e) => setSupport(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] focus:border-transparent bg-gray-50 text-gray-900 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '20px'
                }}
              >
                {supportOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Location Dropdown */}
            <div>
              <label className="font-semibold text-gray-900 block mb-3">
                Delivery Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5e17eb] focus:border-transparent bg-gray-50 text-gray-900 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '20px'
                }}
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-2">
                We deliver all over Bali
              </p>
            </div>
          </div>

          {/* Right - Quote */}
          <div className="flex items-start justify-center order-1 md:order-2">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 w-full max-w-sm sticky top-20">
              <p className="text-gray-600 mb-2 font-medium">Estimated Quote</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                {formatPrice(price)} IDR
              </div>

              <p className="text-gray-600 mb-6">
                Ready For An Amazing Audio Experience?
              </p>

              <a
                href={`https://wa.me/6282266355322?text=Hi! I'm interested in renting ${headsets} headsets with ${channels} channel(s) and ${support} support. Delivery to ${location}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5e17eb] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4a0ea8] transition-colors"
              >
                Submit Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Product/Offer Schema for Rich Snippets */}
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Silent Disco Headset Rental Bali",
            "description": "Premium Hi-Fi wireless silent disco headphones for hire in Bali. Noise-cancelling, 3 LED colour-coded channels, 10-hour battery life. Free delivery across Bali.",
            "brand": {
              "@type": "Brand",
              "name": "Silent Disco Rental Bali",
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "lowPrice": "85000",
              "highPrice": "150000",
              "offerCount": "3",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "unitText": "per headset per event",
              },
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "73",
              "bestRating": "5",
            },
          }),
        }}
      />
    </section>
  );
}
