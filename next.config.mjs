/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lano.s3.eu-north-1.amazonaws.com"],
  },
  exports: {
    experimental: { appDir: true },
  },
};

export default nextConfig;
