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

class AddNewPRPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        itemcode:"",
        Qty: "",
        description: "",
        delDate: "",
        storageId: "",
        supplierId: "",
        terms:""
      
    }
    
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

handleSubmit = e => { 
    e.preventDefault();
    //console.log(e.target);
    console.log(this.state);
    const newPR={
        itemCode:this.state.itemCode,
        Qty:this.state.Qty,
        description:this.state.description,
        delDate:this.state.delDate,
        storageId:this.state.storageId,
        supplierId:this.state.supplierId,        
        terms:this.state.terms,
    }
    const url = "http://localhost:5000/reorder/PRAdd"; 
    axios
            .post(url,
                    newPR
            ,{headers: {'Accept': 'application/json'}})
            .then( response =>
                    {console.log("good "+response)
                    this.props.history.push('/new-pr')}
            )
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
    
}

  render(){
  return (
    <div>
    <Page title="New Purchase Requisition" breadcrumbs={[{ name: 'Purchase Requisition', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Purchase Requisition</CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Item Code</Label>
                  <Input
                    type="text"
                    name="itemCode"
                    id="itemCode"
                    value={this.state.itemCode}
                    onChange={this.onChange}
                    placeholder="Item Name"
                    
                  />
                </FormGroup>
                <FormGroup>
                <Label for="Qty">Quantity</Label>
                  <Input
                    type="text"
                    name="Qty"
                    id="Qty"
                    value={this.state.Qty}
                    onChange={this.onChange}
                    placeholder="In Stock"
                    
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Description</Label>
                  <Input type="textarea" name="description" id="description" onChange={this.onChange} value={this.state.description}/>
                </FormGroup>
                
               
                
                <div className="form-inline">
                <FormGroup>
                <div className="col">  
                <Label for="storageId">Storage ID</Label>
                  <Input
                    type="text"
                    name="storageId"
                    id="storageId"
                    onChange={this.onChange}
                    value={this.state.storageId}
                    placeholder="Storage ID"
                  />
                </div>
                <div className="col">
                <Label for="supplierId">Supplier ID</Label>
                  <Input
                    type="text"
                    name="supplierId"
                    id="supplierId"
                    onChange={this.onChange}
                    value={this.state.supplierId}
                    placeholder="Supplier Id"
                  />
                </div>  
                </FormGroup>
                </div>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input
                    type="date"
                    name="delDate"
                    id="delDate"
                    onChange={this.onChange}
                    value={this.state.delDate}
                    placeholder="date placeholder"
                  />
                </FormGroup>                              
                
                <FormGroup>
                <Label for="terms">Terms and Condition</Label>
                  <Input
                    type="textarea"
                    name="terms"
                    id="terms"
                    onChange={this.onChange}
                    value={this.state.terms}
                    placeholder="termsion"
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

export default AddNewPRPage;
