import { createAsyncActionReducer } from '@barusu/redux-actions'
import { produce } from 'immer'
import { Reducer } from 'redux'
import { UserActionTypes, UserActions } from './actions'
import { UserUpdateLocationActions } from './actions/_update-location'
import { UserState, initUserState } from './state'


// Action handler
export const handleUpdateLocation
  = createAsyncActionReducer<
    UserState['location'],
    UserActionTypes.UPDATE_LOCATION,
    UserUpdateLocationActions>(
      UserActionTypes.UPDATE_LOCATION)


export const userReducer: Reducer<UserState, UserActions> = (
  state: UserState = initUserState,
  action: UserActions,
): UserState => {
  return produce(state, draftState => {
    switch (action.type) {
      case UserActionTypes.UPDATE_USERNAME: {
        const { username } = action.payload
        // eslint-disable-next-line no-param-reassign
        draftState.username = username
        break
      }
      case UserActionTypes.UPDATE_LOCATION: {
        // eslint-disable-next-line no-param-reassign
        draftState.location = handleUpdateLocation.process(draftState.location, action)
        break
      }
    }
  })
}
