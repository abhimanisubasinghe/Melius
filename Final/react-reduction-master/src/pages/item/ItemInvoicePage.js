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
        item:[{itemCode:"",quantity:0 ,unitPrice:0}],
        total:0,
        discount: 0,
        remarks: "",
        data:[
          {itemCode:"",name:""}
        ]
     
     
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)


    
  }

  componentDidMount(){
    
      axios.get(`http://localhost:5000/items/item`)
      .then(res => {
        console.log(res.data.data);
        const data = res.data.data;
        this.setState({data})
      })
  }

  handleTotal = (item,id) => {
    var subtotal = item[id].quantity * item[id].unitPrice
    console.log(subtotal);
    this.setState({
      total:this.state.total+subtotal
    })
    console.log(subtotal);
  }

  handleDiscount = e =>{
    this.setState({
      //[e.target.name]: e.target.value,
      total:this.state.total-this.state.discount
    })
  }

  // Handle change in the fields and 
  handleChange = (e) => {
    if(["itemCode","quantity"].includes(e.target.name)){

      const id=e.target.dataset.id;
      let item = [...this.state.item]

      if(["itemCode"].includes(e.target.name)){
        axios.get(`http://localhost:5000/items/unitPrice/`+e.target.value)
        
        .then(res => {
          console.log(res.data.data[0].unitPrice);
          item[id].unitPrice=res.data.data[0].unitPrice})

        .catch((err) => console.log("Can’t access  response."+ err ))

      }
        
        item[e.target.dataset.id][e.target.name] = e.target.value
        this.setState({ item },() => console.log(this.state.item))
        if(["quantity"].includes(e.target.name)){
          this.handleTotal(this.state.item,id)
        }
        
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
  const invoice = {
      item:this.state.item,    
      total: this.state.total,
      discount: this.state.discount,
      remarks: this.state.remarks
     
  }

  const url = "http://localhost:5000/trading/addItemInvoice"; 
    axios
            .post(url,
                    invoice
            ,{headers: {'Accept': 'application/json'}})
            .then( response =>
                    {console.log("good");
                    
                  }
                    
            )
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
            
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
                    value={item[idx].itemCode}
                    onChange={this.handleChange}
                    placeholder="Item"
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
                    onChange={this.handleChange}
                    placeholder="quantity"
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
                <Label for="total">Total</Label>
                  <Input
                    type="number"
                    name="total"
                    id="total"
                    placeholder="Total"
                    onClick={this.handleDiscount}
                    value={this.state.total}
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
