import type { MetadataRoute } from 'next'

import { coreMetadata } from '@/registry/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/']

  const allRoutes = [...staticRoutes]

  return allRoutes.map((route) => ({
    url: new URL(route, coreMetadata.domain).toString()
  }))
}
