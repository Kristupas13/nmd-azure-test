import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: { revalidate: { revalidate: 10 } },
  /* config options here */
};

export default nextConfig;
