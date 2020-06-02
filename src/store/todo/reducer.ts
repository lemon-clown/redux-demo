import { produce } from 'immer'
import { Reducer } from 'redux'
import { TodoItem, TodoState, initTodoState } from './state'
import { ADD_TODO_ITEM, DEL_TODO_ITEM, TodoAction } from './types'


export const todoReducer: Reducer<TodoState, TodoAction> = (
  state: TodoState = initTodoState,
  action: TodoAction,
): TodoState => {
  return produce(state, draftState => {
    switch (action.type) {
      case ADD_TODO_ITEM: {
        const item: TodoItem = { ...action.payload }
        draftState.items.push(item)
        break
      }
      case DEL_TODO_ITEM: {
        const { identifier } = action.payload
        const index = state.items.findIndex(item => item.identifier === identifier)
        if (index >= 0) {
          draftState.items.splice(index, 1)
        }
        break
      }
    }
  })
}
