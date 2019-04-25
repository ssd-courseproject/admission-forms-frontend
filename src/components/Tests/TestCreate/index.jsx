import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import './index.less';
import actions from '../../../redux/actions'
import moment from 'moment';
import {testsService} from '../../../redux/services/tests';

const questionInstance = (question, context) => {
  console.log(context);

  return (
    <div className="question" key={question.id}>
      <p>Question {question.id}</p>
      <div>
        <input className="check" type="checkbox"/>
        <span>Grade automatically</span>
      </div>
      <select>
        <option value="open">Open answer</option>
        <option value="multiple">Multiple choice</option>
      </select>
      <div className="input-wrapper">
        <input min="0" max="100" type="number" className="text"
               placeholder="Enter the number of points for a question"/>
      </div>
      <div className="input-wrapper">
        <input className="text" placeholder="Enter the question"/>
      </div>
      <div className="input-wrapper">
        <input className="text" placeholder="Enter the answer for the question"/>
      </div>
    </div>
  );
};

const addQuestion = (context) => () => {
  console.log(context);
  const {questions} = context.state;

  context.setState({questions: [...questions, questionInstance({id: questions.length + 1})]})
};

const submitForm = data => {
  let testData;

  testsService.createTest(testData);
};

class TestCreate extends Component {
  constructor(props) {
    super(props);

    const context = this;

    this.state = {
      questions: [questionInstance({id: 1}, context)]
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={submitForm} className="create-test">
          <h1>Create test</h1>
          <div className="input-wrapper">
            <input className="text" placeholder="Enter the name of the test"/>
          </div>
          <div className="input-wrapper">
            <input className="text" placeholder="Enter the time given for the test"/>
          </div>
          {this.state.questions}
          <div className="align-right">
            <div className="button" onClick={addQuestion(this)}>+</div>
          </div>
          <div className="align-center">
            <Link to={"tests"}>
              <button type="submit">Create test</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}


export default connect()(TestCreate);
