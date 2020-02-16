import Page from 'components/Page';
import React from 'react';
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
import { searchByCustomerName } from './UserFunction';

class CreateAppointmentPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        date:"",    
        customerId: "",
        vehicleId: "",
        descript: "",
        customers: null,
        customerloading: false,
        customervalue: ''
    }
    
}

searchCustomer = val => {
  const user = {
      searchId: val
  }    
  this.setState({ loading: true });
  searchByCustomerName(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqqq');
        console.log(res);
        if(res){
          const customers = res;  
          this.setState({ customers, customerloading: false });
        }
        else{
          
        }
      }
    })
  

  
};

onChangeHandlerCustomer = async e => {
  this.searchCustomer(e.target.value);
  this.setState({ customervalue: e.target.value });
};

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

handleSubmit = e => { 
    e.preventDefault();
    console.log(this.state);
    const url = "http://localhost:5000/items/add"; 
    axios
            .post(url,
                    this.state
            ,{headers: {'Accept': 'application/json'}})
            .then( response =>
                    {console.log("good "+response)}
            )
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
    
}

  render(){
  return (
    <div>
    <Page title="Create Appointment" breadcrumbs={[{ name: 'Appointment', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Appointments</CardHeader>
            <CardBody>
              <Form>
              <FormGroup>
                <Label for="date">Date Of Appointment</Label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="time placeholder"
                    value = {this.state.date}
                    onChange = {this.onChange}
                  />
                </FormGroup>  
              <div className="form-inline">
              <FormGroup>
              <div className="col">
                  <Input
                    value={this.state.customervalue}
                    onChange={e => this.onChangeHandlerCustomer(e)}
                    placeholder="Customer"
                  />
                  <Input type="select" name="customerId" id="customerId">
                      { this.state.customers === null ? 
                        <option>no customer</option>
                      :
                        this.state.customers.map((obj,i) => 
                         <option  value={i}>{obj.name}</option>)
                      }
                  </Input>
                </div>  
                </FormGroup>
                <FormGroup>
                <div className="col">  
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </div>  
                </FormGroup>
                </div>
                <FormGroup>
                <Label for="descript">Description</Label>
                  <Input
                    type="textarea"
                    name="descript"
                    id="descript"
                    placeholder="Description"
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



export default CreateAppointmentPage;
