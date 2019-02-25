import React, {Component} from 'react';
import Registration from './components/Authorization/Registration';
import {Provider} from 'react-redux';
import {createStore} from "redux/index";
import reducer from './redux/reducers';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Registration/>
      </Provider>
    )
  }
}