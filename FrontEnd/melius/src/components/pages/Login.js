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


const backStyle ={

        html :{backgroundImage: 'url(./login.jpeg)'}
    }
   
