import { AlbumCard } from '@app/ui/cards/index'

type MusicAlbumsProps = {
  items: AlbumCardProps[] | []
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
              cardTitle={item.cardTitle}
              cardDescription={item.cardDescription}
              imageSrc={item.imageSrc}
              redirectTo={`/playlist?${index}`}
              cardType="normal"
              audioSrc={item.audioSrc}
              blurImgSrc={item.blurImgSrc}
              imageClassName={item.imageClassName}
              imageHeight={item.imageHeight}
              imageWidth={item.imageWidth}
            />
          ))}
      </div>
    </>
  )
}

export default MusicAlbums
