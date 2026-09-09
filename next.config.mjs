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
  poweredByHeader: false,
  compress: true,
  eslint: {
    dirs: ["app", "components", "data", "lib", "types"],
  },
  async redirects() {
    return [
      ...["portret", "gastronomia", "wnetrza", "event", "biznes", "lifestyle"].map((category) => ({
        source: "/portfolio",
        has: [{ type: "query", key: "kategoria", value: category }],
        destination: `/portfolio/${category}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
