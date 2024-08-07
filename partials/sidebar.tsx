'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import { FiHeart as HeartIcon, FiPlus as PlusIcon } from 'react-icons/fi'
import { MdLibraryMusic as LibraryIcon } from 'react-icons/md'
import {
  RiHome4Fill as HomeIcon,
  RiSearchLine as SearchIcon,
} from 'react-icons/ri'

import { createButton } from '@/app/ui/buttons/button-with-redirect'
import Typography from '@/app/ui/typography'
import { playlists } from '@/lib/constants'
import Logo from '@public/images/icons/club9.png'

const Sidebar = memo(function Sidebar() {
  const pathname = usePathname()
  const [isMobileWindow, setIsMobileWindow] = useState(false)

  const isHomePage = pathname === '/'
  const isSearchPage = pathname === '/search'
  const isLibraryPage = pathname === '/library'

  const HomeButton = createButton(HomeIcon, 'Home', '/', isHomePage)
  const SearchButton = createButton(
    SearchIcon,
    'Search',
    '/search',
    isSearchPage
  )
  const LibraryButton = createButton(
    LibraryIcon,
    'Your library',
    '/library',
    isLibraryPage
  )

  const PlaylistLinks = () => (
    <>
      {playlists.map((playlist, index) => (
        <Link key={index} className="text-sm text-zinc-300" href="#">
          {playlist}
        </Link>
      ))}
    </>
  )

  // use effect to detect mobile screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobileWindow(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobileWindow) return null

  return (
    <aside className="w-64 bg-black p-6 border-r border-r-zinc-400">
      <div className="flex justify-start items-center cursor-pointer">
        <Image priority src={Logo} alt="spotify-logo" height={100} width={80} />
        <Typography
          as="h3"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text invert"
        >
          Club9
        </Typography>
      </div>
      <nav className="space-y-5 mt-7">
        {HomeButton}
        {SearchButton}
        {LibraryButton}
      </nav>
      <nav className="mt-16 space-y-5">
        <a
          href=""
          className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
        >
          <div className="bg-zinc-200/80 rounded-md">
            <PlusIcon size={32} className="text-zinc-950 p-1" />
          </div>
          <span className="font-extrabold text-md">Create Playlist</span>
        </a>
        <a
          href=""
          className="flex items-center gap-4 text-sm font-semibold text-zinc-200"
        >
          <div className="bg-violet-500 rounded-md">
            <HeartIcon size={32} className="text-zinc-950 p-1 pt-2" />
          </div>
          <span className="font-extrabold text-md">Liked Songs</span>
        </a>
      </nav>
      <nav className="mt-8 pt-8 border-t border-zinc-800 flex flex-col gap-2">
        <div>
          <h1 className="text-md text-white font-extrabold">PLAYLISTS</h1>
        </div>
        <PlaylistLinks />
      </nav>
    </aside>
  )
})

export default Sidebar
