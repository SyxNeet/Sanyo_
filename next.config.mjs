/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    remotePatterns: [{protocol: 'https', hostname: '**'}],
  },
}

export default nextConfig
