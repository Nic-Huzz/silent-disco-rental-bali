import Image from "next/image";

export default function ClientLogos() {
  const clients = [
    { name: "Sundays Beach Club", logo: "/images/brands/logos/brand-logo-1.png" },
    { name: "Echo Beach", logo: "/images/brands/logos/brand-logo-2.png" },
    { name: "The Istana", logo: "/images/brands/logos/brand-logo-3.jpg" },
    { name: "Alchemy", logo: "/images/brands/logos/brand-logo-4.png" },
    { name: "Mantra", logo: "/images/brands/logos/brand-logo-5.png" },
    { name: "AWS", logo: "/images/brands/logos/brand-logo-6.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#1400FF] font-semibold mb-2">Trusted By</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Serving Bali&apos;s Biggest Brands & Events
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Plus: IBM, Epson, Hotel Indigo, Uma Beach House, The Nest Hotel & more
        </p>
      </div>
    </section>
  );
}
