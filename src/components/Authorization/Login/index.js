import React, {Component} from 'react';
import LoginForm from './LoginForm';
import './index.less';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <LoginForm/>
      </div>
    )
  }
}