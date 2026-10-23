/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  trailingSlash: false,

  async redirects() {
    return [
      // Trailing slash
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/privacy/', destination: '/privacy', permanent: true },
      { source: '/case-studies/', destination: '/case-studies', permanent: true },
      { source: '/services/:slug/', destination: '/services/:slug', permanent: true },
      { source: '/case-studies/:slug/', destination: '/case-studies/:slug', permanent: true },

      // Old paths
      { source: '/our-work', destination: '/case-studies', permanent: true },
      { source: '/our-work/', destination: '/case-studies', permanent: true },
      { source: '/projects', destination: '/case-studies', permanent: true },
      { source: '/projects/', destination: '/case-studies', permanent: true },
      { source: '/work', destination: '/case-studies', permanent: true },
      { source: '/work/', destination: '/case-studies', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/team/', destination: '/about', permanent: true },
      { source: '/our-team', destination: '/about', permanent: true },
      { source: '/our-team/', destination: '/about', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
