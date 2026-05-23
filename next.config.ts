/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 1. Proxy the 2026 site
      {
        source: '/2026/:path*',
        destination: 'http://archive.comsnets.org/2026/:path*', 
      },
      // 2. Proxy all previous archives (2006-2025)
      {
        source: '/archive/:path*',
        destination: 'http://archive.comsnets.org/archive/:path*',
      },
      // 3. Proxy the legacy assets (CSS, images from old years)
      {
        source: '/assets/:path*',
        destination: 'http://archive.comsnets.org/assets/:path*',
      },
    ];
  },
};

module.exports = nextConfig; // (Use 'export default nextConfig;' if it's an .mjs file)
