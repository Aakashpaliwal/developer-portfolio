/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/developer-portfolio', 
  assetPrefix: '/developer-portfolio/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
