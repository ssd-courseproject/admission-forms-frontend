import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';
import actions from '../../../redux/actions'
import moment from 'moment';

// let countDown = moment.duration(1, "s").timer({loop: false}, () => {
//     this.setState({timeLeft: moment(this.state.timeLeft).subtract(1, "s")});
// });

// const timer = moment.duration(80, "minutes").timer({loop: false}, function () {
//     // Submit and notify that time is over
// });

class Test extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.tests.fetchSingleTest(this.getTestId()));
    }

    getTestId() {
        return parseInt(this.props.location.pathname.slice(6));
    }

    render() {
        let test;
        if (this.props.singleTest) {
            test = this.props.singleTest.info;
        }
        console.log(test);
        return (

            <div className="test-content">
                <p> Test name: <span>{test && test.test_name}</span></p>
                <p> Timeleft: {test && test.max_time} </p>

                {test && test.questions_tests.map(test => (
                    <div className="question-content">
                        <p>Question 2: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua? </span>
                        </p>
                        <p>Your answer: </p>
                        <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                     </textarea>
                    </div>
                ))}

                <Link to="/tests">
                    <button>Submit</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {singleTest} = state;
    return {singleTest};
}

export default connect(mapStateToProps)(Test);
