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


import {Link} from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
  

} from "reactstrap";




export default class Customer extends React.Component{
    
        

        render(){
                return(  
                  
                        <div className="container" style={container}>
                              
                                  
                                    <div className="col-md-12" style={colmd12}>
                                          <br/>
                                          <h1  style={h1}>Customers</h1>
                                    </div>
                                    <div className="row" style={row}>  
                                          <div className="col-md-10" style={colmd10}>
                                          
                                                    <Link to="/welcome"><button className="button1" style={button1} type="submit">Add Customer</button></Link>

                                                    <i className='fas fa-user-plus'style={iconStyle} ></i>                                      
                                            </div>
                                            <div className="col-md-10" style={colmd10}>
                                            
                                                    <Link to="/welcome"><button className="button1" style={button1}type="submit">Edit Customer 
                                                     <i className='fas fa-user-plus'style={iconStyle} ></i>                                      

                                                    </button></Link>
                                            </div>
                              
                                            <div className="col-md-10" style={colmd10}>
                                                    <Link to="/welcome"><button className="button1" style={button1} type="submit">Delete Customer</button></Link>


                                            </div>


                                            <div className="col-md-10" style={colmd10}>
                                                    <Link to="/welcome"><button className="button1" style={button1} type="submit">Edit</button></Link>
                                            </div> 
                                        
                                    </div>
                                        
                                        
                                    <div className="row">
                                    </div>
                          </div> 
                   
                )
    }
        
    
}

const iconStyle = {
  fontSize: '25px',
  color: 'red',
  position: "absolute",
  right: "20px",
  padding: "9px 30px",

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

const h1 ={
  fontWeight:"bold",
  margin:"20px",
  color:"rgba(35, 31, 54, 0.89)",
  alignItems:"center",

}

const row={
  width:"50%"
}
const colmd10={
  width:"50%",
  height:"50px",
  backgroundColor:"white" ,
  borderRadius: "10px",
  overflow:"hidden",
  margin:"20px 20px 10px 10px",
  justifyContent:"right",
  position:"right",



}

const button1={

  fontSize:"20px",
  fontWeight: "bold",
  color:"black",
  backgroundColor:"white",
  borderRadius: "12px",
  borderColor:"blue",
  width:"75%",
  textAlign:"left",
  position: "absolute",
  left: "2px",
  padding: "9px 28px",
  hover:"{opacity: 1}",
  borderStyle:"outset" ,

}




