import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.css';

class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: "",
            password:""
        }
    }

    onChange = (e) => {
        this.setState(
        {[e.target.name]: e.target.value}
    )
    }
    
    handleSubmit = event => {
        alert(`Hi ${this.state.userName}! `);
        //event.preventDefault()
    }
    
    render() {
        return (
            <div>
                <div className="container">
                <div className="row justify-content-md-center">
                    <div className="jumbotron" style={invisiblejumbotronStyle}>
                    </div>
                </div>    
                <div className="row justify-content-md-center">
                <div className="col-4">    
                    <div className="page-header">
                    
                    </div>
                    <div className="bs-component">
                        <div className="jumbotron" style={jumbotronStyle}>
                            <form onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <legend><h1>Login</h1></legend>
                                    <div class="form-group">
                                        <label for="userName">User Name</label>
                                        <input 
                                            type="text" 
                                            name="userName"
                                            class="form-control" 
                                            id="userName" 
                                            aria-describedby="userName" 
                                            placeholder="User name"
                                            value={this.state.userName}
                                            onChange={this.onChange}    
                                         />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input 
                                            type="password"
                                            name="password" 
                                            class="form-control" 
                                            id="password" 
                                            aria-describedby="password" 
                                            placeholder="Password" 
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />                                        
                                    </div>
                                    <small id="loginHelp" class="form-text text-muted">Welcome to Melius!</small>
                                    <br/>
                                    <Link to="/welcome"><button className="btn btn-primary" type="submit">Submit</button></Link>
                                </fieldset>    
                            </form>    
                        </div>
                    </div>
                </div>
                </div>
                </div>
            
            
            </div>
            
        )
    }
}

const jumbotronStyle = {
    background: '#f1f1f1'
}

const invisiblejumbotronStyle = {
    background: '#00000000'

}


  

export default LoginForm

