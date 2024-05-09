import { AppContext, AppCtxActions, ContextState } from '@/context/app-provider'
import { Dispatch, useContext } from 'react'

type AppCtxType = {
  state: ContextState
  dispatch: Dispatch<AppCtxActions>
}

// app context actions
export const useAppContext = (): AppCtxType => {
  const [state, dispatch] = useContext(AppContext)

  return {
    state,
    dispatch,
  }
}
