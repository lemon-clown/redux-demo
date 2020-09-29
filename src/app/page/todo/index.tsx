import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '@/app/container/todo'
import { StoreState } from '@/store/state'
import { UserActionCreators } from '@/store/user/actions'
import { UserState } from '@/store/user/state'


export default function TodoPage(): React.ReactElement {
  const dispatch = useDispatch()
  const { username, gender, location } = useSelector<StoreState, UserState>(state => state.user)
  const handleRefreshUserLocation = () => {
    dispatch(UserActionCreators.updateLocation.request({ username }))
  }

  return (
    <div>
      Hello, { username }! You are a { gender }.
      <div style={ { minHeight: '4rem' } }>
        location: {
          location.loading
            ? (
              <div>
                <span>loading...</span>
              </div>
            )
            : (
              location.error == null
                ? (
                  location.data != null
                    ? (
                      <div>
                        <p>latitude: { location.data.latitude.toFixed(2) }</p>
                        <p>longitude: { location.data.longitude.toFixed(2) }</p>
                      </div>
                    )
                    : null
                )
                : (
                  <p>Something is wrong: { location.error.message }!</p>
                )
            )
        }
      </div>
      <hr />
      <button onClick={ () => handleRefreshUserLocation() }>
        Refresh user location
      </button>
      <div style={ { marginBottom: '5rem' } }></div>
      <Todo />
    </div>
  )
}
