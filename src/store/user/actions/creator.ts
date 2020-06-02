import { createActionCreator } from '@/util/action'
import { UserActions } from './action'
import { UserActionTypes } from './constant'


/**
 * Action creators for StoreState.user
 */
export const UserActionCreators = {
  // Updating username
  updateUsername: createActionCreator<UserActions.UpdateUsername>(
    UserActionTypes.UPDATE_USERNAME),

  // Fetching user info (requested)
  fetchUserInfoRequested: createActionCreator<UserActions.FetchUserinfoRequested>(
    UserActionTypes.FETCH_USERINFO_REQUESTED),

  // Fetching user info (succeed)
  fetchUserInfoSucceed: createActionCreator<UserActions.FetchUserinfoSucceed>(
    UserActionTypes.FETCH_USERINFO_SUCCEED),

  // Fetching user info (failed)
  fetchUserInfoFailed: createActionCreator<UserActions.FetchUserinfoFailed>(
    UserActionTypes.FETCH_USERINFO_FAILED),
}
