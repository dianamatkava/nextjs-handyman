/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "alxhandyman.com",
      "www.alxhandyman.com",
      "handyman-two.vercel.app",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
