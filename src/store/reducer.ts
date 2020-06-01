import { combineReducers } from 'redux'
import { StoreState } from './state'
import { userReducer } from './user/reducer'


export const rootReducer = combineReducers<StoreState>({
  user: userReducer,
})


export default rootReducer
