import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
// import { ConnectedRouter } from 'connected-react-router';
import Router from './Router';
import * as History from 'history';
import App from './App';
import reportWebVitals from './reportWebVitals';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
