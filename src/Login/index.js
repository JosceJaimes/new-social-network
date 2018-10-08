import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../Config';
import LoginView from './LoginView';

class LoginContain extends Component{
    handleLogin = async e =>{
        e.preventDefault();
        const {email, password} = event.target.elements;
        try{
            const user =await app.auth().signInWithEmailAndPassword(email.value, password.value);
            this. props.history.push("/")
        } catch (error){
            alert(error);
        }
    };
    render(){
        return <LoginView onSubmit={this.handleLogin} />;
    }
}
export default withRouter(LoginContain);