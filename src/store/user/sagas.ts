import { delay, put, takeLatest } from 'redux-saga/effects'
import { UserActionCreators, UserActionTypes, UserActions } from './actions'


/**
 * fetch user info
 * @param action
 */
export function* fetchUserInfo(action: UserActions.FetchUserinfoRequested) {
  // Analog network delay
  yield delay(Math.ceil(Math.random() * 3000))

  let nextAction: UserActions.FetchUserinfoSucceed | UserActions.FetchUserinfoFailed
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
