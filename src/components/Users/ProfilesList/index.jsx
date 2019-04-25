import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';
import actions from '../../../redux/actions'

const profiles = [
  {
    id: 0,
    name: 'Ruslan Farkhutdinov',
  },
  {
    id: 1,
    name: 'Ecaterina Baba',
  },
  {
    id: 2,
    name: 'Ivan Ivanov',
  }
];

function onSearchTest(search) {
  const entry = search.target.value;

  function testEntry(profile, entry) {
    return profile.name.toLowerCase().includes(entry && entry.toLowerCase());
  }

  const initialList = this.props.testsList.list;

  this.props.dispatch(actions.tests.modifyTestsList(initialList, user => testEntry(user, entry)));
}


class ProfilesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.dispatch(actions.tests.fetchTestsList());
  }

  render() {
    return (
      <div className="users-list">
        <p className="users-title">Users: </p>
        <input onChange={onSearchTest.bind(this)} className="search" type="text"
               placeholder="Search for specific users by name..."/>

        {profiles.map(profile => (
          <div className="user-entry" key={profile.id}>
            <div className="test-header">
              <Link to={`/profiles/${profile.id}`}>
                <p className="name">
                  {profile.name}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {profiles} = state;
  return {
    profiles
  };
}

export default connect(mapStateToProps)(ProfilesList);
