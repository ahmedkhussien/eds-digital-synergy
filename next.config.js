/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Force static HTML export for Hostinger deployment compatibility
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
