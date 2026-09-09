/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["app", "components", "data", "lib", "types"],
  },
};

export default nextConfig;
