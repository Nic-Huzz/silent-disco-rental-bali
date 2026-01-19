"use client";

import { useState, useMemo } from "react";

export default function PriceCalculator() {
  const [headsets, setHeadsets] = useState(50);
  const [channels, setChannels] = useState(1);
  const [support, setSupport] = useState("diy");
  const [location, setLocation] = useState("seminyak");

  const locations = [
    { value: "seminyak", label: "Seminyak" },
    { value: "canggu", label: "Canggu" },
    { value: "uluwatu", label: "Uluwatu" },
    { value: "ubud", label: "Ubud" },
    { value: "sanur", label: "Sanur" },
    { value: "nusa-dua", label: "Nusa Dua" },
    { value: "other", label: "Other" },
  ];

  const supportOptions = [
    { value: "diy", label: "DIY", description: "Equipment + instructions (easy setup)" },
    { value: "event", label: "Event Support", description: "We help set up and troubleshoot" },
    { value: "guided", label: "Guided Experience", description: "Full facilitation included" },
  ];

  const price = useMemo(() => {
    // Base price per headset
    let basePrice = 100000; // IDR

    // Volume discounts
    if (headsets >= 100) basePrice = 85000;
    else if (headsets >= 75) basePrice = 90000;
    else if (headsets >= 50) basePrice = 95000;

    // Channel multiplier
    const channelMultiplier = channels === 3 ? 1.3 : channels === 2 ? 1.15 : 1;

    // Support multiplier
    const supportMultiplier = support === "guided" ? 1.5 : support === "event" ? 1.25 : 1;

    return Math.round(headsets * basePrice * channelMultiplier * supportMultiplier);
  }, [headsets, channels, support]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1400FF] font-semibold mb-2">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rental Price Calculator
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your event. Final pricing may vary based on specific requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Inputs */}
              <div className="space-y-8">
                {/* Headset Count */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Number of Headsets
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="20"
                      max="150"
                      value={headsets}
                      onChange={(e) => setHeadsets(Number(e.target.value))}
                      className="flex-1 h-2 bg-[#FFD6E8] rounded-lg appearance-none cursor-pointer accent-[#1400FF]"
                    />
                    <div className="w-20 text-center">
                      <input
                        type="number"
                        min="20"
                        max="300"
                        value={headsets}
                        onChange={(e) => setHeadsets(Math.min(300, Math.max(20, Number(e.target.value))))}
                        className="w-full text-center text-lg font-bold border border-gray-200 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-[#1400FF]"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    For 20-150 headsets. Larger events? Contact us for custom pricing.
                  </p>
                </div>

                {/* Music Channels */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Music Channels
                  </label>
                  <div className="flex gap-3">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => setChannels(num)}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                          channels === num
                            ? "bg-[#1400FF] text-white shadow-lg"
                            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#1400FF]"
                        }`}
                      >
                        {num} Channel{num > 1 ? "s" : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Support Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Support Level
                  </label>
                  <div className="space-y-3">
                    {supportOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSupport(option.value)}
                        className={`w-full text-left p-4 rounded-xl transition-all ${
                          support === option.value
                            ? "bg-[#1400FF] text-white shadow-lg"
                            : "bg-white border-2 border-gray-200 hover:border-[#1400FF]"
                        }`}
                      >
                        <div className="font-semibold">{option.label}</div>
                        <div className={`text-sm ${support === option.value ? "text-white/80" : "text-gray-500"}`}>
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Delivery Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1400FF] focus:border-transparent bg-white"
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>
                        {loc.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    We deliver all over Bali!
                  </p>
                </div>
              </div>

              {/* Right - Quote */}
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <p className="text-gray-600 mb-2">Estimated Quote</p>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                    {formatPrice(price)} <span className="text-xl font-normal text-gray-500">IDR</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    ~${Math.round(price / 15500)} USD
                  </p>

                  <div className="space-y-3 mb-8 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>{headsets} headsets</span>
                      <span className="text-green-600">Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>{channels} transmitter{channels > 1 ? "s" : ""}</span>
                      <span className="text-green-600">Included</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery to {locations.find(l => l.value === location)?.label}</span>
                      <span className="text-green-600">Included</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/6282266355322?text=Hi! I'm interested in renting ${headsets} headsets with ${channels} channel(s) and ${support} support. Delivery to ${location}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1400FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0f00cc] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Submit Enquiry
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Ready for an amazing audio experience?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
