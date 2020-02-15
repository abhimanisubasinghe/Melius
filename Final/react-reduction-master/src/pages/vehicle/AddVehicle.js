import Page from 'components/Page';
import React from 'react';
import { registerVehicle } from '../../components/UserFunction';
import axios from 'axios';

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




class RegisterVehicle extends React.Component{

  constructor() {
    super()

    this.state = {

      vehicleNo: "",
      category: "",    
      type: "",
      mileage: "",
      custId: "",
      
     
  }

  this.onChange=this.onChange.bind(this)
  this.onSubmit=this.onSubmit.bind(this)


    
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}


onSubmit(e){
  e.preventDefault();
  const vehicle = {
    vehicleNo:this.state.vehicleNo,
    category:this.state.category,    
    type: this.state.type,
    mileage: this.state.mileage,
    custId: this.state.custId,
     
  }
  console.log(vehicle);
  registerVehicle(vehicle).then(res => {
    console.log('come');
    if(res) {
      console.log("rrr");
      console.log(res.data);
    }
    
  })

}


  render(){
  return (
    <div>
    <Page title="Register Vehicle" breadcrumbs={[{ name: 'vehicle-Register', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Register Vehicle</CardHeader>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="type">vehicle No</Label>
                  <Input
                    type="text"
                    name="vehicleNo"
                    id="vehicleNo"
                    placeholder="vehicle No"
                    onChange={this.onChange}
                    value={this.state.vehicleNo}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="type">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="category"
                    onChange={this.onChange}
                    value={this.state.category}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="type">Type</Label>
                  <Input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="type"
                    onChange={this.onChange}
                    value={this.state.type}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="type">mileage</Label>
                  <Input
                    type="number"
                    name="mileage"
                    id="mileage"
                    placeholder="mileage"
                    onChange={this.onChange}
                    value={this.state.mileage}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="type">NIC</Label>
                  <Input
                    type="number"
                    name="custId"
                    id="custId"
                    placeholder="custId"
                    onChange={this.onChange}
                    value={this.state.custId}
                  />
                </FormGroup>
                
                
               
                
                
              
                
                
                <FormGroup check row>
                    <Button type="submit">Submit</Button>
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



export default RegisterVehicle;
