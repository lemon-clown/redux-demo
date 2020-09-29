import { Action, createActionCreator } from '@barusu/redux-actions'


// Action type
export const USER_UPDATE_USERNAME = '@user/update-username'
export type USER_UPDATE_USERNAME = typeof USER_UPDATE_USERNAME


// Action
export type UpdateUsernameAction = Required<
  Action<
    USER_UPDATE_USERNAME,
    { username: string }
  >
>


// Action creator
export const createUpdateUsernameAction =
  createActionCreator<UpdateUsernameAction>(
    USER_UPDATE_USERNAME,
    false
  )
