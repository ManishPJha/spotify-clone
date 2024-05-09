import { AlbumCard } from '@app/ui/cards/index'

import Albums from '@app/(dashboard)/_components/music-albums'

import albumsData from '@/data/album.json'
import { getBluredImageUrl } from '@/utils'

async function transformData(data: AlbumCardProps[]) {
  const withBlurImageUrl = await Promise.all(
    data.map(async (album) => {
      const blurImgSrc = await getBluredImageUrl(album.imageSrc)

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
        {Array(6)
          .fill({ src: 'https://picsum.photos/300/300', title: 'Lofi chill' })
          .map((item, index) => (
            <AlbumCard
              imageSrc={item.src}
              audioSrc={item.src}
              cardTitle={item.title}
              redirectTo={`/playlist?${index}`}
              cardType="cover"
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
