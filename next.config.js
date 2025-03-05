/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], // For GitHub and Google avatar images
  },
};

module.exports = nextConfig;
