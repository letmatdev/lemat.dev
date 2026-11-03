// oxlint-disable shadcn/no-restyle
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/cn'

import { Transmutation } from './transmutation'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from './ui/item'
import { Separator } from './ui/separator'

type EntryLogo = string | React.ElementType

export type EntryDataItem = {
  title: string
  href: string
  logo?: EntryLogo
}

export type EntryData = {
  logo?: EntryLogo
  period?: string
  ref: string
  items?: (string | EntryDataItem)[]
  title: string
}

function EntryLogoView({
  logo,
  title,
  className
}: {
  logo: EntryLogo
  title: string
  className?: string
}) {
  if (typeof logo === 'string') {
    return (
      <Image
        src={logo}
        alt={title}
        width={16}
        height={16}
        draggable={false}
        priority
        className={cn('object-contain mix-blend-multiply', className)}
      />
    )
  }

  const Logo = logo

  return (
    <Logo
      aria-hidden='true'
      className='size-6'
    />
  )
}

function EntryCard({
  data,
  multipleItems = false,
  className,
  ...props
}: React.ComponentProps<typeof Item> & {
  data: EntryData
  multipleItems?: boolean
}) {
  return (
    <Item
      className={cn('min-h-12 gap-3 p-0', className)}
      {...props}
    >
      {data.logo && (
        <ItemMedia className='overflow-hidden rounded-full shadow-xs'>
          <EntryLogoView
            logo={data.logo}
            title={data.title}
            className='size-11'
          />
        </ItemMedia>
      )}

      <ItemContent className='relative justify-center overflow-hidden *:text-sm'>
        <div className='flex w-full min-w-0 items-baseline justify-between gap-3'>
          <ItemTitle className={cn(multipleItems && 'mb-1')}>
            {data.title}
          </ItemTitle>

          {data.period && (
            <span className='text-muted-foreground shrink-0 text-xs leading-normal tabular-nums'>
              {data.period}
            </span>
          )}
        </div>

        <div className='relative flex flex-col gap-1.5'>
          {multipleItems && (
            <Separator
              orientation='vertical'
              className='absolute top-3 bottom-1 left-2'
            />
          )}

          {data.items &&
            data.items.map((item) => {
              const title =
                typeof item === 'string' ? item : item.title
              const href =
                typeof item === 'string' ? undefined : item.href
              const logo =
                typeof item === 'string' ? undefined : item.logo

              return (
                <Transmutation key={title}>
                  <ItemDescription
                    className={cn(
                      'relative ml-0 inline-flex select-none items-center gap-1.5 transition-colors hover:text-foreground',
                      multipleItems &&
                        'pl-5 after:absolute after:top-2 after:left-2 after:size-0.5 after:rounded-r-full after:bg-muted-foreground after:transition-all hover:after:w-1.5'
                    )}
                  >
                    {logo && (
                      <EntryLogoView
                        logo={logo}
                        title={title}
                        className='size-4 shrink-0'
                      />
                    )}

                    {href ? (
                      <a
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-baseline gap-1 outline-none'
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </ItemDescription>
                </Transmutation>
              )
            })}
        </div>
      </ItemContent>
    </Item>
  )
}

export { EntryCard }
