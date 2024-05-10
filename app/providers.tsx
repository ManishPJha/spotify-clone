import { AppContextProvider } from '@/context/app-provider'

import React from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppContextProvider>{children}</AppContextProvider>
}

export default Providers
