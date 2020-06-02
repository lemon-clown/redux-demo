import { TodoItem } from './state'


// Action type for adding todo item
export const ADD_TODO_ITEM = Symbol('@todo/ADD_TODO_ITEM')
export type ADD_TODO_ITEM = typeof ADD_TODO_ITEM

// Action type for removing todo item
export const DEL_TODO_ITEM = Symbol('@todo/DEL_TODO_ITEM')
export type DEL_TODO_ITEM = typeof DEL_TODO_ITEM


// Action for adding todo item
export interface AddTodoItemAction {
  type: ADD_TODO_ITEM
  payload: TodoItem
}


// Action type for removing todo item
export interface DelTodoItemAction {
  type: DEL_TODO_ITEM
  payload: Pick<TodoItem, 'identifier'>
}



// Actions for touching store.todo
export type TodoAction =
  | AddTodoItemAction
  | DelTodoItemAction
