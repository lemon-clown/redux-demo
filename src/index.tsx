import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import App from './app'
import { persistor, store } from './store'


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={ store }>
      <PersistGate persistor={ persistor }>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
  , document.getElementById('root')
)
