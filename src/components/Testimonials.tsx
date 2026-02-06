import Image from "next/image";
import Script from "next/script";

export default function Testimonials() {
  const testimonials = [
    {
      name: "jesse jaco",
      text: "Always an incredible experience grooving with Huzz and the Silent Disco Headset team.",
      rating: 5,
      verified: true,
      timeAgo: "1 year ago",
      avatar: "/images/testimonials/avatar-1.jpg",
      hasMore: true,
    },
    {
      name: "Tim Milton-Hine",
      text: "Absolutely sensational experience ! Can't recommend this enough. Super high quality..",
      rating: 5,
      verified: true,
      timeAgo: "1 year ago",
      avatar: "/images/testimonials/avatar-2.jpg",
      hasMore: true,
    },
    {
      name: "Isabelle Tambascio",
      text: "Absolutely loved it, had a great journey and an epic time. 10/10 would do it again!",
      rating: 5,
      verified: true,
      timeAgo: "10 months ago",
      avatar: "/images/testimonials/avatar-3.jpg",
      hasMore: false,
    },
    {
      name: "Alysha Johnson",
      text: "These silent disco headsets are amazing! The sound quality is super clear and crisp. Makes for..",
      rating: 5,
      verified: true,
      timeAgo: "1 year ago",
      avatar: "/images/testimonials/avatar-4.jpg",
      hasMore: true,
    },
    {
      name: "ZAPHERIA BELL",
      text: "I really wanted to keep Huzz a secret, since his silent disco headphones were such a big...",
      rating: 5,
      verified: true,
      timeAgo: "1 year ago",
      avatar: "/images/testimonials/avatar-5.jpg",
      hasMore: true,
    },
    {
      name: "DELUSION",
      text: "Incredible vibe, bit intimidating at first but once you start dancing you just can't stop!...",
      rating: 5,
      verified: true,
      timeAgo: "1 year ago",
      avatar: "/images/testimonials/avatar-6.jpg",
      hasMore: true,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real Testimonials From Real People
          </h2>
        </div>

        {/* Google Reviews Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {/* Google Logo */}
                <span className="text-2xl font-medium">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-gray-500 ml-2 text-lg">Reviews</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-bold text-gray-900">5.0</span>
                <div className="flex text-[#FBBC05]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 text-sm md:text-base">(73)</span>
              </div>
              <a
                href="https://g.page/r/CYfPVc-tgv0QEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4285F4] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-[#3367D6] transition-colors"
              >
                Review us on Google
              </a>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                {/* Stars */}
                <div className="flex justify-center text-[#FBBC05] mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Read More */}
                {testimonial.hasMore && (
                  <button className="text-gray-500 text-sm hover:text-gray-700 mb-4">
                    Read more
                  </button>
                )}

                {/* Avatar and Name */}
                <div className="flex flex-col items-center mt-4">
                  <div className="relative w-10 h-10 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    {/* Google G badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold text-[#4285F4]">G</span>
                    </div>
                  </div>
                  <p className="font-medium text-sm text-gray-900 flex items-center gap-1">
                    {testimonial.name}
                    {testimonial.verified && (
                      <svg className="w-4 h-4 text-[#4285F4]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Schema for Rich Snippets */}
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Silent Disco Rental Bali",
            "@id": "https://www.silentdiscorentalbali.com",
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": 5,
              },
              "author": {
                "@type": "Person",
                "name": t.name,
              },
              "reviewBody": t.text,
            })),
          }),
        }}
      />
    </section>
  );
}
