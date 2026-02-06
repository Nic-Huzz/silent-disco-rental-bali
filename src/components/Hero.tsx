import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background - Purple Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #4a0ea8 0%, #5e17eb 50%, #7c3aed 100%)'
        }}
      >
        {/* Gold accent glow */}
        <div
          className="absolute top-[-30%] right-[-10%] w-[60%] h-[80%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 221, 39, 0.15) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Mobile Hero Image - positioned at top, extending under header */}
      <div className="lg:hidden absolute top-16 left-0 right-0 z-[5]">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden">
          <Image
            src="/images/hero-headphones.jpg"
            alt="Silent disco rental Bali - premium wireless headphones for hire at sunset beach party"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5e17eb] via-[#5e17eb]/30 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(75vw+5rem)] sm:pt-[calc(62.5vw+5rem)] md:pt-24 lg:pt-0 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-white">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              Bali&apos;s #1 Silent Disco Provider
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Silent Disco Headphones:
              <br />
              Create
              {" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffdd27, #f59e0b)'
                }}
              >
                Amazing
              </span>
              <br />
              Audio Experiences
            </h1>

            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-lg">
              <p>
                We are Bali&apos;s largest, best quality and most affordable silent disco rental provider.
              </p>
              <p className="hidden md:block">
                Our headsets are noise-cancelling and have hi-fi sound quality.
              </p>
              <p className="font-medium">
                Perfect for parties, conferences and retreat experiences.
              </p>
            </div>

            {/* Buttons - Pill shaped */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/6282266355322"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #ffdd27, #f59e0b)',
                  color: '#000',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)'
                }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white/15 hover:border-white/30 transition-all text-base md:text-lg active:scale-[0.98]"
              >
                View Pricing
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-10 text-sm md:text-base text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#ffdd27]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Delivery all over Bali</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#ffdd27]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Event Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#ffdd27]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>70+ 5-Star Reviews</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Image (Desktop only) */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              <Image
                src="/images/hero-headphones.jpg"
                alt="Silent disco rental Bali - premium wireless headphones for hire at sunset beach party"
                fill
                className="object-cover rounded-2xl"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                priority
              />
              {/* Floating Badge */}
              <div
                className="absolute left-2 lg:-left-6 top-1/4 rounded-xl p-4 animate-float"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #ffdd27, #f59e0b)'
                    }}
                  >
                    5.0
                  </div>
                  <div className="flex text-[#ffdd27]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/60 mt-1">73+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
