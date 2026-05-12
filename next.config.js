/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use basePath if your URL is yourusername.github.io/repo-name/
  // basePath: '/repo-name', 
};

module.exports = nextConfig;
