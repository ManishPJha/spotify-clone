type AlbumCardProps = {
  imageSrc: string | StaticImageData
  audioSrc: string
  cardTitle: string
  cardType: 'cover' | 'normal' | string
  redirectTo?: string
  cardDescription?: string
  imageHeight?: string | number
  imageWidth?: string | number
  imageClassName?: string
  blurImgSrc?: string
}
