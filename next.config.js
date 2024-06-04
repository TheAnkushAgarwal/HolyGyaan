/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};


module.exports = nextConfig
