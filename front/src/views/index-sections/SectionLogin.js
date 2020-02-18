/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { login } from './UserFunction';
// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

class SectionLogin extends React.Component {

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
          console.log("ERROR");
          //this.props.history.push('/login');
        }
      }
    })
  }

  render(){
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/logs.jpg") + ")"
        }}
      >
        <Container style={container}>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form" onSubmit={this.onSubmit}>
                  <label>User Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input 
                    name ='username'
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={this.onChange}
                    placeholder="Username"
                    type="text" 
                    
                    />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input 
                    placeholder="Password" 
                    type="password" 
                    className='form-control'
                    name ='password'
                    value={this.state.password}
                    onChange={this.onChange}
                    />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Sign In 
                  </Button>
                </Form>
              </Card>
              {/*
              <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  View Register Page
                  
                </Button>
              </div>
              */}
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
}

const container={
  background:"transparent",
}
export default SectionLogin;


