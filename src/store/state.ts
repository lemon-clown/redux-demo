import { TodoState, initTodoState } from './todo/state'
import { UserState, initUserState } from './user/state'


/**
 *
 */
export interface StoreState {
  user: UserState
  todo: TodoState
}


/**
 *
 */
export const initStoreState: StoreState = {
  user: initUserState,
  todo: initTodoState,
}
