import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/2026/:path*',
        destination: 'https://www.comsnets.org/archive/2026/:path*',
      },
      {
        source: '/archive/:path*',
        destination: 'https://www.comsnets.org/archive/:path*',
      },
      {
        source: '/assets/:path*',
        destination: 'https://www.comsnets.org/assets/:path*'
      }
    ];
  },
};
export default nextConfig;
