import { all } from 'redux-saga/effects'
import { watchUserSaga } from './user/sagas'


export function* rootSaga () {
  yield all([
    watchUserSaga(),
  ])
}


export default rootSaga
