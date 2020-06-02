// @see https://github.com/microsoft/TypeScript/issues/18408#issuecomment-637363118
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UserActionTypes {
  // Updating username
  export const UPDATE_USERNAME = '@user/UPDATE_USERNAME'
  export type UPDATE_USERNAME = typeof UPDATE_USERNAME

  // Fetching user info (requested)
  export const FETCH_USERINFO_REQUESTED = '@user/FETCH_USERINFO/REQUESTED'
  export type FETCH_USERINFO_REQUESTED = typeof FETCH_USERINFO_REQUESTED

  // Fetching user info (succeed)
  export const FETCH_USERINFO_SUCCEED = '@user/FETCH_USERINFO/SUCCEED'
  export type FETCH_USERINFO_SUCCEED = typeof FETCH_USERINFO_SUCCEED

  // Fetching user info (failed)
  export const FETCH_USERINFO_FAILED = '@user/FETCH_USERINFO/FAILED'
  export type FETCH_USERINFO_FAILED = typeof FETCH_USERINFO_FAILED
}


/**
 * Action types for StoreState.user
 */
export type UserActionTypes =
  | UserActionTypes.UPDATE_USERNAME
  | UserActionTypes.FETCH_USERINFO_REQUESTED
  | UserActionTypes.FETCH_USERINFO_SUCCEED
  | UserActionTypes.FETCH_USERINFO_FAILED
