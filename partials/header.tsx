'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  RiArrowLeftSLine as ArrowLeft,
  RiArrowRightSLine as ArrowRight,
} from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'

const Header = () => {
  const [isReached, setIsReached] = useState(true)

  const className = 'p-2 box-content'

  const arrowStyles = twMerge(
    className,
    isReached ? 'cursor-not-allowed' : 'cursor-pointer'
  )

  return (
    <div className="flex justify-between">
      <div className="flex item-scenter gap-4">
        <button className="rounded-full h-10 bg-black/40 px-1">
          <ArrowLeft size={28} className="pr-1" />
        </button>
        <button className="rounded-full h-10 bg-black/40 px-1">
          <ArrowRight size={28} className="pl-1" />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-white transition-colors">
          Signin
        </Link>
        <Link
          href="/"
          className="py-2 md:py-3 px-4 rounded-full text-base-100 bg-white font-medium hover:scale-105 transition-transform"
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header
