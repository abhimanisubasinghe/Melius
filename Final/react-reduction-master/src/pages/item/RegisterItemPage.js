import Page from 'components/Page';
import {appointmentDateValidator, notNull, positiveNumberValidator} from '../../validations'
import React from 'react';
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
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import axios from 'axios';

class RegisterItemPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        //itemcode:"",    
        name: "",
        validateName: true,
        inStock: "",
        validateInStock: true,
        unitPrice: "",
        validateUnitPrice: true,
        descript: "",
        costPrice: "",
        validateCostPrice: true,
        reorderLevel: "",
        validateReorderLevel: true,
        itemgroup: "",
        brand: "",
        type: "",
        category: "",
        storageId: "",
        validateStorageId: true,
        supplierId: "",
        validateSupplierId: true,
        barcode: "",
        leadTime:"",
        validateLeadTime: true,
        validations: true
    }
    
}

componentDidMount(){
  console.log(this.props);
}

validatingFields = () => {
  this.setState({
    validateName: notNull(this.state.name),
    validateInStock: positiveNumberValidator(this.state.inStock),
    validateUnitPrice: positiveNumberValidator(this.state.unitPrice),
    validateCostPrice: positiveNumberValidator(this.state.costPrice),
    validateReorderLevel: positiveNumberValidator(this.state.reorderLevel),
    validateStorageId: notNull(this.state.storageId),
    validateSupplierId: notNull(this.state.supplierId),
    validateLeadTime: positiveNumberValidator(this.state.leadTime),

  })
  if(notNull(this.state.name) === true &&  
    positiveNumberValidator(this.state.inStock) === true && 
    positiveNumberValidator(this.state.unitPrice) === true &&
    positiveNumberValidator(this.state.costPrice) === true &&
    positiveNumberValidator(this.state.reorderLevel) === true &&
    notNull(this.state.storageId) === true &&
    notNull(this.state.supplierId) === true &&
    positiveNumberValidator(this.state.leadTime) === true
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

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

handleSubmit = e => { 
    e.preventDefault();
    console.log(this.state);
    const val = this.validatingFields();
    if(val){
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
    else{
      this.props.history.push('/item-register');
      this.setState({
        validations: false
      })
    }
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
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Item Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="Item Name"
                  />
                  {
                              this.state.validateName !== true ?                  
                              <Alert color="danger">
                              Enter a item name
                              </Alert>  
                              : ""
                            }
                </FormGroup>
                <FormGroup>
                <Label for="inStock">Amount in-stock</Label>
                  <Input
                    type="number"
                    name="inStock"
                    id="inStock"
                    value={this.state.inStock}
                    onChange={this.onChange}
                    placeholder="In Stock"
                  />
                  {
                              this.state.validateInStock !== true ?                  
                              <Alert color="danger">
                              Enter a valid in stock
                              </Alert>  
                              : ""
                            }
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
                    value={this.state.unitPrice}
                    onChange={this.onChange}
                    placeholder="Unit Price"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                  {
                              this.state.validateUnitPrice !== true ?                  
                              <Alert color="danger">
                              Enter a unit price
                              </Alert>  
                              : ""
                            }
                </div>  
                <div className="col">             
                  <Label for="costPrice">Cost Price </Label>
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                  <Input
                    type="number"
                    name="costPrice"
                    id="costPrice"
                    value={this.state.costPrice}
                    onChange={this.onChange}
                    placeholder="Cost Price"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                  {
                              this.state.validateCostPrice !== true ?                  
                              <Alert color="danger">
                              Enter a cost price
                              </Alert>  
                              : ""
                            }
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
                    value={this.state.itemgroup}
                    onChange={this.onChange}
                    placeholder="Item Group"
                  />
                </div>
                <div className="col">    
                <Label for="brand">Brand</Label>
                  <Input
                    type="text"
                    name="brand"
                    id="brand"
                    value={this.state.brand}
                    onChange={this.onChange}
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
                    value={this.state.type}
                    onChange={this.onChange}
                    placeholder="Type"
                  />
                </div>  
                <div className="col">  
                <Label for="category">Category</Label>
                  <Input
                    type="text"
                    name="category"
                    id="category"
                    value={this.state.category}
                    onChange={this.onChange}
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
                    value={this.state.storageId}
                    onChange={this.onChange}
                    placeholder="Storage ID"
                  />
                  {
                              this.state.validateStorageId !== true ?                  
                              <Alert color="danger">
                              Enter a valid storage Id
                              </Alert>  
                              : ""
                            }
                </div>
                <div className="col">
                <Label for="supplierId">Supplier ID</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    value={this.state.supplierId}
                    onChange={this.onChange}
                    placeholder="Supplier Id"
                  />
                  {
                              this.state.validateSupplierId !== true ?                  
                              <Alert color="danger">
                              Enter a valid supplierId
                              </Alert>  
                              : ""
                            }
                </div>  
                </FormGroup>
                </div>
                <FormGroup>
                <Label for="bracode">Barcode</Label>
                  <Input
                    type="text"
                    name="barcode"
                    id="barcode"
                    value={this.state.barcode}
                    onChange={this.onChange}
                    placeholder="Barcode"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="reorderLevel">Reorder Level</Label>
                  <Input
                    type="number"
                    name="reorderLevel"
                    id="reorderLevel"
                    value={this.state.reorderLevel}
                    onChange={this.onChange}
                    placeholder="Reorder Level"
                  />
                  {
                              this.state.validateReorderLevel !== true ?                  
                              <Alert color="danger">
                              Enter a valid reorderLevel
                              </Alert>  
                              : ""
                            }
                </FormGroup>
                <FormGroup>
                  <Label for="leadTime">Lead Time</Label>
                  <Input
                    type="number"
                    name="leadTime"
                    id="leadTime"
                    value={this.state.leadTime}
                    onChange={this.onChange}
                    placeholder="Lead Time"
                  />
                  {
                              this.state.validateLeadTime !== true ?                  
                              <Alert color="danger">
                              Enter a valid lead time
                              </Alert>  
                              : ""
                            }
                </FormGroup>
                
                <FormGroup>
                <Label for="descript">Description</Label>
                  <Input
                    type="textarea"
                    name="descript"
                    id="descript"
                    value={this.state.descript}
                    onChange={this.onChange}
                    placeholder="Description"
                  />
                </FormGroup>
                <FormGroup check row>
                    <Button>Submit</Button>
                    {
                              this.state.validations !== true ?                  
                              <Alert color="danger">
                              ERROR!
                              </Alert>  
                              : ""
                            }
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
