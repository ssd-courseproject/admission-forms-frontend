import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';
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

        // countDown = countDown.bind(this);
    }

    render() {
        return (
            <div className="test-content">
                <p>Test name: <span>Math</span></p>
                <p>Time left: <span>1h 20 min</span></p>


                {/*---------------*/}
                <div id="clockdiv">
                    1h 20min
                </div>

                <p id="demo"/>

                {/*-----------------------*/}


                <div className="question-content">
                    <p>Question 1: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 2: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 3: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 4: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 5: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 6: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 7: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 8: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 9: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 10: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 11: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 12: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <div className="question-content">
                    <p>Question 13: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua? </span>
                    </p>
                    <p>Your answer: </p>
                    <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </textarea>
                </div>

                <Link to="/tests">
                    <button>Submit</button>
                </Link>
            </div>
        )
    }
}

export default connect()(Test);
