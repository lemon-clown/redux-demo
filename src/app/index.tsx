import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoPage from './page/todo'
import style from './style.styl'


export default function App(): React.ReactElement {
  return (
    <div className={ style.app }>
      <Switch>
        <Route path="/todo" exact><TodoPage /></Route>
        <Route>404 -- not found</Route>
      </Switch>
    </div>
  )
}
