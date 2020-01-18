
import React from 'react';

import axios from 'axios';



export default class Customerreg extends React.Component{
    
        constructor(props) {
                super(props)
            
                this.state = {

                    vehicleNo:"",
                    category:"",    
                    type: "",
                    mileage: "",
                    custId: "",
                    
                   
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
                const url = "http://localhost:5001/vehicles/vehicleRegistration"; 
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
                        <div className="jumbotron" style ={jumbotronStyle}> 
                       
                <div className="container" style={container}>

               

                        <form onSubmit={this.handleSubmit}>
                       
                                <div className = "col-md-12">
                                        <div className= "row">
                                                <div className="col-md-8" align="left" > 
                                                        <h3 style={h3}>Register Vegicle</h3>
                                                </div>
                                                <div className ="col-md-4">
                                                        <span className="glyphicon glyphicon-pencil" style={glyphiconpencil }></span>
                                                </div> 
                                        <br/>
                                        <div>
                                                <br/>
                                        </div>
                                        </div>
                                        <hr style={hr}/> 

                                        <div className= "row form-group" align="left">

                                                <label for="customerName" className="col-md-2">Vehicle No</label>
                                                         <div className="col-md-10">
                                                                <input type="text" value={this.state.vehicleNo}className="form-control" style={formcontrol}  onChange={this.onChange} id="vehicleNo" name="vehicleNo"  placeholder="Cutomer Name"/>  
                                                             
                                                        </div>
                                        </div>
                                       
                                        <div className= "row form-group" align="left">
                                                <label for="fax" className="col-md-2">Catagory</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.category} style={formcontrol} onChange={this.onChange} className="form-control" id="category" name="category" placeholder="Fax Number"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="type" className="col-md-2">Type</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.type}style={formcontrol} onChange={this.onChange} className="form-control" id="type" name="type" placeholder="Type"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="website" className="col-md-2">Mileage</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.mileage} style={formcontrol} onChange={this.onChange} className="form-control" id="mileage" name="mileage" placeholder="Insert website"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="custId" className="col-md-2">Cust Id</label>
                                                        <div className="col">
                                                                <input type="text" value={this.state.custId} style={formcontrol}onChange={this.onChange} className="form-control" id="custId" name="custId"  placeholder="email"/>                        
                                                        </div>
                                        </div>
                                        

                
                                        <div align="right">
                                        <button className="btn btn-primary"  style={btn} type="submit">Submit</button>
                                        </div>
                                        <div>
                                                <br/>
                                        </div>
                                </div>
                        </form>
                </div>
        </div>            
                )
    }
        
    
}



const jumbotronStyle = {
        background: '#f1f1f1'
    }
    
    const invisiblejumbotronStyle = {
        background: '#00000000'
    
    }

const textAreaStyle = {
        border: '1px solid #dedede',
        borderRadius: '10px',
        color : '#828282'
}


const container={
        justifyContent:"right",
        alignItems:"right",
        textAlign: "right",
        background:"rgb(209, 212, 213)",
        backgroundImage:"url(./customers.jpg)",
        width:"700px",
        backgroundImage: "url(./customers.jpg)",



    
    
    }

    
const hr={
        height:"2px",
}

   
    
   
const glyphiconpencil={
        fontSize:"45px" ,
        color:"black",
        marginTop:"20px" ,
        float:"right",
    }


const  h3={
        fontSize: "30px",
        color:"black" ,
        fontWeight:"bold",

    }
    


   
    
const formcontrol={
        background: "transparent",
        borderTop: "1px",
        borderLeft: "1px",
        borderRight:"2px" ,
        marginTop: "1px",
        fontWeight:"bold",
        color:"black" ,
        fontSize: "15px",

    }


const     btn ={
        borderRadius:"20px" ,
        border:"1px solid #ff4b",
        background:"rgba(15, 28, 30, 0.62)",
        color:"rgb(231, 231, 219)",
        fontSize:"12px",
        fontWeight: "bold",
        padding:"12px 45px",
        letterSpacing:"1px" ,
        borderColor:"rgba(15, 28, 30, 0.62)",
    }

const colmd10={
        marginTop: "20px",
        color:"wheat",
   }