import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';

class TestList extends Component {
  // fetchTests = () => {
  //
  // };

  render() {
    return (
      <div className="test-list">
        <p className="tests-info"> <span> Be aware: </span> All tests have a timer that starts when you open the test page. The timer is topped when the Submit button is
        pressed at the end of the test. If the timer finishes before you the completed data is saved and sent. </p>
        <p className="test-title">Tests available: </p>
        <input className="search" type="text" placeholder="Search for specific tests..."/>
        <div className="test-entry">
          <div className="test-header">
            <Link to="/test/1">
              <p className="name">
                Bachelors test
              </p>
            </Link>
            <div className="meta">
              <p>Time given: <span> 80 min </span> </p>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </div>
      </div>
    )
  }
}

export default connect()(TestList);
