/** @type {import('next').NextConfig} */

const nextConfig = {
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
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "alxhandyman.com",
          },
        ],
        destination: "https://www.alxhandyman.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
