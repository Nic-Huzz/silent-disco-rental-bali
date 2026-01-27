"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

interface Translations {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const translations: Translations = {
  // Header
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.whyUs": { en: "Why Us", id: "Mengapa Kami" },
  "nav.pricing": { en: "Pricing", id: "Harga" },
  "nav.reviews": { en: "Reviews", id: "Ulasan" },
  "nav.contact": { en: "Contact", id: "Kontak" },
  "nav.whatsapp": { en: "WhatsApp Us", id: "WhatsApp Kami" },

  // Hero
  "hero.tagline": { en: "Bali's #1 Silent Disco Provider", id: "Penyedia Silent Disco #1 di Bali" },
  "hero.title1": { en: "Create", id: "Ciptakan" },
  "hero.title2": { en: "amazing", id: "pengalaman" },
  "hero.title3": { en: "audio experiences", id: "audio yang menakjubkan" },
  "hero.subtitle": {
    en: "Premium wireless headsets for parties, conferences, and retreats. No noise complaints, just pure audio magic.",
    id: "Headset nirkabel premium untuk pesta, konferensi, dan retreat. Tanpa keluhan kebisingan, hanya keajaiban audio murni.",
  },
  "hero.cta.quote": { en: "Get a Quote", id: "Dapatkan Penawaran" },
  "hero.cta.how": { en: "How It Works", id: "Cara Kerja" },

  // Stats
  "stats.events": { en: "Events Powered", id: "Acara Dilayani" },
  "stats.groovers": { en: "Happy Groovers", id: "Penari Bahagia" },
  "stats.rating": { en: "Star Rating", id: "Rating Bintang" },

  // Why Choose Us
  "why.tagline": { en: "Why Choose Us", id: "Mengapa Memilih Kami" },
  "why.title": { en: "The Silent Disco Experts", id: "Ahli Silent Disco" },
  "why.subtitle": {
    en: "We don't just rent equipment — we create unforgettable audio experiences",
    id: "Kami tidak hanya menyewakan peralatan — kami menciptakan pengalaman audio yang tak terlupakan",
  },
  "why.quality.title": { en: "Premium Quality", id: "Kualitas Premium" },
  "why.quality.desc": {
    en: "Best in market headsets: Noise-cancelling + Hi-Fi sound quality for an immersive experience.",
    id: "Headset terbaik di pasaran: Noise-cancelling + kualitas suara Hi-Fi untuk pengalaman yang mendalam.",
  },
  "why.price.title": { en: "Best Prices", id: "Harga Terbaik" },
  "why.price.desc": {
    en: "Competitive rates without sacrificing quality. Transparent pricing with no hidden fees.",
    id: "Harga kompetitif tanpa mengorbankan kualitas. Harga transparan tanpa biaya tersembunyi.",
  },
  "why.experience.title": { en: "Experience", id: "Pengalaman" },
  "why.experience.desc": {
    en: "Most experienced provider in Bali with custom packages to meet your specific needs.",
    id: "Penyedia paling berpengalaman di Bali dengan paket khusus untuk memenuhi kebutuhan Anda.",
  },
  "why.trusted.title": { en: "Trusted Partner", id: "Mitra Terpercaya" },
  "why.trusted.desc": {
    en: "Used by Bali's biggest event organisers including Sunday's Beach Club, Echo events, AWS & IBM.",
    id: "Digunakan oleh penyelenggara acara terbesar di Bali termasuk Sunday's Beach Club, Echo events, AWS & IBM.",
  },

  // Video Showcase
  "video.tagline": { en: "See It In Action", id: "Lihat Aksinya" },
  "video.title": { en: "The Magic of Silent Disco", id: "Keajaiban Silent Disco" },
  "video.subtitle": {
    en: "50 people dancing, zero noise complaints. Watch how silent disco transforms any venue into a party.",
    id: "50 orang menari, tanpa keluhan kebisingan. Lihat bagaimana silent disco mengubah venue apapun menjadi pesta.",
  },

  // Tech Specs
  "specs.tagline": { en: "Premium Equipment", id: "Peralatan Premium" },
  "specs.title": { en: "Technical Specifications", id: "Spesifikasi Teknis" },
  "specs.battery": { en: "Battery Life", id: "Daya Tahan Baterai" },
  "specs.battery.desc": { en: "Full night of dancing on a single charge", id: "Semalam penuh menari dengan sekali cas" },
  "specs.sound": { en: "Sound Quality", id: "Kualitas Suara" },
  "specs.sound.desc": { en: "Crystal clear audio with deep bass", id: "Audio jernih dengan bass yang dalam" },
  "specs.range": { en: "Wireless Range", id: "Jangkauan Nirkabel" },
  "specs.range.desc": { en: "Freedom to roam across any venue", id: "Kebebasan bergerak di seluruh venue" },
  "specs.channels": { en: "LED Color-Coded", id: "LED Berkode Warna" },
  "specs.channels.desc": { en: "See who's listening to what", id: "Lihat siapa mendengarkan apa" },

