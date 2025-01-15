const { withContentlayer } = require("next-contentlayer");

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
    ],
  },
  serverExternalPackages: ["@prisma/client"], // Updated key from experimental.serverComponentsExternalPackages
};

module.exports = withContentlayer(nextConfig);