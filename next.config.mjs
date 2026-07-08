/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Unsplash already serves modern, right-sized formats via `auto=format` +
    // the `w=` param, so we skip Next's optimizer for these remote images
    // (avoids a runtime dependency on sharp/outbound fetch that can be flaky).
    // Local /public assets are already tiny SVGs.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
