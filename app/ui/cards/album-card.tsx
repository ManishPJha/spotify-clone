'use client'

import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

import { FaPlay as PlayIcon } from 'react-icons/fa'

import { useReduxActions, useReduxState } from '@/hooks/useReduxActions'
import { Track } from '@/redux/features/player'
import { cn } from '@/utils'
import AuthModalWithAlbum from '../modals/auth-modal-with-album'

interface AlbumCardProps {
  imageSrc: string
  cardTitle: string
  cardType: 'cover' | 'normal'
  cardDescription?: string
  imageHeight?: string | number
  imageWidth?: string | number
  imageClassName?: string
  blurImgSrc?: string
  track: Track
  index: number
}

const AlbumCard = ({
  imageSrc,
  cardTitle,
  cardDescription,
  cardType,
  imageClassName,
  imageHeight = 110,
  imageWidth = 100,
  track,
  index,
  blurImgSrc,
}: AlbumCardProps) => {
  const { chooseTrack } = useReduxActions()
  const playerSelector = useReduxState((state) => state.player)

  const [isOpen, setIsOpen] = useState(false)

  const filteredTrack = playerSelector.tracks.find((t) => t.id === track.id)

  const CardAnchorStyles =
    cardType === 'cover'
      ? 'items-center gap-4 hover:bg-white/10 transition-colors'
      : 'p-2 flex-col'

  const cardClassNames = cn(
    'flex bg-white/5 rounded-md group' + ' ' + CardAnchorStyles,
    filteredTrack?.isPlaying && cardType === 'normal'
      ? 'border-2 border-green-500'
      : undefined
  )

  const title =
    cardTitle.length > 20 ? cardTitle.slice(0, 15) + '...' : cardTitle

  const combinedClassNames = cn(
    cardType === 'cover' ? 'rounded-md p-1' : 'rounded-md w-full',
    'h-full',
    imageClassName
  )

  const handlePlayEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const bool = true

    if (!bool) setIsOpen(true)

    chooseTrack({
      key: index,
      track,
    })
  }

  return (
    <div className={cardClassNames}>
      <CldImage
        alt="album cover"
        src={imageSrc}
        className={combinedClassNames}
        width={Number(imageHeight)}
        height={Number(imageWidth)}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurImgSrc}
        priority
      />
      <strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate text-wrap">
        {title}
      </strong>
      <span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
        {cardDescription}
      </span>
      <button
        className={cn(
          'w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-600 text-black invisible group-hover:visible',
          cardType === 'cover'
            ? 'ml-auto mr-8'
            : ' absolute bottom-24 md:bottom-20 right-4'
        )}
        onClick={handlePlayEvent} //TODO: add event to play stack top index track
      >
        <PlayIcon />
      </button>
      {isOpen && <AuthModalWithAlbum open={isOpen} setOpen={setIsOpen} />}
    </div>
  )
}

export default AlbumCard
