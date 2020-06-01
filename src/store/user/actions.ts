import { UPDATE_USERNAME, UpdateUsernameAction } from './types'


// Action creator for update username
export const updateUsername = (
  payload: UpdateUsernameAction['payload']
): UpdateUsernameAction => {
  return { type: UPDATE_USERNAME, payload }
}
