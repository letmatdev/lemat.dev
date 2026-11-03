'use client'

import { LazyMotion, domAnimation, m } from 'motion/react'
import type { ComponentProps } from 'react'

export function Transmutation({
  time = 0.6,
  ...props
}: ComponentProps<typeof m.div> & {
  time?: number
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ filter: 'blur(8px)', opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', opacity: 1 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: time, ease: 'easeOut' }}
        {...props}
      />
    </LazyMotion>
  )
}
