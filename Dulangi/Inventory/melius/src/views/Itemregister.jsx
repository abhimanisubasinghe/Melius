import React from 'react';
import {
        Grid,
        Row,
        Col,
        FormGroup,
        ControlLabel,
        FormControl
      } from "react-bootstrap";
      
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
//import './Customerreg.css';

export default class Itemregister extends React.Component{
    
        constructor(props) {
                super(props)
            
                this.state = {
                    itemcode:"",    
                    name: "",
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
            
            handleSubmit = _ => {
                const { item } = this.state;
                console.log(item)
                fetch(`http://localhost:5000/items/add?
                        itemcode=${item.itemcode}
                        &name=${item.name}
                        &instock=${item.inStock}
                        &unitPrice= ${item.unitPrice}
                        &descript: ${item.descript}
                        &costPrice: ${item.costPrice}
                        &reorderLevel: ${item.reorderLevel}
                        &itemgroup: ${item.itemgroup}
                        &brand: ${item.brand}
                        &type: ${item.type}
                        &category: ${item.category}
                        &storageId: ${item.storageId}
                        &supplierId: ${item.supplierId}
                        &barcode: ${item.barcode}
                        &leadTime:${item.leadTime}`)
                .then(response => response.json())
                .then(alert(`item registered`))
                .catch(err => console.error(err))
                
            }

        render(){
                return(  
                <div className="contet">
                        <Grid fluid>
                                <Row>
                                        <Col md={8}>
                                                <Card 
                                                        title="Register Item"
                                                        content={
                                                                <form onSubmit={this.handleSubmit}>
                                                                        <FormInputs
                                                                                ncols={["col-md-8","col-md-4"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "name",
                                                                                        type: "text",
                                                                                        bsClass: "form-control",
                                                                                        placeholder: "Item Name",
                                                                                        value:this.state.name,
                                                                                        onChange: this.onChange,
                                                                                        id: "name",
                                                                                        name: "name"
                                                                                        },
                                                                                        {
                                                                                        label: "itemcode",
                                                                                        type: "text",
                                                                                        bsClass: "form-control",
                                                                                        placeholder: "Item Code",
                                                                                        value:this.state.itemcode,
                                                                                        onChange: this.onChange,
                                                                                        id: "itemcode",
                                                                                        name: "itemcode"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "itemgroup",
                                                                                        type: "text",
                                                                                        bsClass: "form-control",
                                                                                        placeholder: "Item group",
                                                                                        value:this.state.itemgroup,
                                                                                        onChange: this.onChange,
                                                                                        id: "itemgroup",
                                                                                        name: "itemgroup"}
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-4","col-md-4","col-md-4"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "brand",
                                                                                        type: "text",        
                                                                                        value: this.state.brand,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"brand",
                                                                                        name: "brand", 
                                                                                        placeholder: "Brand"
                                                                                        },
                                                                                        {
                                                                                        label: "type",
                                                                                        type: "text",        
                                                                                        value: this.state.type,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"type",
                                                                                        name: "type", 
                                                                                        placeholder: "Type"
                                                                                        },
                                                                                        {
                                                                                        label: "category",
                                                                                        type: "text",        
                                                                                        value: this.state.category,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"category",
                                                                                        name: "category", 
                                                                                        placeholder: "Enter the brand"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "inStock",
                                                                                        type: "number",        
                                                                                        value: this.state.inStock,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"inStock",
                                                                                        name: "inStock", 
                                                                                        placeholder: "Enter in stock number"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-4","col-md-4"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "unitPrice",
                                                                                        type: "number",        
                                                                                        value: this.state.unitPrice,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"unitPrice",
                                                                                        name: "unitPrice", 
                                                                                        placeholder: "Unit Price"
                                                                                        },
                                                                                        {
                                                                                        label: "costPrice",
                                                                                        type: "number",        
                                                                                        value: this.state.costPrice,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"costPrice",
                                                                                        name: "costPrice", 
                                                                                        placeholder: "Cost Price"
                                                                                        }        
                                                                                ]}
                                                                        />
                                                                        <Row>
                                                                                <Col md={12}>
                                                                                        <FormGroup controlId="formControlsTextarea">
                                                                                        <ControlLabel>Description</ControlLabel>
                                                                                        <FormControl
                                                                                                rows="3"
                                                                                                componentClass="textarea"
                                                                                                bsClass="form-control"
                                                                                                placeholder="Enter the item description"
                                                                                                defaultValue="Testing 123"
                                                                                                value= {this.state.descript}
                                                                                                onChange= {this.onChange}
                                                                                                id = "descript"
                                                                                                name= "descript" 
                                                                                        />
                                                                                        </FormGroup>
                                                                                </Col>
                                                                        </Row>
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "reorderLevel",
                                                                                        type: "number",        
                                                                                        value: this.state.reorderLevel,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"reorderLevel",
                                                                                        name: "reorderLevel", 
                                                                                        placeholder: "Enter the reorder level"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "storageId",
                                                                                        type: "text",        
                                                                                        value: this.state.storageId,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"storageId",
                                                                                        name: "storageId", 
                                                                                        placeholder: "Enter the storage ID"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "supplierId",
                                                                                        type: "text",        
                                                                                        value: this.state.supplierId,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"supplierId",
                                                                                        name: "supplierId", 
                                                                                        placeholder: "Enter the suplier ID"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "barcode",
                                                                                        type: "text",        
                                                                                        value: this.state.barcode,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"barcode",
                                                                                        name: "barcode", 
                                                                                        placeholder: "Bar code"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <FormInputs
                                                                                ncols={["col-md-5"]}
                                                                                properties={[
                                                                                        {
                                                                                        label: "leadTime",
                                                                                        type: "text",        
                                                                                        value: this.state.leadTime,
                                                                                        onChange: this.onChange,
                                                                                        bsClass: "form-control",
                                                                                        id:"leadTime",
                                                                                        name: "leadTime", 
                                                                                        placeholder: "Enter the lead Time"
                                                                                        }
                                                                                ]}
                                                                        />
                                                                        <Button bsStyle="info" pullRight fill type="submit">
                                                                        Insert
                                                                        </Button>
                                                                        <div className="clearfix" />        
                                                                </form>
                                                }/>
                                        </Col>
                                </Row>
                        </Grid>        
        </div>            
                )
    }
        
    
}
