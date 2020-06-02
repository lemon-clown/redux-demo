import { TodoItem } from './state'
import {
  ADD_TODO_ITEM,
  AddTodoItemAction,
  DEL_TODO_ITEM,
  DelTodoItemAction,
} from './types'


// Action creator for adding todo item
export const addTodoItem = (
  todoItem: PartialOmit<TodoItem, 'identifier'>,
): AddTodoItemAction => {
  return {
    type: ADD_TODO_ITEM,
    payload: {
      identifier: todoItem.identifier || todoItem.content,
      status: todoItem.status,
      content: todoItem.content,
    }
  }
}


// Action creator for removing todo item
export const delTodoItem = (
  todoItem: Pick<TodoItem, 'identifier'>,
): DelTodoItemAction => {
  return {
    type: DEL_TODO_ITEM,
    payload: {
      identifier: todoItem.identifier,
    }
  }
}
