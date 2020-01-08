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
import {Link} from 'react-router-dom'

import './TableList.css';
import axios from 'axios';

export default class Customer extends React.Component{
    
        

        render(){
                return(  
                  
                        <div className="container">
                                    <div className="col-md-12">
                                      <br/>
                                      <h1>Customers</h1>
                                    </div>
                                    <div className="col-md-10">
                                      
                                    <Link to="/welcome"><button className="button1" type="submit">Add Customer</button></Link>


                                      </div>
                                      <div className="col-md-10">
                                      
                                      <Link to="/welcome"><button className="button1" type="submit">Edit Customer</button></Link>


                                      </div>
                         
                                      <div className="col-md-10">
                                      <Link to="/welcome"><button className="button1" type="submit">Delete Customer</button></Link>


                                      </div>
                                      <div className="col-md-10">
                                      <Link to="/welcome"><button className="button1" type="submit">Edit</button></Link>


                                      </div>



                         
                                    















                                  
                                        
                                  </div> 
                   
                )
    }
        
    
}



//export default TableList;
