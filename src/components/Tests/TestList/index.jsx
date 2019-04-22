import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';
import actions from '../../../redux/actions'

function onSearchTest(search) {
    const entry = search.target.value;
    this.setState({tests: this.state.tests.filter(test => test.name.toLowerCase().includes(entry.toLowerCase()))});
}


class TestList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tests: props.testsList.list || [],
        }
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

                {/*{this.state.tests.map(test => (*/}
                {/*<div className="test-entry" key={test.id}>*/}
                {/*<div className="test-header">*/}
                {/*<Link to={`/test/${test.id}`}>*/}
                {/*<p className="name">*/}
                {/*{test.name}*/}
                {/*</p>*/}
                {/*</Link>*/}
                {/*<div className="meta">*/}
                {/*<p>Time given: <span>{test.timeGiven}</span></p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<p className="description">*/}
                {/*{test.description}*/}
                {/*</p>*/}
                {/*</div>*/}
                {/*))}*/}
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
