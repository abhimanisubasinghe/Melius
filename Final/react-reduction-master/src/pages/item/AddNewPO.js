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

class AddNewPOPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        supplierId:"",    
        address: "",
        delDate: "",
        item:[{itemCode:"",quantity:"",unitPrice:""}],
        total: "",
        description: "",
        deliveryTerms: "",
        paymentTerms: "",
    }
    
}

handleChange = (e) => {
    if(["itemCode","quantity","unitPrice"].includes(e.target.name)){
        console.log("here");
        let item = [...this.state.item]
        item[e.target.dataset.id][e.target.name] = e.target.value
        this.setState({ item },() => console.log(this.state.item))
    } else {
        this.setState({[e.target.name]:e.target.value})
    }
}

addItem = (e) =>{
    this.setState((prevState)=>({
        item:[...prevState.item,{itemCode:"",quantity:"",unitPrice:""}]
    }));
}

handleSubmit = e => { 
    e.preventDefault();

    const newPO={
        supplierId:this.state.supplierId,    
        address:this.state.address,
        delDate:this.state.delDate,
        item:this.state.item,
        total:this.state.total,
        description:this.state.description,
        deliveryTerms:this.state.deliveryTerms,
        paymentTerms:this.state.deliveryTerms,
    }
    console.log(newPO);
    const url = "http://localhost:5000/reorder/addPO"; 
    axios
            .post(url,
                    newPO
            ,{headers: {'Accept': 'application/json'}})
            .then( response =>
                    {console.log("good "+response)}
            )
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
    
}

  render(){
      let {item} = this.state
  return (
    <div>
    <Page title="Purchase Order" breadcrumbs={[{ name: 'Purchase-Order', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>New Purchase Order</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <FormGroup>
                  <Label htmlfor="name">Supplier :</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    value={this.state.supplierId}
                    placeholder="Supplier Name"
                  />
                </FormGroup>
                <FormGroup>
                <Label htmlfor="address">Deliver To:</Label>
                  <Input
                    type="textarea"
                    name="address"
                    id="address"
                    value={this.state.address}
                    placeholder="In Stock"
                  />
                </FormGroup>
                <FormGroup>
                <Label htmlfor="delDate">Estimated Delivery Date:</Label>
                  <Input
                    type="date"
                    name="delDate"
                    id="delDate"
                    value={this.state.delDate}
                    placeholder="Delivery Date"
                  />
                </FormGroup>
               
                
                {

                    item.map((val,idx)=>{

                        let itemCode=`item-${idx}`, qty=`quantity-${idx}`,unitPrice=`unitPrice-${idx}`
                 return(       
                 
                <>
                <div key={idx}>
                <div className="form-inline">    
                <div className="col">  
                <Label htmlfor={itemCode}>Item Name</Label>
                  <Input
                    type="text"
                    name="itemCode"
                    data-id={idx}
                    id={itemCode}
                    value={this.state.item[idx].itemCode}
                    placeholder="Item Group"
                    className="itemCode"
                  />
                </div>
                <div className="col">    
                <Label htmlfor={qty}>Quantity</Label>
                  <Input
                    type="text"
                    name="quantity"
                    id={qty}
                    data-id={idx}
                    value={item[idx].quantity}
                    placeholder="Brand"
                    className="quantity"
                  />
                </div> 
                <div className="col">  
                <Label for="unitPrice">Unit Price </Label>
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                  <Input
                    type="number"
                    name="unitPrice"
                    id={unitPrice}
                    data-id={idx}
                    value={item[idx].unitPrice}
                    placeholder="Unit Price"
                    className="unitPrice"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                  </div>
                  </div>
                  </div>
                  </>
                        )
                    })
                }
                
                <FormGroup>
                <div className="col">  
                <Button color="info" onClick={this.addItem}>New Item</Button>
                </div> 
                
                  </FormGroup>
                  
                <div className="form-inline">
                <FormGroup>
               
                </FormGroup>
                </div>
                
                
              
                <FormGroup>
                <Label for="total">Total </Label>
                  <InputGroup>
                  <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                  <Input
                    type="number"
                    name="total"
                    id="total"
                    onChange={this.handleChange}
                    value={this.state.total}
                    placeholder="Total"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>
                </FormGroup>
                
                <FormGroup>
                <Label for="descript">Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                    placeholder="Description"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="descript">Terms of Delivery</Label>
                  <Input
                    type="textarea"
                    name="deliveryTerms"
                    id="deliveryTerms"
                    onChange={this.handleChang}
                    value={this.state.deliveryTerms}
                    placeholder="Description"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="descript">Terms of Payment</Label>
                  <Input
                    type="textarea"
                    name="paymentTerms"
                    id="paymentTerms"
                    onChange={this.handleChange}
                    value={this.state.paymentTerms}
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



export default AddNewPOPage;
