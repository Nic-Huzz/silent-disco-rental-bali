import type { LocationPage as LocationPageData } from "@/data/locations";
import TechSpecs from "@/components/TechSpecs";
import PriceCalculator from "@/components/PriceCalculator";
import DirectAnswer from "@/components/seo/DirectAnswer";

export default function LocationPage({ data }: { data: LocationPageData }) {
  const whatsappUrl = `https://wa.me/6282266355322?text=${encodeURIComponent(data.whatsappMessage)}`;

  const faqItems = [
    {
      question: `Do you deliver silent disco headsets to ${data.location}?`,
      answer: `Yes! We offer free delivery to all venues in ${data.location}, Bali. Just send us your venue details via WhatsApp and we'll arrange delivery and collection.`,
    },
    {
      question: `How many headsets can I rent for an event in ${data.location}?`,
      answer: `We stock over 300 premium wireless headsets. Whether you need 20 for an intimate gathering or 300+ for a large event in ${data.location}, we've got you covered.`,
    },
    {
      question: `What's included in the silent disco rental in ${data.location}?`,
      answer: `Every rental includes wireless headsets, transmitters (up to 3 music channels), free delivery and setup at your ${data.location} venue, and next-day collection. Battery life is 10 hours per headset.`,
    },
    {
      question: `How much does it cost to hire silent disco headsets in ${data.location}?`,
      answer: `Pricing starts from IDR 100,000 per headset with volume discounts for larger orders. Use our pricing calculator below for an instant quote. Delivery to ${data.location} is always free.`,
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.silentdiscorentalbali.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Silent Disco ${data.location}`,
        item: `https://www.silentdiscorentalbali.com/${data.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Silent Disco Rental ${data.location}`,
    description: data.description,
    url: `https://www.silentdiscorentalbali.com/${data.slug}`,
    telephone: "+6282266355322",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.location,
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    areaServed: {
      "@type": "Place",
      name: `${data.location}, Bali`,
    },
    priceRange: "$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#5e17eb] font-semibold mb-3">Free Delivery Across {data.location}</p>
              <h1 className="speakable-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {data.h1}
              </h1>
              <p className="speakable-intro text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                {data.heroSubtitle}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#5e17eb] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4a0ea8] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get a Quote for {data.location}
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {data.intro}
            </p>
          </div>
        </section>

        {/* Direct Answer */}
        <DirectAnswer question={data.directAnswer.question} answer={data.directAnswer.answer} />

        {/* Popular Venues */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#5e17eb] font-semibold mb-2">We Deliver Here</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Popular Venues in {data.location}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {data.popularVenues.map((venue) => (
                <div
                  key={venue}
                  className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5e17eb]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#5e17eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-900 text-sm md:text-base">{venue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Specs */}
        <TechSpecs />

        {/* Price Calculator */}
        <PriceCalculator />

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb]/5 to-[#5e17eb]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#5e17eb] font-semibold mb-2">Got Questions?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                FAQ — {data.location}
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden group shadow-lg"
                >
                  <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-gray-900 hover:text-[#5e17eb] transition-colors">
                    {item.question}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#ffdd27] font-semibold mb-2">Ready to Get Started?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Party in {data.location}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Send us a WhatsApp message and we&apos;ll get back to you with a custom quote for your {data.location} event.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#5e17eb] px-8 py-4 rounded-full font-semibold hover:bg-[#ffdd27] transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send WhatsApp Message
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
