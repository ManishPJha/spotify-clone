'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo } from 'react'
import { FiHeart as HeartIcon, FiPlus as PlusIcon } from 'react-icons/fi'
import { MdLibraryMusic as LibraryIcon } from 'react-icons/md'
import {
  RiHome4Fill as HomeIcon,
  RiSearchLine as SearchIcon,
} from 'react-icons/ri'

import { createButton } from '@/app/ui/buttons/button-with-redirect'
import SpotifyLogo from '@public/logo.png'

const Sidebar = memo(function Sidebar() {
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isSearchPage = pathname === '/search'
  const isLibraryPage = pathname === '/library'

  const playlists = [
    'Liked songs',
    'Daily Mix 1',
    'RapCaviar',
    'Release Radar',
    'Rap Hits (2010 - 2023)',
    'DOPE.',
    'I Love My 90s',
    'Travis Scott',
  ]

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

  return (
    <aside className="w-64 bg-black p-6 border-r border-r-zinc-400">
      <div>
        <Image
          priority
          src={SpotifyLogo}
          alt="spotify-logo"
          className="invert"
          height={100}
          width={80}
        />
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
