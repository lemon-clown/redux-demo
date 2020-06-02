import { UserActionTypes } from './constant'


// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UserActions {
  // Action for updating username
  export interface UpdateUsername {
    type: UserActionTypes.UPDATE_USERNAME
    payload: {
      username: string
    }
  }

  // Action for fetching user info (requested)
  export interface FetchUserinfoRequested {
    type: UserActionTypes.FETCH_USERINFO_REQUESTED
    payload: {
      username: string
    }
  }

  // Action for fetching user info (succeed)
  export interface FetchUserinfoSucceed {
    type: UserActionTypes.FETCH_USERINFO_SUCCEED
    payload: {
      username: string
      gender: 'male' | 'female'
    }
  }

  // Action for fetching user info (failed)
  export interface FetchUserinfoFailed {
    type: UserActionTypes.FETCH_USERINFO_FAILED
    payload: {
      error: any
    }
  }
}


/**
 * Actions for touching StoreState.user
 */
export type UserActions =
  | UserActions.UpdateUsername
  | UserActions.FetchUserinfoRequested
  | UserActions.FetchUserinfoSucceed
  | UserActions.FetchUserinfoFailed
