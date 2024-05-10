import { AlbumCard } from '@app/ui/cards/index'

import Albums from '@app/(dashboard)/_components/music-albums'

import albumsData from '@/data/album.json'
import { Track } from '@/types/context/app-provider'
import { getBluredImageUrl } from '@/utils'
async function transformData(data: Track[]) {
  const withBlurImageUrl = await Promise.all(
    data.map(async (album) => {
      const blurImgSrc = await getBluredImageUrl(album.image)

      return {
        ...album,
        blurImgSrc,
      }
    })
  )

  return withBlurImageUrl
}

export default async function HomePage() {
  const data = await transformData(albumsData)

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {/* <div className="skeleton w-32 h-32" /> */}
        {data.slice(0, 6).map((item, index) => (
          <AlbumCard
            imageSrc={item.image}
            cardTitle={item.title}
            cardType="cover"
            blurImgSrc={item.blurImgSrc}
            index={index}
            track={{
              ...item,
              isPlaying: false,
            }}
            key={index}
          />
        ))}
      </div>
      <section className="mb-24">
        <Albums items={data} />
      </section>
    </>
  )
}
