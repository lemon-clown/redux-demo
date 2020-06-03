import { connect } from 'react-redux'
import { StoreState } from '@/store/state'
import { UserActionCreators } from '@/store/user/actions'
import App from './component'


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
    handleRefreshUserinfo: (username: string) => (
      dispatch(UserActionCreators.fetchUserInfoRequested({ username }))
    ),
  }),
)(App)


export interface AppStateProps {
  username: string
  gender: string
}


export interface AppDispatchProps {
  handleRefreshUserinfo: (username: string) => void
}


export interface AppOwnProps {

}
