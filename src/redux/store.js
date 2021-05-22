import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from './middleware';

export default function reduxStore () {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, undefined, composeEnhancer(applyMiddleware(logger)));
  // for hot-reloading on reducer change
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }
  return store;
}
