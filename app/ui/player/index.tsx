'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import Controls from './controls'
import Player from './player'
import Track from './track'

import { useReduxActions, useReduxState } from '@/hooks/useReduxActions'

import VolumeBar from './volume-bar'

const AudioPlayer = () => {
  const playerRef = useRef<HTMLAudioElement>(null)

  const player = useReduxState((state) => state.player)

  const {
    setPlay,
    setMute,
    setVolume,
    setRepeat,
    setShuffle,
    setPlayTime,
    setPlayDuration,
    setAppSeekTime,
  } = useReduxActions()

  const currentTrack = useMemo(() => player.track, [player.track])
  const queue = useMemo(
    () => player.tracks.filter((track) => track.id !== currentTrack?.id),
    [player.tracks, currentTrack]
  )
  const playTime = useMemo(() => player.playTime, [player.playTime])
  const playDuration = useMemo(() => player.playDuration, [player.playDuration])
  const appSeekTime = useMemo(() => player.seekTime, [player.seekTime])

  const [seekTime, setSeekTime] = useState(appSeekTime || 0)

  const handlePlayPause = () => setPlay(!player.isPlaying)

  const handlePlayNext = () => {}

  const handlePlayPrevious = () => {}

  const handlePlayEnded = (event: React.SyntheticEvent<HTMLAudioElement>) => {}

  useEffect(() => {
    if (playerRef.current) {
      player.isPlaying && currentTrack
        ? playerRef.current.play()
        : playerRef.current.pause()
    }
  }, [currentTrack, player.isPlaying])

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.currentTime = seekTime
      setAppSeekTime(seekTime)
    }
  }, [seekTime, playerRef, setAppSeekTime])

  if (!currentTrack) return null

  return (
    <>
      <Track play={player.isPlaying} playingTrack={currentTrack} />
      <Controls
        queue={queue}
        appTime={playTime}
        duration={playDuration}
        isPlaying={player.isPlaying}
        isRepeat={player.isRepeat}
        setRepeat={setRepeat}
        isShuffle={player.isShuffle}
        setShuffle={setShuffle}
        setSeekTime={setSeekTime}
        handlePlayPause={handlePlayPause}
        handlePlayNext={handlePlayNext}
        handlePlayPrevious={handlePlayPrevious}
      />
      <Player
        ref={playerRef}
        playingTrack={currentTrack?.audio}
        repeat={player.isRepeat}
        muted={player.isMuted}
        onTimeUpdate={(e) => setPlayTime(e.currentTarget.currentTime)}
        onLoadedData={(e) => setPlayDuration(e.currentTarget.duration)}
        onEnded={handlePlayEnded}
      />
      <VolumeBar
        isMuted={player.isMuted}
        volume={player.volume}
        setMute={setMute}
        setVolume={setVolume}
      />
    </>
  )
}

export default AudioPlayer
