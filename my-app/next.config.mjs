/** @type {import('next').NextConfig} */

const repo = "/nextjs-cogs125";

const nextConfig = {
  output: "export",
  basePath: repo,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
