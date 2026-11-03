// oxlint-disable shadcn/no-inline-styles shadcn/no-restyle
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/cn'

import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

function Gallery({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('w-full', className)}
      style={{
        columnCount: '2',
        columnGap: '0.75rem'
      }}
      {...props}
    />
  )
}

function GalleryImage({
  src,
  alt,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Image>, 'width' | 'height'>) {
  return (
    <Dialog>
      <figure
        className='m-0 break-inside-avoid'
        style={{
          marginBottom: '0.75rem'
        }}
      >
        <Button
          variant='ghost'
          className='group/button focus-visible:ring-ring/50 block w-full border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2'
          type='button'
          render={<DialogTrigger />}
        >
          <Image
            src={src}
            alt={alt}
            width={400}
            priority
            height={400}
            draggable={false}
            className={cn(
              'border-foreground/5 box-border block w-full rounded-xl border bg-current/5 object-cover transition-opacity group-hover/button:opacity-95',
              className
            )}
            {...props}
          />
        </Button>
      </figure>
      <DialogContent
        className='h-100 p-0'
        closeButtonProps={{
          className: '-top-3 absolute size-6 -right-3',
          size: 'icon',
          variant: 'outline'
        }}
      >
        <AspectRatio ratio={3 / 4}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes='100vw'
            priority
            draggable={false}
            className={cn('size-full rounded-md', className)}
            {...props}
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  )
}

export { Gallery, GalleryImage }
