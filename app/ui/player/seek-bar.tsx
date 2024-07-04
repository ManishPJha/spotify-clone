interface SeekBarProps {
  appTime: number
  min: number
  max: number
  // setSeekTime: Dispatch<SetStateAction<number>>
  setSeekTime: (time: number) => void
  onInputChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
}

const Seekbar = ({
  appTime,
  min,
  max,
  setSeekTime,
  onInputChange,
}: SeekBarProps) => {
  return (
    <div className="hidden sm:flex flex-row items-center">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden lg:mr-4 lg:block text-white"
      >
        -
      </button>
      {/* <p className="text-white">{appTime === 0 ? '0:00' : getTime(appTime)}</p> */}
      <input
        type="range"
        step="any"
        value={appTime}
        min={min}
        max={max}
        onInput={onInputChange}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      {/* <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p> */}
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden lg:ml-4 lg:block text-white"
      >
        +
      </button>
    </div>
  )
}

export default Seekbar
