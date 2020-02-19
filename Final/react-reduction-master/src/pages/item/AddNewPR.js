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

class AddNewPRPage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        itemcode:"",
        validateItemCode: true,
        Qty: "",
        validateQty: true,
        description: "",
        delDate: "",
        validateDelDate: true,
        storageId: "",
        validateStorageId:true,
        supplierId: "",
        validateSupplierId: true,
        terms:"",
        data:[
          {itemCode:"",name:""}
        ],
        validations: true,
      
    }
    
}
componentDidMount(){
  //console.log(this.props.location.data);
    axios.get(`http://localhost:5000/items/item`)
    .then(res => {
      console.log(res.data.data);
      const data = res.data.data;
      this.setState({data})
    })
}

onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
}

validatingFields = () => {
  this.setState({
    validateSupplierId: notNull(this.state.supplierId),
    validateItemCode: notNull(this.state.itemcode),
    validateQty: positiveNumberValidator(this.state.Qty),
    validateDelDate: appointmentDateValidator(this.state.delDate),
    validateStorageId: notNull(this.state.storageId),
  })
  if(notNull(this.state.supplierId) && 
  notNull(this.state.itemcode) &&
  appointmentDateValidator(this.state.delDate) &&
  positiveNumberValidator(this.state.Qty) && 
  notNull(this.state.storageId)

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

handleSubmit = e => { 
    e.preventDefault();
    //console.log(e.target);
    var val = this.validatingFields();
    if(val){
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
            else{

              this.props.history.push('/new-pr');
              this.setState({
            validations: false
          })

            }
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
                  <Label for="exampleSelect">Item</Label>
                  <Input type="select" name="itemCode" id="itemCode"
                    placeholder="Item Name">
                      <option value="" selected disabled>select itemCode</option>
                    { this.state.data.map((data,i) =>
                                            
                            <option value={data.itemcode}>{data.name}</option>
                          
            )}
                  </Input>
                  {
                              this.state.validateItemCode !== true ?                  
                              <Alert color="danger">
                              Enter a valid itemcode
                              </Alert>  
                              : ""
                            }
                </FormGroup>
                <FormGroup>
                <Label for="Qty">Quantity</Label>
                  <Input
                    type="text"
                    name="Qty"
                    id="Qty"
                    value={this.state.Qty}
                    onChange={this.onChange}
                    placeholder="Quantity"
                    
                  />
                </FormGroup>
                {
                              this.state.validateQty !== true ?                  
                              <Alert color="danger">
                              Enter a valid quantity
                              </Alert>  
                              : ""
                            }
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
                  {
                              this.state.validateStorageId !== true ?                  
                              <Alert color="danger">
                              Enter a valid storage ID
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
                    onChange={this.onChange}
                    value={this.state.supplierId}
                    placeholder="Supplier Id"
                  />
                  {
                              this.state.validateSupplierId !== true ?                  
                              <Alert color="danger">
                              Enter a valid supplier ID
                              </Alert>  
                              : ""
                            }
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
                  {
                              this.state.validateDelDate !== true ?                  
                              <Alert color="danger">
                              Enter a valid date
                              </Alert>  
                              : ""
                            }
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

export default AddNewPRPage;
