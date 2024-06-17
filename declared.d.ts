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

type Track = {
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
