import { fork } from 'redux-saga/effects'
import { watchUserSaga } from './user/sagas'


/**
 *
 *
 * The difference between one big all effect and several fork effects is that
 * the all effect is blocking, so code after all-effect (see comments in above
 * code) is executed when all children sagas complete, while fork effects are
 * non-blocking so code after fork-effect is executed immediately after
 * yielding the fork effects. Another difference is that you can get task
 * descriptors when using fork effects, so in the subsequent code you can
 * cancel/join the forked task via task descriptors.
 *
 * @see https://redux-saga.js.org/docs/advanced/RootSaga.html
 */
export function* rootSaga () {
  yield fork(watchUserSaga)
}


export default rootSaga
