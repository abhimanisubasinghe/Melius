import React from 'react'
import './Login.css';
import LoginForm from '../login/LoginForm'

export default function Login() {
    return (
        <React.Fragment style={body}>
            <LoginForm/>            
        </React.Fragment>
    )
}


const body ={
        backgroundImage: 'url(./login.jpeg)'
    }
   
