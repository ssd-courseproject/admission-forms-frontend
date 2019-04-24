import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';
import actions from '../../../redux/actions'

function onSearchTest(search) {
  const entry = search.target.value;
  console.log(entry);

  function testEntry(test, entry) {
    return test.test_name.toLowerCase().includes(entry && entry.toLowerCase());
  }

  const initialList = this.props.testsList.list;

  this.props.dispatch(actions.tests.modifyTestsList(initialList, test => testEntry(test, entry)));
}


class TestList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.tests.fetchTestsList());
  }

  render() {
    return (
      <div className="test-list">
        <p className="tests-info"><span> Be aware: </span> All tests have a timer that starts when you open the
          test page. The timer is topped when the Submit button is
          pressed at the end of the test. If the timer finishes before you the completed data is saved and
          sent. </p>
        <p className="test-title">Tests available: </p>
        <input onChange={onSearchTest.bind(this)} className="search" type="text"
               placeholder="Search for specific tests..."/>

        {this.props.testsList.filteredList && this.props.testsList.filteredList && this.props.testsList.filteredList.map(test => (
          <div className="test-entry" key={test.id}>
            <div className="test-header">
              <Link to={`/test/${test.id}`}>
                <p className="name">
                  {test.test_name}
                </p>
              </Link>
              <div className="meta">
                <p>Time given: <span>{test.max_time}</span></p>
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
  const {testsList} = state;
  return {
    testsList
  };
}

export default connect(mapStateToProps)(TestList);
