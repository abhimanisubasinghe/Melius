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

class UpdateItemPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        item:{
            itemCode:"",
            name:"",
            inStock:"",
            unitPrice:"",
            costPrice:"",
            reorderLevel:"",
            leadTime:"",
            descript:"",
            Itemgroup:"",
            brand:"",
            type:"",
            category:"",
            storageId:"",
            unit:"",
            number:"",
            supplierName:"",
            barcode:""
        } 
    }
    
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

componentDidMount(){
    console.log(this.props.match.params.itemId);
      axios.get('http://localhost:5000/items/edit/'+this.props.match.params.itemId)
      .then(res => {
        const len = res.data.data.length;
        const item = res.data.data[0];
        //console.log(res.data.data[0].name);
        //this.setState( {item.name:res.data.data.name)
        this.setState({item})
        console.log(this.state.item.name);

      })
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
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Item Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.item.name}
                    onChange={this.onChange}
                    
                  />
                </FormGroup>
                <FormGroup>
                <Label for="inStock">Amount in-stock</Label>
                  <Input
                    type="number"
                    name="inStock"
                    id="inStock"
                    value={this.state.item.inStock}
                    onChange={this.onChange}
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
                    value={this.state.item.unitPrice}
                    onChange={this.onChange}
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
                    value={this.state.item.costPrice}
                    onChange={this.onChange}
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
                    value={this.state.item.Itemgroup}
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
                    value={this.state.item.brand}
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
                    value={this.state.item.type}
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
                    value={this.state.item.category}
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
                    value={this.state.item.storageId}
                    onChange={this.onChange}
                    placeholder="Storage ID"
                  />
                </div>
                <div className="col">
                <Label for="supplierId">Supplier ID</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    value={this.state.item.supplierName}
                    onChange={this.onChange}
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
                    value={this.state.item.barcode}
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
                    value={this.state.item.reorderLevel}
                    onChange={this.onChange}
                    placeholder="Reorder Level"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="leadTime">Lead Time</Label>
                  <Input
                    type="number"
                    name="leadTime"
                    id="leadTime"
                    value={this.state.item.leadTime}
                    onChange={this.onChange}
                    placeholder="Lead Time"
                  />
                </FormGroup>
                
                <FormGroup>
                <Label for="descript">Description</Label>
                  <Input
                    type="textarea"
                    name="descript"
                    id="descript"
                    value={this.state.item.descript}
                    onChange={this.onChange}
                    placeholder="Description"
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



export default UpdateItemPage;
