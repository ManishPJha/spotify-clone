'use client'

import { PlayerTrack } from '@/context/app-provider'
import { useState } from 'react'

import Controls from './controls'
import Player from './player'
import Track from './track'

interface AudioPlayerProps {
  currentTrack: PlayerTrack
  queue: PlayerTrack[]
}

const AudioPlayer = ({ currentTrack, queue = [] }: AudioPlayerProps) => {
  const [play, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.1)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [loop, setLoop] = useState(false)
  const [muted, setMuted] = useState(false)

  const audioTrack =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

  const handlePlayPause = () => {
    setPlay(!play)
  }

  const handlePlayNext = () => {}

  const handlePlayPrevious = () => {}

  return (
    <>
      <Track play={play} playingTrack={currentTrack} />
      <Controls
        queue={queue}
        isPlaying={play}
        isRepeat={repeat}
        setRepeat={setRepeat}
        isShuffle={shuffle}
        setShuffle={setShuffle}
        isLooping={loop}
        setLooping={setLoop}
        handlePlayPause={handlePlayPause}
        handlePlayNext={handlePlayNext}
        handlePlayPrevious={handlePlayPrevious}
      />
      <Player playingTrack={currentTrack.audio} repeat={repeat} muted={muted} />
    </>
  )
}

export default AudioPlayer
