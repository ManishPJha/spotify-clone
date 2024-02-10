'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  RiArrowLeftSLine as ArrowLeft,
  RiArrowRightSLine as ArrowRight,
} from 'react-icons/ri'

const Header = () => {
  const router = useRouter()

  const moveForward = () => router.forward()

  const moveBackward = () => router.back()

  return (
    <div className="flex justify-between">
      <div className="flex item-scenter gap-4">
        <button
          id="arrow-left"
          aria-label="button left"
          className="rounded-full h-10 bg-black/40 px-1"
          onClick={moveBackward}
        >
          <ArrowLeft size={28} className="pr-1" />
        </button>
        <button
          id="arrow-right"
          aria-label="button right"
          className="rounded-full h-10 bg-black/40 px-1"
          onClick={moveForward}
        >
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
