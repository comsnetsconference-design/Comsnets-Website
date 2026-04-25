import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/2026/:path*',
        destination: 'https://www.comsnets.org/archive/2026/:path*',
        permanent: false,
      },
      {
        source: '/archive/:path*',
        destination: 'https://www.comsnets.org/archive/:path*',
        permanent: false,
      },
      {
        source: '/assets/images/:path*',
        destination: 'https://www.comsnets.org/assets/images/:path*',
        permanent: false,
      }
    ];
  },
};
export default nextConfig;
