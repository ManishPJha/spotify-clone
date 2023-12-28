import AlbumCard from '@/components/cards/album-card'

export default function HomePage() {
  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <AlbumCard />
      </div>
    </>
  )
}
