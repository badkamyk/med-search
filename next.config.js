/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/docs/**',
      },
    ],
  },
}

module.exports = nextConfig
