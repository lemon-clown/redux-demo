/**
 * Response of failed request
 */
export interface AsyncFailureResponse {
  /**
   * Error code
   */
  code: number
  /**
   * Error message
   */
  message: string
  /**
   * Debugging information
   */
  debug?: string
}


/**
 *
 */
export interface AsyncStateItem<D> {
  /**
   * Whether is loading
   */
  loading: boolean
  /**
   * Data
   */
  data: D | null
  /**
   * Error message object
   */
  error: AsyncFailureResponse | null
}


/**
 *
 * @param type
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createAsyncStateItem<P, D>(type: string, initValue?: D) {
  /**
   * Requested action type
   */
  const REQUEST_ACTION_TYPE = type + '/REQUEST'
  type REQUEST_ACTION_TYPE = typeof REQUEST_ACTION_TYPE

  /**
   * Succeed action type
   */
  const SUCCESS_ACTION_TYPE = type + '/SUCCESS'
  type SUCCESS_ACTION_TYPE = typeof SUCCESS_ACTION_TYPE

  /**
   * Failed action type
   */
  const FAILURE_ACTION_TYPE = type + '/FAILURE'
  type FAILURE_ACTION_TYPE = typeof FAILURE_ACTION_TYPE

  // Action types
  const ActionTypes = {
    REQUEST: REQUEST_ACTION_TYPE,
    SUCCESS: SUCCESS_ACTION_TYPE,
    FAILURE: FAILURE_ACTION_TYPE,
  }

  /**
   * Requested action
   */
  type RequestActionPayload = P
  type RequestAction = { type: REQUEST_ACTION_TYPE, payload: RequestActionPayload }

  /**
   * Succeed action
   */
  type SuccessActionPayload = D
  type SuccessAction = { type: SUCCESS_ACTION_TYPE, payload: SuccessActionPayload }

  /**
   * Failed action
   */
  type FailureActionPayload = AsyncFailureResponse
  type FailureAction = { type: FAILURE_ACTION_TYPE, payload: FailureActionPayload }

  // Actions
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Actions =
    | RequestAction
    | SuccessAction
    | FailureAction

  /**
   * Requested action creator
   */
  const createRequestAction = (payload: RequestActionPayload): RequestAction => {
    return { type: REQUEST_ACTION_TYPE, payload }
  }

  /**
   * Succeed action creator
   */
  const createSuccessAction = (payload: SuccessActionPayload): SuccessAction => {
    return { type: SUCCESS_ACTION_TYPE, payload }
  }

  /**
   * Failure action creator
   */
  const createFailureAction = (payload: FailureActionPayload): FailureAction => {
    return { type: FAILURE_ACTION_TYPE, payload }
  }

  // Action creators
  const ActionCreators = {
    request: createRequestAction,
    success: createSuccessAction,
    failure: createFailureAction,
  }

  // Initial state
  const initState: AsyncStateItem<D> = {
    loading: false,
    data: initValue !== undefined ? initValue : null,
    error: null,
  }

  return {
    types: ActionTypes,
    actions: ActionCreators,
    state: initState,
  }
}
