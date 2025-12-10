import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable Next.js image optimization to avoid broken logo on production CDN
    unoptimized: true,
  },
};

export default nextConfig;
