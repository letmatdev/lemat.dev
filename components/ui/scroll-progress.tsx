'use client'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform
} from 'motion/react'

import { cn } from '@/lib/cn'

export function ScrollProgress({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof m.div> & {
  ref?: React.Ref<HTMLDivElement>
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-1 origin-left scale-x-[var(--scroll-progress)] bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]',
          className
        )}
        style={
          {
            '--scroll-progress': scaleX
          } as React.CSSProperties
        }
        {...props}
      />
    </LazyMotion>
  )
}
