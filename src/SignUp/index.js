import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../Config';
import SignUpView from './SignUpView';

class SignUpContainer extends Component{
    handleSignUp = async e =>{
        e.preventDefault();
        const {email, password } = e.target.elements;
        try{
            const user = await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/");
        } catch(error){
            alert(error);
        }
    };
    render(){
        return
            <SignUpView onSubmit={this.handleSignUp} />;
        
    }
}
export default withRouter(SignUpContainer);