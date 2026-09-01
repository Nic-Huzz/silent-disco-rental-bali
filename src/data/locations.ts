export interface LocationPage {
  slug: string;
  location: string;
  region?: string; // defaults to "Bali" if omitted
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  heroSubtitle: string;
  intro: string;
  popularVenues: string[];
  whatsappMessage: string;
  geo: { latitude: number; longitude: number };
  directAnswer: { question: string; answer: string };
}

export const locations: LocationPage[] = [
  {
    slug: "silent-disco-canggu",
    location: "Canggu",
    title: "Silent Disco Rental Canggu | Hire Headsets in Canggu Bali",
    description: "Silent disco headset rental & hire in Canggu, Bali. Free delivery to all Canggu venues. 300+ premium wireless headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco canggu", "silent disco rental canggu", "headset hire canggu bali", "silent party canggu"],
    h1: "Silent Disco Rental & Hire in Canggu",
    heroSubtitle: "Free delivery to all Canggu venues",
    intro: "Canggu is Bali's creative heartbeat — a mix of surf culture, beach clubs, and epic nightlife. Whether you're hosting a sunset session at a rice-paddy villa or a late-night beach party, our silent disco headsets bring the music without the noise complaints. We deliver free to every Canggu venue.",
    popularVenues: ["Finn's Beach Club", "The Lawn", "Echo Beach", "Old Man's", "Deus Ex Machina", "Atlas Beach Fest", "La Brisa", "Café del Mar"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Canggu. Could you share availability and pricing?",
    geo: { latitude: -8.6478, longitude: 115.1385 },
    directAnswer: {
      question: "Where can I rent silent disco headsets in Canggu, Bali?",
      answer: "Silent Disco Rental Bali offers 300+ premium wireless headsets for hire in Canggu, with free delivery to all venues including Finn's Beach Club, The Lawn, and Echo Beach. Pricing starts from IDR 100,000 per headset (~$6.50 USD) with 3 LED colour-coded music channels and 10-hour battery life. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-seminyak",
    location: "Seminyak",
    title: "Silent Disco Rental Seminyak | Hire Headsets in Seminyak Bali",
    description: "Silent disco headset rental & hire in Seminyak, Bali. Free delivery to all Seminyak venues. 300+ premium wireless headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco seminyak", "silent disco rental seminyak", "headset hire seminyak bali", "silent party seminyak"],
    h1: "Silent Disco Rental & Hire in Seminyak",
    heroSubtitle: "Free delivery to all Seminyak venues",
    intro: "Seminyak is Bali's stylish playground — boutique hotels, rooftop bars, and world-class beach clubs. Our silent disco headsets are the perfect fit for upscale events, villa parties, and private celebrations. We deliver free to every Seminyak venue.",
    popularVenues: ["Ku De Ta", "Potato Head", "Mrs Sippy", "Motel Mexicola", "W Bali", "Double Six Beach", "La Favela", "Woobar"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Seminyak. Could you share availability and pricing?",
    geo: { latitude: -8.6905, longitude: 115.1685 },
    directAnswer: {
      question: "Where can I hire silent disco equipment in Seminyak?",
      answer: "Silent Disco Rental Bali provides 300+ premium wireless headsets with free delivery to all Seminyak venues including Ku De Ta, Potato Head, and Mrs Sippy. Pricing from IDR 100,000 per headset (~$6.50 USD), 3 music channels with LED colour-coding, and 10-hour battery life. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-ubud",
    location: "Ubud",
    title: "Silent Disco Rental Ubud | Hire Headsets in Ubud Bali",
    description: "Silent disco headset rental & hire in Ubud, Bali. Perfect for retreats, yoga events & jungle parties. 300+ premium wireless headphones from IDR 100k. Book now!",
    keywords: ["silent disco ubud", "silent disco rental ubud", "headset hire ubud bali", "silent yoga ubud", "silent retreat ubud"],
    h1: "Silent Disco Rental & Hire in Ubud",
    heroSubtitle: "Perfect for retreats, yoga events & jungle celebrations",
    intro: "Ubud is Bali's cultural and spiritual centre — surrounded by rice terraces, temples, and lush jungle. Our silent disco headsets are ideal for wellness retreats, silent yoga sessions, ecstatic dance events, and intimate celebrations. We deliver free to all Ubud venues.",
    popularVenues: ["The Yoga Barn", "Pyramids of Chi", "Ubud Royal Palace", "ARMA Museum", "Alchemy", "Fivelements", "Bambu Indah", "Jungle Fish"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Ubud. Could you share availability and pricing?",
    geo: { latitude: -8.5069, longitude: 115.2625 },
    directAnswer: {
      question: "Can I rent silent disco headsets in Ubud for a retreat or event?",
      answer: "Silent Disco Rental Bali delivers 300+ premium wireless headsets to all Ubud venues including The Yoga Barn, Pyramids of Chi, and Bambu Indah. Perfect for yoga retreats, ecstatic dance, and jungle celebrations. Pricing from IDR 100,000 per headset (~$6.50 USD) with free delivery. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-uluwatu",
    location: "Uluwatu",
    title: "Silent Disco Rental Uluwatu | Hire Headsets in Uluwatu Bali",
    description: "Silent disco headset rental & hire in Uluwatu, Bali. Cliff-top parties & beach clubs. 300+ premium wireless headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco uluwatu", "silent disco rental uluwatu", "headset hire uluwatu bali", "silent party uluwatu"],
    h1: "Silent Disco Rental & Hire in Uluwatu",
    heroSubtitle: "Cliff-top parties & beach club events",
    intro: "Uluwatu sits on Bali's dramatic southern cliffs — home to iconic surf breaks and legendary sunset venues. Our silent disco headsets let you party above the waves without disturbing the peace. Free delivery to all Uluwatu venues and cliff-top villas.",
    popularVenues: ["Sundays Beach Club", "Single Fin", "Ulu Cliffhouse", "Savaya", "El Kabron", "Karma Beach", "The Edge Bali", "Omnia Dayclub"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Uluwatu. Could you share availability and pricing?",
    geo: { latitude: -8.8291, longitude: 115.0849 },
    directAnswer: {
      question: "Where can I hire silent disco headphones in Uluwatu, Bali?",
      answer: "Silent Disco Rental Bali offers free delivery of 300+ premium wireless headsets to all Uluwatu cliff-top venues including Sundays Beach Club, Single Fin, and Savaya. Pricing from IDR 100,000 per headset (~$6.50 USD) with 3 music channels. Perfect for sunset parties and beach club events. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-sanur",
    location: "Sanur",
    title: "Silent Disco Rental Sanur | Hire Headsets in Sanur Bali",
    description: "Silent disco headset rental & hire in Sanur, Bali. Beach events & resort parties. 300+ premium wireless headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco sanur", "silent disco rental sanur", "headset hire sanur bali", "silent party sanur"],
    h1: "Silent Disco Rental & Hire in Sanur",
    heroSubtitle: "Beach events & resort celebrations",
    intro: "Sanur is Bali's relaxed east-coast gem — calm waters, sunrise beaches, and a laid-back vibe. Our silent disco headsets are perfect for resort events, beachfront parties, and family celebrations. Free delivery to all Sanur venues.",
    popularVenues: ["Segara Village", "Hyatt Regency Bali", "Prama Sanur Beach", "Byrdhouse Beach Club", "Mertasari Beach", "Soul on the Beach", "Lilla Pantai", "Tandjung Sari"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Sanur. Could you share availability and pricing?",
    geo: { latitude: -8.6783, longitude: 115.2631 },
    directAnswer: {
      question: "Is silent disco headset rental available in Sanur, Bali?",
      answer: "Yes — Silent Disco Rental Bali delivers 300+ premium wireless headsets free to all Sanur venues and beaches. Pricing from IDR 100,000 per headset (~$6.50 USD) with 3 LED colour-coded channels and 10-hour battery life. Ideal for resort events and beachfront celebrations. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-nusa-dua",
    location: "Nusa Dua",
    title: "Silent Disco Rental Nusa Dua | Hire Headsets in Nusa Dua Bali",
    description: "Silent disco headset rental & hire in Nusa Dua, Bali. Corporate events & luxury resort parties. 300+ premium headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco nusa dua", "silent disco rental nusa dua", "headset hire nusa dua bali", "conference headsets nusa dua"],
    h1: "Silent Disco Rental & Hire in Nusa Dua",
    heroSubtitle: "Corporate events & luxury resort parties",
    intro: "Nusa Dua is Bali's premium resort enclave — home to five-star hotels, convention centres, and pristine beaches. Our silent disco headsets are perfect for corporate conferences, gala dinners, and luxury celebrations. Free delivery to all Nusa Dua venues.",
    popularVenues: ["Bali Nusa Dua Convention Centre", "The Apurva Kempinski", "St. Regis Bali", "Sofitel Bali", "Mulia Resort", "Hilton Bali", "The Westin Resort", "Grand Hyatt Bali"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Nusa Dua. Could you share availability and pricing?",
    geo: { latitude: -8.8005, longitude: 115.2319 },
    directAnswer: {
      question: "Can I rent conference headsets or silent disco equipment in Nusa Dua?",
      answer: "Silent Disco Rental Bali provides 300+ premium wireless headsets with free delivery to all Nusa Dua resorts and the Bali Nusa Dua Convention Centre. Perfect for corporate conferences, gala dinners, and luxury celebrations. Pricing from IDR 100,000 per headset (~$6.50 USD) with 3 simultaneous channels. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-kuta",
    location: "Kuta",
    title: "Silent Disco Rental Kuta | Hire Headsets in Kuta Bali",
    description: "Silent disco headset rental & hire in Kuta, Bali. Beach parties & nightlife events. 300+ premium wireless headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco kuta", "silent disco rental kuta", "headset hire kuta bali", "silent party kuta"],
    h1: "Silent Disco Rental & Hire in Kuta",
    heroSubtitle: "Beach parties & nightlife events",
    intro: "Kuta is where Bali's energy comes alive — famous beaches, buzzing nightlife, and non-stop entertainment. Our silent disco headsets are ideal for beach parties, club events, and large-scale celebrations. Free delivery to all Kuta venues.",
    popularVenues: ["Kuta Beach", "Waterbom Bali", "Hard Rock Hotel", "Beachwalk Mall", "Sky Garden", "Padma Resort", "Discovery Mall", "Bali Dynasty Resort"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Kuta. Could you share availability and pricing?",
    geo: { latitude: -8.7180, longitude: 115.1690 },
    directAnswer: {
      question: "Where can I rent silent disco headsets in Kuta, Bali?",
      answer: "Silent Disco Rental Bali delivers 300+ premium wireless headsets free to all Kuta venues including Kuta Beach, Waterbom Bali, and Hard Rock Hotel. Pricing from IDR 100,000 per headset (~$6.50 USD) with 3 music channels and 10-hour battery. Great for beach parties and nightlife events. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-jimbaran",
    location: "Jimbaran",
    title: "Silent Disco Rental Jimbaran | Hire Headsets in Jimbaran Bali",
    description: "Silent disco headset rental & hire in Jimbaran, Bali. Beachfront dining events & resort parties. 300+ premium headphones from IDR 100k. Book via WhatsApp!",
    keywords: ["silent disco jimbaran", "silent disco rental jimbaran", "headset hire jimbaran bali", "silent party jimbaran"],
    h1: "Silent Disco Rental & Hire in Jimbaran",
    heroSubtitle: "Beachfront events & resort celebrations",
    intro: "Jimbaran is famous for its golden sunsets and beachfront dining — a stunning backdrop for any event. Our silent disco headsets are perfect for sunset parties, resort celebrations, and intimate beachside gatherings. Free delivery to all Jimbaran venues.",
    popularVenues: ["AYANA Resort", "Sundara Beach Club", "Four Seasons Jimbaran", "Rock Bar", "InterContinental Bali", "Jimbaran Beach", "Rimba Jimbaran", "Belmond Jimbaran Puri"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Jimbaran. Could you share availability and pricing?",
    geo: { latitude: -8.7654, longitude: 115.1610 },
    directAnswer: {
      question: "Can I hire silent disco headsets for an event in Jimbaran?",
      answer: "Silent Disco Rental Bali offers free delivery of 300+ premium wireless headsets to all Jimbaran venues including AYANA Resort, Sundara Beach Club, and Four Seasons. Pricing from IDR 100,000 per headset (~$6.50 USD) with 3 LED colour-coded channels. Perfect for sunset parties and beachfront events. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "silent-disco-jakarta",
    location: "Jakarta",
    region: "Indonesia",
    title: "Silent Disco & Conference Headset Rental Jakarta | Trusted by AWS, IBM & Salesforce",
    description: "Silent disco & conference headset rental in Jakarta, Indonesia. 650+ premium wireless headphones for corporate conferences, exhibitions & events. Trusted by AWS, IBM & Salesforce. Delivered from Bali with on-site support.",
    keywords: [
      "silent disco jakarta",
      "silent disco rental jakarta",
      "headset rental jakarta",
      "conference headsets jakarta",
      "conference headset rental jakarta",
      "silent disco rental indonesia",
      "corporate event headsets jakarta",
      "exhibition headphones jakarta",
      "simultaneous translation jakarta",
      "wireless headset hire jakarta",
    ],
    h1: "Silent Disco & Conference Headset Rental Jakarta",
    heroSubtitle: "Trusted by AWS, IBM & Salesforce for Jakarta's biggest international conferences",
    intro: "Jakarta is Indonesia's business capital — the hub for international conferences, product launches, and large-scale corporate events. We've already delivered headsets to Jakarta's biggest brands: AWS (280 headsets), IBM (120 headsets), and Salesforce (600 headsets). Our premium wireless headsets are shipped from Bali with full on-site support, handling everything from multi-track conferences at JCC to corporate galas at five-star hotels. Whether you need simultaneous translation, multi-speaker exhibitions, or a private celebration — we've done it at scale in Jakarta.",
    popularVenues: ["Jakarta Convention Center (JCC)", "ICE BSD", "The Ritz-Carlton Jakarta", "Hotel Indonesia Kempinski", "Fairmont Jakarta", "Balai Kartini", "The Westin Jakarta", "Shangri-La Jakarta"],
    whatsappMessage: "Hi! I'm interested in silent disco headset rental for an event in Jakarta. Could you share availability and pricing?",
    geo: { latitude: -6.2088, longitude: 106.8456 },
    directAnswer: {
      question: "Can I rent silent disco or conference headsets in Jakarta, Indonesia?",
      answer: "Yes — Silent Disco Rental Bali delivers 650+ premium wireless headsets to Jakarta for corporate conferences, exhibitions, and events of any size. We've supplied headsets to AWS, IBM, and Salesforce conferences in Jakarta. Equipment is shipped from Bali with full on-site support. Multi-channel audio with LED colour-coding, perfect for simultaneous translation and multi-track presentations. Contact us via WhatsApp at +62 822 6635 5322 for a Jakarta quote.",
    },
  },
];

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}
