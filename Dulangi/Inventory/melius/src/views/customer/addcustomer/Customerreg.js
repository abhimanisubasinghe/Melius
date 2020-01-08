/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

//import './Customerreg.css';
import axios from 'axios';

export default class TableList extends React.Component{
    
        constructor(props) {
                super(props)
            
                this.state = {
                    id:"",    
                    customerName: "",
                    gender: "",
                    nic: "",
                    fax: "",
                    type: "",
                    website: "",
                    email: "",
                    address: "",
                    contactNo: "",
                    dob: "",
                    note: "",
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
                return(  
                <div className="container">
                        <form >
                       
                                <div className = "col-md-12">
                                        <div className= "row">
                                                <div className="col-md-6" align="left"> 
                                                        <h3 >Register Customer</h3>
                                                </div>
                                                <div className ="col-md-6">
                                                        <span className="glyphicon glyphicon-pencil"></span>
                                                </div> 
                                        
                                        </div>
                                        <hr/> 

                                        <div className= "row form-group" align="left">
                                                <label for="id" className="col-md-2">Customer Id</label>
                                                        <div className="col-md-10">
                                                                <input 
                                                                        type="text" 
                                                                        value={this.state.id}  
                                                                        className="form-control" 
                                                                        id="id" 
                                                                        name="id" 
                                                                        placeholder="Enter customer ID"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">

                                                <label for="customerName" className="col-md-2">Customer Name</label>
                                                        <div className="col-md-10">
                                                                <input 
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        value={this.state.customerName}  
                                                                        id="customerName" name="customerName"  
                                                                        placeholder="Cutomer Name"/> 

                                                                <fieldset className="row-md form-group">
                                                                        <div className="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        className="form-check-input" 
                                                                                        name="gender" 
                                                                                        id="gender" 
                                                                                        value={this.state.gender} 
                                                                                        onChange={this.onChange}
                                                                                        />
                                                                                        Mr.
                                                                                </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        class="form-check-input" 
                                                                                        name="gender" 
                                                                                        id="gender" 
                                                                                        value={this.state.gender} 
                                                                                        onChange={this.onChange}/>
                                                                                        Ms.
                                                                                </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        class="form-check-input" 
                                                                                        name="gender" 
                                                                                        id="gender" 
                                                                                        value={this.state.gender} 
                                                                                        onChange={this.onChange}/>
                                                                                        Other
                                                                                </label>
                                                                        </div>
                                                                </fieldset>
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="NIC" className="col-md-2">NIC</label>
                                                        <div className="col-md-10">
                                                                <input 
                                                                        type="text" 
                                                                        value={this.state.nic} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="nic" name="nic" 
                                                                        placeholder="NIC"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="fax" className="col-md-2">Fax</label>
                                                        <div className="col-md-10">
                                                                <input 
                                                                        type="text" 
                                                                        value={this.state.fax} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="fax" 
                                                                        name="fax" 
                                                                        placeholder="Fax Number"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="type" className="col-md-2">Type</label>
                                                        <div className="col-md-10">
                                                                <input 
                                                                        type="text" 
                                                                        value={this.state.type} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="type" 
                                                                        name="type" 
                                                                        placeholder="Type"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="website" className="col-md-2">Website</label>
                                                        <div className="col-md-10">
                                                                <input 
                                                                        type="text" 
                                                                        value={this.state.website} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="website" 
                                                                        name="website" 
                                                                        placeholder="Insert website"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="email" className="col-md-2">E-Mail</label>
                                                        <div className="col">
                                                                <input 
                                                                        type="email" 
                                                                        value={this.state.email} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="email" 
                                                                        name="email"  
                                                                        placeholder="email"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="address" className="col-md-2">Address</label>
                                                        <div className="col">
                                                                <input 
                                                                        type="address" 
                                                                        value={this.state.address} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="address" 
                                                                        name="address" 
                                                                        placeholder="address"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="contactNo" className="col-md-2">Contact no</label>
                                                        <div className="col">
                                                                <input 
                                                                        type="text" 
                                                                        value={this.state.contactNo} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="contactNo" 
                                                                        name="contactNo" 
                                                                        placeholder="contact number"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="dob" className="col-md-2">DOB</label>
                                                        <div className="col-md">
                                                                <input 
                                                                        type="date" 
                                                                        value={this.state.dob} 
                                                                        onChange={this.onChange} 
                                                                        className="form-control" 
                                                                        id="dob" 
                                                                        name="dob"  
                                                                        placeholder="date of birth"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="note" className="col-md-2">Note</label>
                                                        <div className="col-md-10">
                                                        <textarea 
                                                                name="message" 
                                                                rows="3" value={this.state.note} 
                                                                onChange={this.onChange} 
                                                                id="note" 
                                                                name="note" 
                                                                className="col-md-12" >
                                                                </textarea>           
                                                        </div>
                                        </div>
                                        <div align="right">
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                        </div>
                                </div>
                        </form>
                </div>
                   
                )
    }
        
    
}



//export default TableList;
