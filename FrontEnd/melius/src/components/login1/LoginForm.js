import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
import './Login.css';



class LoginForm extends Component{
    constructor(props){

        super(props)

        this.state={
            username:"",
            password:""
        }
    }

    onChange=(e)=>{
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }

    /*handleSubmit=event=>{
        
    }*/

    render() {
        return (
            <div>
                <div className="container">

                    <div className="col-md-4">
                        <fieldset>
                            <h1>Log In</h1>
                            
                            <div className="form-group">
                                <label className="label1" for="username">User Name</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    class="form-control"
                                    id="username"
                                    placeholder="user name"
                                    value={this.state.username}
                                    onChange={this.onChange}/>

                            </div>

                            <div className="form-group">
                                <label className="label1" for="password">Password</label>
                                <input 
                                    type="text" 
                                    name="password" 
                                    class="form-control"
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onChange}/>

                            </div>
                            <button>Sign up</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm
