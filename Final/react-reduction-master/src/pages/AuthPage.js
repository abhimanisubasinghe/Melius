import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import { Card, Col, Row, Alert } from 'reactstrap';
import { login } from './UserFunction';
import {Link} from 'react-router-dom';
//import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { notNull} from '../validations'

class AuthPage extends React.Component {
  

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      validateUsername: true,
      validatePassword: true,
      validations: true,
      expires: null
      
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  validatingFields = () => {
    this.setState({
      validateUsername: notNull(this.state.username),
      validatePassword: notNull(this.state.password)
    })
    if(notNull(this.state.username) === true && notNull(this.state.password) === true){
      console.log("OK");
      this.setState({
        validations: true
      })
      return true;
    }
    else{
      console.log("error");
      this.setState({
        validations: false
      })
      return false;
    }
  }
  

  

  onSubmit(e){
    e.preventDefault();
    const val = this.validatingFields();
    if(val){
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqqq');
        console.log(res.state);
        console.log(res.res2);
        if(res.state){
          if (user != "" && user != null) {
            console.log("status",res.res2.name);
            //document.cookie = "username=; status=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            var d = new Date();
            d.setTime(d.getTime() + (1 *60 *60 * 1000));
            var expires = d;
            this.setState({
              expires: expires
            })
            console.log("main page");
            this.props.history.push('/',{detail: res,
                                          status:res.res2.status,
                                          expires:this.state.expires,
                                          username:this.state.username})
            
          }
          
        }
        else{
          this.props.history.push('/login');
          this.setState({
            validations: false
          })
        }
      }
    })
  }
  }

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
          <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className='h3 mb-3 font-weight-m=normal'>Sign In</h1>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input type="text"
                            className='form-control'
                            name ='username'
                            placeholder="User Name"
                            value={this.state.username}
                            onChange={this.onChange}/>
                            {
                              this.state.validateUsername !== true ?                  
                              <Alert color="danger">
                              Enter a valid username
                              </Alert>  
                              : ""
                            }
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type="password"
                            className='form-control'
                            name ='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}/>
                            {
                              this.state.validatePassword !== true ?                  
                              <Alert color="danger">
                              Enter a valid password
                              </Alert>  
                              : ""
                            }
                            
                        </div>
                        <button type='submit'
                        className='btn btn-lg btn-primary btn-block'>
                            Sign in
                        </button>
                        {
                          this.state.validations !== true ?                  
                          <Alert color="danger">
                          Error! Plese enter the login details again.
                          </Alert>  
                          : ""
                        }
                        <br/>
                        <Link to="/">
                        <button type='success'
                        className='btn btn-lg btn-success btn-block'>
                          Back
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthPage;
