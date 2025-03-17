/** @type {import('next').NextConfig} */

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: [
      "alxhandyman.com",
      "www.alxhandyman.com",
      "handyman-two.vercel.app",
      "vercel.app",
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
