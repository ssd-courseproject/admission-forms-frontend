import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm';
import './index.less';

export default class Registration extends Component {
  render() {
    return (
      <div className="registration">
        <RegistrationForm/>
      </div>
    )
  }
}