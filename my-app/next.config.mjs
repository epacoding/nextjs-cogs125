/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/my-app/' : '',
  basePath: isProd ? '/my-app' : '',
  output: 'export'
};

export default nextConfig;
