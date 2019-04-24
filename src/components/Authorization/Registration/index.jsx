import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm';
import './index.less';
import {connect} from "react-redux";

class Registration extends Component {
  render() {
    return (
      <div className="login">
        <RegistrationForm dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

export default connect()(Registration);