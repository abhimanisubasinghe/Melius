import AuthForm, { STATE_LOGIN } from 'components/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import { login } from './UserFunction';
//import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

class AuthPage extends React.Component {
  

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  setCookie = (cuname, cusernamevalue,cstatus, cstatusvalue, exdays) => {
    console.log("status",cstatus);
    console.log("val",cstatusvalue);
    var d = new Date();
    d.setTime(d.getTime() + ((exdays+1) * 5 *60 * 1000));
    var expires = "expires="+d.toUTCString();
    if(cstatusvalue!=0){
      console.log("opeartor");
      document.cookie = "username =" + cusernamevalue + ";status = 1 ;+"+ expires + ";path=/";
    }
    else{
      console.log("admin");
      document.cookie = "username =" + cusernamevalue + ";status = 0 ;+"+ expires + ";path=/";
    }
    console.log("created",document.cookie);
    return document.cookie;
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  

  onSubmit(e){
    e.preventDefault();
    
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
            document.cookie = "username=; status=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            const cookie =this.setCookie("username", this.state.username,"status",res.res2.status, 0);
            this.props.history.push('/',{detail: res,cookie: cookie,status:res.res2.status})
          }
          
        }
        else{
          this.props.history.push('/login');
        }
      }
    })
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
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type="password"
                            className='form-control'
                            name ='password'
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}/>
                            
                        </div>
                        <button type='submit'
                        className='btn btn-lg btn-primary btn-block'>
                            Sign in
                        </button>
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
