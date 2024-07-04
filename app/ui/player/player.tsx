import { forwardRef } from 'react'

interface PlayerProps {
  playingTrack: string
  repeat: boolean
  muted: boolean
  onTimeUpdate: (event: React.SyntheticEvent<HTMLAudioElement>) => void
  onLoadedData: (event: React.SyntheticEvent<HTMLAudioElement>) => void
  onEnded: (event: React.SyntheticEvent<HTMLAudioElement>) => void
}

const Player = forwardRef(
  (props: PlayerProps, ref: React.ForwardedRef<HTMLAudioElement>) => {
    const { playingTrack, repeat, muted, onTimeUpdate, onLoadedData, onEnded } =
      props || {}

    return (
      <audio
        playsInline
        src={playingTrack}
        loop={repeat}
        muted={muted}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
        onEnded={onEnded}
        ref={ref}
      />
    )
  }
)

Player.displayName = 'Player'

export default Player
