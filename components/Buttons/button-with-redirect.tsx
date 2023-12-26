'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

type ButtonIconProps<T = {}> = {
  Icon: React.ReactElement<T>
  className: string
  redirectTo: string
  btnText: string
  isActivePage?: boolean
}

const ButtonIcon = ({
  Icon,
  className,
  redirectTo,
  btnText,
  isActivePage,
}: ButtonIconProps) => {
  const [isActive, setIsActive] = useState(false)

  const isPageActive = useMemo(() => {
    return isActivePage || isActive
  }, [isActivePage, isActive])

  const handleMouseEnter = () => {
    setIsActive(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
  }

  const isActiveClass = twMerge(className, isPageActive ? 'text-zinc-200' : '')

  return (
    <Link
      href={redirectTo}
      className={isActiveClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Icon}
      {btnText}
    </Link>
  )
}

export const createButton = (
  Icon: IconType,
  btnText: string,
  redirectTo: string,
  isActivePage: boolean
) => (
  <ButtonIcon
    Icon={<Icon />}
    className="flex items-center gap-4 px-1 text-sm font-semibold text-zinc-400"
    btnText={btnText}
    redirectTo={redirectTo}
    isActivePage={isActivePage}
  />
)

export default ButtonIcon
