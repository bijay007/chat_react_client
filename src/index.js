import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from './redux/store';
import * as serviceWorker from './serviceWorker';

const store = reduxStore();

const renderApp = () =>
  render(
    <ReduxProvider store={ store }>
      <App />
    </ReduxProvider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();

serviceWorker.unregister();
