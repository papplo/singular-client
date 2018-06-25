import React from 'react';
import ReactDOM from 'react-dom';
import Master from './router/Master.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import config from './config/config';


let store = createStore(
  reducers,
  applyMiddleware(ApiMiddleware(config.server_url+config.server_port))

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
