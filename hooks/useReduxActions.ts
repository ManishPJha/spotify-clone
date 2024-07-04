import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { player } from '@/redux/features/player'

export const useReduxActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators(
    {
      ...player.actions,
    },
    dispatch
  )
}

export const useReduxState = <T>(selector: (state: RootState) => T) => {
  return useSelector<RootState, T>(selector)
}
