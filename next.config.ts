import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression
  compress: true,

  // 301 Redirects from old Wix URLs to new URLs
  async redirects() {
    return [
      {
        source: '/ourstory2',
        destination: '/our-story',
        permanent: true, // 301 redirect
      },
      {
        source: '/guidedexperiences',
        destination: '/retreats',
        permanent: true,
      },
      {
        source: '/s-projects-side-by-side',
        destination: '/conferences',
        permanent: true,
      },
      {
        source: '/s-projects-side-by-side-1',
        destination: '/conferences',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
