import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers';
import App from './components/App';

const store = createStore(counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
