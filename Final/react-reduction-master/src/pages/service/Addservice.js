import Page from 'components/Page';
import React from 'react';
import {addService} from 'components/UserFunction';
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


class Addservice extends React.Component{

  constructor() {
    super()

    this.state = {
      category: "",
      name: "",
      price: "",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) => {
      this.setState(
      {[e.target.name]: e.target.value}
  )
  }

  onSubmit(e){
    e.preventDefault();
    
    const service = {
      category: this.state.category,
      name: this.state.name,
      price: this.state.price
    }

    addService(service).then(res => {
      if(res){
        if(res.state === true){
          console.log('done reg');
          this.props.history.push({
          pathname:'/service-view',
          data: res})
          
        }
        else{
          console.log('not add')
          this.props.history.push({
            pathname:'/service-add',
            data: res})
        }
      }
    })
  }

  render(){
    return (
      
    <div>
    <Page title="AddService" breadcrumbs={[{ name: 'Add-Service', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>AddService</CardHeader>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value = {this.state.name}
                    onChange  = {this.onChange}
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



export default Addservice;
