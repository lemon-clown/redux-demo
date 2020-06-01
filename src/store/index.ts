import { Middleware, applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'
import { StoreState, initStoreState } from './state'


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


export const store = createStore<StoreState, any, {}, never>(
  rootReducer,
  initStoreState,
  enhancer,
)

sagaMiddleware.run(rootSaga)


export default store
