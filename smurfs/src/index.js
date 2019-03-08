import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { smurf, spinner } from './reducers';

const rootReducer = combineReducers({
  smurf,
  spinner,
})


const store = createStore(
  rootReducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
