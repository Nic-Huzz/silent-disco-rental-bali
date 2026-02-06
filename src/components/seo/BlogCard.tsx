import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5e17eb] transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-[#5e17eb] font-semibold">
          Read more
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
