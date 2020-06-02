import { TodoItem } from '../state'
import { TodoActionTypes } from './constant'


// Action for adding todo item
export interface TodoAddItemAction {
  type: TodoActionTypes.ADD_ITEM
  payload: TodoItem
}


// Action for removing todo item
export interface TodoDelItemAction {
  type: TodoActionTypes.DEL_ITEM
  payload: Pick<TodoItem, 'identifier'>
}


// Action for performing undo on StoreState.todo
export interface TodoUndoAction {
  type: TodoActionTypes.UNDO
  payload: void
}


// Action for performing undo on StoreState.todo
export interface TodoRedoAction {
  type: TodoActionTypes.REDO
  payload: void
}


// Actions for touching store.todo
export type TodoActions =
  | TodoAddItemAction
  | TodoDelItemAction
  | TodoUndoAction
  | TodoRedoAction
