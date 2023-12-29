import AlbumCard from '@app/ui/cards/album-card'

export default function HomePage() {
  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {/* <div className="skeleton w-32 h-32" /> */}
        {Array(10)
          .fill({ src: 'https://picsum.photos/300/300', title: 'Lofi chill' })
          .map((item, index) => (
            <AlbumCard
              imageSrc={item.src}
              cardTitle={item.title}
              redirectTo={`/playlist?${index}`}
              key={index}
            />
          ))}
      </div>
    </>
  )
}
