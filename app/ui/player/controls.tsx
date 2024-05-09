import { PlayerTrack } from '@/context/app-provider'
import { cn } from '@/utils'
import { Dispatch, SetStateAction } from 'react'
import {
  FiPlay as PlayIcon,
  FiRepeat as RepeatIcon,
  FiShuffle as ShuffleIcon,
  FiSkipBack as SkipBackIcon,
  FiSkipForward as SkipForwardIcon,
} from 'react-icons/fi'

interface PlayerControlsProps {
  isPlaying: boolean
  queue: PlayerTrack[]
  isRepeat: boolean
  setRepeat: Dispatch<SetStateAction<boolean>>
  isShuffle: boolean
  setShuffle: Dispatch<SetStateAction<boolean>>
  isLooping: boolean
  setLooping: Dispatch<SetStateAction<boolean>>
  handlePlayPause: () => void
  handlePlayPrevious: () => void
  handlePlayNext: () => void
}

const Controls = ({
  queue,
  isPlaying,
  isRepeat,
  isLooping,
  isShuffle,
  setLooping,
  setRepeat,
  setShuffle,
  handlePlayPause,
  handlePlayPrevious,
  handlePlayNext,
}: PlayerControlsProps) => {
  const handleShuffle = () => setShuffle(!isShuffle)
  const handleRepeat = () => setRepeat(!isRepeat)
  const handleLoop = () => setLooping(!isLooping)

  const defaultIconClasses = cn('text-zinc-200 cursor-pointer')

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-7">
          <ShuffleIcon
            size={20}
            className={defaultIconClasses}
            onClick={handleShuffle}
          />
          <SkipBackIcon
            size={20}
            className={defaultIconClasses}
            onClick={handlePlayPrevious}
          />
          <button
            id="play-button"
            aria-label="play button"
            className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black"
            onClick={handlePlayPause}
          >
            <PlayIcon />
          </button>
          <SkipForwardIcon
            size={20}
            className={defaultIconClasses}
            onClick={handlePlayNext}
          />
          <RepeatIcon
            size={20}
            className={defaultIconClasses}
            onClick={handleRepeat}
          />
        </div>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-xs text-zinc-500">0:44</span>
          <div
            style={{ width: '40vw' }}
            className="h-1 rounded-full bg-zinc-600"
          >
            <div className="h-full w-2/4 rounded-full bg-white"></div>
          </div>
          <span className="text-xs text-zinc-500">4:44</span>
        </div>
      </div>
    </>
  )
}

export default Controls
