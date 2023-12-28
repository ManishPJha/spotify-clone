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
    ],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
