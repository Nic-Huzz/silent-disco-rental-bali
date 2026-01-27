"use client";

import { useRef, useState } from "react";

export default function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videos = [
    { src: "/Video carousel/video-3.mp4", title: "Saltwater Cowboy Smiles" },
    { src: "/Video carousel/video-4.mp4", title: "Silent Disco Moments" },
    { src: "/Video carousel/video-5.mp4", title: "Sundays Promo" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      // Pause any currently playing video
      if (playingIndex !== null) {
        videoRefs.current[playingIndex]?.pause();
      }
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#ffdd27] font-semibold mb-2">Behind The Scenes</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Feel The Energy
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Watch what happens when the headphones go on
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Spacer for centering */}
          <div className="flex-shrink-0 w-[calc(50vw-144px)] md:w-[calc(50vw-160px)]" />
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center"
            >
              <div
                className="relative w-64 md:w-72 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={el => { videoRefs.current[index] = el; }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* Play button overlay */}
                {playingIndex !== index && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 bg-[#ffdd27] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-[#5e17eb] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Pause indicator when playing */}
                {playingIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Spacer for centering */}
          <div className="flex-shrink-0 w-[calc(50vw-144px)] md:w-[calc(50vw-160px)]" />
        </div>
      </div>
    </section>
  );
}
