/* eslint-disable @typescript-eslint/no-namespace */
import {
  USER_UPDATE_LOCATION,
  UserUpdateLocationFailureAction,
  UserUpdateLocationRequestAction,
  UserUpdateLocationSuccessAction,
  createUpdateLocationActions,
} from './_update-location'
import {
  USER_UPDATE_USERNAME,
  UpdateUsernameAction,
  createUpdateUsernameAction,
} from './_update-username'
export * from './types'


// Action types
export namespace UserActionTypes {
  // update username
  export const UPDATE_USERNAME = USER_UPDATE_USERNAME
  export type UPDATE_USERNAME = typeof UPDATE_USERNAME

  // update location
  export const UPDATE_LOCATION = USER_UPDATE_LOCATION
  export type UPDATE_LOCATION = typeof UPDATE_LOCATION
}

export type UserActionTypes =
  | USER_UPDATE_USERNAME
  | USER_UPDATE_LOCATION



// Actions
export namespace UserActions {
  // update username
  export type UpdateUsername = UpdateUsernameAction

  // update location
  export type UpdateLocationRequest = UserUpdateLocationRequestAction
  export type UpdateLocationSuccess = UserUpdateLocationSuccessAction
  export type UpdateLocationFailure = UserUpdateLocationFailureAction
}

export type UserActions =
  | UpdateUsernameAction
  | UserUpdateLocationRequestAction
  | UserUpdateLocationSuccessAction
  | UserUpdateLocationFailureAction



// Action creators
export const UserActionCreators = {
  updateUsername: createUpdateUsernameAction,
  updateLocation: createUpdateLocationActions,
}
