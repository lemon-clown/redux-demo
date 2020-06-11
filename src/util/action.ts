interface Action {
  type: symbol | string
  payload: any
}


interface PayloadWrapper<P0, P> {
  (rawPayload: P0): P
}


/**
 * Create redux action creator
 */
export function createActionCreator<A extends Action>(type: A['type'])
  : (payload: A['payload'])
    => { type: A['type'], payload: A['payload'] }

export function createActionCreator<T, P>(type: T)
  : (payload: P)
    => { type: T, payload: P }

export function createActionCreator<A extends Action, P0>(type: A['type'], payloadWrapper: PayloadWrapper<P0, A['payload']>)
  : (payload: P0)
    => { type: A['type'], payload: A['payload'] }

export function createActionCreator<T, P, P0>(type: T, payloadWrapper: PayloadWrapper<P0, P>)
  : (payload: P0)
    => { type: T, payload: P }

export function createActionCreator<T, P, P0>(type: T, payloadWrapper?: PayloadWrapper<P0, P>) {
  if (payloadWrapper != null) {
    return (payload: P0) => ({ type, payload: payloadWrapper(payload) })
  }
  return (payload: P) => ({ type, payload: payload })
}
