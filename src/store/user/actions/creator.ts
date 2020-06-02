import { createActionCreator } from '@/util/action'
import {
  UserFetchUserinfoFailedAction,
  UserFetchUserinfoRequestedAction,
  UserFetchUserinfoSucceedAction,
  UserUpdateUsernameAction,
} from './action'
import { UserActionTypes } from './constant'


/**
 * Action creators for StoreState.user
 */
export const UserActionCreators = {
  // Updating username
  updateUsername: createActionCreator<UserUpdateUsernameAction>(
    UserActionTypes.UPDATE_USERNAME),

  // Fetching user info (requested)
  fetchUserInfoRequested: createActionCreator<UserFetchUserinfoRequestedAction>(
    UserActionTypes.FETCH_USERINFO_REQUESTED),

  // Fetching user info (succeed)
  fetchUserInfoSucceed: createActionCreator<UserFetchUserinfoSucceedAction>(
    UserActionTypes.FETCH_USERINFO_SUCCEED),

  // Fetching user info (failed)
  fetchUserInfoFailed: createActionCreator<UserFetchUserinfoFailedAction>(
    UserActionTypes.FETCH_USERINFO_FAILED),
}
