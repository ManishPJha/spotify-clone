/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.discordapp.com',
        protocol: 'https',
      },
      {
        hostname: 'storage.googleapis.com',
        protocol: 'https',
      },
      {
        hostname: 'picsum.photos',
        protocol: 'https',
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https',
      },
    ],
  },
  // reactStrictMode: false,
}

module.exports = nextConfig
