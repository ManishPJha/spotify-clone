import { PlayerTrack } from './context/app-provider'

export type AlbumCardProps = {
  imageSrc: string
  cardTitle: string
  cardType: 'cover' | 'normal'
  cardDescription?: string
  imageHeight?: string | number
  imageWidth?: string | number
  imageClassName?: string
  blurImgSrc?: string
  track: PlayerTrack
  index: number
}

export type HomePageTrackType = Omit<AlbumCardProps, 'track'>
