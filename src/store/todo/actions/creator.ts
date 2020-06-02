import { createActionCreator } from '@/util/action'
import { TodoItem } from '../state'
import { TodoActions } from './action'
import { TodoActionTypes } from './constant'


/**
 * Action types for StoreState.todo
 */
export const TodoActionCreators = {
  // Adding todo item
  addItem: createActionCreator<TodoActions.AddItem, PartialOmit<TodoItem, 'identifier'>>(
    TodoActionTypes.ADD_ITEM,
    todoItem => ({
      identifier: todoItem.identifier || todoItem.content,
      status: todoItem.status,
      content: todoItem.content,
    })
  ),

  // Removing todo item
  delItem: createActionCreator<TodoActions.DelItem>(TodoActionTypes.DEL_ITEM),

  // Performing undo on StoreState.todo
  undo: createActionCreator<TodoActions.Undo>(TodoActionTypes.UNDO),

  // Performing redo on StoreState.todo
  redo: createActionCreator<TodoActions.Redo>(TodoActionTypes.REDO),
}
