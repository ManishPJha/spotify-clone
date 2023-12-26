import Header from '@/partials/header'
import Sidebar from '@/partials/sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col">
          <div className="flex flex-1 justify-between">
            <Header />
            <Sidebar />
            <main className="flex-1 p-6 max-h-screen overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
