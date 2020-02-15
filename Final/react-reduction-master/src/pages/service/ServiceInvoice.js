import Page from 'components/Page';
import React from 'react';
import { invoice } from '../../components/UserFunction';
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




class NewInvoice extends React.Component{

  constructor() {
    super()

    this.state = {
        customerId:"",    
        serviceId:"",    

        vehicleId: "",
        total: "",
        discount: "",
        remarks: "",
     
     
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
  const invoice1 = {
      customerId:this.state.customerId,   
      serviceId:this.state.serviceId,    
      vehicleId: this.state.vehicleId,
      total: this.state.total,
      discount: this.state.discount,
      remarks: this.state.remarks
     
  }
  console.log('nvjsdnvklsnvsnkndslkvcnsdovnosinvsklnclksnvknskldnvsklvklsnvlks');
  console.log(invoice1);
  invoice(invoice1).then(res => {
    console.log('come');
    if(res) {
      console.log("rrr");
      console.log(res);
      
    }
    
  })

}


  render(){
  return (
    <div>
    <Page title="Invoice" breadcrumbs={[{ name: 'service-invoice', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Service Invoice </CardHeader>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Customer Id</Label>
                  
                  <Input
                    type="text"
                    name="customerId"
                    id="customerId"
                    placeholder="customer Id"
                    onChange={this.onChange}
                    value={this.state.customerId}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">service Id</Label>
                  
                  <Input
                    type="text"
                    name="serviceId"
                    id="serviceId"
                    placeholder="service Id"
                    onChange={this.onChange}
                    value={this.state.serviceId}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="fax">Vehicle Id</Label>
                  <Input
                    type="text"
                    name="vehicleId"
                    id="vehicleId"
                    placeholder=" vehicle Id"
                    onChange={this.onChange}
                    value={this.state.vehicleId}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="NIC">Total</Label>
                  <Input
                    type="number"
                    name="total"
                    id="total"
                    placeholder="total"
                    onChange={this.onChange}
                    value={this.state.total}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Discount</Label>
                  
                  <Input
                    type="text"
                    name="discount"
                    id="discount"
                    placeholder="discount "
                    onChange={this.onChange}
                    value={this.state.discount}
                  />
                </FormGroup>
                
                
               
                <FormGroup>
                <Label for="bracode">Remarks</Label>
                  <Input
                    type="text"
                    name="remarks"
                    id="remarks"
                    placeholder="remarks"
                    onChange={this.onChange}
                    value={this.state.remarks}
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



export default NewInvoice;
