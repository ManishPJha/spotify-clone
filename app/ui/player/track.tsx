import Image from 'next/image'

import { FiHeart as HeartIcon } from 'react-icons/fi'

import { PlayerTrack } from '@/context/app-provider'
import playingMusicAlbum from '@public/cover-image.jpeg'

interface TrackProps {
  play: boolean
  playingTrack: PlayerTrack
}

const Track = ({ play, playingTrack }: TrackProps) => {
  const title =
    playingTrack?.title?.length > 20
      ? (playingTrack?.title).slice(0, 20) + '...'
      : playingTrack?.title

  return (
    <div className="flex items-center gap-4">
      <Image
        src={playingMusicAlbum}
        alt="Album cover"
        className="rounded-md"
        width={56}
        height={56}
      />
      <div className="flex flex-col mb-4">
        <div className="flex-row">
          <strong className="text-white inline-flex">
            {/* Night Crawler */}
            {title}
            <HeartIcon size={16} className="text-zinc-400 ml-4 mt-1" />
          </strong>
        </div>
        <span className="text-xs text-zinc-400">Travis Scott</span>
      </div>
    </div>
  )
}

export default Track