  // How It Works
  "how.tagline": { en: "Simple Process", id: "Proses Sederhana" },
  "how.title": { en: "How It Works", id: "Cara Kerja" },
  "how.subtitle": { en: "From enquiry to dance floor in 4 easy steps", id: "Dari pertanyaan hingga lantai dansa dalam 4 langkah mudah" },
  "how.step1.title": { en: "Tell Us About Your Event", id: "Ceritakan Tentang Acara Anda" },
  "how.step1.desc": {
    en: "Share your event date, location, and number of guests. We'll help you choose the right package.",
    id: "Bagikan tanggal acara, lokasi, dan jumlah tamu. Kami akan membantu Anda memilih paket yang tepat.",
  },
  "how.step2.title": { en: "Choose Your Setup", id: "Pilih Setup Anda" },
  "how.step2.desc": {
    en: "Select from 1-3 music channels, pick your support level (DIY, guided, or full-service).",
    id: "Pilih dari 1-3 channel musik, pilih tingkat dukungan (DIY, terpandu, atau layanan penuh).",
  },
  "how.step3.title": { en: "We Deliver & Setup", id: "Kami Antar & Setup" },
  "how.step3.desc": {
    en: "We deliver the equipment to your venue across Bali and can help with setup if needed.",
    id: "Kami mengantar peralatan ke venue Anda di seluruh Bali dan dapat membantu setup jika diperlukan.",
  },
  "how.step4.title": { en: "Party Time!", id: "Waktunya Pesta!" },
  "how.step4.desc": {
    en: "Put on the headphones, tune into your favorite channel, and dance the night away!",
    id: "Pasang headphone, dengarkan channel favorit Anda, dan menari sepanjang malam!",
  },
  "how.cta": { en: "Start Your Journey", id: "Mulai Perjalanan Anda" },

  // Price Calculator
  "calc.title": { en: "Rental Price Calculator", id: "Kalkulator Harga Sewa" },
  "calc.headsets": { en: "Number of Headsets:", id: "Jumlah Headset:" },
  "calc.headsets.note": {
    en: "For enquiries of less than 20 headsets & more than 150 (our capacity is over 300) we'll create a custom package for you",
    id: "Untuk pertanyaan kurang dari 20 headset & lebih dari 150 (kapasitas kami lebih dari 300) kami akan membuat paket khusus untuk Anda",
  },
  "calc.channels": { en: "How many music channels would you like?", id: "Berapa channel musik yang Anda inginkan?" },
  "calc.channels.one": { en: "One", id: "Satu" },
  "calc.channels.two": { en: "Two", id: "Dua" },
  "calc.channels.three": { en: "Three", id: "Tiga" },
  "calc.support": { en: "What level of support would you like?", id: "Tingkat dukungan apa yang Anda inginkan?" },
  "calc.support.diy": {
    en: "Do It Yourself - We'll send you the equipment + instructions (it's easy to setup)",
    id: "Lakukan Sendiri - Kami kirim peralatan + instruksi (mudah untuk setup)",
  },
  "calc.support.event": {
    en: "Event Support - We help set up and troubleshoot during your event",
    id: "Dukungan Acara - Kami bantu setup dan troubleshoot selama acara",
  },
  "calc.support.guided": {
    en: "Guided Experience - Full facilitation and DJ included",
    id: "Pengalaman Terpandu - Termasuk fasilitasi penuh dan DJ",
  },
  "calc.location": { en: "Delivery Location", id: "Lokasi Pengiriman" },
  "calc.location.note": { en: "We deliver all over Bali", id: "Kami mengantar ke seluruh Bali" },
  "calc.quote": { en: "Estimated Quote", id: "Perkiraan Harga" },
  "calc.ready": { en: "Ready For An Amazing Audio Experience?", id: "Siap Untuk Pengalaman Audio yang Menakjubkan?" },
  "calc.submit": { en: "Submit Enquiry", id: "Kirim Pertanyaan" },

  // Testimonials
  "testimonials.title": { en: "Real Testimonials From Real People", id: "Testimoni Nyata Dari Orang Nyata" },
  "testimonials.review": { en: "Review us on Google", id: "Ulas kami di Google" },
  "testimonials.readMore": { en: "Read more", id: "Baca selengkapnya" },

  // FAQ
  "faq.tagline": { en: "Got Questions?", id: "Ada Pertanyaan?" },
  "faq.title": { en: "Frequently Asked Questions", id: "Pertanyaan yang Sering Diajukan" },
  "faq.still": { en: "Still have questions?", id: "Masih ada pertanyaan?" },
  "faq.chat": { en: "Chat with us on WhatsApp", id: "Chat dengan kami di WhatsApp" },

  // Contact
  "contact.tagline": { en: "Ready to Party?", id: "Siap untuk Berpesta?" },
  "contact.title": { en: "Get in Touch", id: "Hubungi Kami" },
  "contact.subtitle": {
    en: "Have questions or need a quote for your upcoming event? We typically respond within a few hours.",
    id: "Ada pertanyaan atau butuh penawaran untuk acara Anda? Kami biasanya merespon dalam beberapa jam.",
  },
  "contact.whatsapp": { en: "Send WhatsApp Message", id: "Kirim Pesan WhatsApp" },
  "contact.email": { en: "Email", id: "Email" },
  "contact.instagram": { en: "Instagram", id: "Instagram" },

  // Footer
  "footer.desc": {
    en: "Bali's largest, best quality and most affordable silent disco rental provider. Creating amazing audio experiences for parties, conferences, and retreats since 2023.",
    id: "Penyedia sewa silent disco terbesar, berkualitas terbaik dan paling terjangkau di Bali. Menciptakan pengalaman audio yang menakjubkan untuk pesta, konferensi, dan retreat sejak 2023.",
  },
  "footer.quickLinks": { en: "Quick Links", id: "Tautan Cepat" },
  "footer.services": { en: "Services", id: "Layanan" },
  "footer.copyright": { en: "All rights reserved.", id: "Hak cipta dilindungi." },
  "footer.serving": {
    en: "Serving all of Bali: Seminyak, Canggu, Uluwatu, Ubud, Sanur, Nusa Dua & more",
    id: "Melayani seluruh Bali: Seminyak, Canggu, Uluwatu, Ubud, Sanur, Nusa Dua & lainnya",
  },

  // Language Toggle
  "lang.switch": { en: "Bahasa Indonesia", id: "English" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
