import {
  FiPause as PauseIcon,
  FiPlay as PlayIcon,
  FiRepeat as RepeatIcon,
  FiShuffle as ShuffleIcon,
  FiSkipBack as SkipBackIcon,
  FiSkipForward as SkipForwardIcon,
} from 'react-icons/fi'

import { cn } from '@/utils'

interface PlayerControlsProps {
  queue: Track[]
  appTime: number
  duration: number
  isPlaying: boolean
  isRepeat: boolean
  setRepeat: (bool: boolean) => void
  isShuffle: boolean
  setShuffle: (bool: boolean) => void
  handlePlayPause: () => void
  handlePlayPrevious: () => void
  handlePlayNext: () => void
}

const Controls = ({
  queue,
  appTime,
  duration,
  isPlaying,
  isRepeat,
  isShuffle,
  setRepeat,
  setShuffle,
  handlePlayPause,
  handlePlayPrevious,
  handlePlayNext,
}: PlayerControlsProps) => {
  const handleShuffle = () => setShuffle(!isShuffle)
  const handleRepeat = () => setRepeat(!isRepeat)

  const defaultIconClasses = cn('text-zinc-200 cursor-pointer')

  // converts the time to format 0:00
  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`

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
            id="play-pause-button"
            aria-label="play pause button"
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-full bg-white text-black',
              !isPlaying ? 'pl-1' : ''
            )}
            onClick={handlePlayPause}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
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
          <span className="text-xs text-zinc-500">
            {appTime === 0 ? '0:00' : getTime(appTime)}
          </span>
          <div
            style={{ width: '40vw' }}
            className="h-1 rounded-full bg-zinc-600"
          >
            <div className="h-full w-2/4 rounded-full bg-white"></div>
          </div>
          <span className="text-xs text-zinc-500">
            {duration === 0 ? '0:00' : getTime(duration)}
          </span>
        </div>
      </div>
    </>
  )
}

export default Controls
