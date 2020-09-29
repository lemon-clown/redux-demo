import { AsyncStateItem, createAsyncStateItem } from '@barusu/redux-actions'
import { UserLocationData } from './actions'



/**
 *
 */
export interface UserState {
  username: string
  gender: 'male' | 'female'
  location: AsyncStateItem<UserLocationData>
}


/**
 *
 */
export const initUserState: UserState = {
  username: 'Alice',
  gender: 'female',
  location: createAsyncStateItem<UserLocationData>({
    latitude: 0,
    longitude: 20
  })
}
