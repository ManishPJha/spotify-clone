class LRU {
  constructor(max = 5) {
    this.max = max
    this.cache = new Map()
  }

  get() {
    return Array.from(this.cache.values())
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size === this.max) {
      this.cache.delete(this.first())
    }
    this.cache.set(key, value)
  }

  first() {
    return this.cache.keys().next().value()
  }
}

const recetlyPlayedLRU = new LRU()

const recentlyPlayedCache = (key, track) => {
  recetlyPlayedLRU.set(key, track)

  return Array.from(recetlyPlayedLRU.cache.values())
}

export default recentlyPlayedCache
export { recetlyPlayedLRU }
