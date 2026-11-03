// oxlint-disable sort-keys
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

  turbopack: {
    rules: {
      '*.css': {
        as: '*.css',
        loaders: ['@tailwindcss/turbopack']
      }
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
        protocol: 'https'
      },
      {
        hostname: 'fsjbinvsvbhzonvagiqg.supabase.co',
        pathname: '/storage/v1/**',
        protocol: 'https'
      }
    ]
  }
}

export default nextConfig
