/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  images: {
    qualities: [70, 75, 100],
  },
}

export default nextConfig
