import { AlbumCard } from '@app/ui/cards/index'

import type { Track } from '@/redux/features/player'

type TrackType = Omit<Track, 'isPlaying'>

type MusicAlbumsProps = {
  items: Array<
    TrackType & {
      blurImgSrc: string
      imageHeight?: string | number
      imageWidth?: string | number
    }
  >
}

const MusicAlbums = ({ items }: MusicAlbumsProps) => {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">Hot Hits</h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <AlbumCard
              key={index}
              cardTitle={item.title}
              cardDescription={item.description}
              imageSrc={item.image}
              cardType="normal"
              blurImgSrc={item.blurImgSrc}
              imageHeight={item.imageHeight}
              imageWidth={item.imageWidth}
              track={{
                ...item,
                isPlaying: false,
              }}
              index={index}
            />
          ))}
      </div>
    </>
  )
}

export default MusicAlbums
