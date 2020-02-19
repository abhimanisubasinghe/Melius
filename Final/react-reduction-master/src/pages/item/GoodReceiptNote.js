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

class GoodReceiptNote extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        POId:"",    
        deliveryDate: "",
        documentDate: "",
        supplierId: "",
        deliveryNoteId: "",
        total: "",
        remarks: "",
        item:[{itemCode:"",quantity:"",unitPrice:""}],
    }
    
}

handleChange = (e) => {
    if(["itemCode","quantity","unitPrice"].includes(e.target.name)){
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

    const grn={
        POId:this.state.POId,    
        address:this.state.address,
        documentDate:this.state.documentDate,
        deliveryDate:this.state.deliveryDate,
        item:this.state.supplierId,
        total:this.state.total,
        remarks:this.state.remarks,
        deliveryNoteId:this.state.deliveryNoteId,
        supplierId:this.state.supplierId,
    }
    //console.log(newPO);
    const url = "http://localhost:5000/grn/add"; 
    axios
            .post(url,
                    grn
            ,{headers: {'Accept': 'application/json'}})
            .then( response =>
                    {console.log("good");
                    
                  }
                    
            )
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
            this.props.history.push('/po-view')
}

  render(){
      let {item} = this.state
  return (
    <div>
    <Page title="Good Receipt Note" breadcrumbs={[{ name: 'Purchase-Order', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Good Receipt Note</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <FormGroup>
                  <Label htmlfor="name">Purchase Order Id</Label>
                  <Input
                    type="text"
                    name="POId"
                    id="POId"
                    value={this.state.POId}
                    placeholder="Supplier Name"
                  />
                  
                </FormGroup>

                <FormGroup>
                  <Label htmlfor="name">Supplier Id</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    value={this.state.supplierId}
                    placeholder="Supplier"
                  />
                  </FormGroup>
                <FormGroup>
                <Label htmlfor="documentDate">Document Date:</Label>
                  <Input
                    type="date"
                    name="documentDate"
                    id="documentDate"
                    value={this.state.documentDate}
                    placeholder="Delivery Date"
                  />
                </FormGroup>
                <FormGroup>
                <Label for="descript">Delivery Note ID</Label>
                  <Input
                    type="textarea"
                    name="deliveryNoteId"
                    id="deliveryNoteId"
                    onChange={this.handleChang}
                    value={this.state.deliveryNoteId}
                    placeholder="Description"
                  />
                </FormGroup>
                <FormGroup>
                <Label htmlfor="deliveryDate">Delivery Date:</Label>
                  <Input
                    type="date"
                    name="deliveryDate"
                    id="deliveryDate"
                    value={this.state.deliveryDate}
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
                <Label for="descript">Remarks</Label>
                  <Input
                    type="textarea"
                    name="remarks"
                    id="remarks"
                    onChange={this.handleChange}
                    value={this.state.remarks}
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



export default GoodReceiptNote;
