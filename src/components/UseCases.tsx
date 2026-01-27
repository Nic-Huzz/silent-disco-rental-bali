import Image from "next/image";

export default function UseCases() {
  const useCases = [
    {
      title: "Running a Retreat?",
      subtitle: "Guided Wellness Experiences",
      description: "Wireless headsets add a unique dimension to your retreat sessions. They allow you to take your participants deeper with the ability to block out all other noise, leaving only the music and your voice — whether it's for breathwork, meditations, or any guided experiences.",
      features: [
        "Perfect for guided experiences",
        "Morning ecstatic dance without noise complaints",
        "Deeper healing sessions",
      ],
      image: "/images/why-section/why-breathwork.jpg",
      cta: "Explore Retreat Packages",
    },
    {
      title: "Organising a Conference?",
      subtitle: "Professional Audio Solutions",
      description: "Deliver crystal-clear audio to hundreds of attendees. Multiple channels allow simultaneous translations or breakout sessions.",
      features: [
        "Multi-language simultaneous translation",
        "Multiple presentation tracks",
        "No venue noise restrictions",
        "Used by AWS, IBM, Epson & more",
      ],
      image: "/images/founder-icon-3 copy.jpg",
      cta: "Explore Conference Solutions",
    },
  ];

  const eventTypes = [
    { name: "Beach Club Parties", image: "/images/testimonials/testimonial-4.jpg" },
    { name: "Corporate Events", image: "/images/founder-icon-3 copy.jpg" },
    { name: "Wellness Retreats", image: "/images/founder-icon-2.jpg" },
    { name: "Private Parties", image: "/images/DSC08712-15 copy.jpg" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event Types Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-[#5e17eb] font-semibold mb-2">Versatile Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From Beach Parties to Conferences
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventTypes.map((event, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold">{event.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5e17eb]/10 to-[#5e17eb]/5 rounded-3xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-[#5e17eb] font-semibold text-sm mb-1">{useCase.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>

                <ul className="space-y-3 mb-8">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-[#5e17eb] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6282266355322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5e17eb] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a0ea8] transition-colors"
                >
                  {useCase.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
