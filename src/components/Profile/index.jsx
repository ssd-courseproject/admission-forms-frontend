import React, {Component} from 'react';
import './index.less';
import '../../common/common_style.less';
import userActions from '../../redux/actions/users';
import {connect} from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);

    this.props.dispatch(userActions.getProfile());
    console.log(this.props);
  }

  render() {
    return (
      <div className="profile-container">
        <div className="all-description">
          <div className="user-pic"/>
          <p className="user-name">{this.props.user.firstName} {this.props.user.lastName}</p>
          <p className="user-detail">
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p className="titles">
            About
          </p>
          <p className="data">First Name: {this.state.firstName}</p>
          <p className="data">Last Name: {this.state.lastName}</p>
          <p className="data">Email: {this.state.email}</p>
          <p className="user-description">
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p className="titles">Education</p>
          <p className="education">
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p className="titles">Experience</p>
          <p className="experience">
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const {alert, user} = state;
  return {
    alert,
    user,
  };
}

export default connect(mapStateToProps, null)(Profile);

