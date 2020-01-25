import React, { Component } from 'react'
import {
    Form,
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
  } from "react-bootstrap";
import axios from 'axios';
import FormInputs from 'components/FormInputs/FormInputs';

export class Test extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items:[ {
                 name: "abc "
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

       render() {
        return (
            <React.Fragment>   
            <select name="items">
            { this.state.items.map(person => <option style={{flex: '1'}}>{person.name}</option>)}
            </select> 
            
            </React.Fragment>
          )
    }
}

export default Test

const list = {

}
