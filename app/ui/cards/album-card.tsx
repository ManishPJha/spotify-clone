'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaPlay as PlayIcon } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

import { useState } from 'react'
import RequireAuthModal from '../modals/RequireAuthModal'

type CoverCardProps = Omit<AlbumCardProps, 'cardType' | 'redirectTo'>
type NormalCardProps = Omit<AlbumCardProps, 'cardType' | 'redirectTo'>

const AlbumCard = ({
  imageSrc,
  cardTitle,
  cardDescription,
  cardType,
  redirectTo,
  imageClassName,
  imageHeight = 110,
  imageWidth = 100,
}: AlbumCardProps) => {
  const CardAnchorStyles =
    cardType === 'cover'
      ? 'items-center gap-4 hover:bg-white/10 transition-colors'
      : 'p-2 flex-col'

  return (
    <Link
      href={redirectTo ? redirectTo : '#'}
      className={twMerge(
        'flex bg-white/5 rounded-md group' + ' ' + CardAnchorStyles
      )}
    >
      {cardType === 'cover' ? (
        <CoverCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          imageSrc={imageSrc}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageClassName={imageClassName}
        />
      ) : (
        <NormalCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          imageSrc={imageSrc}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageClassName={imageClassName}
        />
      )}
    </Link>
  )
}

export const CoverCard = ({
  imageSrc,
  imageClassName,
  imageHeight,
  imageWidth,
  cardTitle,
}: CoverCardProps) => (
  <>
    <Image
      priority
      src={imageSrc}
      alt="Album cover"
      className={twMerge('rounded-md p-1', imageClassName)}
      width={Number(imageHeight)}
      height={Number(imageWidth)}
    />
    <strong className="text-xl overflow-x-auto truncate">{cardTitle}</strong>
    <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
      <PlayIcon />
    </button>
  </>
)

export const NormalCard = ({
  imageSrc,
  imageHeight,
  imageWidth,
  imageClassName,
  cardTitle,
  cardDescription,
}: NormalCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const bool = false

  const handlePlayEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!bool) setIsOpen(true)

    return
  }

  return (
    <>
      <Image
        priority
        src={imageSrc}
        alt="Album cover"
        className={twMerge('rounded-md w-full', imageClassName)}
        width={Number(imageHeight)}
        height={Number(imageWidth)}
      />
      <strong className="text-md mt-3 mb-2 pl-2 font-bold overflow-x-auto truncate">
        {cardTitle}
      </strong>
      <span className="text-md overflow-x-auto truncate font-medium text-zinc-400 pl-2 pr-2 mb-1">
        {cardDescription}
      </span>
      <button
        className="w-12 h-12 absolute flex items-center justify-center pl-1 rounded-full bg-green-600 text-black bottom-24 right-4 invisible group-hover:visible"
        onClick={handlePlayEvent} //TODO: add event to play stack top index track
      >
        <PlayIcon />
      </button>
      <RequireAuthModal open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default AlbumCard
