import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import './Login.css';
import { login } from '../UserFunction';
import axios from 'axios';
import profile from "./profile";

class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            password: ""
        }
        ////////////
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = (e) => {
        this.setState(
        {[e.target.name]: e.target.value}
        )
    }
    
   /* handleSubmit = event => {
        alert(`Hi ${this.state.userName}! `);
        //event.preventDefault()
    }*/

    /////////////////////////////////////
    onSubmit(e){
        e.preventDefault();
        
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user.username);
        login(user).then(res => {
            if(res === 'logged') {
                /////
                console.log(res);
                console.log('111111111111111');
                this.props.history.push('/profile');
            }
            else if(res === 'User does not exist'){
                console.log(res);
                console.log('fj');
                this.props.history.push('/LoginForm');
            }
            else if(res === 'fill all fields'){
                alert(res);
            }
        })
    }
    handleSubmit = e => { 
        e.preventDefault();
        console.log(this.state);
        //const url = "admin/login";
        const url = "http://localhost:3010/admin/login";
        //const url = "http://localhost:5000/admin/login"; 
        axios
                .post(url,
                        this.state
                ,{headers: {'Accept': 'application/json'}})
                .then( res =>
                        {console.log(res)
                            if(res.data == "worng data"){
                                console.log('run')
                                this.props.history.push('/LoginForm');
                            }
                            else if(res.data == "logged"){
                                console.log('done')
                                //this.props.history.push('/profile');
                                return <Redirect to='/profile' />
                            }
                        }
                )
                .catch((err) => console.log("Can’t access " + url + " response. Blocked by browser?"))
        
        
    }

    
    
    render() {
        return (
            <div>
                <div className="container">

                    <div className="col-md-4">
                           
                            <form onSubmit={this.handleSubmit}>
                        <fieldset>
                                <br/>
                         
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
                            {/* <Link to="/welcome"> */}
                                <button className="btn btn-primary" type="submit">Submit</button>
                                {/* </Link> */}

                        </fieldset>
                        </form>
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

