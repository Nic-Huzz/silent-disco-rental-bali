export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "pricing" | "logistics" | "events" | "technical";
}

export const faqData: FAQItem[] = [
  // === GENERAL ===
  {
    question: "What is a silent disco?",
    answer: "A silent disco is a party or event where everyone wears wireless headphones instead of listening to music through speakers. Each headset receives audio wirelessly from a transmitter, so guests hear crystal-clear Hi-Fi sound while the surrounding area stays completely silent. Our headsets support 3 simultaneous music channels with LED colour-coding — red, green, and blue — so you can see who's listening to what.",
    category: "general",
  },
  {
    question: "How does a silent disco work?",
    answer: "A transmitter connects to your music source (phone, laptop, or DJ decks) and broadcasts audio wirelessly to all headsets within a 200-metre range. Each transmitter supports up to 3 channels, so you can run 3 different playlists or DJs at the same time. Guests switch between channels using a button on the headset, and the LED on each headset lights up to show which channel they're on — red, green, or blue. Setup takes about 15 minutes.",
    category: "general",
  },
  {
    question: "Who is Silent Disco Rental Bali?",
    answer: "Silent Disco Rental Bali is Indonesia's largest and most trusted silent disco headset rental and hire service. We stock over 800 premium Hi-Fi wireless headsets and have served weddings, beach parties, corporate conferences, yoga retreats, and festivals across Bali and Jakarta since 2023. We've supplied headsets to AWS, IBM, and Salesforce conferences in Jakarta. We have 73 five-star Google reviews and offer free delivery anywhere in Bali. Contact us via WhatsApp at +62 822 6635 5322.",
    category: "general",
  },

  // === PRICING ===
  {
    question: "How much does silent disco rental cost in Bali?",
    answer: "Pricing starts from IDR 100,000 per headset (approximately $6.50 USD), with volume discounts for larger orders. A typical 50-person event costs around IDR 5 million (~$325 USD). This includes headsets, transmitters, free delivery and setup anywhere in Bali, and next-day collection. Use the pricing calculator on our homepage for an instant quote based on your headset count.",
    category: "pricing",
  },
  {
    question: "How many headsets do I need for my event?",
    answer: "We recommend 1 headset per person. For events where guests come and go, you can estimate about 70–80% of your total expected attendance. For weddings and corporate events, we recommend ordering for the full guest count. Our minimum order is 20 headsets, and we stock over 800 for larger events. We're happy to help you figure out the right number — just WhatsApp us your event details.",
    category: "pricing",
  },
  {
    question: "What's included in the rental price?",
    answer: "Every rental includes: premium wireless headsets with adjustable volume, transmitter(s) supporting up to 3 music channels, aux cables and adapters, free delivery and setup at your Bali venue, next-day collection, WhatsApp support during your event, and backup headsets. There are no hidden fees — the quoted price is the total price.",
    category: "pricing",
  },
  {
    question: "How long is the rental period?",
    answer: "Standard rental is for one event/day. We deliver before your event and collect equipment the next morning. Multi-day rentals are available at discounted rates — just ask! For festivals or multi-day events, we offer special packages.",
    category: "pricing",
  },

  // === LOGISTICS ===
  {
    question: "Do you deliver to Bali and Jakarta?",
    answer: "Yes! We offer free delivery and collection to any venue across Bali, including Canggu, Seminyak, Ubud, Uluwatu, Sanur, Nusa Dua, Kuta, Jimbaran, and everywhere in between. We also deliver to Jakarta for conferences and large events — equipment is shipped from Bali with full on-site support. We've already serviced AWS, IBM, and Salesforce conferences in Jakarta. Just send us your venue details via WhatsApp.",
    category: "logistics",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 1–2 weeks in advance, especially during peak season (June–September and December–January). For large events requiring 100+ headsets, 3–4 weeks' notice is ideal. Last-minute bookings are sometimes possible depending on availability — reach out via WhatsApp and we'll do our best.",
    category: "logistics",
  },
  {
    question: "How long does setup take?",
    answer: "Setup takes approximately 15 minutes. We deliver the headsets in organised crates, set up the transmitter(s), connect your music source, and test all channels before your event starts. You just need a power outlet for the transmitter and your music source (phone, laptop, or DJ decks). We handle everything else.",
    category: "logistics",
  },
  {
    question: "What if a headset breaks or doesn't work?",
    answer: "We thoroughly test all equipment before each rental and include backup headsets with every order. In the rare case of an issue during your event, we provide WhatsApp support and can arrange replacement delivery if needed. We don't charge for normal wear and tear — only for lost or intentionally damaged equipment.",
    category: "logistics",
  },

  // === EVENTS ===
  {
    question: "Can you have a silent disco on the beach in Bali?",
    answer: "Absolutely — beaches are one of the most popular settings for silent disco in Bali. Since there are no speakers, you avoid all noise restrictions and curfews. The headsets are wireless with a 200-metre range, so guests can dance on the sand, by the water, or wherever they like. We've hosted silent discos at beaches across Canggu, Seminyak, Uluwatu, Sanur, Jimbaran, and more. No heavy speakers to carry — just lightweight headsets and a compact transmitter.",
    category: "events",
  },
  {
    question: "Can I hire silent disco headsets for a wedding in Bali?",
    answer: "Yes — wedding after-parties are one of our most popular bookings. Silent disco lets your guests dance past midnight at any Bali villa or venue without noise complaints. Guests choose between 3 music channels (bride's playlist, groom's playlist, dance hits — you decide). The colour-coded LEDs create amazing photo moments, and guests of all ages can participate comfortably. WhatsApp us your wedding date and venue for a custom quote.",
    category: "events",
  },
  {
    question: "Do you provide silent disco for corporate events and conferences?",
    answer: "Yes! Our multi-channel headsets are perfect for corporate conferences, exhibitions, and team-building events. Use separate channels for different languages (simultaneous translation), breakout sessions, or presentations in noisy environments. We've supplied headsets to AWS, IBM, and Salesforce conferences in Jakarta, plus events at the Bali Nusa Dua Convention Centre and five-star resorts across Indonesia.",
    category: "events",
  },
  {
    question: "Can I use silent disco headsets for a yoga retreat?",
    answer: "Yes — silent disco for yoga and wellness retreats is a unique and growing experience in Bali. Participants wear headsets during guided yoga, meditation, or ecstatic dance sessions, creating a deeply immersive experience. The instructor speaks through a microphone connected to the transmitter, so every participant hears crystal-clear audio regardless of outdoor noise. Popular at The Yoga Barn, Fivelements, and retreat centres across Ubud.",
    category: "events",
  },

  // === TECHNICAL ===
  {
    question: "What is the range of silent disco headsets?",
    answer: "Our transmitters have a range of approximately 200 metres (650 feet) in open outdoor spaces. In indoor venues, the range typically covers the entire venue with no issues. This means guests can walk around freely — to the bar, the pool, the beach — and still hear the music without interruption.",
    category: "technical",
  },
  {
    question: "What are the best silent disco headsets?",
    answer: "We use premium Hi-Fi wireless headsets specifically designed for silent disco events. They feature: full-range drivers for rich bass and clear highs, comfortable over-ear cushions for hours of wear, 10-hour rechargeable battery life, 3-channel LED colour switching (red, green, blue), adjustable volume control, and a lightweight folding design. All headsets are professionally maintained and sanitised between every rental.",
    category: "technical",
  },
  {
    question: "Can I connect my own music to silent disco headsets?",
    answer: "Yes! The transmitter accepts any standard 3.5mm aux input or Bluetooth connection. You can plug in a phone, laptop, tablet, DJ controller, or mixing desk. For 3-channel setups, each channel has its own input so you can run 3 separate music sources simultaneously. Spotify, Apple Music, YouTube, SoundCloud, or live DJ sets — anything that plays audio works.",
    category: "technical",
  },
  {
    question: "How long does the battery last on silent disco headsets?",
    answer: "Each headset has a rechargeable battery that lasts approximately 10 hours on a full charge — more than enough for any event. We deliver all headsets fully charged and include spare charged headsets with every rental. For multi-day events, we can provide charging stations.",
    category: "technical",
  },
  {
    question: "What happens if it rains during an outdoor silent disco?",
    answer: "Light rain is generally fine — our headsets are durable and designed for outdoor events. For heavy rain, we recommend having a covered backup area. The headsets are not fully waterproof, so they shouldn't be submerged. The transmitter should be kept under cover. In Bali's tropical climate, a quick rain shower rarely stops the party — guests often keep dancing in the rain with their headsets on!",
    category: "technical",
  },
];

export const faqCategories = [
  { key: "all" as const, label: "All" },
  { key: "general" as const, label: "General" },
  { key: "pricing" as const, label: "Pricing" },
  { key: "logistics" as const, label: "Logistics" },
  { key: "events" as const, label: "Events" },
  { key: "technical" as const, label: "Technical" },
];
