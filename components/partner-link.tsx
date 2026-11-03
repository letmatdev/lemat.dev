// oxlint-disable react/jsx-no-useless-fragment
import type { VariantProps } from 'class-variance-authority'
import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import * as NextLink from 'next/link'

import { cn } from '@/lib/cn'

import { buttonVariants } from './ui/button'
import { DotPattern } from './ui/dot-pattern'

function PartnerLink({
  className,
  variant = 'default',
  size = 'default',
  logo,
  background = 'none',
  children,
  ...props
}: React.ComponentProps<typeof NextLink.default> &
  VariantProps<typeof buttonVariants> & {
    logo?: string
    background?: 'none' | 'dot'
  }) {
  const parseChild = String(children)

  return (
    // oxlint-disable-next-line react/jsx-pascal-case
    <NextLink.default
      className={cn(
        buttonVariants({ size, variant }),
        'w-full relative gap-3 px-3.5 overflow-hidden!',
        className
      )}
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      {logo && (
        <Image
          src={logo}
          alt={parseChild}
          width={28}
          height={28}
          className='size-7 overflow-hidden rounded-full object-contain'
        />
      )}
      <span className='min-w-0 flex-1 truncate font-medium text-inherit'>
        {parseChild}
      </span>
      <ArrowUpRightIcon />
      {background !== 'none' && (
        <>
          {background === 'dot' && (
            <DotPattern
              glow={true}
              className='size-full'
            />
          )}
        </>
      )}
    </NextLink.default>
  )
}

export { PartnerLink }
