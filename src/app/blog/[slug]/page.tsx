import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import BlogArticle from "@/components/seo/BlogArticle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <BlogArticle post={post} />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
}
