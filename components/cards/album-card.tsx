import Image from 'next/image'
import Link from 'next/link'

import album from '@public/marcela.jpg'
import { RiPlayFill as PlayIcon } from 'react-icons/ri'

const AlbumCard = () => {
  return (
    <Link
      href={'#'}
      className="flex items-center gap-4 bg-white/5 group rounded-md hover:bg-white/10 transition-colors"
    >
      <Image
        src={album}
        alt="Album cover"
        className="rounded-md p-1"
        width={104}
        height={104}
      />
      <strong className="text-xl overflow-x-auto truncate">Rap Caviar</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayIcon />
      </button>
    </Link>
  )
}

export default AlbumCard
