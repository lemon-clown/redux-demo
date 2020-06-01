import { delay, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_USER_INFO_FAILED,
  FETCH_USER_INFO_REQUESTED,
  FETCH_USER_INFO_SUCCEED,
  FetchUserInfoFailedAction,
  FetchUserInfoRequestedAction,
  FetchUserInfoSucceedAction,
} from './types'


/**
 * fetch user info
 * @param action
 */
export function* fetchUserInfo(action: FetchUserInfoRequestedAction) {
  // Analog network delay
  yield delay(Math.ceil(Math.random() * 3000))

  let nextAction: FetchUserInfoSucceedAction | FetchUserInfoFailedAction
  if (Math.random() > 0.5) { // succeed
    nextAction = {
      type: FETCH_USER_INFO_SUCCEED,
      payload: {
        username: 'Bob',
        gender: 'male',
      }
    }
  } else { // failed
    nextAction = {
      type: FETCH_USER_INFO_FAILED,
      payload: {
        error: 'failed',
      }
    }
  }

  yield put(nextAction)
}


/**
 * watch user actions
 */
export function* watchUserSaga() {
  yield takeLatest(FETCH_USER_INFO_REQUESTED, fetchUserInfo)
}
