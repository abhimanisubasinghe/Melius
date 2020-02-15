import Page from 'components/Page';
import React from 'react';
import { register } from './UserFunction';
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

class OperatorUpdatePage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        operator: {
            id:"0",
            name: "abc",
            username: "abc@abc.com",
            DOB: "1/4/2020",
            address: "abc abc abc",
            contactNumber: "0123456789",
            status: "0",
            password: "",
         }
    }
    
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

componentDidMount(){
    //console.log(this.state.data[0].name)
    if(this.props.location.data){
        const operator = this.props.location.data[0];
        this.setState({operator})
    }
}

handleSubmit = e => { 
    e.preventDefault();
    console.log("name",this.state.operator.name);
    console.log("DOB",this.state.operator.DOB);
    console.log("uname",this.state.operator.username);
    console.log("address",this.state.operator.address);
    const user = {
      id : this.state.operator.id,  
      name : this.state.operator.name,
      username : this.state.operator.username,
      DOB : this.state.operator.DOB,
      address : this.state.operator.address,
      contactNumber : this.state.operator.contactNumber,
      status : this.state.operator.status,
      password : this.state.operator.password
    }
    register(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqq');
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
    var date;
    var m;
    var d;
    var y;
    var n;
    var yyyymmdd;
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
                    value = {this.state.operator.name}
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
                    value = {this.state.operator.username}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                {
                            date = new Date(this.state.operator.DOB),
                            m = date.getUTCMonth()+1, // Hours   
                            y = (date.getUTCFullYear()),
                            d = (date.getUTCDate()),
                            yyyymmdd = (y)+"."+(m)+"."+(d) ,
                            n = ''
                        }    
                <Label for="DOB">Date Of Birth</Label>
                  <Input
                    type="text"
                    name="DOB"
                    id="DOB"
                    placeholder="time placeholder"
                    value = {yyyymmdd}
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
                    value = {this.state.operator.address}
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
                    value = {this.state.operator.contactNumber}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                  <FormGroup>
                  <Label for="status">Status</Label>
                  <Input type="select" name="status" id="status" onChange={this.onChange}>
                    <option value="0" selected>Admin</option>
                    <option value="1">Operator</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value = {this.state.operator.password}
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



export default OperatorUpdatePage;
