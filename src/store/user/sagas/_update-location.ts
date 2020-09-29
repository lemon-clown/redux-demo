import { delay, put } from 'redux-saga/effects'
import { AsyncActionStatus } from '@barusu/redux-actions'
import { stringify } from '@/util/string'
import { UserActionCreators, UserActions } from '../actions'


/**
 * Fetch user info
 * @param action
 */
export function* updateLocation(action: UserActions.UpdateLocationRequest): any {
  // Only handling requesting action
  if (action.status !== AsyncActionStatus.REQUESTED) return

  // Analog network delay
  yield delay(Math.ceil(Math.random() * 3000))

  let nextAction: UserActions.UpdateLocationSuccess | UserActions.UpdateLocationFailure
  if (Math.random() > 0.5) { // succeed
    nextAction = UserActionCreators.updateLocation.success({
      latitude: Math.random() * 180 - 90,
      longitude: Math.random() * 180,
    })
  } else { // failed
    nextAction = UserActionCreators.updateLocation.failure({
      code: 400,
      message: 'no access allowed',
      debug: `failed: action (${ stringify(action) })`,
    })
  }

  yield put(nextAction)
}
