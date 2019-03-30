import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import admissionsFormsReducers from "./redux/reducers";
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

const root = document.getElementById('root');
const store = createStore(admissionsFormsReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
);