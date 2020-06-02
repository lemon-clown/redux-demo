import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import undoable from 'redux-undo'
import { StoreState } from './state'
import { TodoActionTypes, TodoActions } from './todo/actions'
import { todoReducer } from './todo/reducer'
import { TodoState } from './todo/state'
import { UserActions } from './user/actions'
import { userReducer } from './user/reducer'
import { UserState } from './user/state'


export const rootReducer = combineReducers<StoreState>({
  user: persistReducer<UserState, UserActions>({
    key: 'todo',
    storage: storage,
  }, userReducer),
  todo: undoable<TodoState, TodoActions>(todoReducer, {
    limit: 200,
    undoType: TodoActionTypes.UNDO as unknown as string,
    redoType: TodoActionTypes.REDO as unknown as string,
  }),
})
