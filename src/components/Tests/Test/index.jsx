import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';

class Test extends Component {

    render() {
        return (
            <div className="test-content">
                <p>Test name: <span>Math</span></p>
                <p>Time left: <span>1h 20 min</span></p>
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
                <button>Submit</button>
            </div>
        )
    }
}

export default connect()(Test);
