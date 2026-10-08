/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site has no backend, so Netlify serves plain HTML from /out.
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Security headers live in netlify.toml — headers() is not supported with static export.
}

export default nextConfig
