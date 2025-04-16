// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // 👈 Sanity images allowed here
  },
};

module.exports = nextConfig;

