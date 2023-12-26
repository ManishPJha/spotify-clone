'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMore2Fill,
} from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isReached, setIsReached] = useState(true)

  const className = 'p-2 box-content'

  const arrowStyles = twMerge(
    className,
    isReached ? 'cursor-not-allowed' : 'cursor-pointer'
  )

  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0A0A0A]/90 flex items-center justify-between p-4 z-40">
      <div>
        <RiMore2Fill
          onClick={() => setShowSidebar(true)}
          className="text-2xl hover:cursor-pointer p-2 box-content md:hidden"
        />
        <div className="hidden md:flex items-center gap-2 text-2xl">
          <RiArrowLeftSLine className={arrowStyles} />
          <RiArrowRightSLine className={arrowStyles} />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-white transition-colors">
          Kaydol
        </Link>
        <Link
          href="/"
          className="py-2 md:py-3 px-4 rounded-full text-base-100 bg-white font-medium hover:scale-105 transition-transform"
        >
          Oturum Aç
        </Link>
      </div>
    </header>
  )
}

export default Header
