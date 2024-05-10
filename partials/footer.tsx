'use client'

// import Image from 'next/image'
// import { FaLaptop as LaptopIcon } from 'react-icons/fa'
// import {
//   FiHeart as HeartIcon,
//   FiMaximize as MaximizeIcon,
//   FiMic as MicIcon,
//   FiPlay as PlayIcon,
//   FiRepeat as RepeatIcon,
//   FiShuffle as ShuffleIcon,
//   FiSkipBack as SkipBackIcon,
//   FiSkipForward as SkipForwardIcon,
//   FiVolume as VolumeIcon,
// } from 'react-icons/fi'
// import { HiMiniQueueList as QueueListIcon } from 'react-icons/hi2'

// import playingMusicAlbum from '@public/cover-image.jpeg'

import { useMemo } from 'react'

import AudioPlayer from '@/app/ui/player'
import { useAppContext } from '@/context/app-provider'

const Footer = () => {
  const [state] = useAppContext()

  const playerTracks = useMemo(() => state.tracks, [state.tracks])

  const currentTrack = playerTracks.find((track) => track.isPlaying)

  // useEffect(() => {
  //   if (state.tracks.length)
  //     console.log('🍁if(state.tracks.length)', state.tracks)
  // }, [state.tracks])

  // if track is not playing do not show player
  if (!state.isPlayingTrack) return null

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-3 mt-auto flex items-center justify-between fixed bottom-0 left-0 right-0">
      {currentTrack && (
        <AudioPlayer currentTrack={currentTrack} queue={playerTracks} />
      )}
    </footer>
  )

  // return (
  //   <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-3 mt-auto flex items-center justify-between fixed bottom-0 left-0 right-0">
  //     <div className="flex items-center gap-4">
  //       <Image
  //         src={playingMusicAlbum}
  //         alt="Album cover"
  //         className="rounded-md"
  //         width={56}
  //         height={56}
  //       />
  //       <div className="flex flex-col mb-4">
  //         <div className="flex-row">
  //           <strong className="text-white inline-flex">
  //             Night Crawler
  //             <HeartIcon size={16} className="text-zinc-400 ml-4 mt-1" />
  //           </strong>
  //         </div>
  //         <span className="text-xs text-zinc-400">Travis Scott</span>
  //       </div>
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <div className="flex items-center gap-7">
  //         <ShuffleIcon size={20} className="text-zinc-200" />
  //         <SkipBackIcon size={20} className="text-zinc-200" />
  //         <button
  //           id="play-button"
  //           aria-label="play button"
  //           className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black"
  //         >
  //           <PlayIcon />
  //         </button>
  //         <SkipForwardIcon size={20} className="text-zinc-200" />
  //         <RepeatIcon size={20} className="text-zinc-200" />
  //       </div>
  //       <div className="flex items-center gap-4 mt-3">
  //         <span className="text-xs text-zinc-500">0:44</span>
  //         <div
  //           style={{ width: '40vw' }}
  //           className="h-1 rounded-full bg-zinc-600"
  //         >
  //           <div className="h-full w-2/4 rounded-full bg-white"></div>
  //         </div>
  //         <span className="text-xs text-zinc-500">4:44</span>
  //       </div>
  //     </div>
  //     <div className="flex items-center gap-4">
  //       <MicIcon size={20} className="text-zinc-200" />
  //       <QueueListIcon size={20} className="text-zinc-200" />
  //       <LaptopIcon size={20} className="text-zinc-200" />
  //       <VolumeIcon size={20} className="text-zinc-200" />
  //       <div className="h-1 rounded-full w-24 bg-zinc-600">
  //         <div className="h-full w-3/4 rounded-full bg-white"></div>
  //       </div>
  //       <MaximizeIcon size={20} className="text-zinc-200" />
  //     </div>
  //   </footer>
  // )
}

export default Footer
