import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';
import actions from '../../../redux/actions'

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
    this.props.dispatch(actions.tests.fetchTestsList());
  }

  render() {
    return (
      <div className="users-list">
        <p className="users-title">Users: </p>
        <input onChange={onSearchTest.bind(this)} className="search" type="text"
               placeholder="Search for specific users by name..."/>

        {this.props.profiles && this.props.profiles.list && this.props.profiles.list.map(test => (
          <div className="user-entry" key={test.id}>
            <div className="test-header">
              <Link to={`/test/${test.id}`}>
                <p className="name">
                  {test.test_name}
                </p>
              </Link>
              <div className="meta">
                <p>DDD: <span>{test.max_time}</span></p>
              </div>
            </div>
            <p className="description">
              {test.description}
            </p>
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
