import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import recentlyPlayedCache from '@/utils/cache'

type Artist = {
  name: string
  avatar: string
  id: string
}

type Album = {
  name: string
  image: string
  id: string
  rating: number
  releasedAt: string
}

export type Track = {
  id: string
  title: string
  description?: string
  image: string
  artists: Artist[]
  album: Album
  audio: string
  publishedAt?: string
  isPlaying: boolean
}

interface Player {
  isMuted: boolean
  isPlaying: boolean
  isRepeat: boolean
  isShuffle: boolean
  playTime: number
  playDuration: number
  seekTime: number
  volume: number
  track: Track | null
  tracks: Track[]
}

const initialState: Player = {
  isMuted: false,
  isPlaying: false,
  isRepeat: false,
  isShuffle: false,
  playTime: 0,
  playDuration: 0,
  seekTime: 0,
  volume: 1,
  track: null,
  tracks: [],
}

export const player = createSlice({
  initialState,
  name: 'player',
  reducers: {
    chooseTrack: (
      state,
      action: PayloadAction<{ key: number; track: Track }>
    ) => {
      const { key, track } = action.payload

      const cachedTracks = recentlyPlayedCache(key, track)

      if (cachedTracks) {
        const { id } = action.payload?.track

        const tracks = cachedTracks.map((item) => ({
          ...item,
          isPlaying: item.id === id,
        }))

        const index = tracks.findIndex((item) => item.id === id)

        if (index !== -1) {
          state.isPlaying = true
          state.track = tracks[index]
          state.tracks = tracks
        }
      }
    },
    setPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    setPlayTime: (state, action: PayloadAction<number>) => {
      state.playTime = action.payload
    },
    setPlayDuration: (state, action: PayloadAction<number>) => {
      state.playDuration = action.payload
    },
    setSeekTime: (state, action: PayloadAction<number>) => {
      state.seekTime = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setMute: (state, action: PayloadAction<boolean>) => {
      state.isMuted = action.payload
    },
    setRepeat: (state, action: PayloadAction<boolean>) => {
      state.isRepeat = action.payload
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.isShuffle = action.payload
    },
  },
})

export default player.reducer
