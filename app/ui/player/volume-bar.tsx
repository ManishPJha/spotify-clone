import { cn } from '@/utils'
import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import {
  FiMaximize as MaximizeIcon,
  FiVolume1 as VolumeLowIcon,
  //   FiMicOff as MicOffIcon,
  //   FiVolume2 as VolumeMaxIcon,
  FiVolumeX as VolumeMuteIcon,
} from 'react-icons/fi'
import { HiMiniQueueList as QueueListIcon } from 'react-icons/hi2'
import { MdPictureInPictureAlt as PictureInPictureIcon } from 'react-icons/md'

interface VolumeBarProps {
  volume: number
  isMuted: boolean
  setVolume: Dispatch<SetStateAction<number>>
  setMute: Dispatch<SetStateAction<boolean>>
}

const defaultIconClasses = cn('text-zinc-200 cursor-pointer')

const VolumeBar = ({ isMuted, volume, setMute, setVolume }: VolumeBarProps) => {
  const volumeIcon = isMuted ? VolumeMuteIcon : VolumeLowIcon

  return (
    <div className="flex items-center gap-4">
      <QueueListIcon size={20} className={defaultIconClasses} />
      {renderVolumeIcon(volumeIcon, 20, isMuted, setMute, setVolume)}
      {/* <div className="h-1 rounded-full w-24 bg-zinc-600">
        <div className="h-full w-3/4 rounded-full bg-white"></div>
      </div> */}
      <MaximizeIcon size={20} className={defaultIconClasses} />
      <PictureInPictureIcon size={20} className={defaultIconClasses} />
    </div>
  )
}

export default VolumeBar

export const renderVolumeIcon = (
  icon: IconType,
  iconSize: number = 20,
  isMuted: boolean,
  setMute: Dispatch<SetStateAction<boolean>>,
  setVolume: Dispatch<SetStateAction<number>>
) => {
  const Icon = icon

  const handleMuteUnMuteAction = () => {
    setMute(!isMuted)
    // setVolume(isMuted ? 0 : 1)
  }

  return (
    <Icon
      className={defaultIconClasses}
      size={iconSize}
      onClick={handleMuteUnMuteAction}
    />
  )
}
