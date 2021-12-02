import { createStore, compose } from 'redux';
import { rootReducer } from './rootReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(rootReducer, compose(devTools));

export default store;