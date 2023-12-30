import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { FaPlay as PlayIcon } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type AlbumCardProps = {
  imageSrc: string | StaticImageData
  cardTitle: string
  redirectTo?: string
  cardDescription?: string
  imageHeight?: string | number
  imageWidth?: string | number
  className?: string
}
const AlbumCard = ({
  imageSrc,
  cardTitle,
  cardDescription,
  redirectTo,
  className,
  imageHeight = 110,
  imageWidth = 100,
}: AlbumCardProps) => {
  return (
    <Link
      href={redirectTo ? redirectTo : '#'}
      className="flex items-center gap-4 bg-white/5 group rounded-md hover:bg-white/10 transition-colors"
    >
      <Image
        priority
        src={imageSrc}
        alt="Album cover"
        className={twMerge('rounded-md p-1', className)}
        width={Number(imageHeight)}
        height={Number(imageWidth)}
      />
      <strong className="text-xl overflow-x-auto truncate">{cardTitle}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayIcon />
      </button>
    </Link>
  )
}

export default AlbumCard
