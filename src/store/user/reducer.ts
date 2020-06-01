import { produce } from 'immer'
import { Reducer } from 'redux'
import { UPDATE_USERNAME, UserAction } from './action'
import { UserState, initUserState } from './state'


export const userReducer: Reducer<UserState, UserAction> = (
  state: UserState = initUserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return produce(state, draftState => {
        const { payload } = action
        // eslint-disable-next-line no-param-reassign
        draftState.username = payload.username
      })
    }
    default:
      return state
  }
}
