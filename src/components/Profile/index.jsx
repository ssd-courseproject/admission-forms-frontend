import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.less';
import userActions from "../../redux/actions/users";


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(userActions.getProfile());
    console.log(this.props)
  }

  render() {
    const edit = false;

    return (
      <div className="profile-container">
        <div className="profile-header">
          <img src="/src/components/Profile/images/1.png" alt="img"/>
          <p className="candidate">Candidate: </p>
          <p className="user-name"> Ruslan Farkhutdinov </p>
          {/*<p>ID: #53732946</p>*/}
          {/*<p>Tests passed:</p>*/}
          {/*<p>Degree: </p>*/}
          <button>Edit</button>
        </div>
        <form>
          <div className="profile-body">
            <p>Full name: <span>Ruslan Farkhutdinov<input readOnly value='Ruslan' type="text" className={edit ? 'edit' : ''}/></span></p>
            <p>Gender: <span>Male</span></p>
            <p>Birth date: <span>13.02.1998</span></p>
            <p>Birth place: <span>Russia, Tatarstan</span></p>
            <p>Address: <span>Universitetskaya street, home 2-339</span></p>
            <p>Phone: <span>+7 888 567 48 90</span></p>
            <p>Email: <span>r.fark@gmail.com</span></p>
            <p>Graduated from: <span>Innopolis University</span></p>
            <p>Portfolio: <a href="#">View portfolio</a></p>
          </div>
        </form>
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

