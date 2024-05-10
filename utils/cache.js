/**
 * LRU cache to cache 25 recently played musics
 */
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

const recentlyPlayedLRU = new LRU(25)

const recentlyPlayedCache = (key, track) => {
  recentlyPlayedLRU.set(key, track)

  return Array.from(recentlyPlayedLRU.cache.values())
}

export default recentlyPlayedCache
export { recentlyPlayedLRU }
