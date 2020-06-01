import { produce } from 'immer'
import { Reducer } from 'redux'
import { UserState, initUserState } from './state'
import { FETCH_USER_INFO_SUCCEED, UPDATE_USERNAME, UserAction } from './types'


export const userReducer: Reducer<UserState, UserAction> = (
  state: UserState = initUserState,
  action: UserAction,
): UserState => {
  return produce(state, draftState => {
    switch (action.type) {
      case UPDATE_USERNAME: {
        const { username } = action.payload
        // eslint-disable-next-line no-param-reassign
        draftState.username = username
        break
      }
      case FETCH_USER_INFO_SUCCEED: {
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
