import React from 'react'
import Todo from '@/component/todo'


export interface AppProps {
  username: string
  gender: string
  handleRefreshUserinfo: (username: string) => void
}


export default function App(props: AppProps): React.ReactElement {
  const { username, gender, handleRefreshUserinfo } = props
  return (
    <div>
      Hello, { username }! You are a { gender }
      <hr />
      <button onClick={ () => handleRefreshUserinfo(username) }>
        Refresh user info
      </button>
      <div style={ { marginBottom: '5rem' } }></div>
      <Todo />
    </div>
  )
}
