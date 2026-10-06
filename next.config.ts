import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // TODO: remove once real firm photography is added to /public
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
