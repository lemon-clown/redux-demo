import { produce } from 'immer'
import { Reducer } from 'redux'
import { UserAction, UserActionTypes } from './actions'
import { UserState, initUserState } from './state'


export const userReducer: Reducer<UserState, UserAction> = (
  state: UserState = initUserState,
  action: UserAction,
): UserState => {
  return produce(state, draftState => {
    switch (action.type) {
      case UserActionTypes.UPDATE_USERNAME: {
        const { username } = action.payload
        // eslint-disable-next-line no-param-reassign
        draftState.username = username
        break
      }
      case UserActionTypes.FETCH_USERINFO_SUCCEED: {
        const { username, gender } = action.payload
        // eslint-disable-next-line no-param-reassign
        draftState.username = username
        // eslint-disable-next-line no-param-reassign
        draftState.gender = gender
        break
      }
    }
  })
}
