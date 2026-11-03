// oxlint-disable github/prefer-observers react/purity shadcn/no-raw-colors no-shadow
'use client'

import { domAnimation, LazyMotion, m } from 'motion/react'
import React, { useEffect, useId, useRef, useState } from 'react'

import { cn } from '@/lib/cn'

function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: React.ComponentProps<'svg'> & {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  glow?: boolean
}) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  })

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) {
        return
      }

      const { width, height } =
        containerRef.current.getBoundingClientRect()

      setDimensions({ height, width })
    }

    updateDimensions()

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const columns = Math.ceil(dimensions.width / width)

  const dots = Array.from(
    {
      length: columns * Math.ceil(dimensions.height / height)
    },
    (_, i) => {
      const col = i % columns
      const row = Math.floor(i / columns)

      return {
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        x: col * width + cx + x,
        y: row * height + cy + y
      }
    }
  )

  return (
    <LazyMotion features={domAnimation}>
      <svg
        ref={containerRef}
        aria-hidden='true'
        className={cn(
          'pointer-events-none absolute inset-0 h-full w-full text-neutral-500/80',
          className
        )}
        {...props}
      >
        <defs>
          <radialGradient id={`${id}-gradient`}>
            <stop
              offset='0%'
              stopColor='currentColor'
              stopOpacity='1'
            />
            <stop
              offset='100%'
              stopColor='currentColor'
              stopOpacity='0'
            />
          </radialGradient>
        </defs>

        {dots.map((dot) => (
          <m.circle
            key={`${dot.x}-${dot.y}`}
            cx={dot.x}
            cy={dot.y}
            r={cr}
            fill={glow ? `url(#${id}-gradient)` : 'currentColor'}
            initial={glow ? { opacity: 0.4, scale: 1 } : false}
            animate={
              glow
                ? {
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.5, 1]
                  }
                : {}
            }
            transition={
              glow
                ? {
                    delay: dot.delay,
                    duration: dot.duration,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                : {}
            }
          />
        ))}
      </svg>
    </LazyMotion>
  )
}

export { DotPattern }
