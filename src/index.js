import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers'

//TODO: Add applyMiddleware, to connect to api redux middleware

let store = createStore(
  reducers,
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
