/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  }
}

module.exports = nextConfig