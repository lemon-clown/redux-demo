import React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../store/state'
import {
  FETCH_USER_INFO_REQUESTED,
  FetchUserInfoRequestedAction,
} from '../store/user/types'


export function App(props: AppProps): React.ReactElement {
  const { username, gender, handleUpdateUser } = props
  return (
    <div>
      Hello, { username }! You are a { gender }
      <hr />
      <button onClick={ () => handleUpdateUser(username) }>
        Update user info
      </button>
    </div>
  )
}


/**
 * connect to redux store
 */
export default connect<
  AppStateProps,
  AppDispatchProps,
  AppOwnProps,
  StoreState
>(
  state => ({
    username: state.user.username,
    gender: state.user.gender,
  }),
  dispatch => ({
    handleUpdateUser: (username: string) => {
      dispatch<FetchUserInfoRequestedAction>({
        type: FETCH_USER_INFO_REQUESTED,
        payload: { username }
      })
    }
  }),
)(App)


export interface AppStateProps {
  username: string
  gender: string
}


export interface AppDispatchProps {
  handleUpdateUser: (username: string) => void
}


export interface AppOwnProps {

}


export interface AppProps extends
  AppStateProps, AppDispatchProps, AppOwnProps { }
