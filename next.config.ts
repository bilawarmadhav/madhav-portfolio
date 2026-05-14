import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use webpack instead of Turbopack (required on this platform)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Hide the dev build indicator badge ("1 Issue" / route info overlay)
  devIndicators: false,
};

export default nextConfig;
