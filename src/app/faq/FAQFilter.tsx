"use client";

import { useState } from "react";
import { faqData, faqCategories, type FAQItem } from "@/data/faq-data";

export default function FAQFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered: FAQItem[] =
    activeCategory === "all"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {faqCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
              activeCategory === cat.key
                ? "bg-[#5e17eb] text-white"
                : "bg-white text-gray-700 hover:bg-[#5e17eb]/10 hover:text-[#5e17eb] shadow-sm"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filtered.map((item, index) => (
          <details
            key={`${activeCategory}-${index}`}
            className="bg-white rounded-2xl overflow-hidden group shadow-lg"
          >
            <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-medium text-gray-900 hover:text-[#5e17eb] transition-colors">
              {item.question}
              <svg
                className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
