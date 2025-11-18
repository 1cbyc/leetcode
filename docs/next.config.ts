import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nsisong.com",
      },
    ],
  },
};

export default nextConfig;
