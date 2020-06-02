import { TodoItem } from '../state'
import { TodoActionTypes } from './constant'


// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TodoActions {
  // Action for adding todo item
  export interface AddItem {
    type: TodoActionTypes.ADD_ITEM
    payload: TodoItem
  }

  // Action for removing todo item
  export interface DelItem {
    type: TodoActionTypes.DEL_ITEM
    payload: Pick<TodoItem, 'identifier'>
  }

  // Action for performing undo on StoreState.todo
  export interface Undo {
    type: TodoActionTypes.UNDO
    payload: void
  }

  // Action for performing undo on StoreState.todo
  export interface Redo {
    type: TodoActionTypes.REDO
    payload: void
  }
}


/**
 * Actions for touching store.todo
 */
export type TodoActions =
  | TodoActions.AddItem
  | TodoActions.DelItem
  | TodoActions.Undo
  | TodoActions.Redo
