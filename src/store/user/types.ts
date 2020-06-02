// Action type for update username
export const UPDATE_USERNAME = Symbol('@user/UPDATE_USERNAME')
export type UPDATE_USERNAME = typeof UPDATE_USERNAME

// Action type for fetch user-info (requested)
export const FETCH_USER_INFO_REQUESTED = Symbol('@user/FETCH_USER_INFO/REQUESTED')
export type FETCH_USER_INFO_REQUESTED = typeof FETCH_USER_INFO_REQUESTED

// Action type for fetch user-info (succeed)
export const FETCH_USER_INFO_SUCCEED = Symbol('@user/FETCH_USER_INFO/SUCCEED')
export type FETCH_USER_INFO_SUCCEED = typeof FETCH_USER_INFO_SUCCEED

// Action type for fetch user-info (failed)
export const FETCH_USER_INFO_FAILED = Symbol('@user/FETCH_USER_INFO/FAILED')
export type FETCH_USER_INFO_FAILED = typeof FETCH_USER_INFO_FAILED


// Action for update username
export interface UpdateUsernameAction {
  type: UPDATE_USERNAME
  payload: {
    username: string
  }
}


// Action for fetch user-info (requested)
export interface FetchUserInfoRequestedAction {
  type: FETCH_USER_INFO_REQUESTED
  payload: {
    username: string
  }
}


// Action for fetch user-info (succeed)
export interface FetchUserInfoSucceedAction {
  type: FETCH_USER_INFO_SUCCEED
  payload: {
    username: string
    gender: 'male' | 'female'
  }
}


// Action for fetch user-info (failed)
export interface FetchUserInfoFailedAction {
  type: FETCH_USER_INFO_FAILED
  payload: {
    error: any
  }
}


// Actions for touching store.user
export type UserAction =
  | UpdateUsernameAction
  | FetchUserInfoRequestedAction
  | FetchUserInfoSucceedAction
  | FetchUserInfoFailedAction
