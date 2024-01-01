type AlbumCardProps = {
  imageSrc: string | StaticImageData
  cardTitle: string
  cardType: 'cover' | 'normal'
  redirectTo?: string
  cardDescription?: string
  imageHeight?: string | number
  imageWidth?: string | number
  imageClassName?: string
}
