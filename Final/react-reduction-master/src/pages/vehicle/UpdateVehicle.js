import Page from 'components/Page';
import React from 'react';
import { updatevehicle } from '../../components/UserFunction';
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
        Id:"",
        vehicle: "",
        category: "",    
        type: "",
        mileage: "",
        custId: "",
         
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
        const vehicle = this.props.location.data[0];
        console.log("id",vehicle.Id)
        this.setState({
            Id: vehicle.Id,
            vehicle: vehicle.vehicle,
            category: vehicle.category,
            type: vehicle.type,
            mileage: vehicle.mileage,
            custId: vehicle.custId,
           
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
        Id: this.state.Id,
        vehicle: this.state.vehicle,
        category: this.state.category,
        type: this.state.type,
        mileage: this.state.mileage,
        custId: this.state.custId,
    }
    console.log("user",user);
    updatevehicle(user).then(res => {
      if(res) {
        console.log('qqqqqqqqqqqq');
        this.props.history.push({
          pathname:'/view-vehicle',
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
    <Page title="Update vehicle" breadcrumbs={[{ name: 'vehicle-Update', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>update</CardHeader>
            <CardBody>
            <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="type">vehicle Id</Label>
                  <Input
                    type="text"
                    name="vehicleNo"
                    id="vehicleNo"
                    placeholder="vehicle No"
                    onChange={this.onChange}
                    value={this.state.Id}
                  />
                </FormGroup>
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



export default OperatorUpdatePage;
