'use client'

import { CldImage } from 'next-cloudinary'
import Image from 'next/image'

import { FaPlay as PlayIcon } from 'react-icons/fa'

import { cn } from '@/utils'
import { useState } from 'react'
import AuthModalWithAlbum from '../modals/auth-modal-with-album'

type ExcludedFields = 'cardType' | 'redirectTo' | 'audioSrc'

type CoverCardProps = Omit<AlbumCardProps, ExcludedFields>
type NormalCardProps = Omit<AlbumCardProps, ExcludedFields>

const AlbumCard = ({
  imageSrc,
  cardTitle,
  cardDescription,
  cardType,
  redirectTo,
  imageClassName,
  imageHeight = 110,
  imageWidth = 100,
  ...rest
}: AlbumCardProps) => {
  const CardAnchorStyles =
    cardType === 'cover'
      ? 'items-center gap-4 hover:bg-white/10 transition-colors'
      : 'p-2 flex-col'

  const cardClassNames = cn(
    'flex bg-white/5 rounded-md group' + ' ' + CardAnchorStyles
  )

  return (
    <div className={cardClassNames}>
      {cardType === 'cover' ? (
        <CoverCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          imageSrc={imageSrc}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageClassName={imageClassName}
          blurImgSrc={rest.blurImgSrc}
        />
      ) : (
        <NormalCard
          cardTitle={cardTitle}
          cardDescription={cardDescription}
          imageSrc={imageSrc}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageClassName={imageClassName}
          blurImgSrc={rest.blurImgSrc}
        />
      )}
    </div>
  )
}

export const CoverCard = ({
  imageSrc,
  imageClassName,
  imageHeight,
  imageWidth,
  cardTitle,
}: CoverCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const coverCardClassNames = cn('rounded-md p-1', imageClassName)

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
        className={coverCardClassNames}
        width={Number(imageHeight)}
        height={Number(imageWidth)}
      />
      <strong className="text-xl overflow-x-auto truncate">{cardTitle}</strong>
      <button
        className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible"
        onClick={handlePlayEvent}
      >
        <PlayIcon />
      </button>
      <AuthModalWithAlbum open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export const NormalCard = ({
  imageSrc,
  imageHeight,
  imageWidth,
  imageClassName,
  cardTitle,
  cardDescription,
  blurImgSrc,
}: NormalCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const albumCardClassNames = cn('rounded-md w-full h-[100%]', imageClassName)

  const bool = false

  const handlePlayEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!bool) setIsOpen(true)

    return
  }

  return (
    <>
      <CldImage
        alt="album cover"
        src={imageSrc}
        className={albumCardClassNames}
        width={Number(imageHeight)}
        height={Number(imageWidth)}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurImgSrc}
        priority
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
      {isOpen && <AuthModalWithAlbum open={isOpen} setOpen={setIsOpen} />}
    </>
  )
}

export default AlbumCard
