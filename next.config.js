/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn3.iconfinder.com",
      "i.scdn.co",
      "mosaic.scdn.co",
      "community.spotify.com",
      "links.papareact.com",
    ],
  },
};

module.exports = nextConfig;
