import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { Providers } from '@/app/providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/boooks.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: purple-dark)', color: 'purple-dark' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="zh">
      <body
        className={clsx('min-h-screen bg-background font-sans antialiased')}
      >
        <Providers
          themeProps={{ attribute: 'class', defaultTheme: 'purple-dark' }}
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
