import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Timo Matuschke",
      text: "Just Love IT!",
      rating: 5,
      verified: true,
    },
    {
      name: "Gabrielle",
      text: "Besttt silent discos with amazing sound quality",
      rating: 5,
      verified: true,
    },
    {
      name: "Jill Marshall",
      text: "Super sound quality headsets, one of my best nights in Bali, and the dancing continues...",
      rating: 5,
      verified: true,
    },
    {
      name: "Tara Cooper",
      text: "SO MUCH FUN! Nic and Syd always create such a lovely and inclusive space for you to express yourself.",
      rating: 5,
      verified: true,
    },
    {
      name: "Iris Ixcy Eldridge",
      text: "I want to express my heartfelt thanks to Bali Silent Headphones Uluwatu for their incredible service...",
      rating: 5,
      verified: true,
    },
    {
      name: "BONOBO Lifestyle",
      text: "I had the BEST EXPERIENCE!!! This was soooo much fun and I can't wait for the next dance!!!",
      rating: 5,
      verified: true,
    },
  ];

  const galleryImages = [
    "/images/testimonials/testimonial-1.jpg",
    "/images/testimonials/testimonial-2.jpg",
    "/images/testimonials/testimonial-4.jpg",
    "/images/testimonials/testimonial-5.jpg",
    "/images/why-section/why-guided.jpg",
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#1400FF] font-semibold mb-2">Social Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Testimonials From Real People
          </h2>
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg inline-flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Google</span>
              <span className="text-gray-500">Reviews</span>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">5.0</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">(73 reviews)</p>
            </div>
            <a
              href="https://g.page/r/silentdiscorentalbali/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1400FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0f00cc] transition-colors"
            >
              Review us on Google
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FFD6E8] rounded-full flex items-center justify-center">
                  <span className="text-[#1400FF] font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900 flex items-center gap-1">
                    {testimonial.name}
                    {testimonial.verified && (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src={image}
                alt={`Silent disco event ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#1400FF]/0 group-hover:bg-[#1400FF]/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
