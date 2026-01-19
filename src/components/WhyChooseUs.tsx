import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Premium Quality",
      description: "Best in market headsets: Noise-cancelling + Hi-Fi sound quality for an immersive experience.",
      image: "/images/equipment-headset.jpg",
    },
    {
      title: "Best Prices",
      description: "Competitive rates without sacrificing quality. Transparent pricing with no hidden fees.",
      image: "/images/testimonials/testimonial-2.jpg",
    },
    {
      title: "Experience",
      description: "Most experienced provider in Bali with custom packages to meet your specific needs.",
      image: "/images/why-section/why-dance.jpg",
    },
    {
      title: "Trusted Partner",
      description: "Used by Bali's biggest event organisers including Sunday's Beach Club, Echo events, AWS & IBM.",
      image: "/images/testimonials/testimonial-3.jpg",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1400FF] font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Silent Disco Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don&apos;t just rent equipment — we create unforgettable audio experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-[#FFD6E8]/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#1400FF] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
