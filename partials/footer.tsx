import AudioPlayer from '@/app/ui/player'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-3 mt-auto flex items-center justify-between fixed bottom-0 left-0 right-0">
      <AudioPlayer />
    </footer>
  )
}

export default Footer
