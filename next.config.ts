import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@tabler/icons-react", "lucide-react"],
  },
};

export default nextConfig;
