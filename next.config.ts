import type { NextConfig } from "next";

const config: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [{ source: "/roadmap", destination: "/certs", permanent: false }];
  },
};

export default config;
