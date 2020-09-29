import {
  AsyncActions,
  AsyncFailedAction,
  AsyncRequestedAction,
  AsyncSucceedAction,
  createAsyncActionCreator,
} from '@barusu/redux-actions'


// Action type
export const USER_UPDATE_LOCATION = '@user/update-location'
export type USER_UPDATE_LOCATION = typeof USER_UPDATE_LOCATION


// Action -- request
export type UserUpdateLocationRequestAction = AsyncRequestedAction<
  USER_UPDATE_LOCATION,
  { username: string }
>

// Action -- success
export type UserUpdateLocationSuccessAction = AsyncSucceedAction<
  USER_UPDATE_LOCATION,
  {
    latitude: number
    longitude: number
  }
>

// Actions -- failure
export type UserUpdateLocationFailureAction = AsyncFailedAction<
  USER_UPDATE_LOCATION
>

export type UserUpdateLocationActions = AsyncActions<
  USER_UPDATE_LOCATION,
  UserUpdateLocationRequestAction['payload'],
  UserUpdateLocationSuccessAction['payload'],
  UserUpdateLocationFailureAction['payload']>


// Action creator
export const createUpdateLocationActions =
  createAsyncActionCreator<
    USER_UPDATE_LOCATION,
    UserUpdateLocationActions
  >(USER_UPDATE_LOCATION)
