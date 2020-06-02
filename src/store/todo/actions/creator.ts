import { createActionCreator } from '@/util/action'
import { TodoItem } from '../state'
import {
  TodoAddItemAction,
  TodoDelItemAction,
  TodoRedoAction,
  TodoUndoAction,
} from './action'
import { TodoActionTypes } from './constant'


/**
 * Action types for StoreState.todo
 */
export const TodoActionCreators = {
  // Adding todo item
  addItem: createActionCreator<TodoAddItemAction, PartialOmit<TodoItem, 'identifier'>>(
    TodoActionTypes.ADD_ITEM,
    todoItem => ({
      identifier: todoItem.identifier || todoItem.content,
      status: todoItem.status,
      content: todoItem.content,
    })
  ),

  // Removing todo item
  delItem: createActionCreator<TodoDelItemAction>(TodoActionTypes.DEL_ITEM),

  // Performing undo on StoreState.todo
  undo: createActionCreator<TodoUndoAction>(TodoActionTypes.UNDO),

  // Performing redo on StoreState.todo
  redo: createActionCreator<TodoRedoAction>(TodoActionTypes.REDO),
}
