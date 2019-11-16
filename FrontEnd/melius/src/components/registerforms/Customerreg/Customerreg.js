import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Customerreg.css';

export default class Customerreg extends React.Component{
    


    render(){
        return(

            
           
            <form>
                    <div className="container" align="center">
                            <div className = "col-md-7">
                                    <div className= "row">
                                            <div className="col-md-6"> 
                                                <h3 className="text">Register Customer</h3>
                                            </div>
                                            <div className ="col-md-6">
                                                <span className="glyphicon glyphicon-pencil"></span>
                                            </div> 
                                     
                                    </div>
                                  <hr/> 

                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">Customer Id</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>

                                    <div className= "form-group">

                                            <label for="vehicle_no" className="col-sm-4">Customer Name</label>
                                                    <div className="col-md-12">
                                                            <input type="text" className="form-control" id="owner_name"  placeholder="vehicle type"/>  
                                                            <div className="col-md-10"> 
                                                                        <input type="radio" value="mr" />  <medium>Mr</medium>
                                                                        <input type="radio" value="mrs" />  <medium>Mrs</medium>
                                                                        <input type="radio" value="miss" />  <medium>Miss</medium>


                                                            </div>                   
                                                    </div>
                                    </div>

                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">Fax</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>
                                    
                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">NIC</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>

                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">Type</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>




                                    <div className= "form-group">

                                            <label for="vehicle_no" className="col-sm-4">E-Mail</label>
                                                    <div className="col-md-12">
                                                            <input type="text" className="form-control" id="owner_name"  placeholder="Enter Owner Name"/>                        
                                                    </div>
                                    </div>


                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">Web-Site</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>


                                    <div className= "form-group">

                                            <label for="vehicle_no" className="col-sm-4">DOB</label>
                                                    <div className="col-md-12">
                                                            <input type="date" className="form-control" id="owner_name"  placeholder="Enter Owner Name"/>                        
                                                    </div>
                                    </div>
                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">Note</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>


                                    

            
                            </div>

                    </div>

            </form>
      
            
        )
    }
        
    
}

  