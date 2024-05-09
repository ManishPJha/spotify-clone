import { forwardRef } from 'react'

interface PlayerProps {
  playingTrack: string
  repeat: boolean
  muted: boolean
}

const Player = forwardRef<any, PlayerProps>((props, ref) => {
  const { playingTrack, repeat, muted } = props || {}

  return <audio src={playingTrack} loop={repeat} muted={muted} ref={ref} />
})

Player.displayName = 'Player'

export default Player
