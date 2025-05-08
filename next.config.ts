
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Keep existing picsum.photos
        port: '',
        pathname: '/**',
      },
      // Removed the duplicate picsum entry
    ],
  },
};

export default nextConfig;
