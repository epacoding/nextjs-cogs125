/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  basePath: "/nextjs-cogs125",
  assetPrefix: "/nextjs-cogs125",
  images: {
    unoptimized: true,
  },
};

export default nextConfig
