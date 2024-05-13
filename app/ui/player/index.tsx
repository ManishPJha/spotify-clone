'use client'

import { useEffect, useRef, useState } from 'react'

import Controls from './controls'
import Player from './player'
import Track from './track'

import {
  setMute,
  setPlay,
  setPlayerTimings,
  setSeekTime as setSeekTimeValue,
  setVolume as setVolumeValue,
  useAppContext,
} from '@/context/app-provider'

import { PlayerTrack } from '@/types/context/app-provider'
import VolumeBar from './volume-bar'

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

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = volume

      if (seekTime > 0) playerRef.current.currentTime = seekTime
    }
    // dispatch actions
    setMute(dispatch, muted)
    setVolumeValue(dispatch, volume)
    setPlayerTimings(dispatch, { playTime: appTime, duration })
    setSeekTimeValue(dispatch, seekTime)
  }, [appTime, duration, muted, volume, seekTime, playerRef, dispatch])

  if (!currentTrack) return null

  return (
    <>
      <Track play={state.isPlayingTrack} playingTrack={currentTrack} />
      <Controls
        queue={queue}
        appTime={state.track?.playTime || appTime}
        duration={state.track?.duration || duration}
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
        seekTime={state.seekTime || seekTime}
        volume={volume}
        onTimeUpdate={(e) => setAppTime(e.currentTarget.currentTime)}
        onLoadedData={(e) => setDuration(e.currentTarget.duration)}
      />
      <VolumeBar
        isMuted={muted}
        volume={volume}
        setMute={setMuted}
        setVolume={setVolume}
      />
    </>
  )
}

export default AudioPlayer
