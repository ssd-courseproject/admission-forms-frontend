import React, {Component} from 'react';
import {connect} from 'react-redux';
import userActions from '../../../redux/actions/users';

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(userActions.logout());
  }

  render() {
    return <div></div>
  }
}

function mapStateToProps(state) {
  return {loggedIn: false}
}

export default connect(mapStateToProps, null)(Logout);