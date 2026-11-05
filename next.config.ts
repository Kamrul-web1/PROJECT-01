import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    unoptimized:true
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
