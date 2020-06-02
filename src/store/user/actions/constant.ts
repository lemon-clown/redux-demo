/**
 * Action types for StoreState.user
 */
export enum UserActionTypes {
  // Updating username
  UPDATE_USERNAME = '@user/UPDATE_USERNAME',

  // Fetching user info (requested)
  FETCH_USERINFO_REQUESTED = '@user/FETCH_USERINFO/REQUESTED',

  // Fetching user info (succeed)
  FETCH_USERINFO_SUCCEED = '@user/FETCH_USERINFO/SUCCEED',

  // Fetching user info (failed)
  FETCH_USERINFO_FAILED = '@user/FETCH_USERINFO/FAILED',
}
