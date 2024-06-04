import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from './providers'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Club9',
  description: 'Listen to your favourite playlists, Anytime!',
  icons: [
    {
      url: '/favicon.ico',
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
