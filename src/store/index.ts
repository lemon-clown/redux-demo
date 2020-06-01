import { applyMiddleware, compose, createStore } from 'redux'
import { StoreAction } from './action'
import { reducer } from './reducer'
import { StoreState, initStoreState } from './state'


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


const middleware: any[] = []
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)


export const store = createStore<StoreState, StoreAction, {}, never>(
  reducer,
  initStoreState,
  enhancer,
)
