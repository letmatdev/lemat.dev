import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#ffffff',
    description:
      'Matheus Figueiredo is a Software Engineer and Founder of Aval Studio, focused on software architecture, developer experience, and building thoughtful digital products.',
    display: 'standalone',
    icons: [
      {
        purpose: 'any',
        sizes: '192x192',
        src: '/android-chrome-192x192.png',
        type: 'image/png'
      },
      {
        sizes: '512x512',
        src: '/android-chrome-512x512.png',
        type: 'image/png'
      }
    ],
    name: 'Matheus Figueiredo - Software Engineer & Founder',
    scope: '/',
    short_name: 'Matheus',
    start_url: '/',
    theme_color: '#ffffff'
  }
}
