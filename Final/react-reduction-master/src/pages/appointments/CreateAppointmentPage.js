import Page from 'components/Page';
import {appointmentDateValidator, notNull} from '../../validations'
import React from 'react';
import {
  Alert,
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
        vehiclevalue: '',
        validateDate: true,
        validateCustomerId: true,
        validateVehicleId: true,
        validations: true,
      
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

validatingFields = () => {
  this.setState({
    validateDate: appointmentDateValidator(this.state.date),
    validateCustomerId: notNull(this.state.customerId),
    validateVehicleId: notNull(this.state.vehicleId)
  })
  if(appointmentDateValidator(this.state.date) === true &&  notNull(this.state.vehicleId) === true && notNull(this.state.customerId) === true){
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
    const val = this.validatingFields();
    console.log("validating",val);
    if(val){
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
        console.log(res);
        if(res){
          this.props.history.push('/appointment-view',{detail: res})
          
        }
        else{
          this.props.history.push('/appointment-create');
        }
      }
    })
  }
  else{
    this.props.history.push('/appointment-create');
          this.setState({
            validations: false
          })
  }
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
                  {
                  this.state.validateDate !== true ?                  
                  <Alert color="danger">
                  Enter a valid date
                  </Alert>  
                  : ""
                  }
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
                {
                  this.state.validateCustomerId !== true ?                  
                  <Alert color="danger">
                  Enter a valid customer ID
                  </Alert>  
                  : ""
                  }  
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
                {
                  this.state.validateVehicleId !== true ?                  
                  <Alert color="danger">
                  Enter a valid vehicle ID
                  </Alert>  
                  : ""
                  }  
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
                    {
                  this.state.validations !== true ?                  
                  <Alert color="danger">
                  Error in entering data!
                  </Alert>  
                  : ""
                  } 
                    
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
