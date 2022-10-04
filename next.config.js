/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: '/sturdy-tribble',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
