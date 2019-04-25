import React, {Component} from 'react';
import {connect} from "react-redux";
import './index.less';
import userActions from "../../redux/actions/users";
import {Link} from "react-router-dom";
import actions from "../../redux/actions";


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.users.getProfile());
    console.log(this.props)
  }

  render() {
    return (
      <div className="profile-container">
        {/*<div className="profile-header">*/}
          {/*<img src="/src/components/Profile/images/1.png" alt="img"/>*/}
          {/*<p className="candidate">Candidate: </p>*/}
          {/*<p className="user-name"> {data && data.user.first_name} </p>*/}
          {/*<Link to={'/editProfile'}><button>Edit</button></Link>*/}
        {/*</div>*/}
        {/*<form>*/}
          {/*<div className="profile-body">*/}
            {/*<p>Full name: <span>Ruslan Farkhutdinov<input readOnly value='Ruslan' type="text" className={edit ? 'edit' : ''}/></span></p>*/}
            {/*<p>Gender: <span>Male</span></p>*/}
            {/*<p>Birth date: <span>13.02.1998</span></p>*/}
            {/*<p>Birth place: <span>Russia, Tatarstan</span></p>*/}
            {/*<p>Address: <span>Universitetskaya street, home 2-339</span></p>*/}
            {/*<p>Phone: <span>+7 888 567 48 90</span></p>*/}
            {/*<p>Email: <span>r.fark@gmail.com</span></p>*/}
            {/*<p>Graduated from: <span>Innopolis University</span></p>*/}
            {/*<p>Portfolio: <a href="#">View portfolio</a></p>*/}
          {/*</div>*/}
        {/*</form>*/}
      </div>
    );
  }
}


function mapStateToProps(state) {
  const {alert, profile} = state;
  return {
    alert,
    profile,
  };
}

export default connect(mapStateToProps, null)(Profile);

