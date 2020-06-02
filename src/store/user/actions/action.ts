import { UserActionTypes } from './constant'


// Action for updating username
export interface UserUpdateUsernameAction {
  type: UserActionTypes.UPDATE_USERNAME
  payload: {
    username: string
  }
}


// Action for fetching user info (requested)
export interface UserFetchUserinfoRequestedAction {
  type: UserActionTypes.FETCH_USERINFO_REQUESTED
  payload: {
    username: string
  }
}


// Action for fetching user info (succeed)
export interface UserFetchUserinfoSucceedAction {
  type: UserActionTypes.FETCH_USERINFO_SUCCEED
  payload: {
    username: string
    gender: 'male' | 'female'
  }
}


// Action for fetching user info (failed)
export interface UserFetchUserinfoFailedAction {
  type: UserActionTypes.FETCH_USERINFO_FAILED
  payload: {
    error: any
  }
}


// Actions for touching StoreState.user
export type UserAction =
  | UserUpdateUsernameAction
  | UserFetchUserinfoRequestedAction
  | UserFetchUserinfoSucceedAction
  | UserFetchUserinfoFailedAction
