import Page from 'components/Page';
import React from 'react';
import { registerCustomer } from '../../components/UserFunction';
import { notNull, faxValidator, emailValidator, URLValidator, phoneValidator,DOBValidator,NICValidator } from '../../validations';
import axios from 'axios';

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
  UncontrolledAlert,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';




class RegisterCustomerPage extends React.Component{

  constructor() {
    super()

    this.state = {
      name: "",
      validateName: true,
      fax: "",    
      validateFax: true,
      NIC: "",
      validateNIC: true,
      type: "",
      email: "",
      validateEmail: true,
      website: "",
      validateWeb: true,
      address: "",
      validateAddress: true,
      phoneNo: "",
      validatePhone: true,
      DOB: "",
      validateDOB: true,
      note: "",
      validations: true,
  }

  this.onChange=this.onChange.bind(this)
  this.onSubmit=this.onSubmit.bind(this)


    
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value }
)
}

validatingFields = () => {

  //var fax = true;

  //if(faxValidator(this.state.fax) && notNull(this.state.fax))

  this.setState({
    validateName: notNull(this.state.name),
    validateFax:faxValidator(this.state.fax) && notNull(this.state.fax) ? true : false ,
    validateNIC:NICValidator(this.state.NIC) && notNull(this.state.NIC) ? true : false ,
    validateEmail:emailValidator(this.state.email) && notNull(this.state.email) ? true : false ,
    validateWeb:URLValidator(this.state.website) && notNull(this.state.website) ? true : false ,
    validatePhone:phoneValidator(this.state.phone) && notNull(this.state.phone) ? true : false ,
    validateAddres:notNull(this.state.address) ,
    validateDOB:DOBValidator(this.state.DOB),

  })
  
  if(notNull(this.state.name) &&
  faxValidator(this.state.fax) && notNull(this.state.fax) &&
  NICValidator(this.state.NIC) && notNull(this.state.NIC) &&
  emailValidator(this.state.email) && notNull(this.state.email) &&
  URLValidator(this.state.website) && notNull(this.state.website) &&
  phoneValidator(this.state.phone) && notNull(this.state.phone) &&
  notNull(this.state.address) &&
  DOBValidator(this.state.DOB)   
  ){
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

onSubmit(e){
  e.preventDefault();
  
  const customer = {
      name:this.state.name,
      fax:this.state.fax,    
      NIC: this.state.NIC,
      type: this.state.type,
      email: this.state.email,
      website: this.state.website,
      address: this.state.address,
      phoneNo: this.state.phoneNo,
      DOB: this.state.DOB,
      note: this.state.note,
      
  }
  console.log('nvjsdnvklsnvsnkndslkvcnsdovnosinvsklnclksnvknskldnvsklvklsnvlks');
  console.log(customer);
  registerCustomer(customer).then(res => {
    console.log('come');
    if(res) {
      console.log("rrr");
      console.log(res.state);
      if(res.state){
        this.props.history.push('/view-customer');

        
      }
      else{
        this.props.history.push('/',{detail: res})
      }
    }
    
  })

}


  render(){
    const {errors}=this.state
  return (
    <div>
    <Page title="Register Customer" breadcrumbs={[{ name: 'customer-Register', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Register Customer</CardHeader>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Customer Name</Label>
                  
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Cutomer Name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="fax">Fax</Label>
                  <Input
                    type="text"
                    name="fax"
                    id="fax"
                    placeholder="Fax Number"
                    onChange={this.onChange}
                    value={this.state.fax}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="NIC">NIC</Label>
                  <Input
                    type="text"
                    name="NIC"
                    id="NIC"
                    placeholder="NIC"
                    onChange={this.onChange}
                    value={this.state.NIC}
                  />
                  <UncontrolledAlert color="danger">

                  {
                    errors.NIC.length >0 &&
                    <small><span>{errors.NIC}</span></small>
                  }
                  </UncontrolledAlert>

                </FormGroup>
                <FormGroup>
                  <Label for="name">Type</Label>
                  
                  <Input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Cutomer Type"
                    onChange={this.onChange}
                    value={this.state.type}
                  />
                </FormGroup>
                <div className="form-inline">  
                <FormGroup>
                <div className="col">  
                <Label for="email">E-mail</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Something@something"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>  
                <div className="col">             
                  <Label for="costPrice">Web site</Label>
                  <Input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="web site"
                    onChange={this.onChange}
                    value={this.state.website}
                  />
                  <UncontrolledAlert color="danger">
                  {
                    errors.website.length >0 &&
                    <small><span>{errors.website}</span></small>
                  }
                  </UncontrolledAlert>
                  </div>
                  </FormGroup>
                </div>
                
                
               
                <FormGroup>
                <Label for="bracode">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="address"
                    onChange={this.onChange}
                    value={this.state.address}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="reorderLevel">Phone No.</Label>
                  <Input
                    type="number"
                    name="phoneNo"
                    id="phoneNo"
                    placeholder="phone No "
                    onChange={this.onChange}
                    value={this.state.phoneNo}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="leadTime">DOB</Label>
                  <Input
                    type="date"
                    name="DOB"
                    id="DOB"
                    placeholder="DOB"
                    onChange={this.onChange}
                    value={this.state.DOB}
                  />
                </FormGroup>
                
                <FormGroup>
                <Label for="descript">Note</Label>
                  <Input
                    type="textarea"
                    name="note"
                    id="note"
                    placeholder="Add any notes"
                    onChange={this.onChange}
                    value={this.state.note}
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



export default RegisterCustomerPage;
