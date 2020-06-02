import {
  FETCH_USER_INFO_REQUESTED,
  FetchUserInfoRequestedAction,
} from '@/store/user/types'
import { connect } from 'react-redux'
import { StoreState } from '../store/state'
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
