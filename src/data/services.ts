export interface ServicePage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  heroSubtitle: string;
  intro: string;
  benefits: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  whatsappMessage: string;
  directAnswer: { question: string; answer: string };
}

export const services: ServicePage[] = [
  {
    slug: "weddings",
    title: "Silent Disco Hire for Weddings in Bali",
    description: "Silent disco headset hire for Bali weddings. Keep the party going without noise complaints. 300+ premium headsets, 3 music channels. Free delivery island-wide.",
    keywords: ["silent disco wedding bali", "wedding headset hire bali", "silent disco wedding reception", "bali wedding entertainment"],
    h1: "Silent Disco Hire for Weddings in Bali",
    heroSubtitle: "Keep the party going all night — without a single noise complaint",
    intro: "Your Bali wedding deserves an unforgettable after-party. With our silent disco headsets, guests choose between 3 music channels — from romantic classics to dance-floor bangers — while keeping villa neighbours happy. It's the wedding entertainment everyone talks about.",
    benefits: [
      {
        title: "No Noise Complaints",
        description: "Party past midnight at any Bali villa or venue without disturbing neighbours or violating curfews.",
      },
      {
        title: "3 Music Channels",
        description: "Let your guests choose between genres — everyone hears what they love. Colour-coded LEDs show who's on which channel.",
      },
      {
        title: "All Ages Welcome",
        description: "Kids can take headsets off, grandparents can chat easily, and party-lovers can dance all night. Everyone's happy.",
      },
      {
        title: "Stunning Photo Moments",
        description: "Guests singing along at full volume while others hear nothing — the photos and videos are always hilarious and memorable.",
      },
    ],
    steps: [
      {
        title: "Tell Us Your Date & Venue",
        description: "Send us a WhatsApp with your wedding date, venue, and estimated guest count.",
      },
      {
        title: "We Deliver & Set Up",
        description: "We arrive with headsets, transmitters, and all equipment. Setup takes about 15 minutes.",
      },
      {
        title: "Party All Night",
        description: "Your guests grab headsets and dance! We collect everything the next day.",
      },
    ],
    whatsappMessage: "Hi! I'm planning a wedding in Bali and I'd love to hire silent disco headsets. Could you share availability and pricing?",
    directAnswer: {
      question: "Can I hire silent disco headsets for a wedding in Bali?",
      answer: "Yes — Silent Disco Rental Bali provides 300+ premium wireless headsets for wedding receptions and after-parties across Bali. Guests choose between 3 music channels with colour-coded LEDs, and you can party past midnight without noise complaints. Pricing from IDR 100,000 per headset (~$6.50 USD) with free delivery to any venue. Book via WhatsApp at +62 822 6635 5322.",
    },
  },
  {
    slug: "beach-parties",
    title: "Silent Disco for Beach Parties in Bali",
    description: "Silent disco headset rental for Bali beach parties. Dance on the sand without noise restrictions. 300+ premium headsets, 3 channels. Free delivery island-wide.",
    keywords: ["silent disco beach party bali", "beach party headsets bali", "silent beach party", "bali beach event equipment"],
    h1: "Silent Disco for Beach Parties in Bali",
    heroSubtitle: "Dance on the sand, under the stars — no speakers required",
    intro: "Bali's beaches are magical — but most have strict noise curfews. With silent disco headsets, your beach party goes as long as you want. Three channels of music, colour-coded LEDs lighting up the shoreline, and zero noise complaints. It's the ultimate Bali beach experience.",
    benefits: [
      {
        title: "Beat the Curfew",
        description: "Most Bali beaches enforce noise limits after 10 PM. Silent disco lets you party well past midnight.",
      },
      {
        title: "Crystal-Clear Sound",
        description: "No wind interference, no competing waves — Hi-Fi audio delivered straight to your ears no matter the weather.",
      },
      {
        title: "3 DJs, 1 Dance Floor",
        description: "Run three different DJs or playlists simultaneously. Guests switch between channels with a tap.",
      },
      {
        title: "Easy Beach Setup",
        description: "No heavy speakers to carry onto the sand. Our compact transmitters set up in minutes anywhere.",
      },
    ],
    steps: [
      {
        title: "Choose Your Beach",
        description: "Tell us the beach, date, and expected number of guests via WhatsApp.",
      },
      {
        title: "We Deliver Everything",
        description: "Headsets, transmitters, and equipment delivered directly to the beach. Setup in 15 minutes.",
      },
      {
        title: "Dance Under the Stars",
        description: "Your guests put on headsets and the party begins! We collect everything after the event.",
      },
    ],
    whatsappMessage: "Hi! I'm planning a beach party in Bali and I'd love to hire silent disco headsets. Could you share availability and pricing?",
    directAnswer: {
      question: "How do I rent headphones for a beach party in Bali?",
      answer: "Silent Disco Rental Bali delivers 300+ premium wireless headsets free to any beach across the island. Dance on the sand with zero noise restrictions — our headsets have a 200-metre range, 10-hour battery, and 3 music channels with LED colour-coding. Pricing from IDR 100,000 per headset (~$6.50 USD). Book via WhatsApp at +62 822 6635 5322.",
    },
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
