/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn3.iconfinder.com", "i.scdn.co"],
  },
};

module.exports = nextConfig;
