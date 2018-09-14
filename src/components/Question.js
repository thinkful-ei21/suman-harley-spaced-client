import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import requiresLogin from './requires-login';
import {fetchQuestion,fetchResult} from '../actions/protected-data';
import './Question.css';

export class Question extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      submit : true,
      next: false,
      userInput: ''
    }
  }
  submit(){
    this.setState({
      submit: false,
      next: true
    });    
    this.props.dispatch(fetchResult(this.state.userInput));
  }

  next(){
    this.setState({
      submit: true,
      next: false
    });
    this.props.dispatch(fetchQuestion());
  }

  displayQuestion(){
    if (this.props.loading) {
      return <Spinner spinnername="circle" fadeIn="none" />;
    }

    return  <div>  
              <div>
                  Attempts: {this.props.attempts}  Correct: {this.props.correct}
              </div>
                <div className="question">
                    Question: What's the HINDI Word for "{this.props.question}?" 
                </div>      
                <div className="answer">
                  Your Answer: <input type="text" onChange={e => this.setState({ userInput: e.target.value})}></input>
                </div> 
                <button onClick={() => this.submit()}>SUBMIT</button>
            </div>;
  }

  displayResult(){
    if (this.props.loading) {
      return <Spinner spinnername="circle" fadeIn="none" />;
    }

    return <div>
              Your Answer was {this.props.result ? 'Correct' : 'Wrong'}
              <br/>             
              {this.props.result ? '' : `The Correct answer is ${this.props.answer}`}<br/>
              <button onClick={() => this.next()}>NEXT</button>
          </div>
  }

  render(){
    return <div className="questionSection">      
        {this.state.submit ?  this.displayQuestion() : this.displayResult()}    
    </div>; 
  }
}
const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      question: state.protectedData.data.question,
      attempts: state.protectedData.data.attempts,
      correct: state.protectedData.data.correct,
      answer: state.protectedData.data.answer,
      result: state.protectedData.data.result,
      loading: state.protectedData.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Question))