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


// Actions for touching store.todo
export type TodoActions =
  | TodoAddItemAction
  | TodoDelItemAction
