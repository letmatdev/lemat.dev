import React from 'react'

import { cn } from '@/lib/cn'

import { Transmutation } from './transmutation'

function Section({
  children,
  className,
  title,
  ...props
}: React.ComponentProps<'div'> & {
  title?: string
}) {
  const hasTitle = Boolean(title)

  return (
    <div
      className='group relative'
      {...props}
    >
      <div
        className={cn(
          'min-w-0 py-4',
          hasTitle && 'flex w-full flex-col items-start gap-4',
          className
        )}
      >
        {hasTitle && (
          <Transmutation time={0.6}>
            <h2 className='text-muted-foreground m-0 text-left text-xs leading-snug font-semibold'>
              {title}
            </h2>
          </Transmutation>
        )}
        {children}
      </div>
    </div>
  )
}

export { Section }
