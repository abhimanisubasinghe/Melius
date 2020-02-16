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
import { searchByCustomerName, searchByVehicleById, register } from './UserFunction';

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
        customervalue: '',
        vehicles: null,
        vehicleloading: false,
        vehiclevalue: ''
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
          console.log("searched customers",customers);
          this.setState({ customers, customerloading: false });
        }
        else{
          
        }
      }
    })
  

  
};

searchVehicle = val => {
  const user = {
      searchId: val
  }    
  this.setState({ loading: true });
  searchByVehicleById(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqqq');
        console.log(res);
        if(res){
          const vehicles = res;  
          console.log("searched vehicles",vehicles);
          this.setState({ vehicles, vehicleloading: false });
        }
        else{
          
        }
      }
    })
  

  
};

onChangeHandlerVehicle = async e => {
  this.searchVehicle(e.target.value);
  this.setState({ vehiclevalue: e.target.value });
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
    const user = {
      date:this.state.date,
      customerId: this.state.customerId,
      vehicleId: this.state.vehicleId,
      descript: this.state.descript

    }
    register(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqq');
        console.log(res.state);
        if(res.state){
          this.props.history.push('/appointment-view',{detail: res})
          
        }
        else{
          this.props.history.push('/appointment-create');
        }
      }
    })
    /*const url = "http://localhost:5000/items/add"; 
    axios
            .post(url,
                    this.state
            ,{headers: {'Accept': 'application/json'}})
            .then( response =>
                    {console.log("good "+response)}
            )
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
  */  
}

onSelectVehicle = (e) => {
  console.log("v",e.target.value)
  //console.log(e.target.value.name)
 //console.log(this.state.items[e.target.value])
  this.setState(
   {vehicleId: e.target.value}
  );
  
}

onSelectCustomer = (e) => {
  console.log("c",e.target.value)
  //console.log(e.target.value.name)
 //console.log(this.state.items[e.target.value])
  this.setState(
   {customerId: e.target.valued}
  );
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
              <Form onSubmit={this.handleSubmit}>
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
              <FormGroup>
              <div className="col">
                  <Label for="customer">Customer</Label>
                  <Input
                    value={this.state.customervalue}
                    onChange={e => this.onChangeHandlerCustomer(e)}
                    placeholder="Search Customer"
                  />
                  <Input type="select" name="customerId" id="customerId" onChange={this.onChange}>
                      { this.state.customers === null ? 
                        <option>no customer</option>
                      :
                        this.state.customers.map((obj,i) => 
                         <option selected value={obj.Id}>{obj.name}</option>)
                      }
                  </Input>
                </div>  
                </FormGroup>
                <FormGroup>
              <div className="col">
                  <Label for="vehicle">Vehicle</Label>
                  <Input
                    value={this.state.vehiclevalue}
                    onChange={e => this.onChangeHandlerVehicle(e)}
                    placeholder="Search Vehicle"
                  />
                  <Input type="select" name="vehicleId" id="vehicleId" onChange={this.onChange} >
                      { this.state.vehicles === null ? 
                        <option>no vehicles</option>
                      :
                        this.state.vehicles.map((obj,i) => 
                         <option selected value={obj.Id}>{obj.vehicleNo}</option>)
                      }
                  </Input>
                </div>  
                </FormGroup>
                <FormGroup>
                <Label for="descript">Description</Label>
                  <Input
                    type="textarea"
                    name="descript"
                    id="descript"
                    placeholder="Description"
                    value={this.state.descript}
                    onChange= {this.onChange}
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
