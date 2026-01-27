export default function SocialImpact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#5e17eb] font-semibold mb-2">Giving Back</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Social Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in using the power of music and community to make a positive difference in Bali
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bali Street Kids */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#5e17eb]/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Bali Street Kids Orphanage</h3>
            </div>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-2">
                <span className="text-2xl sm:text-4xl font-bold text-[#5e17eb]">20,000,000+</span>
                <span className="text-gray-600 text-sm sm:text-base">IDR raised in 2025</span>
              </div>
              <p className="text-gray-600">
                Through our Sunset Silent Disco events at Dreamland Beach, we&apos;ve been proud to support
                Bali Street Kids orphanage, providing resources and opportunities for children in need.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5e17eb] font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Sunset Silent Disco @ Dreamland Beach
            </div>
          </div>

          {/* Rubbish Rave */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#5e17eb]/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Rubbish Rave</h3>
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-[#5e17eb]/10 text-[#5e17eb] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Monthly Sponsor
              </div>
              <p className="text-gray-600">
                We&apos;re proud monthly sponsors of Rubbish Rave, a beach clean-up community based in Canggu
                that combines environmental action with good vibes, keeping Bali&apos;s beaches beautiful.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5e17eb] font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Beach Clean-ups @ Canggu
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            When you rent from us, you&apos;re supporting a business that gives back to the local community
            and environment. Thank you for being part of the positive change.
          </p>
        </div>
      </div>
    </section>
  );
}
