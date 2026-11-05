// oxlint-disable react-doctor/nextjs-no-img-element
import { Geist } from 'next/font/google'

import { ScrollProgress } from '@/components/ui/scroll-progress'
import { TooltipProvider } from '@/components/ui/tooltip'
import { constructMetadata } from '@/utils/construct-metadata'

import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans'
})

export const metadata = constructMetadata({
  description:
    'Matheus Figueiredo is a Software Engineer and Founder of Aval Studio, focused on software architecture, developer experience, and building thoughtful digital products.',
  title: 'Software Engineer & Founder'
})

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.className} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <ScrollProgress />
        <TooltipProvider>
          <>
            {children}
            <footer className='flex flex-col gap-2 px-4 py-8 text-center'>
              <p className='text-foreground mx-auto w-full max-w-xs font-mono text-xs italic'>
                &quot;So whether you eat or drink or whatever else you
                do, do it all for the glory of God.&quot; ~ 1
                Corinthians 10:31
              </p>
            </footer>
          </>
        </TooltipProvider>
      </body>
    </html>
  )
}
