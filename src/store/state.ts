import { UserState, initUserState } from './user/state'


/**
 *
 */
export interface StoreState {
  user: UserState
}


/**
 *
 */
export const initStoreState: StoreState = {
  user: initUserState,
}
