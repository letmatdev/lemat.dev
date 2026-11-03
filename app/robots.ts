import type { MetadataRoute } from 'next'

import { coreMetadata } from '@/registry/metadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      disallow: '/private/',
      userAgent: '*'
    },
    sitemap: new URL('/sitemap.xml', coreMetadata.domain).toString()
  }
}
