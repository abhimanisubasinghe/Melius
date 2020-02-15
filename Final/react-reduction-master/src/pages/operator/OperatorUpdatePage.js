import Page from 'components/Page';
import React from 'react';
import { updateAdmin } from './UserFunction';
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
        
            Id:"0",
            name: "abc",
            username: "abc@abc.com",
            DOB: "1/4/2020",
            address: "abc abc abc",
            contactNumber: "0123456789",
            status: "0",
            password: "",
         
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
        console.log("id",operator.Id)
        this.setState({
            Id: operator.Id,
            name: operator.name,
            username: operator.username,
            DOB: operator.DOB,
            address: operator.address,
            contactNumber: operator.contactNumber,
            status: operator.status,
            password: operator.password,
        })
    }
}

handleSubmit = e => { 
    e.preventDefault();
    //console.log("name",this.state.name);
    //console.log("DOB",this.state.DOB);
    //console.log("uname",this.state.username);
    //console.log("address",this.state.address);
    const user = {
      id : this.state.Id,  
      name : this.state.name,
      username : this.state.username,
      DOB : this.state.DOB,
      address : this.state.address,
      contactNumber : this.state.contactNumber,
      status : this.state.status,
      password : this.state.password
    }
    console.log("user",user);
    updateAdmin(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqq');
        this.props.history.push({
          pathname:'/operator-view',
          data: this.props.location});
      } else{
            this.props.history.push({
                pathname:'/operator-update',
                data: res})
        }
      }
    )
    
}

  render(){
  return (
    <div>
    <Page title="Update Operator" breadcrumbs={[{ name: 'Operator-Update', active: true }]}>
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
                    placeholder={this.state.DOB}
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
                    type="text"
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



export default OperatorUpdatePage;
