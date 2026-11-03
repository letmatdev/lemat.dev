import type { Metadata } from 'next'

import { coreMetadata } from '@/registry/metadata'

export const constructMetadata = ({
  title,
  description,
  referrer = 'strict-origin-when-cross-origin',
  keywords,
  creator = coreMetadata.creator,
  ...rest
}: Metadata): Metadata => {
  const MODELED_TITLE = `${coreMetadata.title} - ${title}`
  const MIXED_KEYWORDS = Array.isArray(keywords)
    ? [...keywords, ...coreMetadata.keywords]
    : coreMetadata.keywords

  return {
    alternates: {
      canonical: '/'
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: MODELED_TITLE
    },
    applicationName: coreMetadata.title,
    creator,
    description,
    formatDetection: {
      address: false,
      date: false,
      email: false,
      telephone: false,
      url: false
    },
    icons: {
      apple: '/apple-touch-icon.png',
      icon: '/favicon.ico'
    },
    keywords: MIXED_KEYWORDS,
    metadataBase: coreMetadata.domain,
    openGraph: {
      description: description ?? undefined,
      images: ['/me.jpeg'],
      siteName: coreMetadata.title,
      title: MODELED_TITLE,
      type: 'website',
      url: coreMetadata.domain
    },
    publisher: coreMetadata.creator,
    referrer,
    title: MODELED_TITLE,
    twitter: {
      card: 'summary',
      description,
      images: ['/me.jpeg'],
      title: MODELED_TITLE
    },
    ...rest
  }
}
