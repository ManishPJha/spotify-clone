import { forwardRef, useEffect } from 'react'

interface PlayerProps {
  playingTrack: string
  repeat: boolean
  muted: boolean
  volume: number
  seekTime: number
  onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement>) => void
  onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement>) => void
}

const Player = forwardRef(
  (props: PlayerProps, ref: React.ForwardedRef<HTMLAudioElement>) => {
    const {
      playingTrack,
      repeat,
      muted,
      volume,
      seekTime,
      onTimeUpdate,
      onLoadedData,
    } = props || {}

    useEffect(() => {}, [volume])

    useEffect(() => {}, [seekTime])

    return (
      <audio
        src={playingTrack}
        loop={repeat}
        muted={muted}
        playsInline
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
        ref={ref}
      />
    )
  }
)

Player.displayName = 'Player'

export default Player
