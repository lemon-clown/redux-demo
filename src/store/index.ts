import { Middleware, applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducer'
import { rootSaga } from './saga'
import { StoreState, initialStoreState } from './state'


const isEnvDevelopment = process.env.NODE_ENV === 'development'


/**
 * @see https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
 */
const composeEnhancers = (
  typeof window === 'object'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {
      options: {
        symbol: (symbol: symbol) => symbol.description,
      },
    },
  })
  : compose


/**
 * middlewares for redux
 */
const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [
  isEnvDevelopment && createLogger({
    collapsed: true,
    duration: true,
    timestamp: true,
  }),
  sagaMiddleware,
].filter((x): x is Middleware => Boolean(x))


const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
)


export const store = createStore<StoreState, any, any, never>(
  rootReducer,
  initialStoreState,
  enhancer,
)


// persistor
export const persistor = persistStore(store)


// start sagas
sagaMiddleware.run(rootSaga)
