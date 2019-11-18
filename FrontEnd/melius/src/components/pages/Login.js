import React from 'react'
import './Login.css';
import LoginForm from '../login/LoginForm'

export default function Login() {
    return (
        <React.Fragment style={backStyle}>
            <LoginForm/>            
        </React.Fragment>
    )
}

const backStyle = {
    background: 'linear-gradient(rgba(152, 15, 15, 0.5), rgba(255,255,255,.5)), url(./login.jpeg)'
}