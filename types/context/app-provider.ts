export type AppCtxActions = {
  type: string
  payload?: any
}

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
}

export interface PlayerTrack extends Track {
  isPlaying: boolean
  // playTime: number
  // duration: number
}

export interface ContextState {
  pageHistoryStack: Array<any>
  isAuthenticated: boolean
  // isPlayingTrack: boolean
  // track: PlayerTrack | undefined
  // tracks: PlayerTrack[]
  // volume: number
  // seekTime: number
  // shuffle: boolean
  // isMuted: boolean
}
