import React from 'react';
import './Vehiclereg.css';

export default class Vehiclereg extends React.Component{
    


    render(){
        return(

            
           
            <form>
                    <div className="container" align="center">
                            <div className = "col-md-7">
                                    <div className= "row">
                                            <div className="col-md-6"> 
                                                <h3 className="text">Register Vehicle</h3>
                                            </div>
                                            <div className ="col-md-6">
                                                <span className="glyphicon glyphicon-pencil"></span>
                                            </div> 
                                     
                                    </div>
                                  <hr/> 

                                    <div className= "form-group">
                                            <label for="vehicle_no" className="col-sm-4 col-form-label">Vehicle No.</label>
                                                    <div className="col-md-12">
                                                        <input type="text" className="form-control" id="vehicle_no" placeholder="Enter Vehicle No."/>                        

                                                    </div>
                                    </div>
 
                                    <div className= "form-group">

                                            <label for="vehicle_no" className="col-sm-4">Vehicle Type</label>
                                                    <div className="col-md-12">
                                                            <input type="text" className="form-control" id="owner_name"  placeholder="vehicle type"/>                        
                                                    </div>
                                    </div>

                                    <div className= "form-group">

                                            <label for="vehicle_no" className="col-sm-4">Owner Name</label>
                                                    <div className="col-md-12">
                                                            <input type="text" className="form-control" id="owner_name"  placeholder="Enter Owner Name"/>                        
                                                    </div>
                                    </div>

                                    <div className= "form-group">

                                            <label for="vehicle_no" className="col-sm-4"> Registered Date</label>
                                                    <div className="col-md-12">
                                                            <input type="date" className="form-control" id="owner_name"  placeholder="Enter Owner Name"/>                        
                                                    </div>
                                    </div>
                                        
                                    

            
                            </div>

                    </div>

            </form>
      
            
        )
    }
        
    
}

