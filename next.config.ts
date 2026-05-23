/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. Redirect the 2026 site
      {
        source: '/2026/:path*',
        destination: 'http://archive.comsnets.org/2026/:path*', 
        permanent: false,
      },
      // 2. Redirect all previous archives (2006-2025)
      {
        source: '/archive/:path*',
        destination: 'http://archive.comsnets.org/archive/:path*',
        permanent: false,
      },
      // 3. Redirect the legacy assets (CSS, images from old years)
      {
        source: '/assets/:path*',
        destination: 'http://archive.comsnets.org/assets/:path*',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig; // (Use 'export default nextConfig;' if it's an .mjs file)
