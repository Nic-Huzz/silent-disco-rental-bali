"use client";

import { useState } from "react";
import Script from "next/script";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How many headsets do I need for my event?",
      answer: "We recommend 1 headset per person. For events where guests come and go, you can estimate about 70-80% of your total expected attendance. We're happy to help you figure out the right number for your specific event.",
    },
    {
      question: "What's included in the rental?",
      answer: "Every rental includes: wireless headsets (with adjustable LED colors per channel), transmitter(s), aux cables, and delivery/pickup anywhere in Bali. Setup instructions are provided, and we offer support via WhatsApp throughout your event.",
    },
    {
      question: "How many music channels can I have?",
      answer: "You can have up to 3 simultaneous music channels. Each channel displays a different LED color on the headsets, so you can see who's listening to what. Perfect for DJ battles, multilingual events, or giving guests musical variety!",
    },
    {
      question: "Do you deliver to my location?",
      answer: "Yes! We deliver all over Bali including Seminyak, Canggu, Uluwatu, Ubud, Sanur, Nusa Dua, and everywhere in between. Delivery is included in most packages.",
    },
    {
      question: "How long is the rental period?",
      answer: "Standard rental is for one event/day. We deliver before your event and pick up the next morning. Multi-day rentals are available at discounted rates - just ask!",
    },
    {
      question: "What if a headset breaks or doesn't work?",
      answer: "We thoroughly test all equipment before each rental. In the rare case of an issue, we have backup units and provide WhatsApp support during your event. We don't charge for normal wear and tear.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 1-2 weeks in advance, especially during peak season (June-September and December-January). Last-minute bookings are sometimes possible - just reach out!",
    },
    {
      question: "Can you help with DJs or music curation?",
      answer: "Yes! We offer guided experiences with professional facilitators, or can recommend trusted DJ partners. Just let us know what you're looking for.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#5e17eb] font-semibold mb-2">Got Questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Silent Disco Rental Bali — FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#5e17eb] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/6282266355322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5e17eb] font-semibold hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </div>

      {/* FAQ Schema for Rich Snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
