import { combineReducers } from 'redux'
import { StoreState } from './state'
import { todoReducer } from './todo/reducer'
import { userReducer } from './user/reducer'


export const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  todo: todoReducer,
})


export default rootReducer
