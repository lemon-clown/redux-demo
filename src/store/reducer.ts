import { combineReducers } from 'redux'
import { StoreState } from './state'
import { userReducer } from './user/reducer'


export const reducer = combineReducers<StoreState>({
  user: userReducer,
})
