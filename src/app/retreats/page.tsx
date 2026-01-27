"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RetreatsPage() {
  const [playingVideo, setPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Alyce",
      handle: "@TheMindsetAdventure",
      image: "/images/retreats/testimonial-alyce.jpg", // PLACEHOLDER
      content: [
        { text: "\"Huzz's energy is unmatched!!! The absolute vibe king with a heart of gold!!", bold: false },
        { text: "Having Nic on our Retreat was next level! ", bold: false },
        { text: "He not only brings the vibes but he has a genuine and special way of making everyone feel safe, loved and supported! His silent discos are just like no other!", bold: true },
        { text: "He has a unique way of holding a safe and FUN space both in Breathwork and his Silent Discos with his super inspiring presence and his compassionate heart!", bold: false },
        { text: "There is no one like you Huzz!! Thank you 🙏\"", bold: false },
      ],
    },
    {
      name: "Amy",
      handle: "@FIFreedomRetreats",
      image: "/images/retreats/testimonial-amy.jpg", // PLACEHOLDER
      content: [
        { text: "I had the pleasure of working with Huzz at my recent retreat, and ", bold: false },
        { text: "he made the experience unforgettable", bold: true },
        { text: ". Many of the attendees had never participated in a silent disco, with some feeling uneasy about dancing. ", bold: false },
        { text: "Huzz immediately established a warm rapport with the group, creating a safe and inviting space for everyone to feel comfortable.", bold: true },
        { text: "His guided meditation and breath work journey was the perfect way to ease everyone into the experience, helping participants connect with their bodies and tap into a sense of fun and childlike innocence.", bold: true },
        { text: "The transformation was palpable-by the time the silent disco began, everyone was fully engaged and ready to let loose.", bold: true },
        { text: " The feedback from the group was overwhelmingly positive.", bold: false },
        { text: "Many participants described the silent disco as one of the most freeing and fun experiences they've had in a long time", bold: true },
        { text: ", and several expressed a desire to do it again the next day!", bold: false },
      ],
    },
    {
      name: "Kylie",
      handle: "@Kylieex.Stevenson",
      image: "/images/retreats/testimonial-kylie.jpg", // PLACEHOLDER
      content: [
        { text: "We had such a blast with our silent disco at our team retreat! ", bold: false },
        { text: "Huzz was an amazing host and truly allowed for a space of fun and expansion!", bold: true },
        { text: "Of course we then had to have him facilitate our breathwork also. ", bold: false },
        { text: "WOW. What a magnificent experience this was!", bold: true },
        { text: "Cannot recommend this team more highly!", bold: false },
        { text: "Thanks so much Huzz!", bold: false },
      ],
    },
  ];

  const pillars = [
    {
      title: "Physical",
      description: "Movement and expression",
      image: "/images/retreats/pillar-physical.jpg", // PLACEHOLDER
    },
    {
      title: "Emotional",
      description: "Creating a space for people to express",
      image: "/images/retreats/pillar-emotional.jpg", // PLACEHOLDER
    },
    {
      title: "Mental",
      description: "Grounding and presence through breathwork + meditation",
      image: "/images/retreats/pillar-mental.jpg", // PLACEHOLDER
    },
  ];

  const retreatPartners = [
    {
      name: "The Mindset Adventure",
      image: "/images/retreats/partner-mindset.jpg", // PLACEHOLDER
      link: "#",
    },
    {
      name: "Sons of the West",
      image: "/images/retreats/partner-sons.jpg", // PLACEHOLDER
      link: "#",
    },
    {
      name: "Kylie Stevenson",
      image: "/images/retreats/partner-kylie.jpg", // PLACEHOLDER
      link: "#",
    },
    {
      name: "FI Freedom Retreats",
      image: "/images/retreats/partner-fi.jpg", // PLACEHOLDER
      link: "#",
    },
  ];

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (playingVideo) {
      video.pause();
      setPlayingVideo(false);
    } else {
      video.play();
      setPlayingVideo(true);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (retreatPartners.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (retreatPartners.length - 2)) % (retreatPartners.length - 2));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Vibe Rise Dance Journey */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#5e17eb] font-semibold mb-3">Transformative Retreat Experiences</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Vibe Rise Dance Journey
                </h1>
                <p className="text-gray-700 mb-4">
                  Vibe Rise Dance Journey is best described as creating a space for your playful, care-free,
                  loving essence to be expressed. A journey designed to leave you feeling high on life.
                </p>
                <p className="text-gray-700 mb-4">
                  A short round of breathwork and meditation drops us into this energy. Followed by 30
                  minutes of dancing that can be best described as when you&apos;re 7 years old going nuts
                  dancing to your favourite songs.
                </p>
                <p className="text-[#5e17eb] font-medium">
                  See what Retreat Hosts have had to say about the experience below:
                </p>
              </div>
              <div className="relative">
                {/* PLACEHOLDER IMAGE */}
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src="/images/retreats/hero-dance.jpg"
                    alt="Dancing at retreat"
                    fill
                    className="object-cover"
                  />
                  {/* "Dance" label */}
                  <div className="absolute bottom-8 right-8 bg-white/80 px-4 py-2 rounded-lg">
                    <span className="text-gray-800 font-handwriting text-xl italic">Dance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#5e17eb] font-semibold mb-2">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Other Retreat Hosts Have Said
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l border-gray-200 pl-6 md:border-l-0 md:pl-0 md:border-r md:pr-6 last:border-r-0">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Name and Handle */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#5e17eb]">{testimonial.name}</h3>
                    <p className="text-[#5e17eb]">{testimonial.handle}</p>
                  </div>
                  {/* Testimonial Content */}
                  <div className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.content.map((segment, i) => (
                      <span key={i} className={segment.bold ? "font-semibold" : ""}>
                        {segment.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sneak Peak Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Video */}
              <div
                className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-900 cursor-pointer group"
                onClick={handleVideoClick}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src="/images/retreats/sneak-peak-video.mp4" type="video/mp4" /> {/* PLACEHOLDER */}
                </video>
                {/* Play button overlay */}
                {!playingVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="text-white text-center">
                      <p className="mb-4 text-lg">How it starts...</p>
                      <div className="w-16 h-16 bg-white/20 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5e17eb] mb-8">
                  Sneak Peak 👀
                </h2>
                <div className="space-y-4 text-[#5e17eb]">
                  <p>I invite you to take a moment to visualise you as a kid.</p>
                  <p>Reflect on how playful you were, how full of love, how care-free.</p>
                  <p>I believe we&apos;re still those small people in big people&apos;s bodies.</p>
                  <p>
                    But as we grow up it&apos;s like we lose the spaces and permission to let this
                    playful, care-free, loving version be expressed.
                  </p>
                  <p className="font-medium">
                    This is your invitation for this version of you to come out and play:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Wellness Section */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb]/5 to-[#5e17eb]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#5e17eb] font-semibold mb-2">Holistic Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Pillars of Wellness
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-[#5e17eb] font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-gray-700 text-sm">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Celebrate Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5e17eb] text-center mb-12">
              Let&apos;s Celebrate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* PLACEHOLDER IMAGES */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/retreats/celebrate-1.jpg"
                  alt="Celebration at bamboo venue"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/retreats/celebrate-2.jpg"
                  alt="Dancing at retreat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            {/* Decorative elements */}
            <div className="absolute left-8 top-8 w-6 h-6 bg-pink-300 rotate-45 opacity-60"></div>
            <div className="absolute right-12 top-12 w-8 h-8 border-4 border-[#5e17eb]/30 rounded-full"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#5e17eb] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions or need a quote for your upcoming event?
            </p>
            <a
              href="https://wa.me/6282266355322?text=Hi! I'm interested in silent disco for my retreat."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5e17eb] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4a0ea8] transition-colors"
            >
              Send WhatsApp Message
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#5e17eb] mb-2">About</h2>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl text-[#5e17eb] font-medium">I&apos;m Nic Huzz</h3>
                  <a
                    href="https://instagram.com/nichuzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#5e17eb]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>

                <div className="space-y-4 text-[#5e17eb]">
                  <p>My mission in life is to empower people to dance both literally and metaphorically.</p>
                  <p>Literally through leading joy-fuelled dance experiences.</p>
                  <p>Metaphorically through experiences that empower people to feel safe enough to be themselves.</p>
                  <p>To date I&apos;ve run over 100 dance experiences in 5 countries (and counting).</p>
                  <p>When I&apos;m not dancing, I&apos;m frequently hired for:</p>
                  <p>
                    <span className="font-semibold">Breathwork:</span> I&apos;m a certified practitioner in conscious connected
                    breathwork, completing 400 hour teacher training in Koh Phangan, Thailand.
                  </p>
                  <p>I&apos;m currently the resident breathwork facilitator at Mantra Wellness in Uluwatu.</p>
                  <p>
                    <span className="font-semibold">Rewiring Subconscious Limiting Beliefs Workshop:</span> I&apos;m a certified
                    neurolinguistic programming (NLP) practitioner.
                  </p>
                  <p>
                    I currently host this workshop weekly at The Space in Uluwatu and have run it for a number of
                    corporate clients including{" "}
                    <a href="#" className="underline hover:no-underline">Start With Hex</a> and{" "}
                    <a href="#" className="underline hover:no-underline">Write of Passage</a>.
                  </p>
                </div>
              </div>

              {/* Nic's Photo */}
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src="/images/retreats/nic-huzz.jpg"
                    alt="Nic Huzz"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Retreats I've worked with carousel */}
            <div className="mt-16">
              <p className="text-[#5e17eb] text-center mb-8">
                Retreats I&apos;ve worked with (click image to see profile):
              </p>
              <div className="relative max-w-2xl mx-auto">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-[#5e17eb] transition-colors z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-[#5e17eb] transition-colors z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Carousel Items */}
                <div className="flex justify-center items-center gap-8">
                  {retreatPartners.slice(currentSlide, currentSlide + 3).map((partner, index) => (
                    <a
                      key={index}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 relative hover:scale-105 transition-transform">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#ffdd27] font-semibold mb-2">Ready to Get Started?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Magic at Your Retreat?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s bring the transformative power of silent disco and breathwork to your next retreat experience.
            </p>
            <a
              href="https://wa.me/6282266355322?text=Hi! I'm interested in booking Vibe Rise Dance Journey for my retreat."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#5e17eb] px-8 py-4 rounded-full font-semibold hover:bg-[#ffdd27] transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send WhatsApp Message
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
