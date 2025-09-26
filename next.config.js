/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website'
}

module.exports = nextConfig