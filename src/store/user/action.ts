/**
 * Update username
 */
export const UPDATE_USERNAME = '@/UPDATE_USERNAME'
export type UPDATE_USERNAME = typeof UPDATE_USERNAME
export interface UpdateUsernameAction {
  type: UPDATE_USERNAME,
  payload: {
    username: string
  }
}



/**
 * Actions for touching store.user
 */
export type UserAction =
  | UpdateUsernameAction
