import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchQuestion} from '../actions/protected-data';
import Question from './Question';
import './dashboard.css';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state ={ 
            playing: false,
            showStartButton: true
        }
    }
    
    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    startGame(){
        this.setState({
            playing: true,
            showStartButton: false
        });
        this.props.dispatch(fetchQuestion());
    }
    
    render() {
        return (
            <div className="dashboard">
                <div className="dashboardUsername">
                    Welcome,  {this.props.username[0].toUpperCase() + this.props.username.slice(1)}!!
                </div>              
                {this.state.showStartButton ? <div className="start">
                    <button onClick={() => this.startGame()}>START</button>
                </div>  : <Question />}                               
            </div>            
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        fullname: `${currentUser.fullname}`        
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
