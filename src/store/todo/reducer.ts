import { produce } from 'immer'
import { Reducer } from 'redux'
import { TodoActionTypes, TodoActions } from './actions'
import { TodoItem, TodoState, initTodoState } from './state'


export const todoReducer: Reducer<TodoState, TodoActions> = (
  state: TodoState = initTodoState,
  action: TodoActions,
): TodoState => {
  return produce(state, draftState => {
    switch (action.type) {
      case TodoActionTypes.ADD_ITEM: {
        const item: TodoItem = { ...action.payload }
        draftState.items.push(item)
        break
      }
      case TodoActionTypes.DEL_ITEM: {
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
