import { takeLatest } from 'redux-saga/effects'
import { UserActionTypes } from '../actions'
import { updateLocation } from './_update-location'


/**
 * watch user actions
 */
export function* watchUserSaga(): any {
  yield takeLatest(UserActionTypes.UPDATE_LOCATION, updateLocation)
}
