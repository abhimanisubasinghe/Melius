import React from 'react';
import {
        Grid,
        Row,
        Col,
        FormGroup,
        ControlLabel,
        FormControl,
        Navbar,
        Nav,
        NavItem,
        NavbarBrand
      } from "react-bootstrap";
      
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Router,Route,IndexRoute,hashHistory } from "react-router"
import Admin from "layouts/Admin"
import Hello from "views/Hello.js"
//import Itemregister from "views/Itemregister";

//import './Customerreg.css';

export default class ItemTransfer extends React.Component{
    
        constructor(props) {
                super(props)
            
                this.state = {
                    warehouseId:"",    
                    date: "",
                    itemId: "",
                    quantity:""
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
                const url = "http://localhost:5000/transfer/add"; 
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
                return(  
                <div>
                <div>    
                </div>
                        <div>
                                <Navbar style={navStyle}>
                                        <Nav className="mr-auto" >
                                        
                                                <NavItem><Link to="item_register">Register</Link></NavItem>
                                                <NavItem><Link to="item_purchase">Purchase</Link></NavItem>
                                                <NavItem><Link to="item_transfer">Transfer</Link></NavItem>
                                        </Nav>
   
                                </Navbar>
                        </div>            
                <div className="content">
                        <Grid fluid>
                                <Row>
                                        <Col md={8}>
                                                <Card 
                                                        title="New Transfer Request"
                                                        content={
                                                                <form onSubmit={this.handleSubmit}>
                                                                        <FormInputs
                                                                                ncols={["col-md-8"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "Destinstion Plant",
                                                                                        type: "number",
                                                                                        bsClass: "form-control",
                                                                                        placeholder: "Destination",
                                                                                        value:this.state.warehouseId,
                                                                                        onChange: this.onChange,
                                                                                        id: "warehouseId",
                                                                                        name: "warehouseId"
                                                                                        },                                                                              
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "Document Date",
                                                                                        type: "date",
                                                                                        bsClass: "form-control",
                                                                                        placeholder: "Date",
                                                                                        value:this.state.date,
                                                                                        onChange: this.onChange,
                                                                                        id: "date",
                                                                                        name: "date"}
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-4","col-md-4"]}
                                                                                properties={[
                                                                                    {
                                                                                        label: "Item",
                                                                                        type: "text",
                                                                                        bsClass: "form-control",
                                                                                        placeholder: "Item",
                                                                                        value:this.state.itemId,
                                                                                        onChange: this.onChange,
                                                                                        id: "itemId",
                                                                                        name: "itemId"
                                                                                        }
                                                                                        ,
                                                                                        {
                                                                                        label: "Quantity",
                                                                                        type: "number",        
                                                                                        value: this.state.quantity,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"quantity",
                                                                                        name: "quantity", 
                                                                                        placeholder: "quantity"
                                                                                        },                                                                                       
                                                                                ]}
                                                                        />
                                                                        
                                                                       
                                                                       
                                                                        
                                                                        <Button bsStyle="info" pullRight fill type="submit">
                                                                        Insert
                                                                        </Button>
                                                                        <div className="clearfix" />        
                                                                </form>
                                                }/>
                                        </Col>
                                </Row>
                        </Grid>        
        </div>
        </div>            
                )
    }
        
    
}


const navStyle = {
        backgroundColor: '#262626'
      }
    
    const cursorStyle = {
        cursor : 'pointer'
    }  
    
