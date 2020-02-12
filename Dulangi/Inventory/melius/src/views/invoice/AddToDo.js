import React, { Component } from 'react'
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
    NavbarBrand
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
        
    }

    onChange = (e) => this.setState(
        {[e.target.name]: e.target.value}
    );

    onSelect = (e) => {
        console.log(e.target.value)
        //console.log(e.target.value.name)
       console.log(this.state.items[e.target.value])
        this.setState(
         {item: this.state.items[e.target.value]}
        );
        
    }

    onSubmit = (e) => {
        if(this.state.item != null){
            console.log("Submitted",this.state.quantity)
            console.log("item ",this.state.item)
            console.log(this.state.item.name)
            console.log(this.state.item.itemCode)
            e.preventDefault();
        }
        else{
            console.log("Please select an item");
        }
        this.props.addToDo(this.state.item,this.state.quantity);
        this.setState({
            item:'',
            quantity:''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            
                
                {/*<input
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    style={{flex:'10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />*/}
                <React.Fragment>   
                    
                    <select id="item" name="item" onChange={this.onSelect}>
                        { this.state.items.map((obj,i) => <option  value={i} selected>{obj.name}</option>)}
                    </select> 
            
                </React.Fragment>
                <FormInputs
                ncols={["col-md-5"]}
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
        )
    }
}

export default AddToDo
