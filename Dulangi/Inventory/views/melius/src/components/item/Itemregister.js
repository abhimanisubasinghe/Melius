import React from 'react';
//import './Customerreg.css';

export default class Itemregister extends React.Component{
    
        constructor(props) {
                super(props)
            
                this.state = {
                    itemcode:"",    
                    itemName: "",
                    inStock: "",
                    unitPrice: "",
                    descript: "",
                    costPrice: "",
                    reorderLevel: "",
                    itemgroup: "",
                    brand: "",
                    type: "",
                    category: "",
                    storageId: "",
                    supplierId: "",
                    barcode: "",
                    leadTime:""
                }
            }
        
            onChange = (e) => {
                this.setState(
                {[e.target.name]: e.target.value}
            )
            }
            
            handleSubmit = event => {
                alert(`item registered`);
                
            }

        render(){
                return(  
                        <div class="jumbotron">  
                <div className="container">
                        <form onSubmit={this.handleSubmit}>
                       
                                <div className = "col-md-12">
                                        <div className= "row">
                                                <div className="col-md-6" align="left"> 
                                                        <h3 >Register Item</h3>
                                                </div>
                                                <div className ="col-md-6">
                                                        <span className="glyphicon glyphicon-pencil"></span>
                                                </div> 
                                        
                                        </div>
                                        <hr/> 
                                        <div className= "row form-group" align="left">
                                                <label for="itemcode" className="col-md-2">Item Code</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.itemcode} onChange={this.onChange} className="form-control" id="itemcode" name="itemcode" placeholder="Enter Item Code"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="item name" className="col-md-2">Item Name</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.itemName} onChange={this.onChange} className="form-control" id="itemName" name="itemName" placeholder="Enter Item Name"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="inStock" className="col-md-2">inStock</label>
                                                        <div className="col-md-10">
                                                                <input type="number" value={this.state.inStock} onChange={this.onChange} className="form-control" id="inStock" name="inStock" placeholder="Enter inStock"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="unitPrice" className="col-md-2">unitPrice</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.unitPrice} onChange={this.onChange} className="form-control" id="unitPrice" name="unitPrice" placeholder="Enter unitPrice"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="descript" className="col-md-2">Description</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.descript} onChange={this.onChange} className="form-control" id="descript" name="descript" placeholder="Enter descript"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="costPrice" className="col-md-2">Purchase Price</label>
                                                        <div className="col-md-10">
                                                                <input type="number" value={this.state.costPrice} onChange={this.onChange} className="form-control" id="costPrice" name="costPrice" placeholder="Enter costPrice"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="reorderLevel" className="col-md-2">Selling Price</label>
                                                        <div className="col-md-10">
                                                                <input type="number" value={this.state.reorderLevel} onChange={this.onChange} className="form-control" id="reorderLevel" name="reorderLevel" placeholder="Enter reorderLevel"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="itemgroup" className="col-md-2">Item group</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.itemgroup} onChange={this.onChange} className="form-control" id="itemgroup" name="itemgroup" placeholder="Enter itemgroup"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="brand" className="col-md-2">Brand</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.brand} onChange={this.onChange} className="form-control" id="brand" name="brand" placeholder="Enter Brand"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="type" className="col-md-2">Type</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.type} onChange={this.onChange} className="form-control" id="type" name="type" placeholder="Type"/>                        

                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="category" className="col-md-2">Category</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.category} onChange={this.onChange} className="form-control" id="category" name="category" placeholder="Enter category"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="storageId" className="col-md-2">Storage Id</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.storageId} onChange={this.onChange} className="form-control" id="storageId" name="storageId" placeholder="Enter storageId"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="supplierId" className="col-md-2">supplier Id</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.supplierId} onChange={this.onChange} className="form-control" id="supplierId" name="supplierId" placeholder="Enter supplierId"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="leadTime" className="col-md-2">Lead Time</label>
                                                        <div className="col-md-10">
                                                                <input type="number" value={this.state.leadTime} onChange={this.onChange} className="form-control" id="leadTime" name="leadTime" placeholder="Enter supplierId"/>                        
                                                        </div>
                                        </div>
                                        <div className= "row form-group" align="left">
                                                <label for="barcode" className="col-md-2">Barcode</label>
                                                        <div className="col-md-10">
                                                                <input type="text" value={this.state.barcode} onChange={this.onChange} className="form-control" id="barcode" name="barcode" placeholder="Insert barcode"/>      
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