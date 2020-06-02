import { StateWithHistory } from 'redux-undo'
import { TodoState, initTodoState } from './todo/state'
import { UserState, initUserState } from './user/state'


/**
 *
 */
export interface StoreState {
  user: UserState
  todo: StateWithHistory<TodoState>
}


/**
 *
 */
export const initStoreState: StoreState = {
  user: initUserState,
  todo: {
    past: [],
    present: initTodoState,
    future: [],
  },
}
