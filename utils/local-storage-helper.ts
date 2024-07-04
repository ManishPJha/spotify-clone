export const persistState = <T>(key: string, state: T) => {
  localStorage.setItem(key, JSON.stringify(state))
}

export const retriveState = <T>(key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}') as T
}

export const removeState = (key: string) => {
  localStorage.removeItem(key)
}
