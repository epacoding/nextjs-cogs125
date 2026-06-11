/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/nextjs-cogs125' : '',
  assetPrefix: isProd ? '/nextjs-cogs125/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;