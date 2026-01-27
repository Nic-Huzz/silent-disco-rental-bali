"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RetreatsPage() {
  const testimonials = [
    {
      name: "Alyce",
      handle: "@TheMindsetAdventure",
      image: "/Retreat/Alyce.jpg",
      content: [
        [
          { text: "\"Huzz's energy is unmatched!!! The absolute vibe king with a heart of gold!!", bold: false },
        ],
        [
          { text: "Having Nic on our Retreat was next level! ", bold: false },
          { text: "He not only brings the vibes but he has a genuine and special way of making everyone feel safe, loved and supported!", bold: true },
        ],
        [
          { text: "His silent discos are just like no other! He has a unique way of holding a safe and FUN space both in Breathwork and his Silent Discos with his super inspiring presence and his compassionate heart!", bold: false },
        ],
        [
          { text: "There is no one like you Huzz!! Thank you 🙏\"", bold: false },
        ],
      ],
    },
    {
      name: "Amy",
      handle: "@FIFreedomRetreats",
      image: "/Retreat/Amyphoto.jpg",
      content: [
        [
          { text: "I had the pleasure of working with Huzz at my recent retreat, and ", bold: false },
          { text: "he made the experience unforgettable", bold: true },
          { text: ".", bold: false },
        ],
        [
          { text: "Many of the attendees had never participated in a silent disco, with some feeling uneasy about dancing. ", bold: false },
          { text: "Huzz immediately established a warm rapport with the group, creating a safe and inviting space for everyone to feel comfortable.", bold: true },
        ],
        [
          { text: "His guided meditation and breath work journey was the perfect way to ease everyone into the experience, helping participants connect with their bodies and tap into a sense of fun and childlike innocence.", bold: true },
        ],
        [
          { text: "The transformation was palpable — by the time the silent disco began, everyone was fully engaged and ready to let loose. The feedback from the group was overwhelmingly positive.", bold: false },
        ],
        [
          { text: "Many participants described the silent disco as one of the most freeing and fun experiences they've had in a long time", bold: true },
          { text: ", and several expressed a desire to do it again the next day!", bold: false },
        ],
      ],
    },
    {
      name: "Kylie",
      handle: "@Kylieex.Stevenson",
      image: "/Retreat/Kylie.jpg",
      content: [
        [
          { text: "We had such a blast with our silent disco at our team retreat! ", bold: false },
          { text: "Huzz was an amazing host and truly allowed for a space of fun and expansion!", bold: true },
        ],
        [
          { text: "Of course we then had to have him facilitate our breathwork also. ", bold: false },
          { text: "WOW. What a magnificent experience this was!", bold: true },
        ],
        [
          { text: "Cannot recommend this team more highly! Thanks so much Huzz!", bold: false },
        ],
      ],
    },
  ];

  const pillars = [
    {
      title: "Physical",
      description: "Movement and expression",
      image: "/Photo Carousel/carousel-6.jpg",
      imagePosition: "object-[center_45%]",
    },
    {
      title: "Emotional",
      description: "Creating a space for people to express",
      image: "/Photo Carousel/carousel-10.png",
      imagePosition: "object-[center_30%]",
    },
    {
      title: "Mental",
      description: "Grounding and presence through breathwork + meditation",
      image: "/Photo Carousel/carousel-2.jpg",
      imagePosition: "object-center",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Vibe Rise Dance Journey */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#5e17eb] font-semibold mb-3">Give Your Guests an Unforgettable Experience</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Vibe Rise Dance Journey
                </h1>
                <p className="text-xl text-gray-700 mb-4">
                  The perfect way to start the day or celebrate the night — naturally.
                </p>
                <p className="text-gray-600 mb-4">
                  Your guests didn&apos;t come to Bali to sit through another workshop they&apos;ll forget.
                  They came to <span className="font-semibold">feel alive again</span>.
                </p>
                <p className="text-gray-600 mb-4">
                  Vibe Rise is a guided meditation → breathwork → dance journey that gives your participants
                  everything their body, mind, and soul need to feel on top of the world.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-900 shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  >
                    <source src="/Retreat/Retreat Videos/retreat-video-2.mov" type="video/quicktime" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-[#5e17eb] font-semibold mb-2">What Your Guests Will Experience</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  What to Expect
                </h2>
              </div>
              <div className="space-y-6 text-gray-600">
                <div className="flex gap-4">
                  <span className="text-2xl">🧘</span>
                  <p><span className="font-semibold text-gray-900">Guided meditation</span> to drop into the body and let go of the busy mind</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🌬️</span>
                  <p><span className="font-semibold text-gray-900">Breathwork</span> to open the heart and release stuck energy</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🎧</span>
                  <p><span className="font-semibold text-gray-900">Silent disco dance journey</span> — 30 minutes of pure, uninhibited joy</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🤝</span>
                  <p><span className="font-semibold text-gray-900">Deep connection</span> — participants bond in ways that conversation alone can&apos;t create</p>
                </div>
              </div>
              <p className="text-center text-gray-700 mt-8 font-medium">
                Whether your guests come solo or with friends, they&apos;ll leave feeling clear, connected, and buzzing — in the best way.
              </p>
            </div>
          </div>
        </section>

        {/* Not Just Dance Section */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb]/5 to-[#5e17eb]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#5e17eb] font-semibold mb-2">More Than Entertainment</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Not Just Dance — A Vibe Reboot
              </h2>
              <div className="space-y-4 text-gray-600 text-left md:text-center">
                <p>
                  You know that euphoric moment at the <span className="italic">peak</span> of a dance journey?
                </p>
                <p>
                  Vibe Rise is designed to give your participants that feeling — <span className="font-semibold text-gray-900">but for the whole set</span>.
                </p>
                <p>
                  We use meditation, breathwork, and music to reconnect them to that version of themselves
                  who loves to dance, play, and have fun.
                </p>
                <p className="text-[#5e17eb] font-semibold text-lg pt-4">
                  It&apos;s a journey that&apos;s been described as an explosion of joy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-[#5e17eb] font-semibold mb-2">Perfect Fit</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Who It&apos;s For
                </h2>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Whether you&apos;re looking for an energising morning session to start the day right, or a celebratory evening experience to cap off an amazing retreat — Vibe Rise fits perfectly. Book it if you want to give your participants:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A memorable Bali experience they&apos;ll talk about long after the retreat ends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A way to feel amazing without alcohol or late nights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Permission to dance, play, and let loose — even if they &quot;don&apos;t usually dance&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Connection, movement, and energy that bonds your group</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#ffdd27] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#5e17eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Transformation that happens naturally — no forcing, no awkwardness</span>
                </li>
              </ul>
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
                  <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                    {testimonial.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>
                        {paragraph.map((segment, sIndex) => (
                          <span key={sIndex} className={segment.bold ? "font-semibold" : ""}>
                            {segment.text}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
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
                      className={`object-cover ${pillar.imagePosition}`}
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

        {/* Video Section 2 - The Energy Is Real */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-[#5e17eb] font-semibold mb-2">See It In Action</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Energy Is Real
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>Watch what happens when people give themselves permission to move freely.</p>
                  <p className="font-medium text-gray-900">No judgement. No choreography. Just pure, authentic expression.</p>
                  <p>This is what your guests will experience — a space where they can truly let go.</p>
                  <p className="text-gray-500 italic pt-2">
                    We invite participants to visualise themselves as a kid — playful, full of love, care-free. We&apos;re still those small people in big people&apos;s bodies. This experience is an invitation for that version to come out and play.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src="/Video carousel/video-3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#ffdd27] font-semibold mb-2">Let&apos;s Chat</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Vibe Rise for Your Retreat
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Have questions about how Vibe Rise can fit into your retreat schedule?
              Let&apos;s discuss how to create an unforgettable experience for your participants.
            </p>
            <a
              href="https://wa.me/6282266355322?text=Hi! I'm a retreat host interested in booking Vibe Rise Dance Journey for my participants."
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

        {/* Video Section 3 */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb]/5 to-[#5e17eb]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src="/Video carousel/video-4.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div>
                <p className="text-[#5e17eb] font-semibold mb-2">Feel The Vibe</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  This Could Be Your Retreat
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>Every retreat is different, but the feeling is always the same.</p>
                  <p className="font-medium text-gray-900">Connection. Joy. Freedom.</p>
                  <p>Imagine your guests leaving with this energy — ready to take on the world.</p>
                </div>
              </div>
            </div>
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

                <div className="space-y-4 text-gray-700">
                  <p>My mission in life is to empower people to dance both literally and metaphorically.</p>
                  <p>Literally through leading joy-fuelled dance experiences.</p>
                  <p>Metaphorically through experiences that empower people to feel safe enough to be themselves.</p>
                  <p>To date I&apos;ve run over 100 dance experiences in 5 countries (and counting).</p>
                  <p>I&apos;m frequently hired for my <span className="font-semibold">Healing But Fun</span> experiences:</p>

                  <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                    <p className="font-semibold text-gray-900">Healing Compass</p>
                    <p className="text-sm">Do your participants feel like they were made for more? Like their essence is pulling them up, but something is pulling them back?</p>
                    <p className="text-sm">In the Healing Compass they will learn exactly what emotional splinters (traumas) are keeping them stuck so they can finally free themselves from what has quietly been sabotaging their progress.</p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                    <p className="font-semibold text-gray-900">Conscious Connected Breathwork &amp; Somatic Movement</p>
                    <p className="text-sm">Bali&apos;s best emotional release breathwork experience combining deep cathartic releases with somatic movement.</p>
                    <p className="text-sm">Inspired by polyvagal theory, this experience combines laying down breathwork with the somatic understanding that how we &apos;release&apos; trauma isn&apos;t limited to emotions but movements like shaking.</p>
                  </div>

                  <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                    <p className="font-semibold text-gray-900">Rewire Subconscious Limiting Beliefs</p>
                    <p className="text-sm">We don&apos;t rise to the level of our ambitions, we fall to the level of what feels safe.</p>
                    <p className="text-sm">This workshop identifies the emotional splinters that have caused participants&apos; ambitions to feel unsafe, and guides them through an NLP process to begin the rewiring process.</p>
                  </div>

                  <p>
                    <a
                      href="https://retreats.nichuzz.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5e17eb] font-semibold hover:underline"
                    >
                      Learn more about my retreat offerings
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              {/* Nic's Photo */}
              <div className="relative">
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src="/images/About me.jpg"
                    alt="Nic Huzz"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Give Your Guests an Experience They&apos;ll Never Forget
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Vibe Rise isn&apos;t just another activity — it&apos;s the highlight of your retreat.
              Let&apos;s create something magical together.
            </p>
            <a
              href="https://wa.me/6282266355322?text=Hi! I'm a retreat host interested in booking Vibe Rise Dance Journey for my participants."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ffdd27] text-[#5e17eb] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Vibe Rise for Your Retreat
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
