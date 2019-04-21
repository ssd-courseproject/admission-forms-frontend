import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import '../index.less';


const deadline = new Date("apr 21, 2019 19:30:00").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();
    const t = deadline - now;
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);
    // document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        // document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);

class Test extends Component {

    render() {
        return (
            <div className="test-content">
                <p>Test name: <span>Math</span></p>
                <p>Time left: <span>1h 20 min</span></p>


                {/*---------------*/}
                <div id="clockdiv">
                    <div>
                        <span className="hours" id="hour"/>
                        <div className="smalltext">Hours</div>
                    </div>
                    <div>
                        <span className="minutes" id="minute"/>
                        <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                        <span className="seconds" id="second"/>
                        <div className="smalltext">Seconds</div>
                    </div>
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
