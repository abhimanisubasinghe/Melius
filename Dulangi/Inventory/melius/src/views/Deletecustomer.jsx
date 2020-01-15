

import React, { Component } from "react";
import axios from "axios";


import {Link} from 'react-router-dom';
import {
    
    NavItem,
    NavbarBrand,
    Nav,
    Navbar
    
  
  } from "react-bootstrap";
  
  import ItemRoutes from "layouts/ItemRoutes"


export default class Deletecustomer extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            Id:"",
            name:"",
            fax:"",    
            NIC: "",
            type: "",
            email: "",
            website: "",
           
            DOB: "",
            note: "",
            customer:[]
           
        }
    }

   
    
    componentDidMount() {
        axios.get(`http://localhost:5001/customers/customerView`)
          .then(res => {
            const customer = res.data;
            this.setState({ customer });
          })
      }

    
        

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
                                                                  <h1  style={h1}>Services</h1>
                                                                
                                                                        
                                        </div>


                                                      <div className="row1">
                                                              <div className="column1" style={column1} >
                                                              <table width="100%">
                                                                                                                <tr>
                                                                            <th>Id</th>
                                                                            <th>name</th>

                                                                            <th>fax</th>
                                                                            <th>NIC</th>
                                                                            <th>email</th>
                                                                            <th>website</th>
                                                                           
                                                                            <th>DOB</th>

                                                                            <th>note</th>




                                                                        </tr>
                                                                                { this.state.customer.map(customers => 
                                                                                <tr>
                                                                                <td>{customers.Id}</td>
                                                                                <td>{customers.name}</td>
                                                                                <td>{customers.fax}</td>
                                                                                <td>{customers.NIC}</td>
                                                                                <td>{customers.email}</td>
                                                                                <td>{customers.website}</td>
                                                                               
                                                                                <td>{customers.DOB}</td>
                                                                                <td>{customers.note}</td>

                                                                                </tr>)}
                                                                            </table>
                                                                
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
  backgroundColor: "rgb(250, 177, 177)",
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


const     button1 ={
    borderRadius:"20px" ,
    border:"1px solid #ff4b",
    background:"rgba(239, 209, 209, 0.86)",
    color:"rgba(219, 61, 61, 0.90)",
    fontSize:"12px",
    fontWeight: "bold",
    padding:"12px 45px",
    letterSpacing:"1px" ,
    borderColor:"rgba(189, 29, 29, 0.93)",
}


// const button1={

//   fontSize:"20px",
//   fontWeight: "bold",
//   color:"black",
//   backgroundColor: "white",
//   borderRadius: "12px",
//   borderColor:"blue",
//   width:"50px",
//   textAlign:"left",
//   position: "absolute",
//   //left: "150px",
//   padding: "9px 28px",
//   hover:"{opacity: 1}",
//   borderColor:"#2196F3" ,
//   color: "dodgerblue",
  
//   }


  
  




const imgstyle={
  width:"300px",
  height:"300px",
  right:"30px"
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




