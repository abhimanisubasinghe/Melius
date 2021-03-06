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
import customers from "./../assets/img/customers.jpg";
import ItemRoutes from "layouts/ItemRoutes"

import {Link} from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavbarBrand,
  Nav,
  Navbar
  

} from "react-bootstrap";



export default class Customers extends React.Component{
    
        

        render(){
                return( 
                  <div> 
                      <ItemRoutes/>
                          <div>
                                <Navbar style={navStyle}>
                                        <Nav className="mr-auto" >
                                                <NavbarBrand style={cursorStyle}>Item</NavbarBrand>  
                                                <NavItem><Link to="customers">Register</Link></NavItem>
                                                <NavItem href="#features">Features</NavItem>
                                                <NavItem href="#pricing">Pricing</NavItem>
                                        </Nav>
   
                                </Navbar>
                        </div> 
                  
                        <div className="container" style={container}>
                              
                   
                                        <div className="col-md-12" style={colmd12}>
                                                                  <br/>
                                                                  <h1  style={h1}>Customers</h1>
                                                                
                                                                        
                                        </div>


                                                      <div className="row1">
                                                              <div className="column2" style={column2} >
                                                                
                                                                                <div className="column" style={column} >
                                                                                                  
                                                                                <Link to="customers"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-user-plus" style={iconstyle}></i>Add Customer</button></Link>

                                                                                </div>
                                                                                                    
                                                                                <div className="column" style={column} >
                                                                                                    
                                                                                <Link to="customers"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-file" style={iconstyle}></i>Edit  Customer</button></Link>

                                                                                </div>
                                                                                      
                                                                                
                                                                                <div className="column"  style={column}>
                                                                                                            
                                                                                <Link to="deletecus"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-trash-o"  style={iconstyle}></i> Delete  Customer</button></Link>


                                                                                </div>


                                                                                <div className="column"  style={column}>
                                                                                                            
                                                                                <Link to="viewcustomer"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-arrow-right" style={iconstyle}></i>View  Customer</button></Link>
                                                                                                    
                                                                                </div> 
                                                                
                                                              </div>
                                                              <div className="column2" >
                                                                

                                                                        <div className="column">
                                                                                    <img src={customers} style={imgstyle}/>
                                                                        </div>
                                                              </div>
                                                      </div>

            
                        </div>
                        </div>
                   
                )
    }
        
    
}


const iconstyle = {
  fontSize: '20px',
  color: 'black',
  width:"40px",
  fontWeight:"bolt",

}

const column1 = {
  float: "left",
  width:"50%" ,
  padding:"10px" ,
  height: "300px", /* Should be removed. Only for demonstration */
}

const column2 = {
  float: "left",
  width:"25%" ,
  padding:"10px" ,
  height: "300px", /* Should be removed. Only for demonstration */
}

const container={
  justifyContent:"center",
  alignItems:"center",
  textAlign: "center",
  

}

const colmd12={
  width:"100%",
  height:"175px",
  backgroundColor: "rgba(12, 106, 221, 0.7)",
  borderRadius: "10px",
  position:"relative",
  overflow:"hidden",
  margin:"20px 20px 10px 10px",

}
const     button1 ={
  borderRadius:"20px" ,
  border:"1px solid #ff4b",
  background:"rgba(84, 181, 246, 0.93)",
  color:"rgba(249, 249, 249, 0.93)",
  fontSize:"12px",
  fontWeight: "bold",
  padding:"12px 45px",
  letterSpacing:"1px" ,
  borderColor:"rgba(127, 119, 242, 0.93)",
}



const h1 ={
  fontWeight:"bold",
  margin:"20px",
  color:"rgba(35, 31, 54, 0.89)",
  alignItems:"center",

}


const column={
  width:"90%",
  height:"50px",
  backgroundColor:"white" ,
  borderRadius: "10px",
  overflow:"hidden",
  margin:"20px 20px 10px 10px",
  justifyContent:"center",
  position:"center",



}


// const button1={

//   fontSize:"20px",
//   fontWeight: "bold",
//   color:"black",
//   backgroundColor: "white",
//   borderRadius: "12px",
//   borderColor:"blue",
//   width:"225px",
//   textAlign:"left",
//   position: "absolute",
//   left: "150px",
//   padding: "9px 28px",
//   hover:"{opacity: 1}",
//   borderColor:"#2196F3" ,
//   color: "dodgerblue",
  
//   }


  
  




const imgstyle={
  width:"400px",
  height:"400px",
  //padding: "10px 10px",

}


const navStyle = {
  backgroundColor: '#262626'
}

const cursorStyle = {
  cursor : 'pointer'
}  





/* Clear floats after the columns 
.row:after {
  content: "";
  display: table;
  clear: both;
}

const iconStyle = {
  fontSize: '25px',
  color: 'red',
  position: "absolute",
  right: "20px",
  padding: "9px 30px",

}











const row={
  //width:"50%"
}


*/




