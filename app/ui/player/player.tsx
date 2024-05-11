import { forwardRef } from 'react'

interface PlayerProps {
  playingTrack: string
  repeat: boolean
  muted: boolean
  onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement>) => void
  onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement>) => void
}

const Player = forwardRef<any, PlayerProps>((props, ref) => {
  const { playingTrack, repeat, muted, onTimeUpdate, onLoadedData } =
    props || {}

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
})

Player.displayName = 'Player'

export default Player
