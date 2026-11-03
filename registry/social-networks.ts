import { GithubIcon } from '@/components/icons/social/github'
import { InstagramIcon } from '@/components/icons/social/instagram'
import { LinkedInIcon } from '@/components/icons/social/linkedin'
import { ThreadsIcon } from '@/components/icons/social/threads'
import { XTwitterIcon } from '@/components/icons/social/x-twitter'
import { YoutubeIcon } from '@/components/icons/social/youtube'

export const socialNetworks = [
  {
    href: 'https://github.com/letmatdev',
    icon: GithubIcon,
    id: 'github',
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/matheussfigueiredo/',
    icon: LinkedInIcon,
    id: 'linkedin',
    label: 'LinkedIn'
  },
  {
    href: 'https://x.com/letmat_code',
    icon: XTwitterIcon,
    id: 'x',
    label: 'X (Twitter)'
  },
  {
    href: 'https://www.instagram.com/letmat.dev/',
    icon: InstagramIcon,
    id: 'instagram',
    label: 'Instagram'
  },
  {
    href: 'https://www.threads.com/@letmat.code',
    icon: ThreadsIcon,
    id: 'threads',
    label: 'Threads'
  },
  {
    href: 'https://www.youtube.com/@letmatdev',
    icon: YoutubeIcon,
    id: 'youtube',
    label: 'YouTube'
  }
] as const
