import React from 'react';
import ReactDOM from 'react-dom';
import Master from './router/Master.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';


let store = createStore(
  reducers,
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Master/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
