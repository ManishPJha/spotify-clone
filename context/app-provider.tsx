'use client'

import { createContext, useMemo, useReducer } from 'react'

import {
  BACKWARD_PAGE,
  DESTROY_PAGE_HISTORY,
  FORWARD_PAGE,
} from '@/constants/context'

type AppCtxActions = {
  type: string
  payload?: any
}

const initState: any = {
  pageHistoryStack: [],
}

const AppContext = createContext<typeof initState>(initState)

const reducer = (state = initState, action: AppCtxActions) => {
  switch (action.type) {
    case FORWARD_PAGE:
      break
    case BACKWARD_PAGE:
      break
    case DESTROY_PAGE_HISTORY:
      break

    default:
      throw new Error(`invalid ${action.type} passed`)
  }

  return state
}

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const value = useMemo(() => [state, dispatch], [state, dispatch])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
