

import React, { Component } from "react";
import axios from "axios";

import service from "./../assets/img/service.png";
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



export default class Services extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
       
   
        services:[]

       
    }
    
}


componentDidMount() {   /* lifecycle method*/

   
    axios.get(`http://localhost:5001/services/view`)
      .then(res => {
        console.log(res);
        const services = res.data;
        this.setState({services});
        console.log('data');

        
       
      })

    
  }

  onChange = (e) => {
    this.setState(
    {[e.target.name]: e.target.value}
)
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
<var></var>

                                                      <div className="row1">
                                                              <div className="column1" style={column1} >
                                                              <div className="tbl-header" style={tblheader}>
                                                    <table className="table" style ={table}  >
                                                    <thead className='thead'  >
                                                        <tr className='tr' >
                                                            
                                                              
                                                                <th>name</th>
                                                                
                                                            
                                                        </tr>
                                                    </thead>

                                                    </table>

                                                </div>
                                                <div className="tbl-content" style={tblcontent}>
                                                    <table className="table" style ={table} >
                                                    <tbody>
                                                                   
                                                                    { this.state.services.map(person =>
                                                                    <tr className='td' >
                                                                    <td>{person.name}</td>

                                                                    </tr>)} 
                                                                    

                                                        </tbody>
                                                        </table>
                                                </div>
                                                </div>  


                                                           
                                                              </div>
                                                              <div className="column1" >
                                                                

                                                                        <div className="column">
                                                                                    <img src={service} style={imgstyle}/>
                                                                        </div>
                                                              </div>
                                                      </div>
                                                        <div className="row1" >
                                                                <div className="column2" style={column2} >
                                                                                <Link to="customers"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-user-plus" style={iconstyle}></i>Add service</button></Link>
                                                          
                                                                </div>

                                                                <div className="column2" style={column2} >
                                                                <Link to="customers"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-file" style={iconstyle}></i>Edit service</button></Link>
                                                          
                                                                </div>
                                                                <div className="column2" style={column2} >
                                                                <Link to="customers"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-trash-o"  style={iconstyle}></i> Delete Service</button></Link>
                                                          
                                                                </div>
                                                                <div className="column2" style={column2} >
                                                                <Link to="customers"><button className="btn btn-primary" style={button1}  type="submit"><i class="fa fa-arrow-right" style={iconstyle}></i>View</button></Link>
                                                          
                                                                </div>
                                                           
                                                    
                                                        </div>
            
                        </div>
                        
                   
                )
    }
        
    
}

const td={
  padding:'15px' ,
  textAlign: 'left',
  verticalAlign:'middle',
  fontWeight:"300",
  fontSize: '12px',
  color: '#010607',
  borderBottom:'solid  rgba(255,255,255,0.1)' 
}

const tblheader={
  backgroundColor: '#114252 ',

  color:'red',
  fontSize:'25px'
 }

const tblcontent={
  height:'350px',
  overflow:'auto',
  marginTop:'0px' ,
  border:'1px solid #25c481' ,
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
  
  const table={
    width:'100%',
    tableLayout: 'fixed',
    borderRadius: "10px",
    margin:"20px 20px 20px 5px",
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




