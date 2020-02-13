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
                <div className="form-inline">  
                <FormGroup>
                <div className="col">  
                <Label for="unitPrice">Unit Price </Label>
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                  <Input
                    type="number"
                    name="unitPrice"
                    id="unitPrice"
                    placeholder="Unit Price"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                </div>  
                <div className="col">             
                  <Label for="costPrice">Cost Price </Label>
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                  <Input
                    type="number"
                    name="costPrice"
                    id="costPrice"
                    placeholder="Cost Price"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                  </div>
                  </FormGroup>
                </div>
                <div className="form-inline">
                <FormGroup>
                <div className="col">  
                <Label for="itemgroup">Item Group</Label>
                  <Input
                    type="text"
                    name="itemgroup"
                    id="itemgroup"
                    placeholder="Item Group"
                  />
                </div>
                <div className="col">    
                <Label for="brand">Brand</Label>
                  <Input
                    type="text"
                    name="brand"
                    id="brand"
                    placeholder="Brand"
                  />
                </div>
                </FormGroup>
                </div>
                <div className="form-inline">
                <FormGroup>
                <div className="col">  
                <Label for="type">Type</Label>
                  <Input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Type"
                  />
                </div>  
                <div className="col">  
                <Label for="category">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                  />
                </div>  
                </FormGroup>
                </div>
                <div className="form-inline">
                <FormGroup>
                <div className="col">  
                <Label for="storageId">Storage ID</Label>
                  <Input
                    type="text"
                    name="storageId"
                    id="storageId"
                    placeholder="Storage ID"
                  />
                </div>
                <div className="col">
                <Label for="supplierId">Supplier ID</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    placeholder="Supplier Id"
                  />
                </div>  
                </FormGroup>
                </div>
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
                <Label for="reorderLevel">Reorder Level</Label>
                  <Input
                    type="number"
                    name="reorderLevel"
                    id="reorderLevel"
                    placeholder="Reorder Level"
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



export default RegisterItemPage;
