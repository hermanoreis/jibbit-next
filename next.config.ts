import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    optimizePackageImports: ["@tabler/icons-react", "lucide-react"],
  },
};

export default nextConfig;
