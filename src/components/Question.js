import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './Question.css';

export class Question extends React.Component {

  submit(){
    
  }

  render(){
    return <div className="questionSection">
      <div>
        Attempts: {this.props.attempts}  Correct: {this.props.correct}
      </div>
      <div className="question">
          Question: What's the HINDI Word for " {this.props.question} " ?
      </div>      
      <div className="answer">
        Your Answer: <input type="text"></input>
      </div> 
      <button onClick={() => this.submit()}>SUBMIT</button>    
    </div>; 
  }
}
const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      question: state.auth.currentUser.question,
      attempts: state.auth.currentUser.attempts,
      correct: state.auth.currentUser.correct
  };
};

export default requiresLogin()(connect(mapStateToProps)(Question))