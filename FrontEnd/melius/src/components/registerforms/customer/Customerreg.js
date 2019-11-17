import React from 'react';
//import './Customerreg.css';

export default class Customerreg extends React.Component{
    


    render(){
        return(  
                <div class="jumbotron">  
                <div className="container">
                        <form>
                       
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
                                                <label for="customer_id" className="col-md-2">Customer Id</label>
                                                        <div className="col-md-10">
                                                                <input type="text" className="form-control" id="vehicle_no" placeholder="Enter customer ID"/>                        

                                                        </div>
                                        </div>

                                        <div className= "row form-group" align="left">

                                                <label for="customer_name" className="col-md-2">Customer Name</label>
                                                        <div className="col-md-10">
                                                                <input type="text" className="form-control" id="owner_name"  placeholder="Cutomer Name"/>  
                                                                <fieldset className="row-md form-group">
                                                                        <div className="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        className="form-check-input" 
                                                                                        name="optionsRadios" 
                                                                                        id="optionsRadios1" 
                                                                                        value="option1" 
                                                                                        />
                                                                                        Mr.
                                                                                </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        class="form-check-input" 
                                                                                        name="optionsRadios" 
                                                                                        id="optionsRadios2" 
                                                                                        value="option2"/>
                                                                                        Ms.
                                                                                </label>
                                                                        </div>
                                                                        <div class="form-check">
                                                                                <label class="form-check-label">
                                                                                <input 
                                                                                        type="radio" 
                                                                                        class="form-check-input" 
                                                                                        name="optionsRadios" 
                                                                                        id="optionsRadios3" 
                                                                                        value="option3"/>
                                                                                        Other
                                                                                </label>
                                                                        </div>
                                                                </fieldset>
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="NIC" className="col-md-2">NIC</label>
                                                        <div className="col-md-10">
                                                                <input type="text" className="form-control" id="nic" placeholder="NIC"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">

                                                <label for="email" className="col-md-2">E-Mail</label>
                                                        <div className="col">
                                                                <input type="email" className="form-control" id="email"  placeholder="email"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="dob" className="col-md-2">DOB</label>
                                                        <div className="col-md">
                                                                <input type="date" className="form-control" id="date"  placeholder="date of birth"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="note" className="col-md-2">Note</label>
                                                        <div className="col-md-10">
                                                        <textarea name="message" rows="3" className="col-md-12" style={textAreaStyle}>
                                                                The cat was playing in the garden.
                                                        </textarea>           
                                                        </div>
                                        </div>
                                        <div align="right">
                                        <button className="btn btn-primary" type="submit">Submit</button>
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