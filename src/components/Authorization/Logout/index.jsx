import React, {Component} from 'react';
import {connect} from 'react-redux';
import userActions from '../../../redux/actions/users';
import {Redirect} from "react-router";

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.logout());
  }

  render() {
    return <Redirect to={'/'}/>
  }
}

function mapStateToProps() {
  return {loggedIn: false}
}

export default connect(mapStateToProps, null)(Logout);