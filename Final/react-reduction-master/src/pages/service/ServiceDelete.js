import Page from 'components/Page';
import React from 'react';
import { deleteService } from './UserFunction';
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

class ServiceDelete extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        
            serviceId:"0",
            name: "abc",
            category: 'ww',
            price: '00'
         
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
        const service = this.props.location.data[0];
        console.log("id",service.serviceId)
        this.setState({
            serviceId: service.serviceId,
            name: service.name,
            category: service.category,
            price: service.price,
        })
    }
}

handleSubmit = e => { 
    e.preventDefault();
    //console.log("name",this.state.name);
    //console.log("DOB",this.state.DOB);
    //console.log("uname",this.state.username);
    //console.log("address",this.state.address);
    const service = {
      serviceId : this.state.serviceId,  
      name : this.state.name,
      category : this.state.category,
      price : this.state.price
    }
    console.log("service",service);
    deleteService(service).then(res => {
       // console.log("delete",res);
      if(res) {
        console.log('delqqqqqqqqqqqq',res);
        this.props.history.push({
          pathname:'/service-view',
          data: res});
      } else{
            this.props.history.push({
                pathname:'/service-profile',
                data: res})
        }
      }
    )
    
}

  render(){
  return (
    <div>
    <Page title="Delete Service" breadcrumbs={[{ name: 'Service-Delete', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Delete</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="serviceId">serviceId</Label>
                  <Input
                    type="text"
                    name="serviceId"
                    id="serviceId"
                    placeholder="Service Id"
                    value = {this.state.serviceId}
                    onChange  = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Service Name"
                    value = {this.state.name}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>  
                <Label for="category">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                    value = {this.state.category}
                    onChange = {this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="price">Price</Label>
                  <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value = {this.state.price}
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



export default ServiceDelete;
