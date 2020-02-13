import React, { Component } from 'react'
import './select.css';
import Test from 'views/Test'
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    DropdownButton,
    Dropdown,
    Form
  } from "react-bootstrap";
import axios from 'axios';
import { FormInputs } from "components/FormInputs/FormInputs.jsx";  
class AddToDo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            quantity: '',
            item:{},
            items:[ {
                 name: "abcd",
                 itemCode: "000"
             }
            ]
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:5000/items/`)
          .then(res => {
              
            //console.log("data "+res.data)
              
            const items = res.data;
            this.setState({ items });
          })
          this.props.addToDo(this.state.item,this.state.quantity)
          this.setState({
              item:this.state.items[0],
              quantity:0
          })
          
        
        
    }

    onChange = (e) => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSelect = (e) => {
        //console.log(e.target.value)
        //console.log(e.target.value.name)
       //console.log(this.state.items[e.target.value])
        this.setState(
         {item: this.state.items[e.target.value]}
        );
        
    }

    onSubmit = (e) => {
        if(this.state.item != null){
            //console.log("Submitted",this.state.quantity)
            //console.log("item ",this.state.item)
            //console.log(this.state.item.name)
            //console.log(this.state.item.itemCode)
            e.preventDefault();
        }
        else{
            console.log("Please select an item");
        }
        if(this.state.item != null || this.state.quantity != null)
            this.props.addToDo(this.state.item,this.state.quantity);
        this.setState({
            item:this.state.item,
            quantity:0
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form-inline" >   
                    <div style={widthStyle}>  
                    <select id="item" name="item" onChange={this.onSelect} style={optionStyle}>
                        { this.state.items.map((obj,i) => 
                         <option  value={i} style={optionStyle}>{obj.name}</option>)
                        }
                        
                         
                    </select> 
                    </div>  
                <FormInputs
                ncols={["col-sm-3"]}
                properties={[
                {
                    label: "",
                    type: "number",
                    bsClass: "form-control",
                    placeholder: "",
                    value:this.state.quantity,
                    onChange: this.onChange,
                    id: "quantity",
                    name: "quantity"}
                     ]}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
            </div>
        )
    }
}

const widthStyle = {
    'width' : '200px'
}

const optionStyle = {
    'background':'blue'
}

 /* The container must be positioned relative: */
const customSelect={
    'position': 'relative',

}
  


export default AddToDo
