import React, {Component} from 'react';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <div className="registration-form">
        <p className="">Login</p>
        <LoginForm/>
      </div>
    )
  }
}