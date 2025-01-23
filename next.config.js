import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Added Cloudinary domain
      },
      {
        protocol: "https",
        hostname: "notion-avatar.vercel.app", // Corrected notion-avatar hostname
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/vks",
        destination: "https://www.linkedin.com/in/vansh-kumar-singh-711924204", // Replace with your LinkedIn profile URL
        permanent: false, // Use false for a 302 (temporary) redirect
      },
    ];
  },
  serverExternalPackages: ["@prisma/client"], // Updated key from experimental.serverComponentsExternalPackages
};

module.exports = nextConfig;