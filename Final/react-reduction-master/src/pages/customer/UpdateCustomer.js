import Page from 'components/Page';
import React from 'react';
import { updatecustomer } from '../../components/UserFunction';
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

class UpdateCustomer extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        
            Id:"",
            name: "",
            fax: "",
            NIC: "",
            type: "",
            email: "",
            website: "",
            address:"",
            phoneNo:"",
            DOB: "",
            note: "",

         
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
        const customer = this.props.location.data[0];
        console.log("id",customer.Id)
        this.setState({
            Id: customer.Id,
            name: customer.name,
            fax: customer.fax,
            NIC: customer.NIC,
            type: customer.type,
            email: customer.email,
            website: customer.website,
            address: customer.address,
            phoneNo: customer.phoneNo,
            DOB: customer.DOB,
            note: customer.note,
        })
    }
}

handleSubmit = e => { 
    e.preventDefault();
    //console.log("name",this.state.name);
    //console.log("DOB",this.state.DOB);
    //console.log("uname",this.state.username);
    //console.log("address",this.state.address);
    const customer = {
     
      Id: this.state.Id,
      name: this.state.name,
      fax: this.state.fax,
      NIC: this.state.NIC,
      type: this.state.type,
      email: this.state.email,
      website: this.state.website,
      address: this.state.address,
      phoneNo: this.state.phoneNo,
      DOB: this.state.DOB,
      note: this.state.note,
    }
    console.log("user",customer);
    updatecustomer(customer).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqq');
        this.props.history.push({
          pathname:'/view-customer',
          data: this.props.location});
      } else{
            this.props.history.push({
                pathname:'/singleview',
                data: res})
        }
      }
    )
    
}

  render(){
  return (
    <div>
    <Page title="Update Customer" breadcrumbs={[{ name: 'Customer-Update', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Updation</CardHeader>
            <CardBody>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                  <Label for="name">Id </Label>
                  
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Cutomer Name"
                    onChange={this.onChange}
                    value={this.state.Id}
                  />
                </FormGroup>
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



export default UpdateCustomer;
