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

class Addservice extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      category:"",
      name:"",
      price:"",

     
  }
}

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
    <Page title="Register Item" breadcrumbs={[{ name: 'Item-Register', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Registration</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="name">Item Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Item Name"
                  />
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
