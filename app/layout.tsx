import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from './providers'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './globals.css'
import './tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Create your favourite playlists, Anytime!',
  icons: [
    {
      url: '/favicon.png',
      type: 'image/png',
      sizes: '474x474',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
