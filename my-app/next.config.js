const repo = "nextjs-cogs125";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;