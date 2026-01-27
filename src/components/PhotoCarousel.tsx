"use client";

import { useRef } from "react";
import Image from "next/image";

export default function PhotoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const photos = [
    { src: "/Photo Carousel/carousel-10.jpg", alt: "Silent disco Bali event" },
    { src: "/Photo Carousel/carousel-1.jpg", alt: "Silent disco event", position: "25%" },
    { src: "/Photo Carousel/carousel-2.jpg", alt: "Silent disco party", position: "bottom" },
    { src: "/Photo Carousel/carousel-3.jpg", alt: "Silent disco crowd", position: "25%" },
    { src: "/Photo Carousel/carousel-4.jpg", alt: "Silent disco experience" },
    { src: "/Photo Carousel/carousel-5.jpg", alt: "Silent disco fun" },
    { src: "/Photo Carousel/carousel-6.jpg", alt: "Silent disco dance" },
    { src: "/Photo Carousel/carousel-7.jpg", alt: "Silent disco vibes" },
    { src: "/Photo Carousel/carousel-8.jpg", alt: "Silent disco Bali", position: "top" },
    { src: "/Photo Carousel/carousel-9.jpg", alt: "Silent disco event Bali" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#5e17eb] font-semibold mb-2">Our Events</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Silent Disco Moments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real photos from our events across Bali
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center first:ml-4 last:mr-4 md:first:ml-8 md:last:mr-8"
            >
              <div className="relative w-72 md:w-80 lg:w-96 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    photo.position === "top" ? "object-top" :
                    photo.position === "bottom" ? "object-bottom" :
                    photo.position === "25%" ? "object-[center_25%]" : ""
                  }`}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-[#5e17eb]/30"
          />
        ))}
      </div>
    </section>
  );
}
