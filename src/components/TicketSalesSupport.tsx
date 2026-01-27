export default function TicketSalesSupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#ffdd27] font-semibold mb-2">More Than Just Rentals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We&apos;ll Help You Sell Tickets
            </h2>
            <p className="text-white/90 text-lg mb-6">
              More than equipment — we&apos;re your event support team. After 100+ events, we&apos;ve learned what sells and what doesn&apos;t. We&apos;ll share our playbook so you can fill your event.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white">
                  <strong className="text-[#ffdd27]">3+ years</strong> of event marketing insights in Bali
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white">
                  Proven <strong className="text-[#ffdd27]">pricing & timing strategies</strong> that fill events
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white">
                  Lessons from <strong className="text-[#ffdd27]">100+ successful events</strong>
                </span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffdd27] rounded-full mb-4">
                  <svg className="w-8 h-8 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Partner With Us</h3>
                <p className="text-white/80 mb-6">
                  Let us help make your silent disco event a sellout success
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#ffdd27] text-[#5e17eb] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors"
                >
                  Discuss Your Event
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
