import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/seo/BlogCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-[#5e17eb]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[#5e17eb] font-semibold mb-3">Tips & Guides</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Blog</h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Tips, guides, and inspiration for planning your perfect silent disco event in Bali.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}
