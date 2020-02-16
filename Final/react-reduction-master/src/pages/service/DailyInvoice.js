import Page from 'components/Page';
import React from 'react';
import { dayinvoice } from './UserFunction';
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

class InvoiceDay extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        
        day: "",
        
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
    const service = {
      
      day : this.state.day,
      
    }
    dayinvoice(service).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqq');
        console.log(res);
        if(res){
          //this.props.history.push('/dayinvoice-print',{detail: res})
          this.props.history.push('/');
          
        }
        else{
          this.props.history.push('/day-view');
        }
      }
    })
    
}

  render(){
  return (
    <div>
    <Page title="Daily Bill" breadcrumbs={[{ name: 'Daily-Bill', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Registration</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label for="day">Date</Label>
                  <Input
                    type="date"
                    name="day"
                    id="day"
                    placeholder="time placeholder"
                    value = {this.state.day}
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



export default InvoiceDay;
