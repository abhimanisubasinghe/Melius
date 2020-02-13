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
} from 'reactstrap';
import axios from 'axios';

class RegisterItemPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        itemcode:"",    
        name: "",
        inStock: "",
        unitPrice: "",
        descript: "",
        costPrice: "",
        reorderLevel: "",
        itemgroup: "",
        brand: "",
        type: "",
        category: "",
        storageId: "",
        supplierId: "",
        barcode: "",
        leadTime:""
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
                  <Label for="exampleEmail">Plain Text (Static)</Label>
                  <Input
                    plaintext
                    value="Some plain text/ static value"
                    readOnly
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Item Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Item Name"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="inStock">Amount in-stock</Label>
                  <Input
                    type="number"
                    name="inStock"
                    id="inStock"
                    placeholder="In Stock"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="unitPrice">Unit Price</Label>
                  <Input
                    type="number"
                    name="unitPrice"
                    id="unitPrice"
                    placeholder="Unit Price"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="costPrice">Cost Price</Label>
                  <Input
                    type="number"
                    name="costPrice"
                    id="costPrice"
                    placeholder="Cost Price"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="reorderLevel">Reorder Level</Label>
                  <Input
                    type="number"
                    name="reorderLevel"
                    id="reorderLevel"
                    placeholder="Reorder Level"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="itemgroup">Item Group</Label>
                  <Input
                    type="text"
                    name="itemgroup"
                    id="itemgroup"
                    placeholder="Item Group"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="brand">Brand</Label>
                  <Input
                    type="text"
                    name="brand"
                    id="brand"
                    placeholder="Brand"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="type">Type</Label>
                  <Input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Type"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="category">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="storageId">Storage ID</Label>
                  <Input
                    type="text"
                    name="storageId"
                    id="storageId"
                    placeholder="Storage ID"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="supplierId">Supplier ID</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    placeholder="Supplier Id"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="bracode">Barcode</Label>
                  <Input
                    type="text"
                    name="barcode"
                    id="barcode"
                    placeholder="Barcode"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="leadTime">Lead Time</Label>
                  <Input
                    type="time"
                    name="leadTime"
                    id="leadTime"
                    placeholder="Lead Time"
                  />
                </FormGroup>
                
                <FormGroup>
                <Label for="descript">Description</Label>
                  <Input
                    type="textarea"
                    name="descript"
                    id="descript"
                    placeholder="Description"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
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



export default RegisterItemPage;
