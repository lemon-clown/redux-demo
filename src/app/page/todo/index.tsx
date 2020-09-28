import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '@/app/container/todo'
import { StoreState } from '@/store/state'
import { UserActionCreators } from '@/store/user/actions'
import { UserState } from '@/store/user/state'


export default function TodoPage(): React.ReactElement {
  const dispatch = useDispatch()
  const { username, gender } = useSelector<StoreState, UserState>(state => state.user)
  const handleRefreshUserinfo = () => {
    dispatch(UserActionCreators.fetchUserInfoRequested({ username }))
  }

  return (
    <div>
      Hello, { username }! You are a { gender }
      <hr />
      <button onClick={ () => handleRefreshUserinfo() }>
        Refresh user info
      </button>
      <div style={ { marginBottom: '5rem' } }></div>
      <Todo />
    </div>
  )
}
