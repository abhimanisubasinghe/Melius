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
import vehicle from "./../assets/img/vehicle.png"

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
                                                                  <h1  style={h1}>Vehicles</h1>
                                                                
                                                                        
                                        </div>


                                                      <div className="row1">
                                                              <div className="column1" style={column1} >
                                                                
                                                                                <div className="column" style={column} >
                                                                                                  
                                                                                              <Link to="/welcome"><button className="button1" style={button1}  type="submit">Add Vehicle</button></Link>

                                                                                </div>
                                                                                                    
                                                                                <div className="column" style={column} >
                                                                                                    
                                                                                              <Link to="/welcome"><button className="button1" style={button1} type="submit">Edit Vehicle 

                                                                                                </button></Link>
                                                                                </div>
                                                                                      
                                                                                
                                                                                <div className="column"  style={column}>
                                                                                                            
                                                                                                <Link to="/welcome"><button className="button1" style={button1} type="submit">Delete Vehicle</button></Link>


                                                                                </div>


                                                                                <div className="column"  style={column}>
                                                                                                            
                                                                                                  <Link to="/welcome"><button className="button1" style={button1} type="submit">View</button></Link>
                                                                                                    
                                                                                </div> 
                                                                
                                                              </div>
                                                              <div className="column1" >
                                                                

                                                                        <div className="column">
                                                                                    <img src={vehicle} style={imgstyle}/>
                                                                        </div>
                                                              </div>
                                                      </div>

            
                        </div>
                   
                )
    }
        
    
}

const column1 = {
  float: "left",
  width:"50%" ,
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


const h1 ={
  fontWeight:"bold",
  margin:"20px",
  color:"rgba(35, 31, 54, 0.89)",
  alignItems:"center",

}


const column={
  width:"50%",
  height:"50px",
  backgroundColor:"white" ,
  borderRadius: "10px",
  overflow:"hidden",
  margin:"20px 20px 10px 10px",
  justifyContent:"center",
  position:"center",



}


const button1={

  fontSize:"20px",
  fontWeight: "bold",
  color:"black",
  backgroundColor: "white",
  borderRadius: "12px",
  borderColor:"blue",
  width:"225px",
  textAlign:"left",
  position: "absolute",
  left: "150px",
  padding: "9px 28px",
  hover:"{opacity: 1}",
  borderColor:"#2196F3" ,
  color: "dodgerblue",
  
  }


  
  




const imgstyle={
  width:"500px",
  height:"250px",
  //padding: "10px 10px",

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




