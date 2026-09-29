import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  basePath: process.env.GITHUB_PAGES === "true" ? "/savyl-portfolio" : undefined,
  output: process.env.GITHUB_PAGES === "true" ? "export" : undefined,
  images: {
    unoptimized: process.env.GITHUB_PAGES === "true",
  },
};

export default nextConfig;
