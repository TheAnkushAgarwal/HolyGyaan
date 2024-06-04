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


module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
module.exports = nextConfig
