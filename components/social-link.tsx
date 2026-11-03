// oxlint-disable shadcn/no-restyle
import NextLink from 'next/link'
import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/cn'

type Social = {
  label: string
  icon: React.ElementType
}

function SocialLink({
  href,
  data,
  className,
  ...props
}: Omit<React.ComponentProps<typeof NextLink>, 'href'> & {
  href: string
  data: Social
}) {
  const Icon = data.icon

  const title = data.label

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <NextLink
            href={href}
            title={title}
            aria-label={title}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              'transition-opacity hover:opacity-75',
              className
            )}
            {...props}
          />
        }
      >
        <Icon className='size-4.5' />
      </TooltipTrigger>

      <TooltipContent sideOffset={10}>{title}</TooltipContent>
    </Tooltip>
  )
}

export { SocialLink }
