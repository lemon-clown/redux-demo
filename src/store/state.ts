import { PersistPartial } from 'redux-persist/es/persistReducer'
import { StateWithHistory } from 'redux-undo'
import { TodoState, initTodoState } from './todo/state'
import { UserState, initUserState } from './user/state'


/**
 *
 */
export interface StoreState {
  user: UserState & PersistPartial
  todo: StateWithHistory<TodoState>
}


/**
 *
 */
export const initStoreState: StoreState = {
  user: initUserState as any,
  todo: {
    past: [],
    present: initTodoState,
    future: [],
  },
}
