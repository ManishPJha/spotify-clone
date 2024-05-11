'use client'

import { useEffect, useRef, useState } from 'react'

import Controls from './controls'
import Player from './player'
import Track from './track'

import { setPlay, useAppContext } from '@/context/app-provider'

import { PlayerTrack } from '@/types/context/app-provider'

interface AudioPlayerProps {
  currentTrack: PlayerTrack | undefined
  queue: PlayerTrack[]
}

const AudioPlayer = ({ currentTrack, queue = [] }: AudioPlayerProps) => {
  const [volume, setVolume] = useState(0.1)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [loop, setLoop] = useState(false)
  const [muted, setMuted] = useState(false)
  const [appTime, setAppTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [seekTime, setSeekTime] = useState(0)

  const [state, dispatch] = useAppContext()

  const playerRef = useRef<HTMLAudioElement>(null)

  const handlePlayPause = () => setPlay(dispatch, !state.isPlayingTrack)

  const handlePlayNext = () => {}

  const handlePlayPrevious = () => {}

  useEffect(() => {
    if (playerRef.current) {
      if (currentTrack && currentTrack.isPlaying && state.isPlayingTrack) {
        playerRef.current.play()
      } else playerRef.current.pause()
    }
  }, [currentTrack, state.isPlayingTrack, playerRef])

  if (!currentTrack) return null

  return (
    <>
      <Track play={state.isPlayingTrack} playingTrack={currentTrack} />
      <Controls
        queue={queue}
        isPlaying={state.isPlayingTrack}
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
      <Player
        ref={playerRef}
        playingTrack={currentTrack?.audio}
        repeat={repeat}
        muted={muted}
        onTimeUpdate={(e) => setAppTime(e.currentTarget.currentTime)}
        onLoadedData={(e) => setDuration(e.currentTarget.duration)}
      />
    </>
  )
}

export default AudioPlayer
