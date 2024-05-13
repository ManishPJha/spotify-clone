'use client'

import { Dispatch, createContext, useContext, useMemo, useReducer } from 'react'

import {
  BACKWARD_PAGE,
  DESTROY_PAGE_HISTORY,
  FORWARD_PAGE,
} from '@/constants/context'
import * as PLAYER from '@/constants/player'
import recentlyPlayedCache from '@/utils/cache'

import type {
  AppCtxActions,
  ContextState,
  PlayerTrack,
} from '@/types/context/app-provider'

const initState: ContextState = {
  pageHistoryStack: [],
  isAuthenticated: false,
  isPlayingTrack: false,
  track: undefined,
  tracks: [],
  volume: 100,
  seekTime: 0,
  shuffle: false,
  isMuted: false,
}

export const AppContext = createContext<ContextState | any>(null)

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
      const cachedData = recentlyPlayedCache(
        action.payload?.key,
        action.payload?.track
      )

      if (cachedData) {
        const { id } = action.payload?.track

        const tracks = [...cachedData]
        const index = tracks.findIndex((item) => item.id === id)

        if (index !== -1) {
          tracks[index].isPlaying = true // Set isPlaying to true for the playing track

          // Set isPlaying to false for all other tracks
          tracks.forEach((item, i) => {
            if (i !== index) {
              item.isPlaying = false
            }
          })

          state.isPlayingTrack = true

          state.track = tracks[index]

          state = { ...state, tracks: [...tracks] }
        }
      }
      break
    case PLAYER.PAUSE:
      const playingTrack = state.tracks.find((track) => track.isPlaying)
      if (playingTrack) {
        playingTrack.isPlaying = false
      }
      state = { ...state, isPlayingTrack: false }
      break
    case PLAYER.NEXT:
      state = { ...state, isPlayingTrack: true, tracks: action.payload }
      break
    case PLAYER.PREV:
      state = { ...state, isPlayingTrack: true, tracks: action.payload }
      break
    case PLAYER.SET_PLAY:
      state = { ...state, isPlayingTrack: action.payload }
      break
    case PLAYER.SET_PLAY_TIME:
      if (state.track) {
        state.track.playTime = action.payload?.appTime
        state.track.duration = action.payload?.duration
      }
      state = { ...state }
      break
    case PLAYER.SET_SEEK_TIME:
      state = {
        ...state,
        seekTime: action.payload,
      }
      break
    case PLAYER.SET_VOLUME:
      state = { ...state, volume: action.payload }
      break
    case PLAYER.SET_MUTE:
      state = {
        ...state,
        isMuted: action.payload,
      }
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

export const useAppContext = () => {
  const context =
    useContext<[ContextState, Dispatch<AppCtxActions>]>(AppContext)

  if (!context) {
    throw new Error(
      'useAppContext hook need to be use inside AppContextProvider!'
    )
  }

  return context
}

// actions
export const chooseTrack = (
  dispatch: any,
  payload: { key: number; track: PlayerTrack }
) => {
  return dispatch({ type: PLAYER.PLAY, payload })
}

export const setPlay = (dispatch: any, payload: boolean) => {
  return dispatch({ type: PLAYER.SET_PLAY, payload })
}

export const setVolume = (dispatch: any, payload: number) => {
  return dispatch({ type: PLAYER.SET_VOLUME, payload })
}

export const setMute = (dispatch: any, payload: boolean) => {
  return dispatch({ type: PLAYER.SET_MUTE, payload })
}

export const setPlayerTimings = (
  dispatch: any,
  payload: { playTime: number; duration: number }
) => {
  return dispatch({ type: PLAYER.SET_PLAY_TIME, payload })
}

export const setSeekTime = (dispatch: any, payload: number) => {
  return dispatch({ type: PLAYER.SET_SEEK_TIME, payload })
}
