import { delay, put, takeLatest } from 'redux-saga/effects'
import {
  UserActionCreators,
  UserActionTypes,
  UserFetchUserinfoFailedAction,
  UserFetchUserinfoRequestedAction,
  UserFetchUserinfoSucceedAction,
} from './actions'


/**
 * fetch user info
 * @param action
 */
export function* fetchUserInfo(action: UserFetchUserinfoRequestedAction) {
  // Analog network delay
  yield delay(Math.ceil(Math.random() * 3000))

  let nextAction: UserFetchUserinfoSucceedAction | UserFetchUserinfoFailedAction
  if (Math.random() > 0.5) { // succeed
    nextAction = UserActionCreators.fetchUserInfoSucceed({
      username: 'Bob',
      gender: 'male',
    })
  } else { // failed
    nextAction = UserActionCreators.fetchUserInfoFailed({
      error: 'failed',
    })
  }

  yield put(nextAction)
}


/**
 * watch user actions
 */
export function* watchUserSaga() {
  yield takeLatest(UserActionTypes.FETCH_USERINFO_REQUESTED, fetchUserInfo)
}
