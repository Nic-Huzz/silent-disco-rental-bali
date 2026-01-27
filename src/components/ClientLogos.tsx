"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ClientLogos() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const clients = [
    {
      name: "Sundays Beach Club",
      logo: "/images/brands/logos/brand-logo-1.png",
      video: "/images/brands/videos/brand-video-1.mp4",
      larger: true
    },
    {
      name: "Echo Beach",
      logo: "/images/brands/logos/brand-logo-2.png",
      video: "/images/brands/videos/brand-video-2.mp4",
      larger: true
    },
    {
      name: "The Istana",
      logo: "/images/brands/logos/brand-logo-3.jpg",
      video: "/images/brands/videos/brand-video-3.mp4",
      larger: true
    },
    {
      name: "Alchemy",
      logo: "/images/brands/logos/brand-logo-4.png",
      video: "/images/brands/videos/brand-video-4.mp4",
      larger: true
    },
    {
      name: "Mantra",
      logo: "/images/brands/logos/brand-logo-5.png",
      video: "/images/brands/videos/brand-video-5.mp4",
      larger: false
    },
    {
      name: "AWS",
      logo: "/images/brands/logos/brand-logo-6.png",
      video: "/images/brands/videos/brand-video-6.mp4",
      larger: false
    },
  ];

  const handleClick = (index: number) => {
    // If clicking the same one, toggle off
    if (activeIndex === index) {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setActiveIndex(null);
      return;
    }

    // Pause any currently playing video
    if (activeIndex !== null) {
      const prevVideo = videoRefs.current[activeIndex];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }

    // Play the new video
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
    setActiveIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    // Only pause if not actively clicked
    if (activeIndex !== index) {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#5e17eb] font-semibold mb-2">Trusted By</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Companies Who Trust Our Headsets
          </h2>
          <p className="text-gray-500 text-sm">Click To See</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`brand-logo ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className={`brand-logo-img object-contain w-auto ${client.larger ? 'h-20 md:h-24' : 'h-12'}`}
              />
              <video
                ref={el => { videoRefs.current[index] = el; }}
                className="brand-video"
                loop
                muted
                playsInline
              >
                <source src={client.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Plus: Kartika Discovery Plaza Hotel, Epson, Hotel Indigo, Uma Beach House, The Nest Hotel & more
        </p>
      </div>
    </section>
  );
}
