'use client'

import React from 'react'
import { Provider } from 'react-redux'

import { AppContextProvider } from '@/context/app-provider'
import store from '@/redux/store'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <Provider store={store}>{children}</Provider>
    </AppContextProvider>
  )
}

export default Providers
