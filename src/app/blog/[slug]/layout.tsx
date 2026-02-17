import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return {
    title: { absolute: post.title },
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.silentdiscorentalbali.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.silentdiscorentalbali.com/blog/${post.slug}`,
      siteName: "Silent Disco Rental Bali",
      type: "article",
      locale: "en_US",
      publishedTime: post.date,
      authors: ["Silent Disco Rental Bali"],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
