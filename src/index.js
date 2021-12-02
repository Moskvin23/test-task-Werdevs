import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import store from './store/store';
import  { BrowserRouter as Router } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
<Router>
  <Switch>
  <Provider store={store}>
  <App />
  </Provider>
  </Switch>
  </Router>,
  document.getElementById('root')
);


