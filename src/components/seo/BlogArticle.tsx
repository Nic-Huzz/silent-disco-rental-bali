import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Silent Disco Rental Bali",
      url: "https://www.silentdiscorentalbali.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Silent Disco Rental Bali",
      logo: {
        "@type": "ImageObject",
        url: "https://www.silentdiscorentalbali.com/og-image.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.silentdiscorentalbali.com/blog/${post.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-headline", ".speakable-intro"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.silentdiscorentalbali.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.silentdiscorentalbali.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.silentdiscorentalbali.com/blog/${post.slug}`,
      },
    ],
  };

  // Build HowTo schema from sections that start with "Step N:"
  const howToSteps = post.isHowTo
    ? post.sections
        .filter((s) => /^Step \d/i.test(s.heading))
        .map((s, i) => ({
          "@type": "HowToStep" as const,
          position: i + 1,
          name: s.heading,
          text: s.content,
        }))
    : [];

  const howToSchema = post.isHowTo && howToSteps.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.title,
        description: post.description,
        step: howToSteps,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <main>
        {/* Article Header */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#5e17eb] font-semibold hover:underline mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="speakable-headline text-3xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {post.sections.map((section, index) => (
                <div key={index} className={`mb-10${index === 0 ? " speakable-intro" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Related Links */}
            {post.relatedLinks.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related</h3>
                <div className="flex flex-wrap gap-3">
                  {post.relatedLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="inline-flex items-center gap-2 bg-[#5e17eb]/5 text-[#5e17eb] px-4 py-2 rounded-full font-medium hover:bg-[#5e17eb]/10 transition-colors"
                    >
                      {link.text}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-[#5e17eb] to-[#4a0ea8] rounded-2xl p-8 md:p-12 text-white text-center">
              <p className="text-[#ffdd27] font-semibold mb-2">Ready to Get Started?</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Plan Your Silent Disco
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Get a free quote for your event. We deliver to any venue across Bali.
              </p>
              <a
                href="https://wa.me/6282266355322?text=Hi!%20I%20read%20your%20blog%20and%20I'm%20interested%20in%20hiring%20silent%20disco%20headsets%20for%20an%20event%20in%20Bali."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#5e17eb] px-8 py-4 rounded-full font-semibold hover:bg-[#ffdd27] transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send WhatsApp Message
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
