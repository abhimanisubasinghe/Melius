import Page from 'components/Page';
import React from 'react';
import { invoice } from '../../components/UserFunction';
import axios from 'axios';

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




class NewItemInvoice extends React.Component{

  constructor() {
    super()

    this.state = {    
        item:[{itemCode:"",quantity:"",unitPrice:""}],
        total: "",
        discount: "",
        remarks: "",
     
     
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)


    
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

  onChange = (e) => {
      this.setState(
      {[e.target.name]: e.target.value}
  )
  }


  onSubmit(e){
  e.preventDefault();
  const invoice1 = {
      item:this.state.item,    
      total: this.state.total,
      discount: this.state.discount,
      remarks: this.state.remarks
     
  }
    /*console.log('nvjsdnvklsnvsnkndslkvcnsdovnosinvsklnclksnvknskldnvsklvklsnvlks');
    console.log(invoice1);
    invoice(invoice1).then(res => {
      console.log('come');
      if(res) {
        console.log("rrr");
        console.log(res);
        if(res.res1){
          this.props.history.push('/printInvoiceService', {detail:res.res1 })
        }
        else{
          this.props.history.push('/new-invoice');
        }
        
      }
    })*/
    .catch(err => {
      console.log('catch err');
    })

  }



  render(){
    let {item} = this.state
  return (
    <div>
    <Page title="Invoice" breadcrumbs={[{ name: 'Material-invoice', active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Material Invoice </CardHeader>
            <CardBody>
              <Form onSubmit={this.onSubmit}>

                        
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
                
                <FormGroup>
                <Label for="total">Total</Label>
                  <Input
                    type="number"
                    name="total"
                    id="total"
                    placeholder=" vehicle Id"
                    onChange={this.onChange}
                    value={this.state.total}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="name">Discount</Label>
                  
                  <Input
                    type="number"
                    name="discount"
                    id="discount"
                    placeholder="discount "
                    onChange={this.onChange}
                    value={this.state.discount}
                  />
                </FormGroup>
                <FormGroup>
                <Label for="bracode">Remarks</Label>
                  <Input
                    type="text"
                    name="remarks"
                    id="remarks"
                    placeholder="remarks"
                    onChange={this.onChange}
                    value={this.state.remarks}
                  />
                </FormGroup>
               
                
                
                
                
                <FormGroup check row>
                    <Button type="submit">Submit</Button>
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




export default NewItemInvoice;
