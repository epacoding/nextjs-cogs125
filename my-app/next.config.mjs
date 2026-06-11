/** @type {import('next').NextConfig} */

const basePath = "/nextjs-cogs125";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
