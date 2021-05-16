import { createStore } from 'redux';
import rootReducer from './reducers';

export default function reduxStore () {
  const store = createStore(rootReducer);
  // for hot-reloading on reducer change
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }
  return store;
}
