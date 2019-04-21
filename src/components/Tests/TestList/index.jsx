import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';

function onSearchTest(search) {
    const entry = search.target.value;
    this.setState({tests: tests.filter(test => test.name.toLowerCase().includes(entry.toLowerCase()))});
}

const tests = [
    {
        id: 1,
        name: 'Interview on Skype',
        description: 'Interview will be available on Skype with professor Brown on 25.04.2019. Please access @JBrown account.',
        timeGiven: '30 min',
    },
    {
        id: 2,
        name: 'Math test',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
            '                        labore et\n' +
            '                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
            '                        aliquip ex\n' +
            '                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n' +
            '                        dolore eu\n' +
            '                        fugiat nulla pariatur.',
        timeGiven: '1h',
    },
    {
        id: 3,
        name: 'Physics test',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
            '                        labore et\n' +
            '                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
            '                        aliquip ex\n' +
            '                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n' +
            '                        dolore eu\n' +
            '                        fugiat nulla pariatur.',
        timeGiven: '40 min',
    },
    {
        id: 4,
        name: 'Computer science test',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
            '                        labore et\n' +
            '                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
            '                        aliquip ex\n' +
            '                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n' +
            '                        dolore eu\n' +
            '                        fugiat nulla pariatur.',
        timeGiven: '40 min',
    },

];

class TestList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tests: []
        }
    }

    componentWillMount() {
        this.setState({tests: tests})
    }


    // fetchTests = () => {
    //
    // };

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

                {this.state.tests.map(test => (
                    <div className="test-entry" key={test.id}>
                        <div className="test-header">
                            <Link to={`/test/${test.id}`}>
                                <p className="name">
                                    {test.name}
                                </p>
                            </Link>
                            <div className="meta">
                                <p>Time given: <span>{test.timeGiven}</span></p>
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

export default connect()(TestList);
