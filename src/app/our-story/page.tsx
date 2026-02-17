"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingVideo === index) {
      video.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.pause();
      }
      video.play();
      setPlayingVideo(index);
    }
  };

  const timelineItems = [
    {
      date: "February 2023",
      video: "/images/our-story/feb-2023-bondi.mp4", // PLACEHOLDER
      videoSide: "left",
      content: [
        "In February of 2023 I challenged myself to do one thing a week that terrified me.",
        "In week 4 of this challenge it inspired me to take my silent disco headsets down to Bondi on a Saturday morning. The first week only four people joined, but we enjoyed it so much I did it again the following weekend. This time twenty of us got groovy to start the day.",
        "However, two days later I moved to Bali leaving the headsets behind.",
      ],
      extraContent: [
        "After 3 months in Bali I returned to Sydney for my Dad's 60th. Still doing one thing a week that terrified I pondered how I could up the stakes with my headsets.",
        "I decided to pop-up in front of the Opera House. I told myself I dance for half an hour even if no one joined in.",
        "Fast forward an hour later and all 20 headsets were being used and a line of people waiting to use them.",
      ],
    },
    {
      date: "June 2023",
      video: "/images/our-story/june-2023-embrace.mp4", // PLACEHOLDER
      videoSide: "right",
      content: [],
    },
    {
      date: "August - December 2023",
      video: "/images/our-story/aug-dec-2023-beach.mp4", // PLACEHOLDER
      videoSide: "left",
      content: [
        "Inspired by the positive response at the Opera House I decided to bring them with me on my travels to Thailand, Sri Lanka and back to Bali. Continuing to challenge myself and do things that scare me I began popping up on beaches where ever I went.",
      ],
      extraContent: [
        "With increasing interest I bought myself 50 new headsets as a Christmas present. Soon Bali's largest sober event brand Echo began renting the headsets for their events and the rental company was born.",
        "We were quickly booked for wedding after-parties, hens nights and conferences.",
      ],
    },
    {
      date: "February to July 2024",
      video: "/images/our-story/feb-jul-2024-events.mp4", // PLACEHOLDER
      videoSide: "right",
      content: [],
    },
    {
      date: "August 2024 to Now",
      video: "/images/our-story/aug-2024-now.mp4", // PLACEHOLDER
      videoSide: "left",
      content: [
        "With increasing demand for larger events from beach clubs like Sunday's, conferences and wedding after parties I purchased an additional 300 headsets.",
        "We are Bali's largest, best quality and most affordable headset rental company.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="pt-24 pb-4 bg-gradient-to-r from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/90 italic text-lg md:text-xl">
              One guy who quit his job to start spreading joy through the power of dance
            </p>
          </div>
        </section>

        {/* Our Story Title */}
        <section className="pt-12 pb-8 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Story - Silent Disco Rental Bali</h1>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full hidden md:block"></div>

              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <div key={index} className="relative mb-16">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#5e17eb] rounded-full hidden md:block z-10"></div>

                  <div className={`grid md:grid-cols-2 gap-8 items-start ${item.videoSide === "right" ? "" : ""}`}>
                    {/* Left Side */}
                    <div className={`${item.videoSide === "right" ? "md:pr-12" : "md:pr-12"}`}>
                      {item.videoSide === "left" ? (
                        <>
                          {/* Date */}
                          <p className="text-[#5e17eb] font-semibold mb-4 text-right hidden md:block">
                            {item.date}
                          </p>
                          <p className="text-[#5e17eb] font-semibold mb-4 md:hidden">{item.date}</p>

                          {/* Video */}
                          <div
                            className="relative aspect-[4/3] max-w-md ml-auto rounded-2xl overflow-hidden bg-gray-200 cursor-pointer group shadow-lg"
                            onClick={() => handleVideoClick(index)}
                          >
                            <video
                              ref={(el) => { videoRefs.current[index] = el; }}
                              className="w-full h-full object-cover"
                              loop
                              muted
                              playsInline
                            >
                              <source src={item.video} type="video/mp4" />
                            </video>
                            {playingVideo !== index && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                                  <svg className="w-6 h-6 text-[#5e17eb] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Extra content below video (for Feb 2023) */}
                          {item.extraContent && (
                            <div className="mt-8 space-y-4 text-gray-600 max-w-md ml-auto">
                              {item.extraContent.map((text, i) => (
                                <p key={i}>{text}</p>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {/* Content on left when video is on right */}
                          {item.content.length > 0 && (
                            <div className="space-y-4 text-gray-600 md:text-right md:pr-8">
                              {item.content.map((text, i) => (
                                <p key={i}>{text}</p>
                              ))}
                            </div>
                          )}
                          {item.extraContent && (
                            <div className="mt-8 space-y-4 text-gray-600 md:text-right md:pr-8">
                              {item.extraContent.map((text, i) => (
                                <p key={i}>{text}</p>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Right Side */}
                    <div className={`${item.videoSide === "left" ? "md:pl-12" : "md:pl-12"}`}>
                      {item.videoSide === "right" ? (
                        <>
                          {/* Date */}
                          <p className="text-[#5e17eb] font-semibold mb-4">{item.date}</p>

                          {/* Video */}
                          <div
                            className="relative aspect-[4/3] max-w-md rounded-2xl overflow-hidden bg-gray-200 cursor-pointer group shadow-lg"
                            onClick={() => handleVideoClick(index)}
                          >
                            <video
                              ref={(el) => { videoRefs.current[index] = el; }}
                              className="w-full h-full object-cover"
                              loop
                              muted
                              playsInline
                            >
                              <source src={item.video} type="video/mp4" />
                            </video>
                            {playingVideo !== index && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                                  <svg className="w-6 h-6 text-[#5e17eb] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Content on right when video is on left */}
                          {item.content.length > 0 && (
                            <div className="space-y-4 text-gray-600 md:pl-8 md:pt-8">
                              {item.content.map((text, i) => (
                                <p key={i}>{text}</p>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-end">
              {/* Nic's Photo */}
              <div className="relative aspect-[3/4] max-w-md rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <Image
                  src="/images/About me.jpg"
                  alt="Nic Huzz - founder of Silent Disco Rental Bali"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contact Info */}
              <div className="pb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5e17eb] mb-6">Nic Huzz</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#5e17eb] text-sm">Phone:</p>
                    <a
                      href="tel:+6282266355322"
                      className="text-[#5e17eb] hover:underline"
                    >
                      +62 82266355322
                    </a>
                  </div>
                  <div>
                    <p className="text-[#5e17eb] text-sm">Email:</p>
                    <a
                      href="mailto:contact@headsetrentalbali.com"
                      className="text-[#5e17eb] hover:underline"
                    >
                      contact@headsetrentalbali.com
                    </a>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://instagram.com/nichuzz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#5e17eb] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
