import { AlbumCard } from '@app/ui/cards/index'

type MusicAlbumsProps = {
  title: string
  items: AlbumCardProps[] | []
}

const MusicAlbums = ({ title, items }: MusicAlbumsProps) => {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">{title}</h2>
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
            />
          ))}
      </div>
    </>
  )
}

export default MusicAlbums
