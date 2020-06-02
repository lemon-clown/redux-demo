import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { StoreState } from './state'
import { TodoActionTypes, TodoActions } from './todo/actions'
import { todoReducer } from './todo/reducer'
import { TodoState } from './todo/state'
import { userReducer } from './user/reducer'


export const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  todo: undoable<TodoState, TodoActions>(todoReducer, {
    limit: 200,
    undoType: TodoActionTypes.UNDO as unknown as string,
    redoType: TodoActionTypes.REDO as unknown as string,
  }),
})


export default rootReducer
