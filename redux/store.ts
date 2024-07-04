import { combineReducers, configureStore } from '@reduxjs/toolkit'

import player from './features/player'

const rootReducer = combineReducers({
  player,
})

const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: true,
      }),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  })

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
