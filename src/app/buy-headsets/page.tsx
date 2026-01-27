import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BuyHeadsetsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-[#5e17eb]/5 to-white min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="order-2 md:order-1">
                <p className="text-[#5e17eb] font-semibold mb-3">Start Your Own Silent Disco Business</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Buy Silent Disco Headsets
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Looking to purchase your own silent disco headsets? Whether you&apos;re starting a rental business or hosting regular events, we&apos;ve got you covered.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Custom branding available - add your logo to every headset.
                </p>
                <a
                  href="https://buysilentdiscoheadsets.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#5e17eb] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a0ea8] transition-colors text-lg"
                >
                  Shop Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="order-1 md:order-2">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <Image
                    src="/images/New-headset.jpg"
                    alt="Silent Disco Headset with custom logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#5e17eb] font-semibold mb-2">Why Buy From Us?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Premium Silent Disco Equipment
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#5e17eb]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#5e17eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Custom Branding</h3>
                <p className="text-gray-600 text-sm">Add your logo to create a unique branded experience</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#5e17eb]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#5e17eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Hi-Fi audio with 8+ hour battery life</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#5e17eb]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#5e17eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Bulk Orders</h3>
                <p className="text-gray-600 text-sm">Discounts available for larger quantities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#ffdd27] font-semibold mb-2">Get Started Today</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to start your silent disco journey?
            </h2>
            <a
              href="https://buysilentdiscoheadsets.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#5e17eb] px-8 py-4 rounded-full font-semibold hover:bg-[#ffdd27] transition-colors"
            >
              Visit Our Store
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
