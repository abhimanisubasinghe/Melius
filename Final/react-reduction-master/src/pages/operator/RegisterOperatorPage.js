import Page from 'components/Page';
import React from 'react';
import { register } from '../UserFunction';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import axios from 'axios';

class RegisterOperatorPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        name: "",
        username: "",
        DOB: "",
        address: "",
        contactNumber: "",
        status: "",
        password: "",
    }
    
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

handleSubmit = e => { 
    e.preventDefault();
    console.log("name",this.state.name);
    console.log("DOB",this.state.DOB);
    console.log("uname",this.state.username);
    console.log("address",this.state.address);
    const user = {
      name : this.state.name,
      username : this.state.username,
      DOB : this.state.DOB,
      address : this.state.address,
      contactNumber : this.state.contactNumber,
      status : this.state.status,
      password : this.state.password
    }
    register(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqqq');
        console.log(res.state);
        if(res.state){
          this.props.history.push('/',{detail: res})
          
        }
        else{
          this.props.history.push('/operator-register');
        }
      }
    })
    
}

  render(){
  return (
    <div>
    <Page title="Register Operator" breadcrumbs={[{ name: 'Operator-Register', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Registration</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value = {this.state.name}
                    onChange  = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="username">User Name</Label>
                  <Input
                    type="email"
                    name="username"
                    id="username"
                    placeholder="example@cool.com"
                    value = {this.state.username}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="DOB">Date Of Birth</Label>
                  <Input
                    type="date"
                    name="DOB"
                    id="DOB"
                    placeholder="time placeholder"
                    value = {this.state.DOB}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value = {this.state.address}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="contactNumber">Contact Number</Label>
                  <Input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="+94XXXXXXXXX"
                    value = {this.state.contactNumber}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <Label for="status" sm={2}>
                    Status
                  </Label>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input 
                        type="radio" 
                        name="status" 
                        id="status" 
                        value = "0"
                        onChange = {this.onChange}
                         /> 
                         Admin
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                      <Input 
                        type="radio" 
                        name="status" 
                        id="status" 
                        value = "1"
                        onChange = {this.onChange}
                         /> 
                         Operator
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value = {this.state.password}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup check row>
                    <Button>Submit</Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
    </div>
  )
  }
}



export default RegisterOperatorPage;
