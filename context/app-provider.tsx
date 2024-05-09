'use client'

import { createContext, useMemo, useReducer } from 'react'

import {
  BACKWARD_PAGE,
  DESTROY_PAGE_HISTORY,
  FORWARD_PAGE,
} from '@/constants/context'
import * as PLAYER from '@/constants/player'

export type AppCtxActions = {
  type: string
  payload?: any
}

type Artist = {
  name: string
  image: string
  id: string
}

type AudioTrack = {
  id: string
  title: string
  artist: Artist
  album: string
  image: string
  audio: string
}

export interface PlayerTrack extends AudioTrack {
  isPlaying: boolean
  isLoop: boolean
  isMuted: boolean
}

export interface ContextState {
  pageHistoryStack: Array<any>
  isAuthenticated: boolean
  isPlayingTrack: boolean
  tracks: PlayerTrack[]
  isPlayingAlbum: boolean
  albums: PlayerTrack[]
  isPlayingPlaylist: false
  playlists: []
  isPlayingRadio: false
  volume: number
  shuffle: boolean
}

const initState: ContextState = {
  pageHistoryStack: [],
  isAuthenticated: false,
  isPlayingTrack: true,
  tracks: [],
  isPlayingAlbum: false,
  albums: [],
  isPlayingPlaylist: false,
  playlists: [],
  isPlayingRadio: false,
  volume: 100,
  shuffle: false,
}

export const AppContext = createContext<ContextState | any>(initState)

const reducer = (state = initState, action: AppCtxActions) => {
  switch (action.type) {
    case FORWARD_PAGE:
      break
    case BACKWARD_PAGE:
      break
    case DESTROY_PAGE_HISTORY:
      break

    // player actions
    case PLAYER.PLAY:
      state = { ...state, isPlayingTrack: true, tracks: action.payload }
      break
    case PLAYER.PAUSE:
      state = { ...state, isPlayingTrack: false }
      break
    case PLAYER.NEXT:
      state = { ...state, isPlayingTrack: true, tracks: action.payload }
      break
    case PLAYER.PREV:
      state = { ...state, isPlayingTrack: true, tracks: action.payload }
      break
    case PLAYER.SET_VOLUME:
      state = { ...state, volume: action.payload }
      break
    case PLAYER.SET_SHUFFLE:
      state = { ...state, shuffle: action.payload }
      break
    case PLAYER.ADD_TO_QUEUE:
      state = { ...state, tracks: action.payload }
      break
    case PLAYER.REMOVE_FROM_QUEUE:
      state = { ...state, tracks: action.payload }
      break
    case PLAYER.CLEAR_QUEUE:
      state = { ...state, tracks: [] }
      break
    // case PLAYER.LOOP:
    //   break
    // case PLAYER.SET_MUTE:
    //   break
    // case PLAY_ALBUM:
    //   break
    // case PLAY_PLAYLIST:
    //   break
    // case PLAY_RADIO:
    //   break

    default:
      throw new Error(`invalid ${action.type} passed`)
  }

  return state
}

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const value = useMemo(() => [state, dispatch], [state, dispatch])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
