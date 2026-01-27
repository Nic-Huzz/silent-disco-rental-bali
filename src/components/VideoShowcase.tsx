"use client";

import { useState, useRef } from "react";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#ffdd27] font-semibold mb-2">See It In Action</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            The Magic of Silent Disco
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Watch how silent disco transforms any venue into a party.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-sm mx-auto">
          <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
            {/* Video - scaled up and positioned to crop watermark */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-[110%] object-cover object-top"
              loop
              muted
              playsInline
            >
              <source src="/images/brands/videos/brand-video-3.mp4" type="video/mp4" />
            </video>

            {/* Play button overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#5e17eb]/40 to-[#4a0ea8]/40 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="group relative z-10"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ffdd27] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-[#5e17eb] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-[#ffdd27]/30 rounded-full animate-ping" />
                </button>
              </div>
            )}

            {/* Decorative elements */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/60 text-xs md:text-sm z-10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Live Event Footage
              </span>
              <span>The Istana, Bali</span>
            </div>

            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5e17eb] to-[#ffdd27] rounded-2xl opacity-20 blur-sm -z-10" />
          </div>

          {/* Video caption */}
          <p className="text-center text-white/50 text-xs md:text-sm mt-4">
            From one of our 100+ events
          </p>
        </div>
      </div>
    </section>
  );
}
